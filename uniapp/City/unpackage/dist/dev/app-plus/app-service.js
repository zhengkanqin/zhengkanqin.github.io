if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$T = {
    __name: "Login",
    setup(__props) {
      let userLoginStatus = vue.ref("");
      vue.onMounted(() => {
        let status = uni.getStorageSync("UserLoginStatus");
        userLoginStatus.value = status;
        if (userLoginStatus.value == "true") {
          uni.switchTab({
            url: "/pages/index/index"
          });
        } else {
          uni.setStorageSync("UserLoginStatus", "false");
          uni.setStorageSync("UserInformation", JSON.stringify({
            "id": "000000000",
            "name": "未登录",
            "token": "",
            "phone": "",
            "email": "",
            "sex": "",
            "brithday": "",
            "locationx": "",
            "locationy": "",
            "friends": "",
            "userImg": "",
            "userBack": "",
            "city": "",
            "sign": ""
          }));
          uni.navigateTo({
            url: "/pages/LoginAccount/LoginAccount"
          });
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode(
            "view",
            { class: "LoginBackgroundBox" },
            vue.toDisplayString(_ctx.UserLoginStatus),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view")
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__file", "D:/前端学习笔记/uniapp/City/pages/Login/Login.vue"]]);
  const ON_LOAD = "onLoad";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onPullDownRefresh = /* @__PURE__ */ createHook(ON_PULL_DOWN_REFRESH);
  const _sfc_main$S = {
    __name: "phone-status",
    setup(__props) {
      let PHONE_INFORMATION = uni.getSystemInfoSync();
      let PHONE_STATUS_HEIGHT = vue.ref(PHONE_INFORMATION.statusBarHeight);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "phone-status content-background",
            style: vue.normalizeStyle({ height: vue.unref(PHONE_STATUS_HEIGHT).value + "px" })
          },
          null,
          4
          /* STYLE */
        );
      };
    }
  };
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-195201a6"], ["__file", "D:/前端学习笔记/uniapp/City/components/phone-status/phone-status.vue"]]);
  function uuid() {
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
  }
  function s4() {
    return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  }
  function addUnit$1(num) {
    return Number.isNaN(Number(num)) ? num : `${num}px`;
  }
  function isObj(value) {
    return Object.prototype.toString.call(value) === "[object Object]" || typeof value === "object";
  }
  function getType(target) {
    const typeStr = Object.prototype.toString.call(target);
    const match = typeStr.match(/\[object (\w+)\]/);
    const type = match && match.length ? match[1].toLowerCase() : "";
    return type;
  }
  const defaultDisplayFormat = function(items, kv) {
    const labelKey = (kv == null ? void 0 : kv.labelKey) || "value";
    if (Array.isArray(items)) {
      return items.map((item) => item[labelKey]).join(", ");
    } else {
      return items[labelKey];
    }
  };
  const isDef = (value) => value !== void 0 && value !== null;
  function rgbToHex(r2, g2, b2) {
    const hex = (r2 << 16 | g2 << 8 | b2).toString(16);
    const paddedHex = "#" + "0".repeat(Math.max(0, 6 - hex.length)) + hex;
    return paddedHex;
  }
  function hexToRgb(hex) {
    const rgb = [];
    for (let i2 = 1; i2 < 7; i2 += 2) {
      rgb.push(parseInt("0x" + hex.slice(i2, i2 + 2), 16));
    }
    return rgb;
  }
  const gradient = (startColor, endColor, step = 2) => {
    const sColor = hexToRgb(startColor);
    const eColor = hexToRgb(endColor);
    const rStep = (eColor[0] - sColor[0]) / step;
    const gStep = (eColor[1] - sColor[1]) / step;
    const bStep = (eColor[2] - sColor[2]) / step;
    const gradientColorArr = [];
    for (let i2 = 0; i2 < step; i2++) {
      gradientColorArr.push(
        rgbToHex(parseInt(String(rStep * i2 + sColor[0])), parseInt(String(gStep * i2 + sColor[1])), parseInt(String(bStep * i2 + sColor[2])))
      );
    }
    return gradientColorArr;
  };
  const range$2 = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
  };
  const isEqual = (value1, value2) => {
    if (value1 === value2) {
      return true;
    }
    if (!Array.isArray(value1) || !Array.isArray(value2)) {
      return false;
    }
    if (value1.length !== value2.length) {
      return false;
    }
    for (let i2 = 0; i2 < value1.length; ++i2) {
      if (value1[i2] !== value2[i2]) {
        return false;
      }
    }
    return true;
  };
  const padZero$1 = (number2, length = 2) => {
    let numStr = number2.toString();
    while (numStr.length < length) {
      numStr = "0" + numStr;
    }
    return numStr;
  };
  const context = {
    id: 1e3
  };
  function getRect(selector, all, scope) {
    return new Promise((resolve, reject) => {
      let query = null;
      if (scope) {
        query = uni.createSelectorQuery().in(scope);
      } else {
        query = uni.createSelectorQuery();
      }
      query[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
        if (all && isArray(rect) && rect.length > 0) {
          resolve(rect);
        } else if (!all && rect) {
          resolve(rect);
        } else {
          reject(new Error("No nodes found"));
        }
      }).exec();
    });
  }
  function kebabCase(word) {
    const newWord = word.replace(/[A-Z]/g, function(match) {
      return "-" + match;
    }).toLowerCase();
    return newWord;
  }
  function camelCase(word) {
    return word.replace(/-(\w)/g, (_, c2) => c2.toUpperCase());
  }
  function isArray(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function isFunction(value) {
    return getType(value) === "function";
  }
  function isString(value) {
    return getType(value) === "string";
  }
  function isNumber(value) {
    return getType(value) === "number";
  }
  function isPromise(value) {
    if (isObj(value)) {
      return isFunction(value.then) && isFunction(value.catch);
    }
    return false;
  }
  function objToStyle(styles) {
    if (isArray(styles)) {
      return styles.filter(function(item) {
        return item != null && item !== "";
      }).map(function(item) {
        return objToStyle(item);
      }).join(";");
    }
    if (isString(styles)) {
      return styles;
    }
    if (isObj(styles)) {
      return Object.keys(styles).filter(function(key) {
        return styles[key] != null && styles[key] !== "";
      }).map(function(key) {
        return [kebabCase(key), styles[key]].join(":");
      }).join(";");
    }
    return "";
  }
  const requestAnimationFrame = (cb = () => {
  }) => {
    return new Promise((resolve) => {
      const timer2 = setInterval(() => {
        clearInterval(timer2);
        resolve(true);
        cb();
      }, 1e3 / 30);
    });
  };
  function deepClone$1(obj, cache = /* @__PURE__ */ new Map()) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    if (isDate(obj)) {
      return new Date(obj.getTime());
    }
    if (obj instanceof RegExp) {
      return new RegExp(obj.source, obj.flags);
    }
    if (obj instanceof Error) {
      const errorCopy = new Error(obj.message);
      errorCopy.stack = obj.stack;
      return errorCopy;
    }
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    const copy = Array.isArray(obj) ? [] : {};
    cache.set(obj, copy);
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = deepClone$1(obj[key], cache);
      }
    }
    return copy;
  }
  function deepMerge$1(target, source) {
    target = deepClone$1(target);
    if (typeof target !== "object" || typeof source !== "object") {
      throw new Error("Both target and source must be objects.");
    }
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      target[prop] = source[prop];
    }
    return target;
  }
  function deepAssign(target, source) {
    Object.keys(source).forEach((key) => {
      const targetValue = target[key];
      const newObjValue = source[key];
      if (isObj(targetValue) && isObj(newObjValue)) {
        deepAssign(targetValue, newObjValue);
      } else {
        target[key] = newObjValue;
      }
    });
    return target;
  }
  function debounce$1(func2, wait, options = {}) {
    let timeoutId = null;
    let lastArgs;
    let lastThis;
    let result;
    const leading = isDef(options.leading) ? options.leading : false;
    const trailing = isDef(options.trailing) ? options.trailing : true;
    function invokeFunc() {
      if (lastArgs !== void 0) {
        result = func2.apply(lastThis, lastArgs);
        lastArgs = void 0;
      }
    }
    function startTimer() {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        if (trailing) {
          invokeFunc();
        }
      }, wait);
    }
    function cancelTimer() {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    }
    function debounced(...args) {
      lastArgs = args;
      lastThis = this;
      if (timeoutId === null) {
        if (leading) {
          invokeFunc();
        }
        startTimer();
      } else if (trailing) {
        cancelTimer();
        startTimer();
      }
      return result;
    }
    return debounced;
  }
  const getPropByPath = (obj, path) => {
    const keys = path.split(".");
    try {
      return keys.reduce((acc, key) => acc !== void 0 && acc !== null ? acc[key] : void 0, obj);
    } catch (error2) {
      return void 0;
    }
  };
  const isDate = (val) => Object.prototype.toString.call(val) === "[object Date]" && !Number.isNaN(val.getTime());
  const numericProp = [Number, String];
  const makeRequiredProp = (type) => ({
    type,
    required: true
  });
  const makeArrayProp = () => ({
    type: Array,
    default: () => []
  });
  const makeBooleanProp = (defaultVal) => ({
    type: Boolean,
    default: defaultVal
  });
  const makeNumberProp = (defaultVal) => ({
    type: Number,
    default: defaultVal
  });
  const makeNumericProp = (defaultVal) => ({
    type: numericProp,
    default: defaultVal
  });
  const makeStringProp = (defaultVal) => ({
    type: String,
    default: defaultVal
  });
  const baseProps = {
    /**
     * 自定义根节点样式
     */
    customStyle: makeStringProp(""),
    /**
     * 自定义根节点样式类
     */
    customClass: makeStringProp("")
  };
  const iconProps = {
    ...baseProps,
    /**
     * 使用的图标名字，可以使用链接图片
     */
    name: makeRequiredProp(String),
    /**
     * 图标的颜色
     */
    color: String,
    /**
     * 图标的字体大小
     */
    size: String,
    /**
     * 类名前缀，用于使用自定义图标
     */
    classPrefix: makeStringProp("wd-icon")
  };
  const __default__$p = {
    name: "wd-icon",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$R = /* @__PURE__ */ vue.defineComponent({
    ...__default__$p,
    props: iconProps,
    emits: ["click"],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const isImageUrl = vue.ref(false);
      vue.watch(
        () => props2.name,
        (val) => {
          isImageUrl.value = val.indexOf("/") > -1;
        },
        { deep: true, immediate: true }
      );
      const rootClass = vue.computed(() => {
        const prefix = props2.classPrefix;
        return `${prefix} ${props2.customClass} ${isImageUrl.value ? "wd-icon--image" : prefix + "-" + props2.name}`;
      });
      const rootStyle = vue.computed(() => {
        const style = {};
        if (props2.color) {
          style["color"] = props2.color;
        }
        if (props2.size) {
          style["font-size"] = props2.size;
        }
        return `${objToStyle(style)}; ${props2.customStyle}`;
      });
      function handleClick(event) {
        emit("click", event);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            onClick: handleClick,
            class: vue.normalizeClass(rootClass.value),
            style: vue.normalizeStyle(rootStyle.value)
          },
          [
            isImageUrl.value ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              class: "wd-icon__image",
              src: _ctx.name
            }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-24906af6"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-icon/wd-icon.vue"]]);
  function useParent(key) {
    const parent = vue.inject(key, null);
    if (parent) {
      const instance2 = vue.getCurrentInstance();
      const { link, unlink, internalChildren } = parent;
      link(instance2);
      vue.onUnmounted(() => unlink(instance2));
      const index2 = vue.computed(() => internalChildren.indexOf(instance2));
      return {
        parent,
        index: index2
      };
    }
    return {
      parent: null,
      index: vue.ref(-1)
    };
  }
  const CELL_GROUP_KEY = Symbol("wd-cell-group");
  function useCell() {
    const { parent: cellGroup, index: index2 } = useParent(CELL_GROUP_KEY);
    const border = vue.computed(() => {
      return cellGroup && cellGroup.props.border && index2.value;
    });
    return { border };
  }
  const FORM_KEY = Symbol("wd-form");
  const zhCN = {
    calendar: {
      placeholder: "请选择",
      title: "选择日期",
      day: "日",
      week: "周",
      month: "月",
      confirm: "确定",
      startTime: "开始时间",
      endTime: "结束时间",
      to: "至",
      timeFormat: "YY年MM月DD日 HH:mm:ss",
      dateFormat: "YYYY年MM月DD日",
      weekFormat: (year, week) => `${year} 第 ${week} 周`,
      startWeek: "开始周",
      endWeek: "结束周",
      startMonth: "开始月",
      endMonth: "结束月",
      monthFormat: "YYYY年MM月"
    },
    calendarView: {
      startTime: "开始",
      endTime: "结束",
      weeks: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      rangePrompt: (maxRange) => `选择天数不能超过${maxRange}天`,
      rangePromptWeek: (maxRange) => `选择周数不能超过${maxRange}周`,
      rangePromptMonth: (maxRange) => `选择月份不能超过${maxRange}个月`,
      monthTitle: "YYYY年M月",
      yearTitle: "YYYY年",
      month: "M月",
      hour: (value) => `${value}时`,
      minute: (value) => `${value}分`,
      second: (value) => `${value}秒`
    },
    collapse: {
      expand: "展开",
      retract: "收起"
    },
    colPicker: {
      title: "请选择",
      placeholder: "请选择",
      select: "请选择"
    },
    datetimePicker: {
      start: "开始时间",
      end: "结束时间",
      to: "至",
      placeholder: "请选择",
      confirm: "完成",
      cancel: "取消"
    },
    loadmore: {
      loading: "正在努力加载中...",
      finished: "已加载完毕",
      error: "加载失败",
      retry: "点击重试"
    },
    messageBox: {
      inputPlaceholder: "请输入",
      confirm: "确定",
      cancel: "取消",
      inputNoValidate: "输入的数据不合法"
    },
    numberKeyboard: {
      confirm: "完成"
    },
    pagination: {
      prev: "上一页",
      next: "下一页",
      page: (value) => `当前页：${value}`,
      total: (total) => `当前数据：${total}条`,
      size: (size) => `分页大小：${size}`
    },
    picker: {
      cancel: "取消",
      done: "完成",
      placeholder: "请选择"
    },
    imgCropper: {
      confirm: "完成",
      cancel: "取消"
    },
    search: {
      search: "搜索",
      cancel: "取消"
    },
    steps: {
      wait: "未开始",
      finished: "已完成",
      process: "进行中",
      failed: "失败"
    },
    tabs: {
      all: "全部"
    },
    upload: {
      error: "上传失败"
    },
    input: {
      placeholder: "请输入..."
    },
    selectPicker: {
      title: "请选择",
      placeholder: "请选择",
      select: "请选择",
      confirm: "确认",
      filterPlaceholder: "搜索"
    },
    tag: {
      placeholder: "请输入",
      add: "新增标签"
    },
    textarea: {
      placeholder: "请输入..."
    }
  };
  const lang = vue.ref("zh-CN");
  const messages = vue.reactive({
    "zh-CN": zhCN
  });
  const Locale = {
    messages() {
      return messages[lang.value];
    },
    use(newLang, newMessage) {
      lang.value = newLang;
      if (newMessage) {
        this.add({ [newLang]: newMessage });
      }
    },
    add(newMessages = {}) {
      deepAssign(messages, newMessages);
    }
  };
  const useTranslate = (name) => {
    const prefix = name ? camelCase(name) + "." : "";
    const translate = (key, ...args) => {
      const currentMessages = Locale.messages();
      const message = getPropByPath(currentMessages, prefix + key);
      return isFunction(message) ? message(...args) : message;
    };
    return { translate };
  };
  const inputProps = {
    ...baseProps,
    customInputClass: makeStringProp(""),
    customLabelClass: makeStringProp(""),
    // 原生属性
    /**
     * 占位文本
     */
    placeholder: String,
    /**
     * 原生属性，指定 placeholder 的样式，目前仅支持color,font-size和font-weight
     */
    placeholderStyle: String,
    /**
     * 原生属性，指定 placeholder 的样式类
     */
    placeholderClass: makeStringProp(""),
    /**
     * 原生属性，指定光标与键盘的距离。取 input 距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离
     */
    cursorSpacing: makeNumberProp(0),
    /**
     * 原生属性，指定focus时的光标位置
     */
    cursor: makeNumberProp(-1),
    /**
     * 原生属性，光标起始位置，自动聚集时有效，需与selection-end搭配使用
     */
    selectionStart: makeNumberProp(-1),
    /**
     * 原生属性，光标结束位置，自动聚集时有效，需与selection-start搭配使用
     */
    selectionEnd: makeNumberProp(-1),
    /**
     * 原生属性，键盘弹起时，是否自动上推页面
     */
    adjustPosition: makeBooleanProp(true),
    /**
     * focus时，点击页面的时候不收起键盘
     */
    holdKeyboard: makeBooleanProp(false),
    /**
     * 设置键盘右下角按钮的文字，仅在type='text'时生效，可选值：done / go / next / search / send
     */
    confirmType: makeStringProp("done"),
    /**
     * 点击键盘右下角按钮时是否保持键盘不收起
     */
    confirmHold: makeBooleanProp(false),
    /**
     * 原生属性，获取焦点
     */
    focus: makeBooleanProp(false),
    /**
     * 类型，可选值：text / number / digit / idcard
     */
    type: makeStringProp("text"),
    /**
     * 原生属性，最大长度
     */
    maxlength: makeNumberProp(-1),
    /**
     * 原生属性，禁用
     */
    disabled: makeBooleanProp(false),
    /**
     * 微信小程序原生属性，强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
     */
    alwaysEmbed: makeBooleanProp(false),
    // 原生属性结束
    /**
     * 输入框的值靠右展示
     */
    alignRight: makeBooleanProp(false),
    /**
     * 绑定值
     */
    modelValue: makeNumericProp(""),
    /**
     * 显示为密码框
     */
    showPassword: makeBooleanProp(false),
    /**
     * 显示清空按钮
     */
    clearable: makeBooleanProp(false),
    /**
     * 只读
     */
    readonly: makeBooleanProp(false),
    /**
     * 使用 后置图标 插槽
     */
    useSuffixSlot: makeBooleanProp(false),
    /**
     * 使用 前置图标 插槽
     */
    usePrefixSlot: makeBooleanProp(false),
    /**
     * 前置图标，icon组件中的图标类名
     */
    prefixIcon: String,
    /**
     * 后置图标，icon组件中的图标类名
     */
    suffixIcon: String,
    /**
     * 显示字数限制，需要同时设置 maxlength
     */
    showWordLimit: makeBooleanProp(false),
    /**
     * 设置左侧标题
     */
    label: String,
    /**
     * 设置左侧标题宽度
     */
    labelWidth: makeStringProp("33%"),
    /**
     * 使用 label 插槽
     */
    useLabelSlot: makeBooleanProp(false),
    /**
     * 设置输入框大小，可选值：large
     */
    size: String,
    /**
     * 设置输入框错误状态，错误状态时为红色
     */
    error: makeBooleanProp(false),
    /**
     * 当有label属性时，设置标题和输入框垂直居中，默认为顶部居中
     */
    center: makeBooleanProp(false),
    /**
     * 非 cell 类型下是否隐藏下划线
     */
    noBorder: makeBooleanProp(false),
    /**
     * 是否必填
     */
    required: makeBooleanProp(false),
    /**
     * 表单域 model 字段名，在使用表单校验功能的情况下，该属性是必填的
     */
    prop: String,
    /**
     * 表单验证规则，结合wd-form组件使用
     */
    rules: makeArrayProp()
  };
  const __default__$o = {
    name: "wd-input",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$Q = /* @__PURE__ */ vue.defineComponent({
    ...__default__$o,
    props: inputProps,
    emits: [
      "update:modelValue",
      "clear",
      "change",
      "blur",
      "focus",
      "input",
      "keyboardheightchange",
      "confirm",
      "linechange",
      "clicksuffixicon",
      "clickprefixicon",
      "click"
    ],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const { translate } = useTranslate("input");
      const showClear = vue.ref(false);
      const showWordCount = vue.ref(false);
      const isPwdVisible = vue.ref(false);
      const clearing = vue.ref(false);
      const isFocus = vue.ref(false);
      const inputValue = vue.ref("");
      const cell = useCell();
      vue.watch(
        () => props2.focus,
        (newValue) => {
          isFocus.value = newValue;
        },
        { immediate: true, deep: true }
      );
      vue.watch(
        () => props2.modelValue,
        (newValue) => {
          const { disabled, readonly, clearable } = props2;
          if (newValue === void 0) {
            newValue = "";
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-input/wd-input.vue:135", "[wot-design] warning(wd-input): value can not be undefined.");
          }
          inputValue.value = newValue;
          showClear.value = Boolean(clearable && !disabled && !readonly && newValue);
        },
        { immediate: true, deep: true }
      );
      const { parent: form } = useParent(FORM_KEY);
      const errorMessage = vue.computed(() => {
        if (form && props2.prop && form.errorMessages && form.errorMessages[props2.prop]) {
          return form.errorMessages[props2.prop];
        } else {
          return "";
        }
      });
      const isRequired = vue.computed(() => {
        let formRequired = false;
        if (form && form.props.rules) {
          const rules = form.props.rules;
          for (const key in rules) {
            if (Object.prototype.hasOwnProperty.call(rules, key) && key === props2.prop && Array.isArray(rules[key])) {
              formRequired = rules[key].some((rule) => rule.required);
            }
          }
        }
        return props2.required || props2.rules.some((rule) => rule.required) || formRequired;
      });
      const rootClass = vue.computed(() => {
        return `wd-input  ${props2.label || props2.useLabelSlot ? "is-cell" : ""} ${props2.center ? "is-center" : ""} ${cell.border.value ? "is-border" : ""} ${props2.size ? "is-" + props2.size : ""} ${props2.error ? "is-error" : ""} ${props2.disabled ? "is-disabled" : ""}  ${inputValue.value && String(inputValue.value).length > 0 ? "is-not-empty" : ""}  ${props2.noBorder ? "is-no-border" : ""} ${props2.customClass}`;
      });
      const labelClass = vue.computed(() => {
        return `wd-input__label ${props2.customLabelClass} ${isRequired.value ? "is-required" : ""}`;
      });
      const inputPlaceholderClass = vue.computed(() => {
        return `wd-input__placeholder  ${props2.placeholderClass}`;
      });
      const labelStyle = vue.computed(() => {
        return props2.labelWidth ? objToStyle({
          "min-width": props2.labelWidth,
          "max-width": props2.labelWidth
        }) : "";
      });
      vue.onBeforeMount(() => {
        initState();
      });
      function initState() {
        const { disabled, readonly, clearable, maxlength, showWordLimit } = props2;
        let newVal = "";
        if (showWordLimit && maxlength && inputValue.value.toString().length > maxlength) {
          newVal = inputValue.value.toString().substring(0, maxlength);
        }
        showClear.value = Boolean(!disabled && !readonly && clearable && inputValue.value);
        showWordCount.value = Boolean(!disabled && !readonly && maxlength && showWordLimit);
        inputValue.value = newVal || inputValue.value;
        emit("update:modelValue", inputValue.value);
      }
      function togglePwdVisible() {
        isPwdVisible.value = !isPwdVisible.value;
      }
      function clear() {
        inputValue.value = "";
        requestAnimationFrame().then(() => requestAnimationFrame()).then(() => requestAnimationFrame()).then(() => {
          isFocus.value = true;
          emit("change", {
            value: ""
          });
          emit("update:modelValue", inputValue.value);
          emit("clear");
        });
      }
      function handleBlur() {
        isFocus.value = false;
        emit("change", {
          value: inputValue.value
        });
        emit("update:modelValue", inputValue.value);
        emit("blur", {
          value: inputValue.value
        });
      }
      function handleFocus({ detail }) {
        if (clearing.value) {
          clearing.value = false;
          return;
        }
        isFocus.value = true;
        emit("focus", detail);
      }
      function handleInput() {
        emit("update:modelValue", inputValue.value);
        emit("input", inputValue.value);
      }
      function handleKeyboardheightchange(event) {
        emit("keyboardheightchange", event.detail);
      }
      function handleConfirm({ detail }) {
        emit("confirm", detail);
      }
      function onClickSuffixIcon() {
        emit("clicksuffixicon");
      }
      function onClickPrefixIcon() {
        emit("clickprefixicon");
      }
      function handleClick(event) {
        emit("click", event);
      }
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(rootClass.value),
            style: vue.normalizeStyle(_ctx.customStyle),
            onClick: handleClick
          },
          [
            _ctx.label || _ctx.useLabelSlot ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass(labelClass.value),
                style: vue.normalizeStyle(labelStyle.value)
              },
              [
                _ctx.prefixIcon || _ctx.usePrefixSlot ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "wd-input__prefix"
                }, [
                  _ctx.prefixIcon && !_ctx.usePrefixSlot ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                    key: 0,
                    "custom-class": "wd-input__icon",
                    name: _ctx.prefixIcon,
                    onClick: onClickPrefixIcon
                  }, null, 8, ["name"])) : vue.renderSlot(_ctx.$slots, "prefix", { key: 1 }, void 0, true)
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", { class: "wd-input__label-inner" }, [
                  _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 0 },
                    [
                      vue.createTextVNode(
                        vue.toDisplayString(_ctx.label),
                        1
                        /* TEXT */
                      )
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : vue.renderSlot(_ctx.$slots, "label", { key: 1 }, void 0, true)
                ])
              ],
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 输入域 "),
            vue.createElementVNode("view", { class: "wd-input__body" }, [
              vue.createElementVNode("view", { class: "wd-input__value" }, [
                (_ctx.prefixIcon || _ctx.usePrefixSlot) && !_ctx.label ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "wd-input__prefix"
                }, [
                  _ctx.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                    key: 0,
                    "custom-class": "wd-input__icon",
                    name: _ctx.prefixIcon,
                    onClick: onClickPrefixIcon
                  }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
                  vue.renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
                ])) : vue.createCommentVNode("v-if", true),
                vue.withDirectives(vue.createElementVNode("input", {
                  class: vue.normalizeClass([
                    "wd-input__inner",
                    _ctx.prefixIcon ? "wd-input__inner--prefix" : "",
                    showWordCount.value ? "wd-input__inner--count" : "",
                    _ctx.alignRight ? "is-align-right" : "",
                    _ctx.customInputClass
                  ]),
                  type: _ctx.type,
                  password: _ctx.showPassword && !isPwdVisible.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
                  placeholder: _ctx.placeholder || vue.unref(translate)("placeholder"),
                  disabled: _ctx.disabled,
                  maxlength: _ctx.maxlength,
                  focus: isFocus.value,
                  "confirm-type": _ctx.confirmType,
                  "confirm-hold": _ctx.confirmHold,
                  cursor: _ctx.cursor,
                  "cursor-spacing": _ctx.cursorSpacing,
                  "placeholder-style": _ctx.placeholderStyle,
                  "selection-start": _ctx.selectionStart,
                  "selection-end": _ctx.selectionEnd,
                  "adjust-position": _ctx.adjustPosition,
                  "hold-keyboard": _ctx.holdKeyboard,
                  "always-embed": _ctx.alwaysEmbed,
                  "placeholder-class": inputPlaceholderClass.value,
                  onInput: handleInput,
                  onFocus: handleFocus,
                  onBlur: handleBlur,
                  onConfirm: handleConfirm,
                  onKeyboardheightchange: handleKeyboardheightchange
                }, null, 42, ["type", "password", "placeholder", "disabled", "maxlength", "focus", "confirm-type", "confirm-hold", "cursor", "cursor-spacing", "placeholder-style", "selection-start", "selection-end", "adjust-position", "hold-keyboard", "always-embed", "placeholder-class"]), [
                  [vue.vModelDynamic, inputValue.value]
                ]),
                _ctx.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "wd-input__readonly-mask"
                })) : vue.createCommentVNode("v-if", true),
                showClear.value || _ctx.showPassword || _ctx.suffixIcon || showWordCount.value || _ctx.useSuffixSlot ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  class: "wd-input__suffix"
                }, [
                  showClear.value ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                    key: 0,
                    "custom-class": "wd-input__clear",
                    name: "error-fill",
                    onClick: clear
                  })) : vue.createCommentVNode("v-if", true),
                  _ctx.showPassword ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                    key: 1,
                    "custom-class": "wd-input__icon",
                    name: isPwdVisible.value ? "view" : "eye-close",
                    onClick: togglePwdVisible
                  }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
                  showWordCount.value ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 2,
                    class: "wd-input__count"
                  }, [
                    vue.createElementVNode(
                      "text",
                      {
                        class: vue.normalizeClass([
                          inputValue.value && String(inputValue.value).length > 0 ? "wd-input__count-current" : "",
                          String(inputValue.value).length > _ctx.maxlength ? "is-error" : ""
                        ])
                      },
                      vue.toDisplayString(String(inputValue.value).length),
                      3
                      /* TEXT, CLASS */
                    ),
                    vue.createTextVNode(
                      " /" + vue.toDisplayString(_ctx.maxlength),
                      1
                      /* TEXT */
                    )
                  ])) : vue.createCommentVNode("v-if", true),
                  _ctx.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                    key: 3,
                    "custom-class": "wd-input__icon",
                    name: _ctx.suffixIcon,
                    onClick: onClickSuffixIcon
                  }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
                  vue.renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
                ])) : vue.createCommentVNode("v-if", true)
              ]),
              errorMessage.value ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "wd-input__error-message"
                },
                vue.toDisplayString(errorMessage.value),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-4e0c9774"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-input/wd-input.vue"]]);
  const _b64chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"];
  const _mkUriSafe = (src) => src.replace(/[+/]/g, (m0) => m0 === "+" ? "-" : "_").replace(/=+\$/m, "");
  const fromUint8Array = (src, rfc4648 = false) => {
    let b64 = "";
    for (let i2 = 0, l2 = src.length; i2 < l2; i2 += 3) {
      const [a0, a1, a2] = [src[i2], src[i2 + 1], src[i2 + 2]];
      const ord = a0 << 16 | a1 << 8 | a2;
      b64 += _b64chars[ord >>> 18];
      b64 += _b64chars[ord >>> 12 & 63];
      b64 += typeof a1 !== "undefined" ? _b64chars[ord >>> 6 & 63] : "=";
      b64 += typeof a2 !== "undefined" ? _b64chars[ord & 63] : "=";
    }
    return rfc4648 ? _mkUriSafe(b64) : b64;
  };
  const _btoa = typeof btoa === "function" ? (s2) => btoa(s2) : (s2) => {
    if (s2.charCodeAt(0) > 255) {
      throw new RangeError("The string contains invalid characters.");
    }
    return fromUint8Array(Uint8Array.from(s2, (c2) => c2.charCodeAt(0)));
  };
  const utob = (src) => unescape(encodeURIComponent(src));
  function encode(src, rfc4648 = false) {
    const b64 = _btoa(utob(src));
    return rfc4648 ? _mkUriSafe(b64) : b64;
  }
  const buttonProps = {
    ...baseProps,
    /**
     * 幽灵按钮
     */
    plain: makeBooleanProp(false),
    /**
     * 圆角按钮
     */
    round: makeBooleanProp(true),
    /**
     * 禁用按钮
     */
    disabled: makeBooleanProp(false),
    /**
     * 是否细边框
     */
    hairline: makeBooleanProp(false),
    /**
     * 块状按钮
     */
    block: makeBooleanProp(false),
    /**
     * 按钮类型，可选值：primary / success / info / warning / error / text / icon
     */
    type: makeStringProp("primary"),
    /**
     * 按钮尺寸，可选值：small / medium / large
     */
    size: makeStringProp("medium"),
    /**
     * 图标类名
     */
    icon: String,
    /**
     * 加载中按钮
     */
    loading: makeBooleanProp(false),
    /**
     * 加载图标颜色
     */
    loadingColor: String,
    /**
     * 开放能力
     */
    openType: String,
    formType: String,
    /**
     * 指定是否阻止本节点的祖先节点出现点击态
     */
    hoverStopPropagation: Boolean,
    /**
     * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
     */
    lang: String,
    /**
     * 会话来源，open-type="contact"时有效
     */
    sessionFrom: String,
    /**
     * 会话内消息卡片标题，open-type="contact"时有效
     */
    sendMessageTitle: String,
    /**
     * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
     */
    sendMessagePath: String,
    /**
     * 会话内消息卡片图片，open-type="contact"时有效
     */
    sendMessageImg: String,
    /**
     * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
     */
    appParameter: String,
    /**
     * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
     */
    showMessageCard: Boolean
  };
  const __default__$n = {
    name: "wd-button",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$P = /* @__PURE__ */ vue.defineComponent({
    ...__default__$n,
    props: buttonProps,
    emits: [
      "click",
      "getuserinfo",
      "contact",
      "getphonenumber",
      "error",
      "launchapp",
      "opensetting",
      "chooseavatar",
      "agreeprivacyauthorization"
    ],
    setup(__props, { emit: __emit }) {
      const loadingIcon = (color = "#4D80F0", reverse = true) => {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="a"><stop stop-color="${reverse ? color : "#fff"}" offset="0%" stop-opacity="0"/><stop stop-color="${reverse ? color : "#fff"}" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${reverse ? "#fff" : color}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#a)" stroke-width="3.5" stroke-linecap="round"/></g></svg>`;
      };
      const props2 = __props;
      const emit = __emit;
      const hoverStartTime = vue.ref(20);
      const hoverStayTime = vue.ref(70);
      const loadingIconSvg = vue.ref("");
      const loadingStyle = vue.computed(() => {
        return `background-image: url(${loadingIconSvg.value});`;
      });
      vue.watch(
        () => props2.loading,
        () => {
          buildLoadingSvg();
        },
        { deep: true, immediate: true }
      );
      function handleClick(event) {
        if (!props2.disabled && !props2.loading) {
          emit("click", event.detail);
        }
      }
      function handleGetuserinfo(event) {
        emit("getuserinfo", event.detail);
      }
      function handleConcat(event) {
        emit("contact", event.detail);
      }
      function handleGetphonenumber(event) {
        emit("getphonenumber", event.detail);
      }
      function handleError(event) {
        emit("error", event.detail);
      }
      function handleLaunchapp(event) {
        emit("launchapp", event.detail);
      }
      function handleOpensetting(event) {
        emit("opensetting", event.detail);
      }
      function handleChooseavatar(event) {
        emit("chooseavatar", event.detail);
      }
      function handleAgreePrivacyAuthorization(event) {
        emit("agreeprivacyauthorization", event.detail);
      }
      function buildLoadingSvg() {
        const { loadingColor, type, plain } = props2;
        let color = loadingColor;
        if (!color) {
          switch (type) {
            case "primary":
              color = "#4D80F0";
              break;
            case "success":
              color = "#34d19d";
              break;
            case "info":
              color = "#333";
              break;
            case "warning":
              color = "#f0883a";
              break;
            case "error":
              color = "#fa4350";
              break;
            case "default":
              color = "#333";
              break;
          }
        }
        const svg = loadingIcon(color, !plain);
        loadingIconSvg.value = `"data:image/svg+xml;base64,${encode(svg)}"`;
      }
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock("button", {
          "hover-class": `${_ctx.disabled || _ctx.loading ? "" : "wd-button--active"}`,
          style: vue.normalizeStyle(_ctx.customStyle),
          class: vue.normalizeClass([
            "wd-button",
            "is-" + _ctx.type,
            "is-" + _ctx.size,
            _ctx.plain ? "is-plain" : "",
            _ctx.disabled ? "is-disabled" : "",
            _ctx.round ? "is-round" : "",
            _ctx.hairline ? "is-hairline" : "",
            _ctx.block ? "is-block" : "",
            _ctx.loading ? "is-loading" : "",
            _ctx.customClass
          ]),
          "hover-start-time": hoverStartTime.value,
          "hover-stay-time": hoverStayTime.value,
          "open-type": _ctx.openType,
          "send-message-title": _ctx.sendMessageTitle,
          "send-message-path": _ctx.sendMessagePath,
          "send-message-img": _ctx.sendMessageImg,
          "app-parameter": _ctx.appParameter,
          "show-message-card": _ctx.showMessageCard,
          "session-from": _ctx.sessionFrom,
          lang: _ctx.lang,
          "hover-stop-propagation": _ctx.hoverStopPropagation,
          "form-type": _ctx.formType,
          onClick: handleClick,
          onGetuserinfo: handleGetuserinfo,
          onContact: handleConcat,
          onGetphonenumber: handleGetphonenumber,
          onError: handleError,
          onLaunchapp: handleLaunchapp,
          onOpensetting: handleOpensetting,
          onChooseavatar: handleChooseavatar,
          onAgreeprivacyauthorization: handleAgreePrivacyAuthorization
        }, [
          _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "wd-button__loading"
          }, [
            vue.createElementVNode(
              "view",
              {
                class: "wd-button__loading-svg",
                style: vue.normalizeStyle(loadingStyle.value)
              },
              null,
              4
              /* STYLE */
            )
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
            key: 1,
            "custom-class": "wd-button__icon",
            name: _ctx.icon
          }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "wd-button__text" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 46, ["hover-class", "hover-start-time", "hover-stay-time", "open-type", "send-message-title", "send-message-path", "send-message-img", "app-parameter", "show-message-card", "session-from", "lang", "hover-stop-propagation", "form-type"]);
      };
    }
  });
  const __easycom_12 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-d858c170"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-button/wd-button.vue"]]);
  const _sfc_main$O = {
    __name: "LoginAccount",
    setup(__props) {
      vue.ref("");
      let LoginInformation = vue.ref("");
      let Account = vue.ref("");
      let Password = vue.ref("");
      let Information = vue.ref("");
      uni.getStorageSync("UserLoginStatus");
      LoginInformation = JSON.parse(uni.getStorageSync("UserInformation"));
      const LoginIn = () => {
        uni.showLoading({
          title: "登录中..."
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/login",
          method: "POST",
          timeout: 6e3,
          data: {
            username: Account.value,
            password: Password.value
          },
          success: (res) => {
            if (res.data.code == "0") {
              Information.value = res.data.data;
              LoginInformation.id = Information.value.id;
              LoginInformation.name = Information.value.username;
              LoginInformation.token = Information.value.token;
              LoginInformation.phone = Information.value.phoneNumber;
              LoginInformation.email = Information.value.email;
              LoginInformation.image = Information.value.userImage;
              LoginInformation.sex = Information.value.userSex;
              LoginInformation.brithday = Information.value.brithday;
              LoginInformation.locationx = Information.value.locationX;
              LoginInformation.locationy = Information.value.locationY;
              LoginInformation.userImg = Information.value.userImage;
              LoginInformation.userBack = Information.value.backImg;
              LoginInformation.city = Information.value.city;
              LoginInformation.sign = Information.value.sign;
              let load = JSON.stringify(LoginInformation);
              uni.hideLoading();
              uni.setStorageSync("UserSearch", "[]");
              uni.setStorageSync("UserInformation", load);
              uni.setStorageSync("UserLoginStatus", "true");
              uni.setStorageSync("UserNotice", "");
              uni.navigateTo({
                url: "/pages/Login/Login"
              });
            } else {
              uni.hideLoading();
              uni.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 2e3
              });
            }
          },
          fail: (err) => {
            uni.hideLoading();
            formatAppLog("log", "at pages/LoginAccount/LoginAccount.vue:80", err);
            uni.showToast({
              title: err.errMsg,
              icon: "none",
              duration: 2e3
            });
            Information.value = err;
          }
        });
      };
      const Register = () => {
        uni.navigateTo({
          url: "/pages/Register/Register"
        });
      };
      return (_ctx, _cache) => {
        const _component_phone_status = resolveEasycom(vue.resolveDynamicComponent("phone-status"), __easycom_0$7);
        const _component_wd_input = resolveEasycom(vue.resolveDynamicComponent("wd-input"), __easycom_1$6);
        const _component_wd_button = resolveEasycom(vue.resolveDynamicComponent("wd-button"), __easycom_12);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_phone_status),
            vue.createElementVNode("view", { class: "contentBox content-background" }, [
              vue.createElementVNode("view", { class: "RegisterTitle" }, "Login"),
              vue.createVNode(_component_wd_input, {
                class: "inputClass",
                modelValue: vue.unref(Account),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(Account) ? Account.value = $event : Account = $event),
                maxlength: 10,
                "show-word-limit": "",
                placeholder: "请输入用户名(必填)"
              }, null, 8, ["modelValue"]),
              vue.createVNode(_component_wd_input, {
                class: "inputClass",
                modelValue: vue.unref(Password),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(Password) ? Password.value = $event : Password = $event),
                "show-password": "",
                placeholder: "请输入密码(必填)"
              }, null, 8, ["modelValue"]),
              vue.createVNode(_component_wd_button, {
                class: "注册按钮",
                type: "success",
                size: "large",
                onClick: LoginIn
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("登录")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("view", {
                class: "返回注册",
                onClick: Register
              }, "注册账号")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesLoginAccountLoginAccount = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__file", "D:/前端学习笔记/uniapp/City/pages/LoginAccount/LoginAccount.vue"]]);
  const transitionProps = {
    ...baseProps,
    /**
     * 是否展示组件
     * 类型：boolean
     * 默认值：false
     */
    show: makeBooleanProp(false),
    /**
     * 动画执行时间
     * 类型：number | boolean | Record<string, number>
     * 默认值：300 (毫秒)
     */
    duration: {
      type: [Object, Number, Boolean],
      default: 300
    },
    /**
     * 动画类型
     * 类型：string
     * 可选值：fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in
     * 默认值：'fade'
     */
    name: makeStringProp("fade"),
    /**
     * 是否延迟渲染子组件
     * 类型：boolean
     * 默认值：true
     */
    lazyRender: makeBooleanProp(true),
    /**
     * 进入过渡的开始状态
     * 类型：string
     */
    enterClass: makeStringProp(""),
    /**
     * 进入过渡的激活状态
     * 类型：string
     */
    enterActiveClass: makeStringProp(""),
    /**
     * 进入过渡的结束状态
     * 类型：string
     */
    enterToClass: makeStringProp(""),
    /**
     * 离开过渡的开始状态
     * 类型：string
     */
    leaveClass: makeStringProp(""),
    /**
     * 离开过渡的激活状态
     * 类型：string
     */
    leaveActiveClass: makeStringProp(""),
    /**
     * 离开过渡的结束状态
     * 类型：string
     */
    leaveToClass: makeStringProp("")
  };
  const __default__$m = {
    name: "wd-transition",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$N = /* @__PURE__ */ vue.defineComponent({
    ...__default__$m,
    props: transitionProps,
    emits: ["click", "before-enter", "enter", "before-leave", "leave", "after-leave", "after-enter"],
    setup(__props, { emit: __emit }) {
      const getClassNames = (name) => {
        if (!name) {
          return {
            enter: `${props2.enterClass} ${props2.enterActiveClass}`,
            "enter-to": `${props2.enterToClass} ${props2.enterActiveClass}`,
            leave: `${props2.leaveClass} ${props2.leaveActiveClass}`,
            "leave-to": `${props2.leaveToClass} ${props2.leaveActiveClass}`
          };
        }
        return {
          enter: `wd-${name}-enter wd-${name}-enter-active`,
          "enter-to": `wd-${name}-enter-to wd-${name}-enter-active`,
          leave: `wd-${name}-leave wd-${name}-leave-active`,
          "leave-to": `wd-${name}-leave-to wd-${name}-leave-active`
        };
      };
      const props2 = __props;
      const emit = __emit;
      const inited = vue.ref(false);
      const display = vue.ref(false);
      const status = vue.ref("");
      const transitionEnded = vue.ref(false);
      const currentDuration = vue.ref(300);
      const classes = vue.ref("");
      const enterPromise = vue.ref(null);
      const style = vue.computed(() => {
        return `-webkit-transition-duration:${currentDuration.value}ms;transition-duration:${currentDuration.value}ms;${display.value ? "" : "display: none;"}${props2.customStyle}`;
      });
      const rootClass = vue.computed(() => {
        return `wd-transition ${props2.customClass}  ${classes.value}`;
      });
      vue.onBeforeMount(() => {
        if (props2.show) {
          enter();
        }
      });
      vue.watch(
        () => props2.show,
        (newVal) => {
          observerShow(newVal);
        },
        { deep: true, immediate: true }
      );
      function handleClick() {
        emit("click");
      }
      function observerShow(value) {
        value ? enter() : leave();
      }
      function enter() {
        if (enterPromise.value)
          return;
        enterPromise.value = new Promise((resolve) => {
          const classNames = getClassNames(props2.name);
          const duration = isObj(props2.duration) ? props2.duration.enter : props2.duration;
          status.value = "enter";
          emit("before-enter");
          requestAnimationFrame(() => {
            emit("enter");
            classes.value = classNames.enter;
            currentDuration.value = duration;
            requestAnimationFrame(() => {
              inited.value = true;
              display.value = true;
              requestAnimationFrame(() => {
                transitionEnded.value = false;
                classes.value = classNames["enter-to"];
                resolve();
              });
            });
          });
        });
      }
      function leave() {
        if (!enterPromise.value)
          return;
        enterPromise.value.then(() => {
          if (!display.value)
            return;
          const classNames = getClassNames(props2.name);
          const duration = isObj(props2.duration) ? props2.duration.leave : props2.duration;
          status.value = "leave";
          emit("before-leave");
          requestAnimationFrame(() => {
            emit("leave");
            classes.value = classNames.leave;
            currentDuration.value = duration;
            requestAnimationFrame(() => {
              transitionEnded.value = false;
              setTimeout(() => {
                onTransitionEnd();
                enterPromise.value = null;
              }, currentDuration.value);
              classes.value = classNames["leave-to"];
            });
          });
        });
      }
      function onTransitionEnd() {
        if (transitionEnded.value)
          return;
        transitionEnded.value = true;
        if (status.value === "leave") {
          emit("after-leave");
        } else if (status.value === "enter") {
          emit("after-enter");
        }
        if (!props2.show && display.value) {
          display.value = false;
        }
      }
      return (_ctx, _cache) => {
        return inited.value ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(rootClass.value),
            style: vue.normalizeStyle(style.value),
            onTransitionend: onTransitionEnd,
            onClick: handleClick
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          38
          /* CLASS, STYLE, NEED_HYDRATION */
        )) : vue.createCommentVNode("v-if", true);
      };
    }
  });
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-af59a128"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-transition/wd-transition.vue"]]);
  const overlayProps = {
    ...baseProps,
    /**
     * 是否展示遮罩层
     */
    show: makeBooleanProp(false),
    /**
     * 动画时长，单位毫秒
     */
    duration: {
      type: [Object, Number, Boolean],
      default: 300
    },
    /**
     * 是否锁定滚动
     */
    lockScroll: makeBooleanProp(true),
    /**
     * 层级
     */
    zIndex: makeNumberProp(10)
  };
  const __default__$l = {
    name: "wd-overlay",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$M = /* @__PURE__ */ vue.defineComponent({
    ...__default__$l,
    props: overlayProps,
    emits: ["click"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      function handleClick() {
        emit("click");
      }
      function noop() {
      }
      return (_ctx, _cache) => {
        const _component_wd_transition = resolveEasycom(vue.resolveDynamicComponent("wd-transition"), __easycom_0$5);
        return vue.openBlock(), vue.createBlock(_component_wd_transition, {
          show: _ctx.show,
          name: "fade",
          "custom-class": "wd-overlay",
          duration: _ctx.duration,
          "custom-style": `z-index: ${_ctx.zIndex}; ${_ctx.customStyle}`,
          onClick: handleClick,
          onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.lockScroll ? noop : "", ["stop", "prevent"]))
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["show", "duration", "custom-style"]);
      };
    }
  });
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-6e0d1141"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-overlay/wd-overlay.vue"]]);
  const popupProps = {
    ...baseProps,
    transition: String,
    /**
     * 关闭按钮
     */
    closable: makeBooleanProp(false),
    /**
     * 弹出框的位置
     */
    position: makeStringProp("center"),
    /**
     * 点击遮罩是否关闭
     */
    closeOnClickModal: makeBooleanProp(true),
    /**
     * 动画持续时间
     */
    duration: {
      type: [Number, Boolean],
      default: 300
    },
    /**
     * 是否显示遮罩
     */
    modal: makeBooleanProp(true),
    /**
     * 设置层级
     */
    zIndex: makeNumberProp(10),
    /**
     * 是否当关闭时将弹出层隐藏（display: none)
     */
    hideWhenClose: makeBooleanProp(true),
    /**
     * 遮罩样式
     */
    modalStyle: makeStringProp(""),
    /**
     * 弹出面板是否设置底部安全距离（iphone X 类型的机型）
     */
    safeAreaInsetBottom: makeBooleanProp(false),
    /**
     * 弹出层是否显示
     */
    modelValue: makeBooleanProp(false),
    /**
     * 弹层内容懒渲染，触发展示时才渲染内容
     */
    lazyRender: makeBooleanProp(true),
    /**
     * 是否锁定滚动
     */
    lockScroll: makeBooleanProp(true)
  };
  const __default__$k = {
    name: "wd-popup",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$L = /* @__PURE__ */ vue.defineComponent({
    ...__default__$k,
    props: popupProps,
    emits: [
      "update:modelValue",
      "before-enter",
      "enter",
      "before-leave",
      "leave",
      "after-leave",
      "after-enter",
      "click-modal",
      "close"
    ],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const getClassNames = (name2) => {
        if (!name2) {
          return {
            enter: "enter-class enter-active-class",
            "enter-to": "enter-to-class enter-active-class",
            leave: "leave-class leave-active-class",
            "leave-to": "leave-to-class leave-active-class"
          };
        }
        return {
          enter: `wd-${name2}-enter wd-${name2}-enter-active`,
          "enter-to": `wd-${name2}-enter-to wd-${name2}-enter-active`,
          leave: `wd-${name2}-leave wd-${name2}-leave-active`,
          "leave-to": `wd-${name2}-leave-to wd-${name2}-leave-active`
        };
      };
      const inited = vue.ref(false);
      const display = vue.ref(false);
      const status = vue.ref("");
      const transitionEnded = vue.ref(false);
      const currentDuration = vue.ref(300);
      const classes = vue.ref("");
      const safeBottom = vue.ref(0);
      const name = vue.ref("");
      const style = vue.computed(() => {
        return `z-index: ${props2.zIndex}; padding-bottom: ${safeBottom.value}px; -webkit-transition-duration: ${currentDuration.value}ms; transition-duration: ${currentDuration.value}ms; ${display.value || !props2.hideWhenClose ? "" : "display: none;"} ${props2.customStyle}`;
      });
      const rootClass = vue.computed(() => {
        return `wd-popup wd-popup--${props2.position} ${props2.customClass || ""} ${classes.value || ""}`;
      });
      vue.onBeforeMount(() => {
        observerTransition();
        if (props2.safeAreaInsetBottom) {
          const { safeArea, screenHeight, safeAreaInsets } = uni.getSystemInfoSync();
          if (safeArea) {
            safeBottom.value = safeAreaInsets ? safeAreaInsets.bottom : 0;
          } else {
            safeBottom.value = 0;
          }
        }
        if (props2.modelValue) {
          enter();
        }
      });
      vue.watch(
        () => props2.modelValue,
        (newVal) => {
          observermodelValue(newVal);
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        [() => props2.position, () => props2.transition],
        () => {
          observerTransition();
        },
        { deep: true, immediate: true }
      );
      function observermodelValue(value) {
        value ? enter() : leave();
      }
      function enter() {
        const classNames = getClassNames(props2.transition || props2.position);
        const duration = props2.transition === "none" ? 0 : isObj(props2.duration) ? props2.duration.enter : props2.duration;
        status.value = "enter";
        emit("before-enter");
        requestAnimationFrame(() => {
          emit("enter");
          classes.value = classNames.enter;
          currentDuration.value = duration;
          requestAnimationFrame(() => {
            inited.value = true;
            display.value = true;
            requestAnimationFrame(() => {
              transitionEnded.value = false;
              classes.value = classNames["enter-to"];
            });
          });
        });
      }
      function leave() {
        if (!display.value)
          return;
        const classNames = getClassNames(props2.transition || props2.position);
        const duration = props2.transition === "none" ? 0 : isObj(props2.duration) ? props2.duration.leave : props2.duration;
        status.value = "leave";
        emit("before-leave");
        requestAnimationFrame(() => {
          emit("leave");
          classes.value = classNames.leave;
          currentDuration.value = duration;
          requestAnimationFrame(() => {
            transitionEnded.value = false;
            const timer2 = setTimeout(() => {
              onTransitionEnd();
              clearTimeout(timer2);
            }, currentDuration.value);
            classes.value = classNames["leave-to"];
          });
        });
      }
      function onTransitionEnd() {
        if (transitionEnded.value)
          return;
        transitionEnded.value = true;
        if (status.value === "leave") {
          emit("after-leave");
        } else if (status.value === "enter") {
          emit("after-enter");
        }
        if (!props2.modelValue && display.value) {
          display.value = false;
        }
      }
      function observerTransition() {
        const { transition, position } = props2;
        name.value = transition || position;
      }
      function handleClickModal() {
        emit("click-modal");
        if (props2.closeOnClickModal) {
          close();
        }
      }
      function close() {
        emit("close");
        emit("update:modelValue", false);
      }
      function noop() {
      }
      return (_ctx, _cache) => {
        const _component_wd_overlay = resolveEasycom(vue.resolveDynamicComponent("wd-overlay"), __easycom_0$4);
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            _ctx.modal ? (vue.openBlock(), vue.createBlock(_component_wd_overlay, {
              key: 0,
              show: _ctx.modelValue,
              "z-index": _ctx.zIndex,
              "lock-scroll": _ctx.lockScroll,
              duration: _ctx.duration,
              "custom-style": _ctx.modalStyle,
              onClick: handleClickModal,
              onTouchmove: noop
            }, null, 8, ["show", "z-index", "lock-scroll", "duration", "custom-style"])) : vue.createCommentVNode("v-if", true),
            !_ctx.lazyRender || inited.value ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: vue.normalizeClass(rootClass.value),
                style: vue.normalizeStyle(style.value),
                onTransitionend: onTransitionEnd
              },
              [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
                _ctx.closable ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                  key: 0,
                  "custom-class": "wd-popup__close",
                  name: "add",
                  onClick: close
                })) : vue.createCommentVNode("v-if", true)
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            )) : vue.createCommentVNode("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-25a8a9f7"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-popup/wd-popup.vue"]]);
  const notifyProps = {
    /**
     * 类型，可选值为 primary success danger warning
     */
    type: makeStringProp("danger"),
    /**
     * 字体颜色
     */
    color: makeStringProp(""),
    /**
     * 将组件的 z-index 层级设置为一个固定值
     */
    zIndex: makeNumberProp(99),
    /**
     * 显示
     */
    visible: makeBooleanProp(false),
    /**
     * 展示文案，支持通过\n换行
     */
    message: makeNumericProp(""),
    /**
     * 指定唯一标识
     */
    selector: makeStringProp(""),
    /**
     * 展示时长(ms)，值为 0 时，notify 不会消失
     */
    duration: makeNumberProp(3e3),
    /**
     * 弹出位置，可选值为 top bottom
     */
    position: makeStringProp("top"),
    /**
     * 顶部安全高度（
     */
    safeHeight: Number,
    /**
     * 背景颜色
     */
    background: makeStringProp("")
  };
  let timer;
  let currentOptions = getDefaultOptions();
  const notifyDefaultOptionKey = "__NOTIFY_OPTION__";
  const useNotify = (selector = "") => {
    const notifyOption = vue.reactive(currentOptions);
    const showNotify = (option) => {
      const options = deepMerge$1(currentOptions, isString(option) ? { message: option } : option);
      Object.assign(notifyOption, options, { visible: true });
      if (notifyOption.duration && notifyOption.duration > 0) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => closeNotify(), options.duration);
      }
    };
    const closeNotify = () => {
      timer && clearTimeout(timer);
      notifyOption.visible = false;
    };
    vue.provide(getNotifyOptionKey(selector), notifyOption);
    return {
      showNotify,
      closeNotify
    };
  };
  const getNotifyOptionKey = (selector) => {
    return selector ? `${notifyDefaultOptionKey}${selector}` : notifyDefaultOptionKey;
  };
  function getDefaultOptions() {
    return {
      type: "danger",
      color: void 0,
      zIndex: 99,
      message: "",
      duration: 3e3,
      position: "top",
      safeHeight: void 0,
      background: void 0,
      onClick: void 0,
      onClosed: void 0,
      onOpened: void 0
    };
  }
  const __default__$j = {
    options: { virtualHost: true, addGlobalClass: true, styleIsolation: "shared" }
  };
  const _sfc_main$K = /* @__PURE__ */ vue.defineComponent({
    ...__default__$j,
    __name: "wd-notify",
    props: notifyProps,
    emits: ["update:visible", "click", "closed", "opened"],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emits = __emit;
      const state = vue.inject(getNotifyOptionKey(props2.selector), props2);
      const customStyle = vue.computed(() => {
        const { safeHeight, position } = state;
        let customStyle2 = "";
        switch (position) {
          case "top":
            customStyle2 = `top: calc(var(--window-top) + ${addUnit$1(safeHeight || 0)})`;
            break;
          case "bottom":
            customStyle2 = "bottom: var(--window-bottom)";
            break;
        }
        return customStyle2;
      });
      const onClick = (event) => {
        if (isFunction(state.onClick))
          return state.onClick(event);
        emits("click", event);
      };
      const onClosed = () => {
        if (isFunction(state.onClosed))
          return state.onClosed();
        emits("closed");
      };
      const onOpened = () => {
        if (isFunction(state.onOpened))
          return state.onOpened();
        emits("opened");
      };
      vue.watch(
        () => state.visible,
        (visible) => emits("update:visible", visible)
      );
      return (_ctx, _cache) => {
        const _component_wd_popup = resolveEasycom(vue.resolveDynamicComponent("wd-popup"), __easycom_1$5);
        return vue.openBlock(), vue.createBlock(_component_wd_popup, {
          modelValue: vue.unref(state).visible,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(state).visible = $event),
          "custom-style": customStyle.value,
          position: vue.unref(state).position,
          "z-index": vue.unref(state).zIndex,
          duration: 250,
          modal: false,
          onLeave: onClosed,
          onEnter: onOpened
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["wd-notify", [`wd-notify--${vue.unref(state).type}`]]),
                style: vue.normalizeStyle({ color: vue.unref(state).color, background: vue.unref(state).background }),
                onClick
              },
              [
                vue.renderSlot(_ctx.$slots, "default", {}, () => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(state).message),
                    1
                    /* TEXT */
                  )
                ], true)
              ],
              6
              /* CLASS, STYLE */
            )
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["modelValue", "custom-style", "position", "z-index"]);
      };
    }
  });
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-a92d61e2"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-notify/wd-notify.vue"]]);
  const ROW_KEY = Symbol("wd-row");
  const rowProps = {
    ...baseProps,
    /**
     * 列元素之间的间距（单位为px）
     */
    gutter: makeNumberProp(0)
  };
  const colProps = {
    ...baseProps,
    /**
     * 列元素宽度
     */
    span: makeNumberProp(24),
    /**
     * 列元素偏移距离
     */
    offset: makeNumberProp(0)
  };
  const __default__$i = {
    name: "wd-col",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$J = /* @__PURE__ */ vue.defineComponent({
    ...__default__$i,
    props: colProps,
    setup(__props) {
      const props2 = __props;
      const style = vue.ref("");
      const { parent: row } = useParent(ROW_KEY);
      const gutter = vue.computed(() => {
        if (row) {
          return row.props.gutter || 0;
        } else {
          return 0;
        }
      });
      vue.watch([() => props2.span, () => props2.offset], () => {
        check();
      });
      vue.watch(
        () => gutter.value,
        (newVal) => {
          setGutter(newVal || 0);
        },
        { deep: true, immediate: true }
      );
      function check() {
        const { span, offset } = props2;
        if (span < 0 || offset < 0) {
          formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-col/wd-col.vue:63", "[wot-design] warning(wd-col): attribute span/offset must be greater than or equal to 0");
        }
      }
      function setGutter(gutter2) {
        const padding = `${gutter2 / 2}px`;
        const customStyle = gutter2 > 0 ? `padding-left: ${padding}; padding-right: ${padding};background-clip: content-box;` : "";
        if (customStyle !== style.value) {
          style.value = customStyle;
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(["wd-col", _ctx.span && "wd-col__" + _ctx.span, _ctx.offset && "wd-col__offset-" + _ctx.offset, _ctx.customClass]),
            style: vue.normalizeStyle(style.value)
          },
          [
            vue.createCommentVNode(" 每一列 "),
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-2afa91f2"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-col/wd-col.vue"]]);
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function flattenVNodes(children) {
    const result = [];
    const traverse = (children2) => {
      if (Array.isArray(children2)) {
        children2.forEach((child) => {
          var _a;
          if (isVNode(child)) {
            result.push(child);
            if ((_a = child.component) == null ? void 0 : _a.subTree) {
              result.push(child.component.subTree);
              traverse(child.component.subTree.children);
            }
            if (child.children) {
              traverse(child.children);
            }
          }
        });
      }
    };
    traverse(children);
    return result;
  }
  const findVNodeIndex = (vnodes, vnode) => {
    const index2 = vnodes.indexOf(vnode);
    if (index2 === -1) {
      return vnodes.findIndex((item) => vnode.key !== void 0 && vnode.key !== null && item.type === vnode.type && item.key === vnode.key);
    }
    return index2;
  };
  function sortChildren(parent, publicChildren, internalChildren) {
    const vnodes = parent && parent.subTree && parent.subTree.children ? flattenVNodes(parent.subTree.children) : [];
    internalChildren.sort((a2, b2) => findVNodeIndex(vnodes, a2.vnode) - findVNodeIndex(vnodes, b2.vnode));
    const orderedPublicChildren = internalChildren.map((item) => item.proxy);
    publicChildren.sort((a2, b2) => {
      const indexA = orderedPublicChildren.indexOf(a2);
      const indexB = orderedPublicChildren.indexOf(b2);
      return indexA - indexB;
    });
  }
  function useChildren(key) {
    const publicChildren = vue.reactive([]);
    const internalChildren = vue.reactive([]);
    const parent = vue.getCurrentInstance();
    const linkChildren = (value) => {
      const link = (child) => {
        if (child.proxy) {
          internalChildren.push(child);
          publicChildren.push(child.proxy);
          sortChildren(parent, publicChildren, internalChildren);
        }
      };
      const unlink = (child) => {
        const index2 = internalChildren.indexOf(child);
        publicChildren.splice(index2, 1);
        internalChildren.splice(index2, 1);
      };
      vue.provide(
        key,
        Object.assign(
          {
            link,
            unlink,
            children: publicChildren,
            internalChildren
          },
          value
        )
      );
    };
    return {
      children: publicChildren,
      linkChildren
    };
  }
  const __default__$h = {
    name: "wd-row",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$I = /* @__PURE__ */ vue.defineComponent({
    ...__default__$h,
    props: rowProps,
    setup(__props) {
      const props2 = __props;
      const { linkChildren } = useChildren(ROW_KEY);
      linkChildren({ props: props2 });
      const style = vue.ref("");
      vue.watch(
        () => props2.gutter,
        () => {
          setGutter();
        },
        {
          deep: true,
          immediate: true
        }
      );
      function setGutter() {
        const { gutter } = props2;
        if (gutter < 0) {
          formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-row/wd-row.vue:43", "[wot design] warning(wd-row): attribute gutter must be greater than or equal to 0");
        }
        const margin = `${gutter / 2}px`;
        const gutterStyle = gutter ? `margin-left: -${margin}; margin-right: -${margin};` : "";
        style.value = `${gutterStyle}${props2.customStyle}`;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(`wd-row ${_ctx.customClass}`),
            style: vue.normalizeStyle(style.value)
          },
          [
            vue.createCommentVNode(" 每一行 "),
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_6$1 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-88acc730"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-row/wd-row.vue"]]);
  const _sfc_main$H = {
    __name: "index",
    setup(__props) {
      const { showNotify, closeNotify } = useNotify();
      let IfShowMap = vue.ref(true);
      let Green1 = vue.ref("background-color: #3da586;");
      let Green2 = vue.ref("");
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let HotTopic = vue.ref("");
      let AreaTopic = vue.ref("");
      vue.onMounted(() => {
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "学术" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataStudy", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "公益" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataVolunteer", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "运动" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataSport", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "游戏" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataGame", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "美食" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataFood", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "普通" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataNormal", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "求助" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataHelp", res.data.data);
            }
          }
        });
        uni.request({ url: "http://116.62.176.59:8080/xqlgq/event/search", method: "POST", header: { "token": userData.token }, data: { "recommendation": true, "pageSize": 10, "pageNum": 1 }, success: (res) => {
          HotTopic.value = res.data.data.list;
        } });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "recommendation": true, "pageSize": 10, "pageNum": 1, "locationX": userData.locationX, "locationY": userData.locationY, "range": 5 },
          success: (res) => {
            AreaTopic.value = res.data.data.list;
            formatAppLog("log", "at pages/index/index.vue:240", AreaTopic.value);
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/follow/event",
          method: "GET",
          header: { "token": userData.token },
          success: (res) => {
            if (res.data.code == 0) {
              formatAppLog("log", "at pages/index/index.vue:246", res.data.data);
              uni.setStorageSync("dataFriend", res.data.data);
            }
          },
          fail: (err) => {
            formatAppLog("log", "at pages/index/index.vue:251", err);
          }
        });
        uni.connectSocket({
          "url": "ws://116.62.176.59:8080/websocket/" + userData.id,
          fail: (err) => {
            formatAppLog("log", "at pages/index/index.vue:258", err);
          },
          success(res) {
            formatAppLog("log", "at pages/index/index.vue:261", res);
          }
        });
        uni.onSocketOpen(function(res) {
          formatAppLog("log", "at pages/index/index.vue:265", "WebSocket连接已打开！");
          formatAppLog("log", "at pages/index/index.vue:266", JSON.stringify(res));
          if (JSON.stringify(res) == "{}") {
            uni.setStorageSync("UserNotice", "");
          } else {
            uni.setStorageSync("UserNotice", res.NewNotice);
          }
        });
        uni.onSocketMessage(function(res) {
          let notice = JSON.parse(res.data);
          formatAppLog("log", "at pages/index/index.vue:277", notice);
          if (notice.newNotice != 0) {
            plus.push.clear();
            showNotify({ type: "success", message: notice.name + "等人给您发了" + notice.newNotice + "条新消息~" });
            uni.setTabBarBadge({
              //显示数字  
              index: 3,
              //tabbar下标
              text: notice.newNotice
            });
            uni.setStorageSync("UserNotice", notice.newNotice);
            let content = notice.name + "等人给您发了" + notice.newNotice + "条新消息~";
            let options = {
              "cover": false,
              "when": /* @__PURE__ */ new Date(),
              "title": "通知消息"
            };
            let body = {
              "id": "123",
              "key": "1231313"
            };
            let payload = JSON.stringify(body);
            plus.push.createMessage(content, payload, options);
            const innerAudioContext = uni.createInnerAudioContext();
            innerAudioContext.autoplay = true;
            innerAudioContext.src = "../../static/notice.wav";
            innerAudioContext.onPlay(() => {
              formatAppLog("log", "at pages/index/index.vue:309", "开始播放");
            });
            innerAudioContext.onError((res2) => {
              formatAppLog("log", "at pages/index/index.vue:312", res2.errMsg);
              formatAppLog("log", "at pages/index/index.vue:313", res2.errCode);
            });
          }
        });
        plus.push.addEventListener("receive", function(msg) {
          uni.navigateTo({
            url: "/pages/Notice/Notice"
          });
        }, false);
      });
      const changeToMap = () => {
        Green1.value = "background-color: #3da586;";
        Green2.value = "";
        IfShowMap.value = true;
      };
      const changeToRelationship = () => {
        Green2.value = "background-color: #3da586;";
        Green1.value = "";
        IfShowMap.value = false;
      };
      const GoIndexMap = () => {
        uni.navigateTo({ url: "/pages/indexMap/friendCricle/friendCricle", animationType: "fade-in" });
      };
      const GoStudy = () => {
        uni.navigateTo({ url: "/pages/indexMap/Study", animationType: "fade-in" });
      };
      const GoSport = () => {
        uni.navigateTo({ url: "/pages/indexMap/Sport", animationType: "fade-in" });
      };
      const GoVolunteer = () => {
        uni.navigateTo({ url: "/pages/indexMap/Volunteer", animationType: "fade-in" });
      };
      const GoFood = () => {
        uni.navigateTo({ url: "/pages/indexMap/Food", animationType: "fade-in" });
      };
      const GoGame = () => {
        uni.navigateTo({ url: "/pages/indexMap/Game", animationType: "fade-in" });
      };
      const scan = () => {
        uni.scanCode({ success: (res) => {
          formatAppLog("log", "at pages/index/index.vue:379", res);
          uni.navigateTo({ url: res.result });
        } });
      };
      const GoEvent = (id) => {
        uni.navigateTo({ url: "/pages/titleContent/titleContent?id=" + id });
      };
      const GoSearch = () => {
        uni.navigateTo({ url: "/pages/search/search" });
      };
      const Gorelationship = () => {
        uni.navigateTo({
          url: "/pages/indexMap/relationship/relationship"
        });
      };
      return (_ctx, _cache) => {
        const _component_wd_notify = resolveEasycom(vue.resolveDynamicComponent("wd-notify"), __easycom_0$3);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_wd_notify, null, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "column" } }, [
                  vue.createElementVNode("view", { style: { "height": "80rpx", "width": "100%" } }),
                  vue.createElementVNode("view", { style: { "font-size": "26rpx", "margin-bottom": "10rpx", "letter-spacing": "1rpx", "font-weight": "bold" } }, "您有新的消息")
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("scroll-view", {
              class: "content-background",
              "scroll-y": "true"
            }, [
              vue.createElementVNode("view", { class: "content-background 全屏" }, [
                vue.createElementVNode("view", { style: { "height": "85rpx" } }),
                vue.createVNode(_component_wd_row, { class: "wdClass 首页头布局" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字 横向布局",
                      span: 16
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("view", {
                          class: "首页文字标题样式",
                          onClick: changeToMap
                        }, [
                          vue.createTextVNode(" 朋友 "),
                          vue.createElementVNode(
                            "view",
                            {
                              style: vue.normalizeStyle([{ "width": "40rpx", "height": "16rpx", "border-radius": "7rpx", "opacity": "0.7" }, vue.unref(Green1)])
                            },
                            null,
                            4
                            /* STYLE */
                          )
                        ]),
                        vue.createElementVNode("view", {
                          class: "首页文字标题样式",
                          onClick: changeToRelationship
                        }, [
                          vue.createTextVNode(" 图谱 "),
                          vue.createElementVNode(
                            "view",
                            {
                              style: vue.normalizeStyle([{ "width": "40rpx", "height": "16rpx", "border-radius": "7rpx" }, vue.unref(Green2)])
                            },
                            null,
                            4
                            /* STYLE */
                          )
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字 右侧布局",
                      span: 8
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_wd_icon, {
                          name: "scan",
                          size: "35rpx",
                          color: "#5d6264",
                          style: { "padding-left": "20rpx" },
                          onClick: scan
                        }),
                        vue.createVNode(_component_wd_icon, {
                          name: "search",
                          size: "35rpx",
                          color: "#5d6264",
                          onClick: GoSearch
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createCommentVNode(" 第一页 "),
                vue.withDirectives(vue.createElementVNode(
                  "view",
                  null,
                  [
                    vue.createElementVNode("view", { class: "主控件布局" }, [
                      vue.createElementVNode("view", { class: "主控件盒子" }, [
                        vue.createElementVNode("view", { class: "波纹1" }),
                        vue.createElementVNode("view", { class: "波纹2" }),
                        vue.createElementVNode("view", { class: "波纹3" }),
                        vue.createElementVNode("view", { class: "控件盒子" }, [
                          vue.createElementVNode("view", { class: "基座纯白背景" }),
                          vue.createElementVNode("image", {
                            class: "控件背景",
                            src: "/static/buttomSrc/earth2.png",
                            onClick: GoIndexMap
                          }),
                          vue.createElementVNode("view", {
                            class: "进入地图文字",
                            onClick: GoIndexMap
                          }, "friends")
                        ])
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, vue.unref(IfShowMap)]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "view",
                  null,
                  [
                    vue.createElementVNode("view", { class: "主地图布局" }, [
                      vue.createElementVNode("view", { class: "主地图盒子" }, [
                        vue.createElementVNode("view", { class: "圈圈" }),
                        vue.createElementVNode("view", { class: "圈圈" }),
                        vue.createElementVNode("view", { class: "圈圈" }),
                        vue.createElementVNode("view", { class: "地图盒子" }, [
                          vue.createElementVNode("image", {
                            class: "地图背景",
                            src: "/static/buttomSrc/guanxitupu.png",
                            onClick: Gorelationship
                          })
                        ])
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, !vue.unref(IfShowMap)]
                ]),
                vue.createElementVNode("view", { class: "横向布局 分割线布局" }, " 专栏 "),
                vue.createElementVNode("scroll-view", {
                  "scroll-x": "true",
                  class: "横向滚动"
                }, [
                  vue.createElementVNode("view", { class: "横向布局" }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", {
                        class: "专题盒子布局",
                        onClick: GoStudy
                      }, [
                        vue.createElementVNode("image", {
                          src: "/static/buttomSrc/xueshubaogao.png",
                          style: { "width": "130rpx", "height": "130rpx" }
                        }),
                        vue.createElementVNode("view", { style: { "margin-top": "30rpx", "font-size": "35rpx", "color": "#5a5a5a", "font-weight": "600", "letter-spacing": "3rpx" } }, "学术报告")
                      ])
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", {
                        class: "专题盒子布局",
                        onClick: GoSport
                      }, [
                        vue.createElementVNode("image", {
                          src: "/static/buttomSrc/yundong.png",
                          style: { "width": "130rpx", "height": "130rpx" }
                        }),
                        vue.createElementVNode("view", { style: { "margin-top": "30rpx", "font-size": "35rpx", "color": "#5a5a5a", "font-weight": "600", "letter-spacing": "3rpx" } }, "运动约人")
                      ])
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", {
                        class: "专题盒子布局",
                        onClick: GoVolunteer
                      }, [
                        vue.createElementVNode("image", {
                          src: "/static/buttomSrc/gongyi.png",
                          style: { "width": "130rpx", "height": "130rpx" }
                        }),
                        vue.createElementVNode("view", { style: { "margin-top": "30rpx", "font-size": "35rpx", "color": "#5a5a5a", "font-weight": "600", "letter-spacing": "3rpx" } }, "公益活动")
                      ])
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", {
                        class: "专题盒子布局",
                        onClick: GoFood
                      }, [
                        vue.createElementVNode("image", {
                          src: "/static/buttomSrc/meishi2.png",
                          style: { "width": "130rpx", "height": "130rpx" }
                        }),
                        vue.createElementVNode("view", { style: { "margin-top": "30rpx", "font-size": "35rpx", "color": "#5a5a5a", "font-weight": "600", "letter-spacing": "3rpx" } }, "美食分享")
                      ])
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", {
                        class: "专题盒子布局",
                        onClick: GoGame
                      }, [
                        vue.createElementVNode("image", {
                          src: "/static/buttomSrc/youxi.png",
                          style: { "width": "130rpx", "height": "130rpx" }
                        }),
                        vue.createElementVNode("view", { style: { "margin-top": "30rpx", "font-size": "35rpx", "color": "#5a5a5a", "font-weight": "600", "letter-spacing": "3rpx" } }, "游戏组队")
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { style: { "background-color": "#ffffff", "margin": "15rpx", "border-radius": "20rpx", "padding-bottom": "30rpx", "padding-top": "10rpx", "margin-top": "30rpx" } }, [
                  vue.createElementVNode("view", {
                    class: "分割线布局",
                    style: { "margin-top": "20rpx", "margin-bottom": "20rpx" }
                  }, [
                    vue.createVNode(_component_wd_row, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_wd_col, { span: 12 }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("热门榜")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        vue.createVNode(_component_wd_col, {
                          class: "右侧布局",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_wd_icon, {
                              name: "arrow-right",
                              size: "30rpx",
                              style: { "margin-right": "30rpx", "margin-top": "7rpx" }
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  vue.createElementVNode("view", { class: "热门板块" }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(vue.unref(HotTopic), (topic) => {
                        return vue.openBlock(), vue.createElementBlock("view", null, [
                          vue.createElementVNode("view", {
                            class: "热门布局",
                            onClick: ($event) => GoEvent(topic.gid)
                          }, [
                            vue.createVNode(
                              _component_wd_row,
                              {
                                class: "wdClass",
                                style: { "padding-left": "10rpx" }
                              },
                              {
                                default: vue.withCtx(() => [
                                  vue.createVNode(
                                    _component_wd_col,
                                    {
                                      class: "灰色字 横向布局",
                                      span: 16,
                                      style: { "font-size": "28rpx", "padding-bottom": "0px" }
                                    },
                                    {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode(
                                          vue.toDisplayString(topic.title.length > 13 ? topic.title.substring(0, 13) + "..." : topic.title),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  ),
                                  vue.createVNode(
                                    _component_wd_col,
                                    {
                                      class: "灰色字 右侧布局",
                                      span: 8
                                    },
                                    {
                                      default: vue.withCtx(() => [
                                        vue.createElementVNode("image", {
                                          src: "/static/buttomSrc/hot.png",
                                          style: { "height": "30rpx", "width": "30rpx" }
                                        }),
                                        vue.createElementVNode(
                                          "view",
                                          { style: { "font-family": "'Courier New', Courier, monospace", "font-size": "30rpx", "margin-right": "20rpx" } },
                                          vue.toDisplayString(topic.recommendation),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            )
                          ], 8, ["onClick"])
                        ]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ])
                ]),
                vue.createElementVNode("view", { style: { "background-color": "#ffffff", "margin": "15rpx", "border-radius": "20rpx", "padding-bottom": "30rpx", "padding-top": "10rpx", "margin-top": "30rpx" } }, [
                  vue.createElementVNode("view", {
                    class: "分割线布局",
                    style: { "margin-top": "20rpx", "margin-bottom": "20rpx" }
                  }, [
                    vue.createVNode(_component_wd_row, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_wd_col, { span: 12 }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("我的附近")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        vue.createVNode(_component_wd_col, {
                          class: "右侧布局",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_wd_icon, {
                              name: "arrow-right",
                              size: "30rpx",
                              style: { "margin-right": "30rpx", "margin-top": "7rpx" }
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  vue.createElementVNode("view", { class: "热门板块" }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(vue.unref(AreaTopic), (topic) => {
                        return vue.openBlock(), vue.createElementBlock("view", null, [
                          vue.createElementVNode("view", {
                            class: "热门布局",
                            onClick: ($event) => GoEvent(topic.gid)
                          }, [
                            vue.createVNode(
                              _component_wd_row,
                              {
                                class: "wdClass",
                                style: { "padding-left": "10rpx" }
                              },
                              {
                                default: vue.withCtx(() => [
                                  vue.createVNode(
                                    _component_wd_col,
                                    {
                                      class: "灰色字 横向布局",
                                      span: 16,
                                      style: { "font-size": "28rpx", "padding-bottom": "0px" }
                                    },
                                    {
                                      default: vue.withCtx(() => [
                                        vue.createTextVNode(
                                          vue.toDisplayString(topic.title.length > 13 ? topic.title.substring(0, 13) + "..." : topic.title),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  ),
                                  vue.createVNode(
                                    _component_wd_col,
                                    {
                                      class: "灰色字 右侧布局",
                                      span: 8
                                    },
                                    {
                                      default: vue.withCtx(() => [
                                        vue.createElementVNode("image", {
                                          src: "/static/buttomSrc/see.png",
                                          style: { "height": "30rpx", "width": "30rpx" }
                                        }),
                                        vue.createElementVNode(
                                          "view",
                                          { style: { "font-family": "'Courier New', Courier, monospace", "font-size": "30rpx", "margin-right": "20rpx" } },
                                          vue.toDisplayString(topic.view),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            )
                          ], 8, ["onClick"])
                        ]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ])
                ]),
                vue.createCommentVNode(" 第一页结束	 "),
                vue.createElementVNode("view", { style: { "height": "100rpx" } })
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__file", "D:/前端学习笔记/uniapp/City/pages/index/index.vue"]]);
  const _sfc_main$G = {
    __name: "myFriends",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      var wv;
      let TypeArr = vue.ref(["推荐"]);
      let searchContent = vue.ref("附近音乐节");
      const { ctx } = vue.getCurrentInstance();
      const webjs = (js) => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          wv = currentWebview.children()[0];
          wv.evalJS("dataMap.property =" + js);
        }, 2e3);
      };
      const clearmap = () => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          wv = currentWebview.children()[0];
          wv.reload();
        }, 0);
      };
      vue.onMounted(() => {
        let a1 = uni.getStorageSync("dataNormal").list.slice(0, 15);
        let a2 = uni.getStorageSync("dataHelp").list.slice(0, 8);
        let a3 = uni.getStorageSync("dataStudy").list.slice(0, 4);
        let a4 = uni.getStorageSync("dataSport").list.slice(0, 4);
        let a5 = uni.getStorageSync("dataVolunteer").list.slice(0, 4);
        let a6 = uni.getStorageSync("dataFood").list.slice(0, 4);
        let a7 = uni.getStorageSync("dataGame").list.slice(0, 4);
        let compex = [...a1, ...a2, ...a3, ...a4, ...a5, ...a6, ...a7];
        MHD_Cluster(compex);
        formatAppLog("log", "at pages/myFriends/myFriends.vue:73", compex);
        let compexs = JSON.stringify(compex);
        webjs(compexs);
      });
      const MHD_Cluster = (rowData) => {
        let count = 0;
        let MHD_X = [];
        let MHD_Y = [];
        rowData.forEach((item) => {
          MHD_X.push(item.locationX);
          MHD_Y.push(item.locationY);
        });
        for (let i2 = 0; i2 < MHD_X.length - 1; i2++) {
          for (let j = i2 + 1; j < MHD_X.length; j++) {
            if (Math.abs(MHD_X[i2] + MHD_Y[i2] - MHD_X[j] - MHD_Y[j]) < 1e-4) {
              count++;
              const angle = Math.random() * Math.PI * 2;
              const offset = 5e-5 + Math.random() * 1e-5;
              const offsetX = Math.cos(angle) * offset;
              const offsetY = Math.sin(angle) * offset;
              MHD_X[i2] -= offsetX;
              MHD_Y[i2] -= offsetY;
              MHD_X[j] += offsetX;
              MHD_Y[j] += offsetY;
            }
          }
        }
        formatAppLog("log", "at pages/myFriends/myFriends.vue:143", "---------------------------------------------------------------------");
        rowData.forEach((item, index2) => {
          item.locationX = MHD_X[index2];
          item.locationY = MHD_Y[index2];
        });
        if (count == 0) {
          return rowData;
        } else {
          MHD_Cluster(rowData);
        }
      };
      uni.$on("update", function(data) {
        TypeArr.value = data.type;
        searchContent.value = data.content;
        wv.evalJS("clearmap()");
        let list = JSON.parse(uni.getStorageSync("SearchList"));
        clearmap();
        formatAppLog("log", "at pages/myFriends/myFriends.vue:176", list);
        MHD_Cluster(list);
        let lists = JSON.stringify(list);
        webjs(lists);
      });
      const GetInformation = () => {
        clearmap();
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "学术" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataStudy", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "公益" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataVolunteer", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "运动" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataSport", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "娱乐组队" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataGame", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "美食" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataFood", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "普通" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataNormal", res.data.data);
            }
          }
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: { "token": userData.token },
          data: { "type": "求助" },
          success: (res) => {
            if (res.data.code == 0) {
              uni.setStorageSync("dataHelp", res.data.data);
            }
          }
        });
        let a1 = uni.getStorageSync("dataNormal").list.slice(0, 15);
        let a2 = uni.getStorageSync("dataHelp").list.slice(0, 5);
        let a3 = uni.getStorageSync("dataStudy").list.slice(0, 5);
        let a4 = uni.getStorageSync("dataSport").list.slice(0, 5);
        let a5 = uni.getStorageSync("dataVolunteer").list.slice(0, 5);
        let a6 = uni.getStorageSync("dataFood").list.slice(0, 5);
        let a7 = uni.getStorageSync("dataGame").list.slice(0, 5);
        let compex = [...a1, ...a2, ...a3, ...a4, ...a5, ...a6, ...a7];
        MHD_Cluster(compex);
        let compexs = JSON.stringify(compex);
        webjs(compexs);
      };
      const clickSearch = () => {
        uni.navigateTo({
          url: "/pages/search/search"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-background index-background" }, [
          vue.createCommentVNode(' <index-searcher class = "TopMargin"></index-searcher> '),
          vue.createElementVNode("view", { class: "TopMargin" }, [
            vue.createElementVNode("cover-view", { class: "searchBox" }, [
              vue.createElementVNode("cover-view", { class: "SearchContentBox" }, [
                vue.createElementVNode("cover-view", { class: "searchTab" }, [
                  vue.createElementVNode(
                    "cover-view",
                    {
                      class: "searchTypeName",
                      onClick: clickSearch
                    },
                    vue.toDisplayString(vue.unref(TypeArr)[0]),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("cover-image", {
                    src: "/static/buttomSrc/BottomMore.png",
                    class: "bottomMore"
                  })
                ]),
                vue.createElementVNode("cover-view", { class: "boundaryLine" }),
                vue.createElementVNode(
                  "cover-view",
                  {
                    class: "SearchInputBox",
                    onClick: clickSearch
                  },
                  vue.toDisplayString(vue.unref(searchContent).length > 6 ? vue.unref(searchContent).substring(0, 6) + "..." : vue.unref(searchContent)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("cover-view", { class: "rightSet" }, [
                  vue.createElementVNode("cover-image", {
                    src: "/static/buttomSrc/RightSet.png",
                    class: "rightSetImg",
                    mode: "scaleToFill"
                  })
                ])
              ])
            ])
          ]),
          vue.createElementVNode("cover-view", { class: "BottomMargin" }, [
            vue.createElementVNode("cover-view", { class: "toolback" }, [
              vue.createElementVNode("cover-image", {
                class: "toolbackimg",
                src: "/static/buttomSrc/refresh.png",
                onClick: GetInformation
              })
            ])
          ]),
          vue.createElementVNode("web-view", { src: "../../hybrid/html/index/index(test).html" })
        ]);
      };
    }
  };
  const PagesMyFriendsMyFriends = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__file", "D:/前端学习笔记/uniapp/City/pages/myFriends/myFriends.vue"]]);
  const _sfc_main$F = {
    __name: "chatToFriends",
    setup(__props) {
      useNotify();
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let friendList = vue.ref("");
      let username = vue.ref("");
      username.value = userData.name;
      let userimage = vue.ref("../../static/buttomSrc/zkq.jpg");
      userimage.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userImg;
      uni.request({
        url: "http://116.62.176.59:8080/xqlgq/user/follow/idol",
        header: {
          "token": userData.token
        },
        success: (res) => {
          friendList.value = res.data.data;
          formatAppLog("log", "at pages/chatToFriends/chatToFriends.vue:85", friendList.value);
        },
        fail: (err) => {
          formatAppLog("log", "at pages/chatToFriends/chatToFriends.vue:88", err);
        }
      });
      onPullDownRefresh(() => {
        formatAppLog("log", "at pages/chatToFriends/chatToFriends.vue:93", "1");
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/follow/idol",
          header: {
            "token": userData.token
          },
          success: (res) => {
            friendList.value = res.data.data;
            formatAppLog("log", "at pages/chatToFriends/chatToFriends.vue:101", friendList.value);
          },
          fail: (err) => {
            formatAppLog("log", "at pages/chatToFriends/chatToFriends.vue:104", err);
          }
        });
        uni.stopPullDownRefresh();
      });
      const GoUserShow = (id) => {
        uni.navigateTo({
          url: "/pages/UserShow/UserShow?id=" + id,
          animationType: "fade-in"
        });
      };
      const GoMyUserShow = () => {
        uni.navigateTo({
          url: "/pages/UserShow/UserShow?id=" + userData.id,
          animationType: "fade-in"
        });
      };
      const GoSearchFriends = () => {
        uni.navigateTo({
          url: "/pages/searchFriends/searchFriends",
          animationType: "slide-in-top"
        });
      };
      return (_ctx, _cache) => {
        const _component_wd_notify = resolveEasycom(vue.resolveDynamicComponent("wd-notify"), __easycom_0$3);
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_wd_notify, null, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "column" } }, [
                  vue.createElementVNode("view", { style: { "height": "80rpx", "width": "100%" } }),
                  vue.createElementVNode("view", { style: { "font-size": "26rpx", "margin-bottom": "10rpx", "letter-spacing": "1rpx", "font-weight": "bold" } }, "您有新的消息")
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("view", { class: "content-background index-background" }, [
              vue.createElementVNode("view", { class: "个人信息布局" }, [
                vue.createVNode(_component_wd_row, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_col, { span: "16" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_wd_icon, {
                          class: "右上角图标",
                          name: "bulletpoint",
                          size: "40px",
                          color: "#787878"
                        }),
                        vue.createElementVNode(
                          "view",
                          { class: "用户名" },
                          vue.toDisplayString(vue.unref(username)),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_wd_col, {
                      span: "8",
                      class: "右间距"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("image", {
                          class: "用户头像",
                          src: vue.unref(userimage),
                          mode: "aspectFill"
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              vue.createVNode(_component_wd_row, { class: "工具栏布局" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_col, {
                    span: 12,
                    class: "工具卡片布局"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", {
                        class: "工具卡片 鲜绿",
                        onClick: GoSearchFriends
                      }, [
                        vue.createElementVNode("view", { class: "工具图片布局" }, [
                          vue.createElementVNode("image", {
                            src: "/static/buttomSrc/SearchFriend.png",
                            class: "工具小图片"
                          }),
                          vue.createElementVNode("image", {
                            src: "/static/buttomSrc/SearchFriend.png",
                            class: "工具大图片"
                          })
                        ]),
                        vue.createElementVNode("view", { class: "工具文字布局" }, [
                          vue.createElementVNode("text", { class: "工具文字" }, "查找朋友")
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_col, {
                    span: 12,
                    class: "工具卡片布局"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", {
                        class: "工具卡片 浅紫",
                        onClick: GoMyUserShow
                      }, [
                        vue.createElementVNode("view", { class: "工具图片布局" }, [
                          vue.createElementVNode("image", {
                            src: "/static/buttomSrc/MyCard.png",
                            class: "工具小图片"
                          }),
                          vue.createElementVNode("image", {
                            src: "/static/buttomSrc/MyCard.png",
                            class: "工具大图片"
                          })
                        ]),
                        vue.createElementVNode("view", { class: "工具文字布局" }, [
                          vue.createElementVNode("text", { class: "工具文字" }, "我的名片")
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("view", { class: "分割栏布局" }, "我的关注"),
              vue.createElementVNode("view", { class: "列表大背景" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(friendList), (friend) => {
                    return vue.openBlock(), vue.createElementBlock("view", null, [
                      vue.createVNode(_component_wd_row, {
                        class: "列表背景",
                        onClick: ($event) => GoUserShow(friend.id)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(
                            _component_wd_col,
                            { span: "20" },
                            {
                              default: vue.withCtx(() => [
                                vue.createElementVNode("view", { class: "横向布局" }, [
                                  vue.createElementVNode("image", {
                                    src: "http://116.62.176.59:8080/xqlgq/files/" + friend.userImage,
                                    mode: "aspectFill",
                                    class: "好友头像"
                                  }, null, 8, ["src"]),
                                  vue.createElementVNode(
                                    "view",
                                    { class: "朋友id" },
                                    " id : " + vue.toDisplayString(friend.id),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createElementVNode(
                                    "view",
                                    { class: "朋友姓名" },
                                    vue.toDisplayString(friend.username),
                                    1
                                    /* TEXT */
                                  )
                                ])
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          ),
                          vue.createVNode(_component_wd_col, { span: "4" }, {
                            default: vue.withCtx(() => [
                              vue.createElementVNode("view", { class: "右侧布局 进入图标布局" }, [
                                vue.createVNode(_component_wd_icon, {
                                  class: "右侧图标",
                                  name: "page-last",
                                  size: "28rpx",
                                  color: "#c1c1c1"
                                })
                              ])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick"])
                    ]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "下间距" })
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesChatToFriendsChatToFriends = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__file", "D:/前端学习笔记/uniapp/City/pages/chatToFriends/chatToFriends.vue"]]);
  const _sfc_main$E = {
    __name: "Myself",
    setup(__props) {
      useNotify();
      let username = vue.ref("");
      let userId = vue.ref("");
      let userImage = vue.ref("");
      let token = vue.ref("");
      let backImg = vue.ref("");
      let userBack = vue.ref("");
      let IfShowNotice = vue.ref(false);
      let UserNotice = vue.ref("");
      vue.onMounted(() => {
        let userData = JSON.parse(uni.getStorageSync("UserInformation"));
        UserNotice.value = uni.getStorageSync("UserNotice");
        if (UserNotice.value != 0) {
          IfShowNotice.value = true;
        }
        formatAppLog("log", "at pages/Myself/Myself.vue:89", userData);
        username.value = userData.name;
        userId.value = userData.id;
        userBack.value = userData.userBack;
        userImage.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userImg;
        backImg.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userBack;
        token.value = userData.token;
      });
      onPullDownRefresh(() => {
        UserNotice.value = uni.getStorageSync("UserNotice");
        formatAppLog("log", "at pages/Myself/Myself.vue:100", UserNotice.value);
        if (UserNotice.value != "" && UserNotice.value != "0") {
          IfShowNotice.value = true;
        } else {
          IfShowNotice.value = false;
          uni.removeTabBarBadge({
            //隐藏数字标
            index: 3
            //tabbar下标
          });
        }
        let userData = JSON.parse(uni.getStorageSync("UserInformation"));
        formatAppLog("log", "at pages/Myself/Myself.vue:108", userData);
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/info/" + userId.value,
          method: "GET",
          header: {
            "token": token.value
          },
          success: (res) => {
            formatAppLog("log", "at pages/Myself/Myself.vue:117", res.data.data);
            let rt = res.data.data;
            if (res.data.code == "0") {
              userData.name = rt.username;
              userData.phone = rt.phoneNumber;
              userData.email = rt.email;
              userData.sex = rt.userSex;
              userData.locationx = rt.locationX;
              userData.locationy = rt.locationY;
              userData.userImg = rt.userImage;
              userData.userBack = rt.backImg;
              userData.city = rt.city;
              let STRING_USERDATA = JSON.stringify(userData);
              formatAppLog("log", "at pages/Myself/Myself.vue:131", STRING_USERDATA);
              uni.setStorageSync("UserInformation", STRING_USERDATA);
              username.value = userData.name;
              userImage.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userImg;
              backImg.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userBack;
            }
          },
          fail: (err) => {
            formatAppLog("log", "at pages/Myself/Myself.vue:140", err);
          }
        });
        uni.stopPullDownRefresh();
      });
      const DeleteUserInformation = () => {
        uni.showModal({
          title: "提示",
          content: "确认要退出登录吗？",
          cancelText: "取消",
          confirmText: "退出",
          confirmColor: "red",
          cancelColor: "#000000",
          success: function(res) {
            if (res.confirm) {
              uni.setStorageSync("UserInformation", "");
              uni.setStorageSync("UserLoginStatus", "false");
              plus.runtime.quit();
            }
          }
        });
      };
      const GoPrivacy = () => {
        uni.navigateTo({ url: "/pages/privacy/privacy" });
      };
      const GoChangeInformation = () => {
        uni.navigateTo({ url: "/pages/ChangeInformation/ChangeInformation" });
      };
      const GoChangeCity = () => {
        uni.navigateTo({ url: "/pages/ChangeInformation/ChangeCity/ChangeCity" });
      };
      const GoChangeUserImg = () => {
        uni.navigateTo({ url: "/pages/ChangeInformation/ChangeUserImg" });
      };
      const GoChangeBackImg = () => {
        uni.navigateTo({ url: "/pages/ChangeInformation/ChangeBackImg/ChangeBackImg" });
      };
      const GoUserShow = (id) => {
        uni.navigateTo({ url: "/pages/UserShow/UserShow?id=" + id, animationType: "fade-in" });
      };
      const GoManyInformation = () => {
        uni.navigateTo({ url: "/pages/Notice/Notice" });
      };
      const Preview = (current, list) => {
        if (!(list instanceof Array)) {
          list = stringToArray(list);
        }
        current = "http://116.62.176.59:8080/xqlgq/files/" + current;
        list = list.map((item) => `http://116.62.176.59:8080/xqlgq/files/${item}`);
        uni.previewImage({ "current": current, "urls": list, fail: (err) => {
          tip(err);
        } });
      };
      function stringToArray(str) {
        try {
          return JSON.parse(str);
        } catch (error2) {
          return [];
        }
      }
      const scan = () => {
        uni.scanCode({ success: (res) => {
          uni.navigateTo({ url: res.result });
        } });
      };
      return (_ctx, _cache) => {
        const _component_wd_notify = resolveEasycom(vue.resolveDynamicComponent("wd-notify"), __easycom_0$3);
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        const _component_wd_button = resolveEasycom(vue.resolveDynamicComponent("wd-button"), __easycom_12);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_wd_notify, null, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "column" } }, [
                  vue.createElementVNode("view", { style: { "height": "80rpx", "width": "100%" } }),
                  vue.createElementVNode("view", { style: { "font-size": "26rpx", "margin-bottom": "10rpx", "letter-spacing": "1rpx", "font-weight": "bold" } }, "您有新的消息")
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("view", { class: "content-background index-background" }, [
              vue.createElementVNode("view", { class: "主页背景" }, [
                vue.createElementVNode("view", { class: "顶部背景区" }, [
                  vue.createElementVNode("image", {
                    class: "顶部背景",
                    src: vue.unref(backImg),
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "顶部控件盒",
                      onLongpress: _cache[0] || (_cache[0] = ($event) => Preview(vue.unref(userBack), "[" + vue.unref(userBack) + "]"))
                    },
                    [
                      vue.createVNode(_component_wd_icon, {
                        class: "顶部控件",
                        name: "scan",
                        color: "#ffffff",
                        size: "50rpx",
                        onClick: scan
                      }),
                      vue.createVNode(_component_wd_icon, {
                        class: "顶部控件",
                        name: "edit",
                        color: "#ffffff",
                        size: "50rpx",
                        onClick: GoChangeBackImg
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )
                ]),
                vue.createElementVNode("view", { class: "空白区" }),
                vue.createCommentVNode(" 分割线 ----------------------------------------------------- "),
                vue.createElementVNode("view", { class: "信息区" }, [
                  vue.createElementVNode("view", { class: "签名区背景" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "小字体" },
                      "id:" + vue.toDisplayString(vue.unref(userId)),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "签名区背景" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(vue.unref(username)),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createVNode(_component_wd_row, {
                    class: "wdClass",
                    onClick: _cache[1] || (_cache[1] = ($event) => GoUserShow(vue.unref(userId)))
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_wd_col, {
                        class: "左侧字",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("我的收藏")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createVNode(_component_wd_col, {
                        class: "右侧布局",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_wd_icon, {
                            name: "arrow-right",
                            color: "#707070"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_row, {
                    class: "wdClass",
                    onClick: GoChangeInformation
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_wd_col, {
                        class: "左侧字",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("个人信息")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createVNode(_component_wd_col, {
                        class: "右侧布局",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_wd_icon, {
                            name: "arrow-right",
                            color: "#707070"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_row, {
                    class: "wdClass",
                    onClick: GoChangeCity
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_wd_col, {
                        class: "左侧字",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("我的城市")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createVNode(_component_wd_col, {
                        class: "右侧布局",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_wd_icon, {
                            name: "arrow-right",
                            color: "#707070"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_row, {
                    class: "wdClass",
                    onClick: GoManyInformation
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_wd_col, {
                        class: "左侧字 横向布局",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" 消息通知 "),
                          vue.withDirectives(vue.createElementVNode(
                            "view",
                            { style: { "border-radius": "50%", "background-color": "#e74c4c", "width": "10rpx", "height": "10rpx", "margin-left": "5rpx" } },
                            null,
                            512
                            /* NEED_PATCH */
                          ), [
                            [vue.vShow, vue.unref(IfShowNotice)]
                          ])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createVNode(_component_wd_col, {
                        class: "右侧布局",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_wd_icon, {
                            name: "arrow-right",
                            color: "#707070"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_row, {
                    class: "wdClass",
                    onClick: GoPrivacy
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_wd_col, {
                        class: "左侧字",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("隐私设置")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createVNode(_component_wd_col, {
                        class: "右侧布局",
                        span: 12
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_wd_icon, {
                            name: "arrow-right",
                            color: "#707070"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_button, {
                    type: "error",
                    block: "",
                    class: "退出登录",
                    size: "large",
                    onClick: DeleteUserInformation
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("退出登录")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                vue.createCommentVNode(" 分割线 ----------------------------------------------------- "),
                vue.createElementVNode("view", { class: "头像横区" }, [
                  vue.createElementVNode("view", { class: "头像区" }, [
                    vue.createElementVNode("image", {
                      src: vue.unref(userImage),
                      class: "头像",
                      mode: "aspectFill",
                      onLongpress: GoChangeUserImg
                    }, null, 40, ["src"])
                  ])
                ])
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyselfMyself = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__file", "D:/前端学习笔记/uniapp/City/pages/Myself/Myself.vue"]]);
  const props = {
    props: {
      //二维码内容
      value: {
        type: [String, Number]
      },
      //选项
      options: {
        type: Object,
        default: () => {
          return {};
        }
      },
      //二维码大小
      size: {
        type: [String, Number],
        default: 200
      },
      //导出的文件类型
      fileType: {
        type: String,
        default: "png"
      },
      //是否初始化组件后就开始生成
      start: {
        type: Boolean,
        default: true
      },
      //是否数据发生改变自动重绘
      auto: {
        type: Boolean,
        default: true
      },
      //隐藏组件
      hide: {
        type: Boolean,
        default: false
      },
      /**
       * canvas 类型，微信小程序默认使用2d，非2d微信官方已放弃维护，问题比较多
       * 注意：微信小程序type2d手机上正常，PC上微信内打开小程序toDataURL报错，看后期微信官方团队会不会做兼容，不兼容的话只能在自行判断在PC使用非2d，或者直接提示用户请在手机上操作，微信团队的海报中心小程序就是这么做的
       */
      type: {
        type: String,
        default: () => {
          return "normal";
        }
      },
      //队列绘制，主要针对NVue端
      queue: {
        type: Boolean,
        default: false
      },
      //是否队列加载图片，可减少canvas发起的网络资源请求，节省服务器资源
      isQueueLoadImage: {
        type: Boolean,
        default: false
      },
      //loading态
      loading: {
        type: Boolean,
        default: void 0
      },
      //H5保存即自动下载（在支持的环境下），默认false为仅弹层提示用户需要长按图片保存，不会自动下载
      h5SaveIsDownload: {
        type: Boolean,
        default: false
      },
      //H5下载名称
      h5DownloadName: {
        type: String,
        default: "uvQRCode"
      },
      // H5保存二维码时候是否显示提示
      h5SaveTip: {
        type: Boolean,
        default: true
      }
    }
  };
  const mpMixin = {};
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i2 in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e2) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o2) {
    return o2 && Object.prototype.toString.call(o2) === "[object RegExp]";
  }
  const test = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    amount,
    array,
    carNo,
    chinese,
    code,
    contains,
    date,
    dateISO,
    digits,
    email,
    empty,
    enOrNum,
    func,
    idCard,
    image,
    jsonString,
    landline,
    letter,
    mobile,
    number,
    object,
    promise,
    range: range$1,
    rangeLength,
    regExp,
    string,
    url,
    video
  }, Symbol.toStringTag, { value: "Module" }));
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uv-ui-tools/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid2 = [];
    radix = radix || chars.length;
    if (len) {
      for (let i2 = 0; i2 < len; i2++)
        uuid2[i2] = chars[0 | Math.random() * radix];
    } else {
      let r2;
      uuid2[8] = uuid2[13] = uuid2[18] = uuid2[23] = "-";
      uuid2[14] = "4";
      for (let i2 = 0; i2 < 36; i2++) {
        if (!uuid2[i2]) {
          r2 = 0 | Math.random() * 16;
          uuid2[i2] = chars[i2 == 19 ? r2 & 3 | 8 : r2];
        }
      }
    }
    if (firstU) {
      uuid2.shift();
      return `u${uuid2.join("")}`;
    }
    return uuid2.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i2 = 0; i2 < styleArray.length; i2++) {
        if (styleArray[i2]) {
          const item = styleArray[i2].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i2 in customStyle) {
      const key = i2.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i2]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = uni == null ? void 0 : uni.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (cache.has(obj))
      return cache.get(obj);
    let clone;
    if (obj instanceof Date) {
      clone = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
      clone = new RegExp(obj);
    } else if (obj instanceof Map) {
      clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
      clone = new Set(Array.from(obj, (value) => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
      clone = obj.map((value) => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone);
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = deepClone(value, cache);
      }
    } else {
      clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
      return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      const sourceValue = source[prop];
      const targetValue = merged[prop];
      if (sourceValue instanceof Date) {
        merged[prop] = new Date(sourceValue);
      } else if (sourceValue instanceof RegExp) {
        merged[prop] = new RegExp(sourceValue);
      } else if (sourceValue instanceof Map) {
        merged[prop] = new Map(sourceValue);
      } else if (sourceValue instanceof Set) {
        merged[prop] = new Set(sourceValue);
      } else if (typeof sourceValue === "object" && sourceValue !== null) {
        merged[prop] = deepMerge(targetValue, sourceValue);
      } else {
        merged[prop] = sourceValue;
      }
    }
    return merged;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uv-ui-tools/libs/function/index.js:250", `uvui提示：${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
      date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
      date2 = new Date(dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer2 = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer2 = parseInt(timer2 / 1e3);
    let tips = "";
    switch (true) {
      case timer2 < 300:
        tips = "刚刚";
        break;
      case (timer2 >= 300 && timer2 < 3600):
        tips = `${parseInt(timer2 / 60)}分钟前`;
        break;
      case (timer2 >= 3600 && timer2 < 86400):
        tips = `${parseInt(timer2 / 3600)}小时前`;
        break;
      case (timer2 >= 86400 && timer2 < 2592e3):
        tips = `${parseInt(timer2 / 86400)}天前`;
        break;
      default:
        if (format === false) {
          if (timer2 >= 2592e3 && timer2 < 365 * 86400) {
            tips = `${parseInt(timer2 / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer2 / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i2 = 0; i2 < value.length; i2++) {
              _result.push(`${key}[${i2}]=${value[i2]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n2 = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s2 = "";
    s2 = (prec ? round(n2, prec) + "" : `${Math.round(n2)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s2[0])) {
      s2[0] = s2[0].replace(re, `$1${sep}$2`);
    }
    if ((s2[1] || "").length < prec) {
      s2[1] = s2[1] || "";
      s2[1] += new Array(prec - s2[1].length + 1).join("0");
    }
    return s2.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance2, event) {
    const formItem = $parent.call(instance2, "uv-form-item");
    const form = $parent.call(instance2, "uv-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i2 = 1; i2 < keys.length; i2++) {
        if (firstObj) {
          firstObj = firstObj[keys[i2]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v2) {
      if (keys.length === 1) {
        _obj[keys[0]] = v2;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v2);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a;
    const pages2 = getCurrentPages();
    const route2 = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route;
    return `/${route2 ? route2 : ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function getHistoryPage(back = 0) {
    const pages2 = getCurrentPages();
    const len = pages2.length;
    return pages2[len - 1 + back];
  }
  function setConfig({
    props: props2 = {},
    config = {},
    color = {},
    zIndex = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$uv;
    uni.$uv.config = deepMerge2(uni.$uv.config, config);
    uni.$uv.props = deepMerge2(uni.$uv.props, props2);
    uni.$uv.color = deepMerge2(uni.$uv.color, color);
    uni.$uv.zIndex = deepMerge2(uni.$uv.zIndex, zIndex);
  }
  const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    formValidate,
    getDuration,
    getHistoryPage,
    getProperty,
    getPx,
    guid,
    os,
    padZero,
    page,
    pages,
    priceFormat,
    queryParams,
    random,
    randomArray,
    range,
    setConfig,
    setProperty,
    sleep,
    sys,
    timeFormat,
    timeFrom,
    toast,
    trim,
    type2icon
  }, Symbol.toStringTag, { value: "Module" }));
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false,
        // 是否需要拦截
        events: {}
        // 页面间通信接口，用于监听被打开页面发送到当前页面的数据。hbuilderx 2.8.9+ 开始支持。
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = deepMerge(this.config, options);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig.url === page())
        return;
      if (params.intercept) {
        mergeConfig.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = deepMerge(this.config, mergeConfig);
      if (typeof mergeConfig.intercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          mergeConfig.intercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    // 执行路由跳转
    openPage(config) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration,
        events
      } = config;
      if (config.type == "navigateTo" || config.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration,
          events
        });
      }
      if (config.type == "redirectTo" || config.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config.type == "switchTab" || config.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config.type == "reLaunch" || config.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config.type == "navigateBack" || config.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  const mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$uv.getRect = this.$uvGetRect;
    },
    created() {
      this.$uv.getRect = this.$uvGetRect;
    },
    computed: {
      $uv() {
        var _a, _b;
        return {
          ...index,
          test,
          route,
          debounce,
          throttle,
          unit: (_b = (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config) == null ? void 0 : _b.unit
        };
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `uv-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uvGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = this.$uv.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e2) {
        e2 && typeof e2.stopPropagation === "function" && e2.stopPropagation();
      },
      // 空操作
      noop(e2) {
        this.preventEvent(e2);
      }
    },
    onReachBottom() {
      uni.$emit("uvOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    },
    // 兼容vue3
    unmounted() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  function o(o2) {
    this.mode = r.MODE_8BIT_BYTE, this.data = o2;
  }
  function e(o2, e2) {
    this.typeNumber = o2, this.errorCorrectLevel = e2, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array();
  }
  o.prototype = { getLength: function(o2) {
    return this.data.length;
  }, write: function(o2) {
    for (var e2 = 0; e2 < this.data.length; e2++)
      o2.put(this.data.charCodeAt(e2), 8);
  } }, e.prototype = { addData: function(e2) {
    var r2 = new o(e2);
    this.dataList.push(r2), this.dataCache = null;
  }, isDark: function(o2, e2) {
    if (o2 < 0 || this.moduleCount <= o2 || e2 < 0 || this.moduleCount <= e2)
      throw new Error(o2 + "," + e2);
    return this.modules[o2][e2];
  }, getModuleCount: function() {
    return this.moduleCount;
  }, make: function() {
    if (this.typeNumber < 1) {
      var o2 = 1;
      for (o2 = 1; o2 < 40; o2++) {
        for (var e2 = v.getRSBlocks(o2, this.errorCorrectLevel), r2 = new p(), t2 = 0, i2 = 0; i2 < e2.length; i2++)
          t2 += e2[i2].dataCount;
        for (i2 = 0; i2 < this.dataList.length; i2++) {
          var n2 = this.dataList[i2];
          r2.put(n2.mode, 4), r2.put(n2.getLength(), h.getLengthInBits(n2.mode, o2)), n2.write(r2);
        }
        if (r2.getLengthInBits() <= 8 * t2)
          break;
      }
      this.typeNumber = o2;
    }
    this.makeImpl(false, this.getBestMaskPattern());
  }, makeImpl: function(o2, r2) {
    this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
    for (var t2 = 0; t2 < this.moduleCount; t2++) {
      this.modules[t2] = new Array(this.moduleCount);
      for (var i2 = 0; i2 < this.moduleCount; i2++)
        this.modules[t2][i2] = null;
    }
    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(o2, r2), this.typeNumber >= 7 && this.setupTypeNumber(o2), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r2);
  }, setupPositionProbePattern: function(o2, e2) {
    for (var r2 = -1; r2 <= 7; r2++)
      if (!(o2 + r2 <= -1 || this.moduleCount <= o2 + r2))
        for (var t2 = -1; t2 <= 7; t2++)
          e2 + t2 <= -1 || this.moduleCount <= e2 + t2 || (this.modules[o2 + r2][e2 + t2] = 0 <= r2 && r2 <= 6 && (0 == t2 || 6 == t2) || 0 <= t2 && t2 <= 6 && (0 == r2 || 6 == r2) || 2 <= r2 && r2 <= 4 && 2 <= t2 && t2 <= 4);
  }, getBestMaskPattern: function() {
    for (var o2 = 0, e2 = 0, r2 = 0; r2 < 8; r2++) {
      this.makeImpl(true, r2);
      var t2 = h.getLostPoint(this);
      (0 == r2 || o2 > t2) && (o2 = t2, e2 = r2);
    }
    return e2;
  }, createMovieClip: function(o2, e2, r2) {
    var t2 = o2.createEmptyMovieClip(e2, r2);
    this.make();
    for (var i2 = 0; i2 < this.modules.length; i2++)
      for (var n2 = 1 * i2, a2 = 0; a2 < this.modules[i2].length; a2++) {
        var d2 = 1 * a2;
        this.modules[i2][a2] && (t2.beginFill(0, 100), t2.moveTo(d2, n2), t2.lineTo(d2 + 1, n2), t2.lineTo(d2 + 1, n2 + 1), t2.lineTo(d2, n2 + 1), t2.endFill());
      }
    return t2;
  }, setupTimingPattern: function() {
    for (var o2 = 8; o2 < this.moduleCount - 8; o2++)
      null == this.modules[o2][6] && (this.modules[o2][6] = o2 % 2 == 0);
    for (var e2 = 8; e2 < this.moduleCount - 8; e2++)
      null == this.modules[6][e2] && (this.modules[6][e2] = e2 % 2 == 0);
  }, setupPositionAdjustPattern: function() {
    for (var o2 = h.getPatternPosition(this.typeNumber), e2 = 0; e2 < o2.length; e2++)
      for (var r2 = 0; r2 < o2.length; r2++) {
        var t2 = o2[e2], i2 = o2[r2];
        if (null == this.modules[t2][i2])
          for (var n2 = -2; n2 <= 2; n2++)
            for (var a2 = -2; a2 <= 2; a2++)
              this.modules[t2 + n2][i2 + a2] = -2 == n2 || 2 == n2 || -2 == a2 || 2 == a2 || 0 == n2 && 0 == a2;
      }
  }, setupTypeNumber: function(o2) {
    for (var e2 = h.getBCHTypeNumber(this.typeNumber), r2 = 0; r2 < 18; r2++) {
      var t2 = !o2 && 1 == (e2 >> r2 & 1);
      this.modules[Math.floor(r2 / 3)][r2 % 3 + this.moduleCount - 8 - 3] = t2;
    }
    for (r2 = 0; r2 < 18; r2++) {
      t2 = !o2 && 1 == (e2 >> r2 & 1);
      this.modules[r2 % 3 + this.moduleCount - 8 - 3][Math.floor(r2 / 3)] = t2;
    }
  }, setupTypeInfo: function(o2, e2) {
    for (var r2 = this.errorCorrectLevel << 3 | e2, t2 = h.getBCHTypeInfo(r2), i2 = 0; i2 < 15; i2++) {
      var n2 = !o2 && 1 == (t2 >> i2 & 1);
      i2 < 6 ? this.modules[i2][8] = n2 : i2 < 8 ? this.modules[i2 + 1][8] = n2 : this.modules[this.moduleCount - 15 + i2][8] = n2;
    }
    for (i2 = 0; i2 < 15; i2++) {
      n2 = !o2 && 1 == (t2 >> i2 & 1);
      i2 < 8 ? this.modules[8][this.moduleCount - i2 - 1] = n2 : i2 < 9 ? this.modules[8][15 - i2 - 1 + 1] = n2 : this.modules[8][15 - i2 - 1] = n2;
    }
    this.modules[this.moduleCount - 8][8] = !o2;
  }, mapData: function(o2, e2) {
    for (var r2 = -1, t2 = this.moduleCount - 1, i2 = 7, n2 = 0, a2 = this.moduleCount - 1; a2 > 0; a2 -= 2)
      for (6 == a2 && a2--; ; ) {
        for (var d2 = 0; d2 < 2; d2++)
          if (null == this.modules[t2][a2 - d2]) {
            var u2 = false;
            n2 < o2.length && (u2 = 1 == (o2[n2] >>> i2 & 1)), h.getMask(e2, t2, a2 - d2) && (u2 = !u2), this.modules[t2][a2 - d2] = u2, -1 == --i2 && (n2++, i2 = 7);
          }
        if ((t2 += r2) < 0 || this.moduleCount <= t2) {
          t2 -= r2, r2 = -r2;
          break;
        }
      }
  } }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function(o2, r2, t2) {
    for (var i2 = v.getRSBlocks(o2, r2), n2 = new p(), a2 = 0; a2 < t2.length; a2++) {
      var d2 = t2[a2];
      n2.put(d2.mode, 4), n2.put(d2.getLength(), h.getLengthInBits(d2.mode, o2)), d2.write(n2);
    }
    var u2 = 0;
    for (a2 = 0; a2 < i2.length; a2++)
      u2 += i2[a2].dataCount;
    if (n2.getLengthInBits() > 8 * u2)
      throw new Error("code length overflow. (" + n2.getLengthInBits() + ">" + 8 * u2 + ")");
    for (n2.getLengthInBits() + 4 <= 8 * u2 && n2.put(0, 4); n2.getLengthInBits() % 8 != 0; )
      n2.putBit(false);
    for (; !(n2.getLengthInBits() >= 8 * u2 || (n2.put(e.PAD0, 8), n2.getLengthInBits() >= 8 * u2)); )
      n2.put(e.PAD1, 8);
    return e.createBytes(n2, i2);
  }, e.createBytes = function(o2, e2) {
    for (var r2 = 0, t2 = 0, i2 = 0, n2 = new Array(e2.length), a2 = new Array(e2.length), d2 = 0; d2 < e2.length; d2++) {
      var u2 = e2[d2].dataCount, s2 = e2[d2].totalCount - u2;
      t2 = Math.max(t2, u2), i2 = Math.max(i2, s2), n2[d2] = new Array(u2);
      for (var g2 = 0; g2 < n2[d2].length; g2++)
        n2[d2][g2] = 255 & o2.buffer[g2 + r2];
      r2 += u2;
      var l2 = h.getErrorCorrectPolynomial(s2), c2 = new f(n2[d2], l2.getLength() - 1).mod(l2);
      a2[d2] = new Array(l2.getLength() - 1);
      for (g2 = 0; g2 < a2[d2].length; g2++) {
        var m2 = g2 + c2.getLength() - a2[d2].length;
        a2[d2][g2] = m2 >= 0 ? c2.get(m2) : 0;
      }
    }
    var v2 = 0;
    for (g2 = 0; g2 < e2.length; g2++)
      v2 += e2[g2].totalCount;
    var p2 = new Array(v2), C2 = 0;
    for (g2 = 0; g2 < t2; g2++)
      for (d2 = 0; d2 < e2.length; d2++)
        g2 < n2[d2].length && (p2[C2++] = n2[d2][g2]);
    for (g2 = 0; g2 < i2; g2++)
      for (d2 = 0; d2 < e2.length; d2++)
        g2 < a2[d2].length && (p2[C2++] = a2[d2][g2]);
    return p2;
  };
  for (var r = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, t = { L: 1, M: 0, Q: 3, H: 2 }, i = 0, n = 1, a = 2, d = 3, u = 4, s = 5, g = 6, l = 7, h = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(o2) {
    for (var e2 = o2 << 10; h.getBCHDigit(e2) - h.getBCHDigit(h.G15) >= 0; )
      e2 ^= h.G15 << h.getBCHDigit(e2) - h.getBCHDigit(h.G15);
    return (o2 << 10 | e2) ^ h.G15_MASK;
  }, getBCHTypeNumber: function(o2) {
    for (var e2 = o2 << 12; h.getBCHDigit(e2) - h.getBCHDigit(h.G18) >= 0; )
      e2 ^= h.G18 << h.getBCHDigit(e2) - h.getBCHDigit(h.G18);
    return o2 << 12 | e2;
  }, getBCHDigit: function(o2) {
    for (var e2 = 0; 0 != o2; )
      e2++, o2 >>>= 1;
    return e2;
  }, getPatternPosition: function(o2) {
    return h.PATTERN_POSITION_TABLE[o2 - 1];
  }, getMask: function(o2, e2, r2) {
    switch (o2) {
      case i:
        return (e2 + r2) % 2 == 0;
      case n:
        return e2 % 2 == 0;
      case a:
        return r2 % 3 == 0;
      case d:
        return (e2 + r2) % 3 == 0;
      case u:
        return (Math.floor(e2 / 2) + Math.floor(r2 / 3)) % 2 == 0;
      case s:
        return e2 * r2 % 2 + e2 * r2 % 3 == 0;
      case g:
        return (e2 * r2 % 2 + e2 * r2 % 3) % 2 == 0;
      case l:
        return (e2 * r2 % 3 + (e2 + r2) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + o2);
    }
  }, getErrorCorrectPolynomial: function(o2) {
    for (var e2 = new f([1], 0), r2 = 0; r2 < o2; r2++)
      e2 = e2.multiply(new f([1, c.gexp(r2)], 0));
    return e2;
  }, getLengthInBits: function(o2, e2) {
    if (1 <= e2 && e2 < 10)
      switch (o2) {
        case r.MODE_NUMBER:
          return 10;
        case r.MODE_ALPHA_NUM:
          return 9;
        case r.MODE_8BIT_BYTE:
        case r.MODE_KANJI:
          return 8;
        default:
          throw new Error("mode:" + o2);
      }
    else if (e2 < 27)
      switch (o2) {
        case r.MODE_NUMBER:
          return 12;
        case r.MODE_ALPHA_NUM:
          return 11;
        case r.MODE_8BIT_BYTE:
          return 16;
        case r.MODE_KANJI:
          return 10;
        default:
          throw new Error("mode:" + o2);
      }
    else {
      if (!(e2 < 41))
        throw new Error("type:" + e2);
      switch (o2) {
        case r.MODE_NUMBER:
          return 14;
        case r.MODE_ALPHA_NUM:
          return 13;
        case r.MODE_8BIT_BYTE:
          return 16;
        case r.MODE_KANJI:
          return 12;
        default:
          throw new Error("mode:" + o2);
      }
    }
  }, getLostPoint: function(o2) {
    for (var e2 = o2.getModuleCount(), r2 = 0, t2 = 0; t2 < e2; t2++)
      for (var i2 = 0; i2 < e2; i2++) {
        for (var n2 = 0, a2 = o2.isDark(t2, i2), d2 = -1; d2 <= 1; d2++)
          if (!(t2 + d2 < 0 || e2 <= t2 + d2))
            for (var u2 = -1; u2 <= 1; u2++)
              i2 + u2 < 0 || e2 <= i2 + u2 || 0 == d2 && 0 == u2 || a2 == o2.isDark(t2 + d2, i2 + u2) && n2++;
        n2 > 5 && (r2 += 3 + n2 - 5);
      }
    for (t2 = 0; t2 < e2 - 1; t2++)
      for (i2 = 0; i2 < e2 - 1; i2++) {
        var s2 = 0;
        o2.isDark(t2, i2) && s2++, o2.isDark(t2 + 1, i2) && s2++, o2.isDark(t2, i2 + 1) && s2++, o2.isDark(t2 + 1, i2 + 1) && s2++, 0 != s2 && 4 != s2 || (r2 += 3);
      }
    for (t2 = 0; t2 < e2; t2++)
      for (i2 = 0; i2 < e2 - 6; i2++)
        o2.isDark(t2, i2) && !o2.isDark(t2, i2 + 1) && o2.isDark(t2, i2 + 2) && o2.isDark(t2, i2 + 3) && o2.isDark(t2, i2 + 4) && !o2.isDark(t2, i2 + 5) && o2.isDark(t2, i2 + 6) && (r2 += 40);
    for (i2 = 0; i2 < e2; i2++)
      for (t2 = 0; t2 < e2 - 6; t2++)
        o2.isDark(t2, i2) && !o2.isDark(t2 + 1, i2) && o2.isDark(t2 + 2, i2) && o2.isDark(t2 + 3, i2) && o2.isDark(t2 + 4, i2) && !o2.isDark(t2 + 5, i2) && o2.isDark(t2 + 6, i2) && (r2 += 40);
    var g2 = 0;
    for (i2 = 0; i2 < e2; i2++)
      for (t2 = 0; t2 < e2; t2++)
        o2.isDark(t2, i2) && g2++;
    return r2 += 10 * (Math.abs(100 * g2 / e2 / e2 - 50) / 5);
  } }, c = { glog: function(o2) {
    if (o2 < 1)
      throw new Error("glog(" + o2 + ")");
    return c.LOG_TABLE[o2];
  }, gexp: function(o2) {
    for (; o2 < 0; )
      o2 += 255;
    for (; o2 >= 256; )
      o2 -= 255;
    return c.EXP_TABLE[o2];
  }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, m = 0; m < 8; m++)
    c.EXP_TABLE[m] = 1 << m;
  for (m = 8; m < 256; m++)
    c.EXP_TABLE[m] = c.EXP_TABLE[m - 4] ^ c.EXP_TABLE[m - 5] ^ c.EXP_TABLE[m - 6] ^ c.EXP_TABLE[m - 8];
  for (m = 0; m < 255; m++)
    c.LOG_TABLE[c.EXP_TABLE[m]] = m;
  function f(o2, e2) {
    if (null == o2.length)
      throw new Error(o2.length + "/" + e2);
    for (var r2 = 0; r2 < o2.length && 0 == o2[r2]; )
      r2++;
    this.num = new Array(o2.length - r2 + e2);
    for (var t2 = 0; t2 < o2.length - r2; t2++)
      this.num[t2] = o2[t2 + r2];
  }
  function v(o2, e2) {
    this.totalCount = o2, this.dataCount = e2;
  }
  function p() {
    this.buffer = new Array(), this.length = 0;
  }
  function C(o2) {
    return o2.setFillStyle = o2.setFillStyle || function(e2) {
      o2.fillStyle = e2;
    }, o2.setFontSize = o2.setFontSize || function(e2) {
      o2.font = `${e2}px`;
    }, o2.setTextAlign = o2.setTextAlign || function(e2) {
      o2.textAlign = e2;
    }, o2.setTextBaseline = o2.setTextBaseline || function(e2) {
      o2.textBaseline = e2;
    }, o2.setGlobalAlpha = o2.setGlobalAlpha || function(e2) {
      o2.globalAlpha = e2;
    }, o2.setStrokeStyle = o2.setStrokeStyle || function(e2) {
      o2.strokeStyle = e2;
    }, o2.setShadow = o2.setShadow || function(e2, r2, t2, i2) {
      o2.shadowOffsetX = e2, o2.shadowOffsetY = r2, o2.shadowBlur = t2, o2.shadowColor = i2;
    }, o2.draw = o2.draw || function(o3, e2) {
      e2 && e2();
    }, o2.clearRect = o2.clearRect || function(e2, r2, t2, i2) {
      o2.draw(false);
    }, o2;
  }
  function b(o2, e2) {
    var r2 = this.data = "", t2 = this.size = 200;
    this.useDynamicSize = false, this.dynamicSize = t2;
    var i2 = this.typeNumber = -1;
    this.errorCorrectLevel = b.errorCorrectLevel.H;
    var n2 = this.margin = 0;
    this.areaColor = "#FFFFFF", this.backgroundColor = "rgba(255,255,255,0)", this.backgroundImageSrc = void 0;
    var a2 = this.backgroundImageWidth = void 0, d2 = this.backgroundImageHeight = void 0, u2 = this.backgroundImageX = void 0, s2 = this.backgroundImageY = void 0;
    this.backgroundImageAlpha = 1, this.backgroundImageBorderRadius = 0;
    var g2 = this.backgroundPadding = 0;
    this.foregroundColor = "#000000", this.foregroundImageSrc = void 0;
    var l2 = this.foregroundImageWidth = void 0, h2 = this.foregroundImageHeight = void 0, c2 = this.foregroundImageX = void 0, m2 = this.foregroundImageY = void 0, f2 = this.foregroundImagePadding = 0;
    this.foregroundImageBackgroundColor = "#FFFFFF";
    var v2 = this.foregroundImageBorderRadius = 0, p2 = this.foregroundImageShadowOffsetX = 0, k = this.foregroundImageShadowOffsetY = 0, y = this.foregroundImageShadowBlur = 0;
    this.foregroundImageShadowColor = "#808080";
    var w = this.foregroundPadding = 0, I = this.positionProbeBackgroundColor = void 0, B = this.positionProbeForegroundColor = void 0, S = this.separatorColor = void 0, P = this.positionAdjustBackgroundColor = void 0, L = this.positionAdjustForegroundColor = void 0, D = this.timingBackgroundColor = void 0, A = this.timingForegroundColor = void 0, E = this.typeNumberBackgroundColor = void 0, T = this.typeNumberForegroundColor = void 0, N = this.darkBlockColor = void 0;
    this.base = void 0, this.modules = [], this.moduleCount = 0, this.drawModules = [];
    var M = this.canvasContext = void 0;
    this.loadImage, this.drawReserve = false, this.isMaked = false, Object.defineProperties(this, { data: { get() {
      if ("" === r2 || void 0 === r2)
        throw formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/qrcode.js:34", "[uQRCode]: data must be set!"), new b.Error("data must be set!");
      return r2;
    }, set(o3) {
      r2 = String(o3);
    } }, size: { get: () => t2, set(o3) {
      t2 = Number(o3);
    } }, typeNumber: { get: () => i2, set(o3) {
      i2 = Number(o3);
    } }, margin: { get: () => n2, set(o3) {
      n2 = Number(o3);
    } }, backgroundImageWidth: { get() {
      return void 0 === a2 ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * a2 : a2;
    }, set(o3) {
      a2 = Number(o3);
    } }, backgroundImageHeight: { get() {
      return void 0 === d2 ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * d2 : d2;
    }, set(o3) {
      d2 = Number(o3);
    } }, backgroundImageX: { get() {
      return void 0 === u2 ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * u2 : u2;
    }, set(o3) {
      u2 = Number(o3);
    } }, backgroundImageY: { get() {
      return void 0 === s2 ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * s2 : s2;
    }, set(o3) {
      s2 = Number(o3);
    } }, backgroundPadding: { get: () => g2, set(o3) {
      g2 = o3 > 1 ? 1 : o3 < 0 ? 0 : o3;
    } }, foregroundImageWidth: { get() {
      return void 0 === l2 ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * l2 : l2;
    }, set(o3) {
      l2 = Number(o3);
    } }, foregroundImageHeight: { get() {
      return void 0 === h2 ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * h2 : h2;
    }, set(o3) {
      h2 = Number(o3);
    } }, foregroundImageX: { get() {
      return void 0 === c2 ? this.dynamicSize / 2 - this.foregroundImageWidth / 2 : this.useDynamicSize ? this.dynamicSize / this.size * c2 : c2;
    }, set(o3) {
      c2 = Number(o3);
    } }, foregroundImageY: { get() {
      return void 0 === m2 ? this.dynamicSize / 2 - this.foregroundImageHeight / 2 : this.useDynamicSize ? this.dynamicSize / this.size * m2 : m2;
    }, set(o3) {
      m2 = Number(o3);
    } }, foregroundImagePadding: { get() {
      return this.useDynamicSize ? this.dynamicSize / this.size * f2 : f2;
    }, set(o3) {
      f2 = Number(o3);
    } }, foregroundImageBorderRadius: { get() {
      return this.useDynamicSize ? this.dynamicSize / this.size * v2 : v2;
    }, set(o3) {
      v2 = Number(o3);
    } }, foregroundImageShadowOffsetX: { get() {
      return this.useDynamicSize ? this.dynamicSize / this.size * p2 : p2;
    }, set(o3) {
      p2 = Number(o3);
    } }, foregroundImageShadowOffsetY: { get() {
      return this.useDynamicSize ? this.dynamicSize / this.size * k : k;
    }, set(o3) {
      k = Number(o3);
    } }, foregroundImageShadowBlur: { get() {
      return this.useDynamicSize ? this.dynamicSize / this.size * y : y;
    }, set(o3) {
      y = Number(o3);
    } }, foregroundPadding: { get: () => w, set(o3) {
      w = o3 > 1 ? 1 : o3 < 0 ? 0 : o3;
    } }, positionProbeBackgroundColor: { get() {
      return I || this.backgroundColor;
    }, set(o3) {
      I = o3;
    } }, positionProbeForegroundColor: { get() {
      return B || this.foregroundColor;
    }, set(o3) {
      B = o3;
    } }, separatorColor: { get() {
      return S || this.backgroundColor;
    }, set(o3) {
      S = o3;
    } }, positionAdjustBackgroundColor: { get() {
      return P || this.backgroundColor;
    }, set(o3) {
      P = o3;
    } }, positionAdjustForegroundColor: { get() {
      return L || this.foregroundColor;
    }, set(o3) {
      L = o3;
    } }, timingBackgroundColor: { get() {
      return D || this.backgroundColor;
    }, set(o3) {
      D = o3;
    } }, timingForegroundColor: { get() {
      return A || this.foregroundColor;
    }, set(o3) {
      A = o3;
    } }, typeNumberBackgroundColor: { get() {
      return E || this.backgroundColor;
    }, set(o3) {
      E = o3;
    } }, typeNumberForegroundColor: { get() {
      return T || this.foregroundColor;
    }, set(o3) {
      T = o3;
    } }, darkBlockColor: { get() {
      return N || this.foregroundColor;
    }, set(o3) {
      N = o3;
    } }, canvasContext: { get() {
      if (void 0 === M)
        throw formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/qrcode.js:34", "[uQRCode]: use drawCanvas, you need to set the canvasContext!"), new b.Error("use drawCanvas, you need to set the canvasContext!");
      return M;
    }, set(o3) {
      M = C(o3);
    } } }), b.plugins.forEach((o3) => o3(b, this, false)), o2 && this.setOptions(o2), e2 && (this.canvasContext = C(e2));
  }
  f.prototype = { get: function(o2) {
    return this.num[o2];
  }, getLength: function() {
    return this.num.length;
  }, multiply: function(o2) {
    for (var e2 = new Array(this.getLength() + o2.getLength() - 1), r2 = 0; r2 < this.getLength(); r2++)
      for (var t2 = 0; t2 < o2.getLength(); t2++)
        e2[r2 + t2] ^= c.gexp(c.glog(this.get(r2)) + c.glog(o2.get(t2)));
    return new f(e2, 0);
  }, mod: function(o2) {
    if (this.getLength() - o2.getLength() < 0)
      return this;
    for (var e2 = c.glog(this.get(0)) - c.glog(o2.get(0)), r2 = new Array(this.getLength()), t2 = 0; t2 < this.getLength(); t2++)
      r2[t2] = this.get(t2);
    for (t2 = 0; t2 < o2.getLength(); t2++)
      r2[t2] ^= c.gexp(c.glog(o2.get(t2)) + e2);
    return new f(r2, 0).mod(o2);
  } }, v.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], v.getRSBlocks = function(o2, e2) {
    var r2 = v.getRsBlockTable(o2, e2);
    if (null == r2)
      throw new Error("bad rs block @ typeNumber:" + o2 + "/errorCorrectLevel:" + e2);
    for (var t2 = r2.length / 3, i2 = new Array(), n2 = 0; n2 < t2; n2++)
      for (var a2 = r2[3 * n2 + 0], d2 = r2[3 * n2 + 1], u2 = r2[3 * n2 + 2], s2 = 0; s2 < a2; s2++)
        i2.push(new v(d2, u2));
    return i2;
  }, v.getRsBlockTable = function(o2, e2) {
    switch (e2) {
      case t.L:
        return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 0];
      case t.M:
        return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 1];
      case t.Q:
        return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 2];
      case t.H:
        return v.RS_BLOCK_TABLE[4 * (o2 - 1) + 3];
      default:
        return;
    }
  }, p.prototype = { get: function(o2) {
    var e2 = Math.floor(o2 / 8);
    return 1 == (this.buffer[e2] >>> 7 - o2 % 8 & 1);
  }, put: function(o2, e2) {
    for (var r2 = 0; r2 < e2; r2++)
      this.putBit(1 == (o2 >>> e2 - r2 - 1 & 1));
  }, getLengthInBits: function() {
    return this.length;
  }, putBit: function(o2) {
    var e2 = Math.floor(this.length / 8);
    this.buffer.length <= e2 && this.buffer.push(0), o2 && (this.buffer[e2] |= 128 >>> this.length % 8), this.length++;
  } }, e.errorCorrectLevel = t, b.errorCorrectLevel = e.errorCorrectLevel, b.Error = function(o2) {
    this.errMsg = "[uQRCode]: " + o2;
  }, b.plugins = [], b.use = function(o2) {
    "function" == typeof o2 && b.plugins.push(o2);
  }, b.prototype.loadImage = function(o2) {
    return Promise.resolve(o2);
  }, b.prototype.setOptions = function(o2) {
    var e2, r2, t2, i2, n2, a2, d2, u2, s2, g2, l2, h2, c2, m2, f2, v2, p2, C2, b2, k, y, w, I, B, S, P, L, D, A, E, T, N, M, z, R, _, O, F, x, H, X, Y, j, W, G, K, Q, U, $, J, q, V, Z, oo, eo, ro;
    o2 && (Object.keys(o2).forEach((e3) => {
      this[e3] = o2[e3];
    }), function(o3 = {}, e3 = {}, r3 = false) {
      let t3;
      t3 = r3 ? o3 : { ...o3 };
      for (let o4 in e3) {
        var i3 = e3[o4];
        null != i3 && (i3.constructor == Object ? t3[o4] = this.deepReplace(t3[o4], i3) : i3.constructor != String || i3 ? t3[o4] = i3 : t3[o4] = t3[o4]);
      }
    }(this, { data: o2.data || o2.text, size: o2.size, useDynamicSize: o2.useDynamicSize, typeNumber: o2.typeNumber, errorCorrectLevel: o2.errorCorrectLevel, margin: o2.margin, areaColor: o2.areaColor, backgroundColor: o2.backgroundColor || (null === (e2 = o2.background) || void 0 === e2 ? void 0 : e2.color), backgroundImageSrc: o2.backgroundImageSrc || (null === (r2 = o2.background) || void 0 === r2 || null === (t2 = r2.image) || void 0 === t2 ? void 0 : t2.src), backgroundImageWidth: o2.backgroundImageWidth || (null === (i2 = o2.background) || void 0 === i2 || null === (n2 = i2.image) || void 0 === n2 ? void 0 : n2.width), backgroundImageHeight: o2.backgroundImageHeight || (null === (a2 = o2.background) || void 0 === a2 || null === (d2 = a2.image) || void 0 === d2 ? void 0 : d2.height), backgroundImageX: o2.backgroundImageX || (null === (u2 = o2.background) || void 0 === u2 || null === (s2 = u2.image) || void 0 === s2 ? void 0 : s2.x), backgroundImageY: o2.backgroundImageY || (null === (g2 = o2.background) || void 0 === g2 || null === (l2 = g2.image) || void 0 === l2 ? void 0 : l2.y), backgroundImageAlpha: o2.backgroundImageAlpha || (null === (h2 = o2.background) || void 0 === h2 || null === (c2 = h2.image) || void 0 === c2 ? void 0 : c2.alpha), backgroundImageBorderRadius: o2.backgroundImageBorderRadius || (null === (m2 = o2.background) || void 0 === m2 || null === (f2 = m2.image) || void 0 === f2 ? void 0 : f2.borderRadius), backgroundPadding: o2.backgroundPadding, foregroundColor: o2.foregroundColor || (null === (v2 = o2.foreground) || void 0 === v2 ? void 0 : v2.color), foregroundImageSrc: o2.foregroundImageSrc || (null === (p2 = o2.foreground) || void 0 === p2 || null === (C2 = p2.image) || void 0 === C2 ? void 0 : C2.src), foregroundImageWidth: o2.foregroundImageWidth || (null === (b2 = o2.foreground) || void 0 === b2 || null === (k = b2.image) || void 0 === k ? void 0 : k.width), foregroundImageHeight: o2.foregroundImageHeight || (null === (y = o2.foreground) || void 0 === y || null === (w = y.image) || void 0 === w ? void 0 : w.height), foregroundImageX: o2.foregroundImageX || (null === (I = o2.foreground) || void 0 === I || null === (B = I.image) || void 0 === B ? void 0 : B.x), foregroundImageY: o2.foregroundImageY || (null === (S = o2.foreground) || void 0 === S || null === (P = S.image) || void 0 === P ? void 0 : P.y), foregroundImagePadding: o2.foregroundImagePadding || (null === (L = o2.foreground) || void 0 === L || null === (D = L.image) || void 0 === D ? void 0 : D.padding), foregroundImageBackgroundColor: o2.foregroundImageBackgroundColor || (null === (A = o2.foreground) || void 0 === A || null === (E = A.image) || void 0 === E ? void 0 : E.backgroundColor), foregroundImageBorderRadius: o2.foregroundImageBorderRadius || (null === (T = o2.foreground) || void 0 === T || null === (N = T.image) || void 0 === N ? void 0 : N.borderRadius), foregroundImageShadowOffsetX: o2.foregroundImageShadowOffsetX || (null === (M = o2.foreground) || void 0 === M || null === (z = M.image) || void 0 === z ? void 0 : z.shadowOffsetX), foregroundImageShadowOffsetY: o2.foregroundImageShadowOffsetY || (null === (R = o2.foreground) || void 0 === R || null === (_ = R.image) || void 0 === _ ? void 0 : _.shadowOffsetY), foregroundImageShadowBlur: o2.foregroundImageShadowBlur || (null === (O = o2.foreground) || void 0 === O || null === (F = O.image) || void 0 === F ? void 0 : F.shadowBlur), foregroundImageShadowColor: o2.foregroundImageShadowColor || (null === (x = o2.foreground) || void 0 === x || null === (H = x.image) || void 0 === H ? void 0 : H.shadowColor), foregroundPadding: o2.foregroundPadding, positionProbeBackgroundColor: o2.positionProbeBackgroundColor || (null === (X = o2.positionProbe) || void 0 === X ? void 0 : X.backgroundColor) || (null === (Y = o2.positionDetection) || void 0 === Y ? void 0 : Y.backgroundColor), positionProbeForegroundColor: o2.positionProbeForegroundColor || (null === (j = o2.positionProbe) || void 0 === j ? void 0 : j.foregroundColor) || (null === (W = o2.positionDetection) || void 0 === W ? void 0 : W.foregroundColor), separatorColor: o2.separatorColor || (null === (G = o2.separator) || void 0 === G ? void 0 : G.color), positionAdjustBackgroundColor: o2.positionAdjustBackgroundColor || (null === (K = o2.positionAdjust) || void 0 === K ? void 0 : K.backgroundColor) || (null === (Q = o2.alignment) || void 0 === Q ? void 0 : Q.backgroundColor), positionAdjustForegroundColor: o2.positionAdjustForegroundColor || (null === (U = o2.positionAdjust) || void 0 === U ? void 0 : U.foregroundColor) || (null === ($ = o2.alignment) || void 0 === $ ? void 0 : $.foregroundColor), timingBackgroundColor: o2.timingBackgroundColor || (null === (J = o2.timing) || void 0 === J ? void 0 : J.backgroundColor), timingForegroundColor: o2.timingForegroundColor || (null === (q = o2.timing) || void 0 === q ? void 0 : q.foregroundColor), typeNumberBackgroundColor: o2.typeNumberBackgroundColor || (null === (V = o2.typeNumber) || void 0 === V ? void 0 : V.backgroundColor) || (null === (Z = o2.versionInformation) || void 0 === Z ? void 0 : Z.backgroundColor), typeNumberForegroundColor: o2.typeNumberForegroundColor || (null === (oo = o2.typeNumber) || void 0 === oo ? void 0 : oo.foregroundColor) || (null === (eo = o2.versionInformation) || void 0 === eo ? void 0 : eo.foregroundColor), darkBlockColor: o2.darkBlockColor || (null === (ro = o2.darkBlock) || void 0 === ro ? void 0 : ro.color) }, true));
  }, b.prototype.make = function() {
    let { foregroundColor: o2, backgroundColor: r2, typeNumber: t2, errorCorrectLevel: i2, data: n2, size: a2, margin: d2, useDynamicSize: u2 } = this;
    if (o2 === r2)
      throw formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/qrcode.js:34", "[uQRCode]: foregroundColor and backgroundColor cannot be the same!"), new b.Error("foregroundColor and backgroundColor cannot be the same!");
    var s2 = new e(t2, i2);
    s2.addData(function(o3) {
      o3 = o3.toString();
      for (var e2, r3 = "", t3 = 0; t3 < o3.length; t3++)
        (e2 = o3.charCodeAt(t3)) >= 1 && e2 <= 127 ? r3 += o3.charAt(t3) : e2 > 2047 ? (r3 += String.fromCharCode(224 | e2 >> 12 & 15), r3 += String.fromCharCode(128 | e2 >> 6 & 63), r3 += String.fromCharCode(128 | e2 >> 0 & 63)) : (r3 += String.fromCharCode(192 | e2 >> 6 & 31), r3 += String.fromCharCode(128 | e2 >> 0 & 63));
      return r3;
    }(n2)), s2.make(), this.base = s2, this.typeNumber = s2.typeNumber, this.modules = s2.modules, this.moduleCount = s2.moduleCount, this.dynamicSize = u2 ? Math.ceil((a2 - 2 * d2) / s2.moduleCount) * s2.moduleCount + 2 * d2 : a2, function(o3) {
      let { dynamicSize: e2, margin: r3, backgroundColor: t3, backgroundPadding: i3, foregroundColor: n3, foregroundPadding: a3, modules: d3, moduleCount: u3 } = o3, s3 = (e2 - 2 * r3) / u3, g2 = s3, l2 = 0;
      i3 > 0 && (l2 = g2 * i3 / 2, g2 -= 2 * l2);
      let h2 = s3, c2 = 0;
      a3 > 0 && (c2 = h2 * a3 / 2, h2 -= 2 * c2);
      for (var m2 = 0; m2 < u3; m2++)
        for (var f2 = 0; f2 < u3; f2++) {
          var v2 = f2 * s3 + r3, p2 = m2 * s3 + r3;
          if (d3[m2][f2]) {
            var C2 = c2, b2 = v2 + c2, k = p2 + c2, y = h2, w = h2;
            d3[m2][f2] = { type: ["foreground"], color: n3, isBlack: true, isDrawn: false, destX: v2, destY: p2, destWidth: s3, destHeight: s3, x: b2, y: k, width: y, height: w, paddingTop: C2, paddingRight: C2, paddingBottom: C2, paddingLeft: C2 };
          } else
            C2 = l2, b2 = v2 + l2, k = p2 + l2, y = g2, w = g2, d3[m2][f2] = { type: ["background"], color: t3, isBlack: false, isDrawn: false, destX: v2, destY: p2, destWidth: s3, destHeight: s3, x: b2, y: k, width: y, height: w, paddingTop: C2, paddingRight: C2, paddingBottom: C2, paddingLeft: C2 };
        }
    }(this), function(o3) {
      let { modules: e2, moduleCount: r3, positionProbeBackgroundColor: t3, positionProbeForegroundColor: i3 } = o3, n3 = r3 - 7;
      [[0, 0, 1], [1, 0, 1], [2, 0, 1], [3, 0, 1], [4, 0, 1], [5, 0, 1], [6, 0, 1], [0, 1, 1], [1, 1, 0], [2, 1, 0], [3, 1, 0], [4, 1, 0], [5, 1, 0], [6, 1, 1], [0, 2, 1], [1, 2, 0], [2, 2, 1], [3, 2, 1], [4, 2, 1], [5, 2, 0], [6, 2, 1], [0, 3, 1], [1, 3, 0], [2, 3, 1], [3, 3, 1], [4, 3, 1], [5, 3, 0], [6, 3, 1], [0, 4, 1], [1, 4, 0], [2, 4, 1], [3, 4, 1], [4, 4, 1], [5, 4, 0], [6, 4, 1], [0, 5, 1], [1, 5, 0], [2, 5, 0], [3, 5, 0], [4, 5, 0], [5, 5, 0], [6, 5, 1], [0, 6, 1], [1, 6, 1], [2, 6, 1], [3, 6, 1], [4, 6, 1], [5, 6, 1], [6, 6, 1]].forEach((o4) => {
        var r4 = e2[o4[0]][o4[1]], a3 = e2[o4[0] + n3][o4[1]], d3 = e2[o4[0]][o4[1] + n3];
        d3.type.push("positionProbe"), a3.type.push("positionProbe"), r4.type.push("positionProbe"), r4.color = 1 == o4[2] ? i3 : t3, a3.color = 1 == o4[2] ? i3 : t3, d3.color = 1 == o4[2] ? i3 : t3;
      });
    }(this), function(o3) {
      let { modules: e2, moduleCount: r3, separatorColor: t3 } = o3;
      [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]].forEach((o4) => {
        var i3 = e2[o4[0]][o4[1]], n3 = e2[r3 - o4[0] - 1][o4[1]], a3 = e2[o4[0]][r3 - o4[1] - 1];
        a3.type.push("separator"), n3.type.push("separator"), i3.type.push("separator"), i3.color = t3, n3.color = t3, a3.color = t3;
      });
    }(this), function(o3) {
      let { typeNumber: e2, modules: r3, moduleCount: t3, foregroundColor: i3, backgroundColor: n3, positionAdjustForegroundColor: a3, positionAdjustBackgroundColor: d3, timingForegroundColor: u3, timingBackgroundColor: s3 } = o3;
      const g2 = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]][e2 - 1];
      if (g2) {
        const o4 = [[-2, -2, 1], [-1, -2, 1], [0, -2, 1], [1, -2, 1], [2, -2, 1], [-2, -1, 1], [-1, -1, 0], [0, -1, 0], [1, -1, 0], [2, -1, 1], [-2, 0, 1], [-1, 0, 0], [0, 0, 1], [1, 0, 0], [2, 0, 1], [-2, 1, 1], [-1, 1, 0], [0, 1, 0], [1, 1, 0], [2, 1, 1], [-2, 2, 1], [-1, 2, 1], [0, 2, 1], [1, 2, 1], [2, 2, 1]], e3 = g2.length;
        for (let l2 = 0; l2 < e3; l2++)
          for (let h2 = 0; h2 < e3; h2++) {
            let { x: e4, y: c2 } = { x: g2[l2], y: g2[h2] };
            e4 < 9 && c2 < 9 || e4 > t3 - 9 - 1 && c2 < 9 || c2 > t3 - 9 - 1 && e4 < 9 || o4.forEach((o5) => {
              var t4 = r3[e4 + o5[0]][c2 + o5[1]];
              t4.type.push("positionAdjust"), t4.type.includes("timing") ? 1 == o5[2] ? t4.color = a3 == i3 ? u3 : a3 : t4.color = a3 == i3 && d3 == n3 ? s3 : d3 : t4.color = 1 == o5[2] ? a3 : d3;
            });
          }
      }
    }(this), function(o3) {
      let { modules: e2, moduleCount: r3, timingForegroundColor: t3, timingBackgroundColor: i3 } = o3, n3 = r3 - 16;
      for (let o4 = 0; o4 < n3; o4++) {
        var a3 = e2[6][8 + o4], d3 = e2[8 + o4][6];
        a3.type.push("timing"), d3.type.push("timing"), a3.color = 1 & o4 ^ 1 ? t3 : i3, d3.color = 1 & o4 ^ 1 ? t3 : i3;
      }
    }(this), function(o3) {
      let { modules: e2, moduleCount: r3, darkBlockColor: t3 } = o3;
      var i3 = e2[r3 - 7 - 1][8];
      i3.type.push("darkBlock"), i3.color = t3;
    }(this), function(o3) {
      let { typeNumber: e2, modules: r3, moduleCount: t3, typeNumberBackgroundColor: i3, typeNumberForegroundColor: n3 } = o3;
      if (e2 < 7)
        return r3;
      const a3 = [0, 0, 0, 0, 0, 0, 0, "000111110010010100", "001000010110111100", "001001101010011001", "001010010011010011", "001011101111110110", "001100011101100010", "001101100001000111", "001110011000001101", "001111100100101000", "010000101101111000", "010001010001011101", "010010101000010111", "010011010100110010", "010100100110100110", "010101011010000011", "010110100011001001", "010111011111101100", "011000111011000100", "011001000111100001", "011010111110101011", "011011000010001110", "011100110000011010", "011101001100111111", "011110110101110101", "011111001001010000", "100000100111010101", "100001011011110000", "100010100010111010", "100011011110011111", "100100101100001011", "100101010000101110", "100110101001100100", "100111010101000001", "101000110001101001"];
      let d3 = a3[e2] + a3[e2], u3 = [t3 - 11, t3 - 10, t3 - 9];
      [[5, u3[2]], [5, u3[1]], [5, u3[0]], [4, u3[2]], [4, u3[1]], [4, u3[0]], [3, u3[2]], [3, u3[1]], [3, u3[0]], [2, u3[2]], [2, u3[1]], [2, u3[0]], [1, u3[2]], [1, u3[1]], [1, u3[0]], [0, u3[2]], [0, u3[1]], [0, u3[0]], [u3[2], 5], [u3[1], 5], [u3[0], 5], [u3[2], 4], [u3[1], 4], [u3[0], 4], [u3[2], 3], [u3[1], 3], [u3[0], 3], [u3[2], 2], [u3[1], 2], [u3[0], 2], [u3[2], 1], [u3[1], 1], [u3[0], 1], [u3[2], 0], [u3[1], 0], [u3[0], 0]].forEach((o4, e3) => {
        var t4 = r3[o4[0]][o4[1]];
        t4.type.push("typeNumber"), t4.color = "1" == d3[e3] ? n3 : i3;
      });
    }(this), this.isMaked = true, this.drawModules = [];
  }, b.prototype.getDrawModules = function() {
    if (this.drawModules && this.drawModules.length > 0)
      return this.drawModules;
    let o2 = this.drawModules = [], { modules: e2, moduleCount: r2, dynamicSize: t2, areaColor: i2, backgroundImageSrc: n2, backgroundImageX: a2, backgroundImageY: d2, backgroundImageWidth: u2, backgroundImageHeight: s2, backgroundImageAlpha: g2, backgroundImageBorderRadius: l2, foregroundImageSrc: h2, foregroundImageX: c2, foregroundImageY: m2, foregroundImageWidth: f2, foregroundImageHeight: v2, foregroundImagePadding: p2, foregroundImageBackgroundColor: C2, foregroundImageBorderRadius: b2, foregroundImageShadowOffsetX: k, foregroundImageShadowOffsetY: y, foregroundImageShadowBlur: w, foregroundImageShadowColor: I } = this;
    i2 && o2.push({ name: "area", type: "area", color: i2, x: 0, y: 0, width: t2, height: t2 }), n2 && o2.push({ name: "backgroundImage", type: "image", imageSrc: n2, mappingName: "backgroundImageSrc", x: a2, y: d2, width: u2, height: s2, alpha: g2, borderRadius: l2 });
    for (var B = 0; B < r2; B++)
      for (var S = 0; S < r2; S++) {
        var P = e2[B][S];
        P.isDrawn || (P.type.includes("foreground") ? o2.push({ name: "foreground", type: "tile", color: P.color, destX: P.destX, destY: P.destY, destWidth: P.destWidth, destHeight: P.destHeight, x: P.x, y: P.y, width: P.width, height: P.height, paddingTop: P.paddingTop, paddingRight: P.paddingRight, paddingBottom: P.paddingBottom, paddingLeft: P.paddingLeft, rowIndex: B, colIndex: S }) : o2.push({ name: "background", type: "tile", color: P.color, destX: P.destX, destY: P.destY, destWidth: P.destWidth, destHeight: P.destHeight, x: P.x, y: P.y, width: P.width, height: P.height, paddingTop: P.paddingTop, paddingRight: P.paddingRight, paddingBottom: P.paddingBottom, paddingLeft: P.paddingLeft, rowIndex: B, colIndex: S }), P.isDrawn = true);
      }
    return h2 && o2.push({ name: "foregroundImage", type: "image", imageSrc: h2, mappingName: "foregroundImageSrc", x: c2, y: m2, width: f2, height: v2, padding: p2, backgroundColor: C2, borderRadius: b2, shadowOffsetX: k, shadowOffsetY: y, shadowBlur: w, shadowColor: I }), o2;
  }, b.prototype.isBlack = function(o2, e2) {
    var r2 = this.moduleCount;
    return !(0 > o2 || 0 > e2 || o2 >= r2 || e2 >= r2) && this.modules[o2][e2].isBlack;
  }, b.prototype.drawCanvas = function() {
    let { isMaked: o2, canvasContext: e2, useDynamicSize: r2, dynamicSize: t2, foregroundColor: i2, foregroundPadding: n2, backgroundColor: a2, backgroundPadding: d2, drawReserve: u2, margin: s2 } = this;
    if (!o2)
      return formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/qrcode.js:34", "[uQRCode]: please execute the make method first!"), Promise.reject(new b.Error("please execute the make method first!"));
    let g2 = this.getDrawModules(), l2 = async (o3, r3) => {
      try {
        e2.clearRect(0, 0, t2, t2), e2.draw(false);
        for (var i3 = 0; i3 < g2.length; i3++) {
          var n3 = g2[i3];
          switch (e2.save(), n3.type) {
            case "area":
              e2.setFillStyle(n3.color), e2.fillRect(n3.x, n3.y, n3.width, n3.height);
              break;
            case "tile":
              var a3 = n3.x, d3 = n3.y, s3 = n3.width, l3 = n3.height;
              e2.setFillStyle(n3.color), e2.fillRect(a3, d3, s3, l3);
              break;
            case "image":
              if ("backgroundImage" === n3.name) {
                a3 = Math.round(n3.x), d3 = Math.round(n3.y), s3 = Math.round(n3.width), l3 = Math.round(n3.height);
                s3 < 2 * (c2 = Math.round(n3.borderRadius)) && (c2 = s3 / 2), l3 < 2 * c2 && (c2 = l3 / 2), e2.setGlobalAlpha(n3.alpha), c2 > 0 && (e2.beginPath(), e2.moveTo(a3 + c2, d3), e2.arcTo(a3 + s3, d3, a3 + s3, d3 + l3, c2), e2.arcTo(a3 + s3, d3 + l3, a3, d3 + l3, c2), e2.arcTo(a3, d3 + l3, a3, d3, c2), e2.arcTo(a3, d3, a3 + s3, d3, c2), e2.closePath(), e2.setStrokeStyle("rgba(0,0,0,0)"), e2.stroke(), e2.clip());
                try {
                  var h2 = await this.loadImage(n3.imageSrc);
                  e2.drawImage(h2, a3, d3, s3, l3);
                } catch (o4) {
                  throw formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/qrcode.js:34", `[uQRCode]: ${n3.mappingName} invalid!`), new b.Error(`${n3.mappingName} invalid!`);
                }
              } else if ("foregroundImage" === n3.name) {
                a3 = Math.round(n3.x), d3 = Math.round(n3.y), s3 = Math.round(n3.width), l3 = Math.round(n3.height);
                var c2, m2 = Math.round(n3.padding);
                s3 < 2 * (c2 = Math.round(n3.borderRadius)) && (c2 = s3 / 2), l3 < 2 * c2 && (c2 = l3 / 2);
                var f2 = a3 - m2, v2 = d3 - m2, p2 = s3 + 2 * m2, C2 = l3 + 2 * m2, k = Math.round(p2 / s3 * c2);
                p2 < 2 * k && (k = p2 / 2), C2 < 2 * k && (k = C2 / 2), e2.save(), e2.setShadow(n3.shadowOffsetX, n3.shadowOffsetY, n3.shadowBlur, n3.shadowColor), k > 0 ? (e2.beginPath(), e2.moveTo(f2 + k, v2), e2.arcTo(f2 + p2, v2, f2 + p2, v2 + C2, k), e2.arcTo(f2 + p2, v2 + C2, f2, v2 + C2, k), e2.arcTo(f2, v2 + C2, f2, v2, k), e2.arcTo(f2, v2, f2 + p2, v2, k), e2.closePath(), e2.setFillStyle(n3.backgroundColor), e2.fill()) : (e2.setFillStyle(n3.backgroundColor), e2.fillRect(f2, v2, p2, C2)), e2.restore(), e2.save(), k > 0 ? (e2.beginPath(), e2.moveTo(f2 + k, v2), e2.arcTo(f2 + p2, v2, f2 + p2, v2 + C2, k), e2.arcTo(f2 + p2, v2 + C2, f2, v2 + C2, k), e2.arcTo(f2, v2 + C2, f2, v2, k), e2.arcTo(f2, v2, f2 + p2, v2, k), e2.closePath(), e2.setFillStyle(m2 > 0 ? n3.backgroundColor : "rgba(0,0,0,0)"), e2.fill()) : (e2.setFillStyle(m2 > 0 ? n3.backgroundColor : "rgba(0,0,0,0)"), e2.fillRect(f2, v2, p2, C2)), e2.restore(), c2 > 0 && (e2.beginPath(), e2.moveTo(a3 + c2, d3), e2.arcTo(a3 + s3, d3, a3 + s3, d3 + l3, c2), e2.arcTo(a3 + s3, d3 + l3, a3, d3 + l3, c2), e2.arcTo(a3, d3 + l3, a3, d3, c2), e2.arcTo(a3, d3, a3 + s3, d3, c2), e2.closePath(), e2.setStrokeStyle("rgba(0,0,0,0)"), e2.stroke(), e2.clip());
                try {
                  h2 = await this.loadImage(n3.imageSrc);
                  e2.drawImage(h2, a3, d3, s3, l3);
                } catch (o4) {
                  throw formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/qrcode.js:34", `[uQRCode]: ${n3.mappingName} invalid!`), new b.Error(`${n3.mappingName} invalid!`);
                }
              }
          }
          u2 && e2.draw(true), e2.restore();
        }
        e2.draw(true), setTimeout(o3, 150);
      } catch (o4) {
        if (!(o4 instanceof b.Error))
          throw o4;
        r3(o4);
      }
    };
    return new Promise((o3, e3) => {
      l2(o3, e3);
    });
  }, b.prototype.draw = function() {
    return this.drawCanvas();
  }, b.prototype.register = function(o2) {
    o2 && o2(b, this, true);
  };
  function Queue() {
    let waitingQueue = this.waitingQueue = [];
    let isRunning = this.isRunning = false;
    function execute(task, resolve, reject) {
      task().then((data) => {
        resolve(data);
      }).catch((e2) => {
        reject(e2);
      }).finally(() => {
        if (waitingQueue.length) {
          const next = waitingQueue.shift();
          execute(next.task, next.resolve, next.reject);
        } else {
          isRunning = false;
        }
      });
    }
    this.exec = function(task) {
      return new Promise((resolve, reject) => {
        if (isRunning) {
          waitingQueue.push({
            task,
            resolve,
            reject
          });
        } else {
          isRunning = true;
          execute(task, resolve, reject);
        }
      });
    };
  }
  const queueDraw = new Queue();
  const queueLoadImage = new Queue();
  const cacheImageList = [];
  let instance = null;
  const _sfc_main$D = {
    name: "uv-qrcode",
    mixins: [mpMixin, mixin, props],
    emits: ["click", "change", "complete"],
    data() {
      return {
        canvasId: "",
        canvas: void 0,
        canvasType: void 0,
        canvasContext: void 0,
        makeDelegate: void 0,
        drawDelegate: void 0,
        toTempFilePathDelegate: void 0,
        makeExecuted: false,
        makeing: false,
        drawing: false,
        isError: false,
        error: void 0,
        isH5Save: false,
        tempFilePath: "",
        templateOptions: {
          size: 0,
          width: 0,
          // 组件宽度
          height: 0,
          canvasWidth: 0,
          // canvas宽度
          canvasHeight: 0,
          canvasTransform: "",
          canvasDisplay: false
        },
        uqrcodeOptions: {
          data: ""
        },
        plugins: [],
        makeingPattern: [
          [
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true]
          ],
          [
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, false, false, false],
            [true, true, true, true, true, true, false, true, true, true],
            [true, true, true, true, true, true, false, true, true, true],
            [true, true, true, true, true, true, false, true, true, true]
          ],
          [
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, true, true, true, true, false, false, false],
            [true, true, true, true, true, true, true, false, false, false],
            [true, true, true, true, true, true, true, false, false, false],
            [true, true, true, false, false, false, false, true, true, true],
            [true, true, true, false, false, false, false, true, true, true]
          ],
          [
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, false, false, false, false, false, false, false],
            [true, true, true, false, false, false, false, false, false, false],
            [true, true, true, false, false, false, false, false, false, false],
            [true, true, true, false, false, false, false, false, false, false],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true]
          ]
        ]
      };
    },
    watch: {
      type: {
        handler(val) {
          const types = ["2d"];
          if (types.includes(val)) {
            this.canvasType = val;
          } else {
            this.canvasType = void 0;
          }
        },
        immediate: true
      },
      value: {
        handler() {
          if (this.auto) {
            this.remake();
          }
        }
      },
      size: {
        handler() {
          if (this.auto) {
            this.remake();
          }
        }
      },
      options: {
        handler() {
          if (this.auto) {
            this.remake();
          }
        },
        deep: true
      },
      makeing: {
        handler(val) {
          if (!val) {
            if (typeof this.toTempFilePathDelegate === "function") {
              this.toTempFilePathDelegate();
            }
          }
        }
      }
    },
    created() {
      this.canvasId = this.$uv.guid();
    },
    mounted() {
      this.templateOptions.size = this.$uv.getPx(this.size);
      this.templateOptions.width = this.templateOptions.size;
      this.templateOptions.height = this.templateOptions.size;
      this.templateOptions.canvasWidth = this.templateOptions.size;
      this.templateOptions.canvasHeight = this.templateOptions.size;
      if (this.canvasType == "2d") {
        this.templateOptions.canvasTransform = `scale(${this.templateOptions.size / this.templateOptions.canvasWidth}, ${this.templateOptions.size / this.templateOptions.canvasHeight})`;
      } else {
        this.templateOptions.canvasTransform = `scale(${this.templateOptions.size / this.templateOptions.canvasWidth}, ${this.templateOptions.size / this.templateOptions.canvasHeight})`;
      }
      if (this.start) {
        this.$nextTick(() => {
          this.make();
        });
      }
    },
    methods: {
      /**
       * 获取模板选项
       */
      getTemplateOptions() {
        var size = this.$uv.getPx(this.size);
        return deepReplace(this.templateOptions, {
          size,
          width: size,
          height: size
        });
      },
      /**
       * 获取插件选项
       */
      getUqrcodeOptions() {
        return deepReplace(this.options, {
          data: String(this.value),
          size: Number(this.templateOptions.size)
        });
      },
      /**
       * 重置画布
       */
      resetCanvas(callback) {
        this.templateOptions.canvasDisplay = false;
        this.$nextTick(() => {
          this.templateOptions.canvasDisplay = true;
          this.$nextTick(() => {
            callback && callback();
          });
        });
      },
      /**
       * 绘制二维码
       */
      async draw(callback = {}, isDrawDelegate = false) {
        if (typeof callback.success != "function") {
          callback.success = () => {
          };
        }
        if (typeof callback.fail != "function") {
          callback.fail = () => {
          };
        }
        if (typeof callback.complete != "function") {
          callback.complete = () => {
          };
        }
        if (this.drawing) {
          if (!isDrawDelegate) {
            this.drawDelegate = () => {
              this.draw(callback, true);
            };
            return;
          }
        } else {
          this.drawing = true;
        }
        if (!this.canvasId) {
          formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/uv-qrcode.vue:325", "[uQRCode]: canvasId must be set!");
          this.isError = true;
          this.drawing = false;
          callback.fail({
            errMsg: "[uQRCode]: canvasId must be set!"
          });
          callback.complete({
            errMsg: "[uQRCode]: canvasId must be set!"
          });
          return;
        }
        if (!this.value) {
          formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/uv-qrcode.vue:337", "[uQRCode]: value must be set!");
          this.isError = true;
          this.drawing = false;
          callback.fail({
            errMsg: "[uQRCode]: value must be set!"
          });
          callback.complete({
            errMsg: "[uQRCode]: value must be set!"
          });
          return;
        }
        this.templateOptions = this.getTemplateOptions();
        this.uqrcodeOptions = this.getUqrcodeOptions();
        if (typeof this.uqrcodeOptions.errorCorrectLevel === "string") {
          this.uqrcodeOptions.errorCorrectLevel = b.errorCorrectLevel[this.uqrcodeOptions.errorCorrectLevel];
        }
        if (typeof this.options.useDynamicSize === "undefined") {
          this.uqrcodeOptions.useDynamicSize = true;
        }
        const qr = instance = new b();
        this.plugins.forEach((p2) => qr.register(p2.plugin));
        qr.setOptions(this.uqrcodeOptions);
        qr.make();
        let canvasContext = null;
        if (this.canvasType === "2d") {
          canvasContext = this.canvasContext = uni.createCanvasContext(this.canvasId, this);
          this.templateOptions.canvasWidth = qr.dynamicSize;
          this.templateOptions.canvasHeight = qr.dynamicSize;
          this.templateOptions.canvasTransform = `scale(${this.templateOptions.size / this.templateOptions.canvasWidth}, ${this.templateOptions.size / this.templateOptions.canvasHeight})`;
          qr.loadImage = this.getLoadImage(function(src) {
            return new Promise((resolve, reject) => {
              if (src.startsWith("http")) {
                uni.getImageInfo({
                  src,
                  success: (res) => {
                    resolve(res.path);
                  },
                  fail: (err) => {
                    reject(err);
                  }
                });
              } else {
                if (src.startsWith(".")) {
                  formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/uv-qrcode.vue:448", "[uQRCode]: 本地图片路径仅支持绝对路径！");
                  throw new Error("[uQRCode]: local image path only supports absolute path!");
                } else {
                  resolve(src);
                }
              }
            });
          });
        } else {
          canvasContext = this.canvasContext = uni.createCanvasContext(this.canvasId, this);
          this.templateOptions.canvasWidth = qr.dynamicSize;
          this.templateOptions.canvasHeight = qr.dynamicSize;
          this.templateOptions.canvasTransform = `scale(${this.templateOptions.size / this.templateOptions.canvasWidth}, ${this.templateOptions.size / this.templateOptions.canvasHeight})`;
          qr.loadImage = this.getLoadImage(function(src) {
            return new Promise((resolve, reject) => {
              if (src.startsWith("http")) {
                uni.getImageInfo({
                  src,
                  success: (res) => {
                    resolve(res.path);
                  },
                  fail: (err) => {
                    reject(err);
                  }
                });
              } else {
                if (src.startsWith(".")) {
                  formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/uv-qrcode.vue:481", "[uQRCode]: 本地图片路径仅支持绝对路径！");
                  throw new Error("[uQRCode]: local image path only supports absolute path!");
                } else {
                  resolve(src);
                }
              }
            });
          });
        }
        qr.canvasContext = canvasContext;
        setTimeout(() => {
          var plugin = this.plugins.find((p2) => p2.name == qr.style);
          var drawCanvasName = plugin ? plugin.drawCanvas : "drawCanvas";
          var drawCanvas;
          if (this.queue) {
            drawCanvas = () => queueDraw.exec(() => qr[drawCanvasName]());
          } else {
            drawCanvas = () => qr[drawCanvasName]();
          }
          drawCanvas().then(() => {
            if (this.drawDelegate) {
              let delegate = this.drawDelegate;
              this.drawDelegate = void 0;
              delegate();
            } else {
              this.drawing = false;
              callback.success();
            }
          }).catch((err) => {
            formatAppLog("log", "at uni_modules/uv-qrcode/components/uv-qrcode/uv-qrcode.vue:553", err);
            if (this.drawDelegate) {
              let delegate = this.drawDelegate;
              this.drawDelegate = void 0;
              delegate();
            } else {
              this.drawing = false;
              this.isError = true;
              callback.fail(err);
            }
          }).finally(() => {
            callback.complete();
          });
        }, 300);
      },
      /**
       * 生成二维码
       */
      make(callback = {}) {
        this.makeExecuted = true;
        this.makeing = true;
        this.isError = false;
        if (typeof callback.success != "function") {
          callback.success = () => {
          };
        }
        if (typeof callback.fail != "function") {
          callback.fail = () => {
          };
        }
        if (typeof callback.complete != "function") {
          callback.complete = () => {
          };
        }
        this.resetCanvas(() => {
          clearTimeout(this.makeDelegate);
          this.makeDelegate = setTimeout(() => {
            this.draw({
              success: () => {
                setTimeout(() => {
                  callback.success();
                  this.complete(true);
                }, 300);
              },
              fail: (err) => {
                callback.fail(err);
                this.error = err;
                this.complete(false, err.errMsg);
              },
              complete: () => {
                callback.complete();
                this.makeing = false;
              }
            });
          }, 300);
        });
      },
      /**
       * 重新生成
       */
      remake(callback) {
        this.$emit("change");
        this.make(callback);
      },
      /**
       * 生成完成
       */
      complete(success = true, errMsg = "") {
        if (success) {
          this.$emit("complete", {
            success
          });
        } else {
          this.$emit("complete", {
            success,
            errMsg
          });
        }
      },
      /**
       * 导出临时路径
       */
      toTempFilePath(callback = {}) {
        if (typeof callback.success != "function") {
          callback.success = () => {
          };
        }
        if (typeof callback.fail != "function") {
          callback.fail = () => {
          };
        }
        if (typeof callback.complete != "function") {
          callback.complete = () => {
          };
        }
        if (!this.makeExecuted) {
          formatAppLog("error", "at uni_modules/uv-qrcode/components/uv-qrcode/uv-qrcode.vue:648", "[uQRCode]: make() 方法从未调用！请先成功调用 make() 后再进行操作。");
          var err = {
            errMsg: "[uQRCode]: make() method has never been executed! please execute make() successfully before operating."
          };
          callback.fail(err);
          callback.complete(err);
          return;
        }
        if (this.isError) {
          callback.fail(this.error);
          callback.complete(this.error);
          return;
        }
        if (this.makeing) {
          this.toTempFilePathDelegate = () => {
            this.toTempFilePath(callback);
          };
          return;
        } else {
          this.toTempFilePathDelegate = null;
        }
        if (this.canvasType === "2d")
          ;
        else {
          uni.canvasToTempFilePath(
            {
              canvasId: this.canvasId,
              fileType: this.fileType,
              width: Number(this.templateOptions.canvasWidth),
              height: Number(this.templateOptions.canvasHeight),
              destWidth: Number(this.templateOptions.size),
              destHeight: Number(this.templateOptions.size),
              success: (res) => {
                callback.success(res);
              },
              fail: (err2) => {
                callback.fail(err2);
              },
              complete: () => {
                callback.complete();
              }
            },
            this
          );
        }
      },
      /**
       * 保存
       */
      save(callback = {}) {
        if (typeof callback.success != "function") {
          callback.success = () => {
          };
        }
        if (typeof callback.fail != "function") {
          callback.fail = () => {
          };
        }
        if (typeof callback.complete != "function") {
          callback.complete = () => {
          };
        }
        this.toTempFilePath({
          success: (res) => {
            if (this.canvasType === "2d")
              ;
            else {
              uni.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: (res1) => {
                  callback.success(res1);
                },
                fail: (err1) => {
                  callback.fail(err1);
                },
                complete: () => {
                  callback.complete();
                }
              });
            }
          },
          fail: (err) => {
            callback.fail(err);
            callback.complete(err);
          }
        });
      },
      /**
       * 注册click事件
       */
      onClick(e2) {
        this.$emit("click", e2);
      },
      /**
       * 获取实例
       */
      getInstance() {
        return instance;
      },
      /**
       * 注册扩展，组件仅支持注册type为style的drawCanvas扩展
       * @param {Object} plugin
       */
      registerStyle(plugin) {
        if (plugin.Type != "style") {
          formatAppLog("warn", "at uni_modules/uv-qrcode/components/uv-qrcode/uv-qrcode.vue:850", "[uQRCode]: registerStyle 仅支持注册 style 类型的扩展！");
          return {
            errMsg: "registerStyle 仅支持注册 style 类型的扩展！"
          };
        }
        if (typeof plugin === "function") {
          this.plugins.push({
            plugin,
            name: plugin.Name,
            drawCanvas: plugin.DrawCanvas
          });
        }
      },
      getLoadImage(loadImage) {
        var that = this;
        if (typeof loadImage == "function") {
          return function(src) {
            if (that.isQueueLoadImage) {
              return queueLoadImage.exec(() => {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const cache = cacheImageList.find((x) => x.src == src);
                    if (cache) {
                      resolve(cache.img);
                    } else {
                      loadImage(src).then((img) => {
                        cacheImageList.push({
                          src,
                          img
                        });
                        resolve(img);
                      }).catch((err) => {
                        reject(err);
                      });
                    }
                  }, 10);
                });
              });
            } else {
              return loadImage(src);
            }
          };
        } else {
          return function(src) {
            return Promise.resolve(src);
          };
        }
      }
    }
  };
  function deepReplace(o2 = {}, r2 = {}, c2 = false) {
    let obj;
    if (c2) {
      obj = o2;
    } else {
      obj = {
        ...o2
      };
    }
    for (let k in r2) {
      var vr = r2[k];
      if (vr != void 0) {
        if (vr.constructor == Object) {
          obj[k] = this.deepReplace(obj[k], vr);
        } else if (vr.constructor == String && !vr) {
          obj[k] = obj[k];
        } else {
          obj[k] = vr;
        }
      }
    }
    return obj;
  }
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uqrcode", { "uqrcode-hide": _ctx.hide }]),
        style: vue.normalizeStyle({ width: `${$data.templateOptions.width}px`, height: `${$data.templateOptions.height}px` })
      },
      [
        vue.createElementVNode("view", { class: "uqrcode-canvas-wrapper" }, [
          vue.createCommentVNode(" 画布 "),
          $data.templateOptions.canvasDisplay ? (vue.openBlock(), vue.createElementBlock("canvas", {
            key: 0,
            class: "uqrcode-canvas",
            id: $data.canvasId,
            "canvas-id": $data.canvasId,
            type: $data.canvasType,
            style: vue.normalizeStyle({
              width: `${$data.templateOptions.canvasWidth}px`,
              height: `${$data.templateOptions.canvasHeight}px`,
              transform: $data.templateOptions.canvasTransform
            }),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
          }, null, 12, ["id", "canvas-id", "type"])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" nvue用gcanvas ")
        ]),
        vue.createCommentVNode(" 加载效果 "),
        (_ctx.loading === void 0 || !_ctx.loading ? $data.makeing : _ctx.loading) ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uqrcode-makeing"
        }, [
          vue.renderSlot(_ctx.$slots, "loading", {}, () => [
            vue.createElementVNode(
              "image",
              {
                class: "uqrcode-makeing-image",
                style: vue.normalizeStyle({ width: `${$data.templateOptions.size / 4}px`, height: `${$data.templateOptions.size / 4}px` }),
                src: "data:image/gif;base64,R0lGODlhAAEAAfIEAOHh4SSsWuDg4N3d3f///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyODhGMzM4RDEwMTExRUM4MDhCRkVBQkE2QUZDQzkwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyODhGMzM5RDEwMTExRUM4MDhCRkVBQkE2QUZDQzkwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDI4OEYzMzZEMTAxMTFFQzgwOEJGRUFCQTZBRkNDOTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDI4OEYzMzdEMTAxMTFFQzgwOEJGRUFCQTZBRkNDOTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFFAAEACwAAAAAAAEAAQAD/0i63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanigCqq6ytrieusbISAbW2t7i5uru8vb66bLLCrLDDw7S/ycrLzLXBxsLF0LHIzdbXzc/Trybb1BHY4eK92t6r0uaq1ePs4+Xp6PDg7fTh7+bx+PP1/Mz33vkA7utH0Ne/bQERDizIMNfBaQkhLmxIMcBDaBExTqzI8P+isYwfN3Ik6PFYt3TnRI7kVzLaSZQA1q0s2HLWS5QyZ/ar+a0ETHUqdbLjyc3nz5xC6RFtBdIkhKQ01/yMeVPeU6g7pR6tqu8q1npLiXEV6PVru7ApjcJEquyEPa1rxyosm83EWzVTm7qk688uNrRA1eIMatDvNcBUBVt9cJdEYzR55Urku8ztX7iDFXdlfLnE4zORNZPlfNiwNcR6bVJua7ou3q2i55I+3brv67ixJ8927bhzmtAkgDv4HIJ4GeEikDMw/oH5GOUgoCtw3oF6GOkesFvfsP0L9g7afY/o7uU7h/ClPYsHDTt4++Hri8c//j55/eXzm+d/fj96/+n/+1UX4HX/ZVcgeRggyIV5G6BHmycMauAgb5xEmMGEtnViIQYYVvbJhhd0yBqEBYJ34ICUgGiBiMmAomIFLP7iYonnnZiehjQ2aOODOE7l449MERbVai1iBuSRO67EVpG3IenkYvDptKSMRj5pZUhENjRlYU1e6aVqu420JTlVfmlmYGFyNCYviJ2ZWZoVrblLm25uFuVMcgJTZp1X5gmWkGzuyeeTfioF6JyCDopkoWcdqmeXilrJ6FCOOpRopD9O6k6luNCJ6V5wUqSpRZd+mqSYnN7iqalFhaplqrasyqpYWXYEqzOlzmpnA0mNKquuiblqa61kQgrsqWreSqqx/8e+eaeSyqIi7bTUVmvttdhmq+223Hbr7bejCCDuuOSWa+656Kar7rrnSjDAu/DGK++89NZr77340vsru/z2224E+QYs8MAEw7uvvwj3627BDDfM8MEJR5zuwg5XbHG9EEusMbkUX+zxxRlvvHHHH5f8cK4ip+wvySa3HHDIKifMsss0Y4xyzDijO3PNPBt8c85Aj7tzzzzDHPS6QxNNs9FHTwyw0lAPwHTT/0IQNdRTU11u0ld/nLXWQj/dddE/g50y12Nb/LXZaKft8Npgt+32ycyafbTccxMMt9Z45y3w3lT37Xe+qEnGruDxzihxalU/ULHiETNuLuI+k7i44f9Ii013j5Fjri7l70Ius+dOW/32hxpLvrXmBYuOsOocs6436pfndrjsA7u+Muk64/437Z3bnrnpDeuuMO+NO/A48KML/7nvLzP/OvKTQ0+49Ls7X7rjp1sevHu1c1889sdr3zvxm1eYOvWro986+fzCHrb7s3vfPPjfK9895/ePMLL1+DKe3c6Hv/fZb4DPM5++4IfA9hWwfvxrIAH9tz/1STCBD8wdAy8oNfYlboMXlF/oQChBEXbwgByMnQLnJcAUmrCFHDTh4FhYNrZ5cIY2q5sLb4hDGuowhjzs4Qd/GMIgCnGERCyhEY8IOAxS8IgVZE8Kk2cfKI4viQ2UIRPAaxi3JQqxiXcDoBXtVbgVOlB/YzTgb9ZnRhWKL40axCIVQ/A/+sExgFwU1wvFeMchrjF8T8xfA/oYxz8Kko5sfCMh71XGDJZPkYvMoSH7V8VDLiCS15Nj9do4P0hiUl6NDCQlGfBJRoLrlKhMpSpXycpWuvKVsIylLGdJy1ra8pa4zKUud8nLXvryl8AMpjCHScxiGvOYyEymMpfJzGY685nQjKY0p0nNalrzmtjMpja3yc1uevOb4AynOMdJhwQAACH5BAUUAAQALDIAMgCcAJwAAAP/KLrcTjDKSWt0OFsIuv9gKI5kaZ6Ztq1s6iorKs90/apsTt1pbP/AIA+mK16Gj41wyWwan8ikpUmtRp/GaMNn7Xq3WJ2Wwf2arWHxmDg9u6np3JpdeduX8da8fO8j83xXSn6EQ4CDa4GFi2CHO3uIjJJkjo+JkZOTlZZjipmFmxNzAp6ffqESo6Wmd6hHl22sjK4ckLGyoLSqmLh9tAS7t72+urZ1QL+LycacNcuEz528M9HErsHHP9WtxbDZNtt24YbTMuNu5zerJulm7S7rJe9e8zjfzt2n+VrxJPVo+wQJo/GvSsFG9wgGFLeQ3EBqDdFFVFcOxUEnE1/0G3GR/0lHOs0UXss10ltIiCX1peRX8cRHIS83iniJLVRNUcgyfonZkp1Oej/tnTT3K87NSkdfgSuaJukhp8ByMsUCNQ/UIFPDVDXKDKe2rFC6IhWrFB/YIlubkq319awak5uuSnWrB+5Yu2VF0pUpBZXctnt7jhqMl63KhMMIU3z4hm9ixY4xMn6sGENkj4IpVyaVuctlzdImn/kMWiDixp1L/z08VPVm0lhTuw59WqLo2YNhz22NO7dsOL9789ANmLfwwlGhBT8Obzke58wtQ499O/qf6bu9WvddHWj37RqxF9cOHrky8ZvTs/wOkH2IwPDjy59Pv779+/jz69/Pv7////8ABijggAQWaOCBCCao4FQDNOjggxBGKOGEFFZooYQrBKDhhhx26OGHIIYo4ogfXmjiiSim6GCGJLbo4oswaqjijDTSyGKMOOYYY4089ljhjToGKWSJPhZpJJBDJimkkUz2iKSSUO7Y5JQqPhnllSRSqeWJVmLpJZFbhjlhl1+WKaOYaEJIpplfpulmg2uyieWbbsYpZ5R0pmnnnUrmieaefA7pp5iABhrkoGEWamiOiG6p6KJSNjrlo5C+KCmVlFba4qWTbqCpl5w2memnIvLIkwVB6mdqUBh6qqOqNZ5aQar5rbpSiqMGAKuNrEaY664zykoBrfjZ6lesruYIbJX/vaqZLI7L4trsg7/WiuytKFZb7LXH8orqq9Z6222wz8YYbbbTrlgujOdymS6c677YronCTkDsfcbaxO2w4G4rrr7/2tsvvvvGVbAE99qXr8EBIzywwgc7srDDyoZLLrbufluxv6EOUFTC9XWsLi0g0ycyvCQ/HPLJH6tsMsu/lDzfyR7H7PLMMKe8McEit7wzxD3b/PPKQesMrcWh+kxqnzm7sjSeTaPyNJQ0Kz31oVGHcnWSVQu9tY5dG/01jmE7PTbYWW9yNtpFm712pDQ3HMHbZEf8lN0E0A03sxjTG6/eIU4sMd6AW4q3VYQXvunhXMkNgeKLOw6I4I9DPiLlGZMnbnngjKsl+ealdq6V5qB7iDnin5f+YQIAIfkEBRQABAAsMgAyAJwAnAAAA/84utxOMMpJa3Q4Wyi6/2AojmRpnpm2rWzqKisqz3T9qmxO3Wls/8AgD6YrXoaPjXDJbBqfyKSlSa1Gn8Zow2fterdYnZbB/ZqtYfGYOD27qencml1525fx1rx87yPzfFdKfoRDgINrgYWLYIc7e4iMkmSOj4mRk5OVlmOKmYWbE3MDnp9+oRKjpaZ3qEeXbayMrhyQsbKgtKqYuH20BLu3vb66tnVAv4vJxpw1y4TPnbwz0cSuwcc/1a3FsNk223bhhtMy427nN6sm6WbtLusl717zON/O3af5WvEk9Wj7BAmj8a9KwUb3CAYUt5DcQGoN0UVUVw7FQScTX/QbcZH/SUc6zRReyzXSW0iIJfWl5FfxxEchLzeKeIktVE1RyDJ+idmSnU56P+2dNPcrzs1KR1+BK5om6SGnwHIyxQI1D9QgU8NUNcoMp7asULoiFasUH9giW5uSrfX1rBqTm65KdasH7li7ZUXSlSkFldy2e3uOGoyXrcqEwwhTfPiGb2LFjjEyfqwYQ2SPgilXJpW5y2XN0iaf+QxaIOLGnUv/PTxU9WbSWFO7Dn1aoujZg2HPbY07t2w4v3vz0A2Yt/DCUaEFPw5vOR7nzC1Dj307+p/pu71a910daPftGrEX1w4euTLxm9Oz/A6QfYjA8OPLn0+/vv37+PPr38+/v////wAGKOCABBZo4IEIJqjgVAE06OCDEEYo4YQUVmihhMQBoOGGHHbo4YcghsjhhSSWaOKJDmYo4oostqghijDGGKOKLtZo44sy5qgjhTTe6OOKOwYpZAA9/mikh0MmKWORRzYJgJJQnsikk0ZGaeWFU1Lp45VcTpilljZ2KeaDX4Lp4pholmkmi2iOqeaaIrYp5ptwgihnl3TWieSdV+ap54h8WunnnzgGCuWghBoaJaJ/KnooeoTW6KiSjOo5aZKV1pnjL5tCp1+nroBaG4ufLkmLqMaJWOqMp5rqXoerwsipq6OuGCuKs7L6Koe3StmqrrWqmh+qmxCbipG9mpirrP+eDktrKMbmVWOyJS6La7P4RXuItsn5SC2J1vq664bfYvkrs+NqWK6F4SqL7X3c5sHtketW2G6179oXbxzzIusssNA+S56N9fJ47rXpAlCwlweLG2yIC7fJU7aXkhnUhxGnebGHGbu5Maz/Vkzkx7yGXPHE8IrcIMr6qjzySgSbfCnL9bn8sl/+UqwyTZHeaDPPPUvqMtBBt/gzyUVvOTTSSYe5NMxNr3k01FGDOTXOVWv6NNZZS721TV3DaXO/YZu5bxpkl63l2WGkrbaTbGPh9ttHxv3E3HT/aLcReOfts8CV9O230AAXC7i0gxOOLiqCJ87m4dtC3q3jThceuOQElP+YAAAh+QQFFAAEACwyADIAnACcAAAD/xi63E4wyklrdDhbOLr/YCiOZGmKWcpsbEuoMHvOdG17sOruVJ7Kt6Aw6NPwjq/iYzNsOkvKJXIXbQCfWGx1NaVuFdesWPgFd13lQHjMpqXP6PK6TSe94ay7pc6HyvEbehV9hCGCgBOHE4WMHYqIEI8RjYySiJYElIWYeJiahJxwnp98oWejpHSmXaipbKtTra5isEiys1p/kIm6g7hjtUe3v03BPMM0uxTFvcpJX3M1zhLM0NORzYtD1xxDxl7We9vc1Vvcz+ZM49flVefIM+ftUe/Z1OvT80r14b5C8t7sQYJ3AiAZgZcQZsLnTF8RfunE/SMXsJ8zgiYMElHYSf9hE403vsWxqG0iu4oRp2EsAdKGyBYrSbSs8TKPR4bKHPqA6E6dyXwoe16LOWKmG46ibv5sGJQeN6IijM6oGUhpkHMdSe6CGgJrUq0Drd7wegppWbDdlpIFl/KiWBtrY5ll9VZaXGFz5aJdqPZu1b1Z25a86petUJV1kxUeKXhr4niLYaaZTFmKP03RjlbePDkzIc8nOIt+3Ae0idGonUrE7HNj6tc6WlMy7Qe2bcvLSNG2c7v3gt1tgKPw7Vv4GOMgiBeX3Qj5B+W9nWOR7gi6bepOsFu/zpyR9u2vsX/srhn8aPE47x00f578Z/eh2bdfPRv+afmi0fed1BQ/VzH/3/lXmX6E0eeSgAPaV0eACP6XBXaRRSjhhBRWaOGFGGao4YYcdujhhyCGKOKIJJZo4okopqjiimQB4OKLMMYo44w01mjjjTMSKMCOPPbo449ABinkkDgWaeSROOpI5JJMNonkk1BGqaSTVFYZ5ZVY3jillVx2meWXSG7p5Zhkgmmmi2KWqeaZbBqZ5ppwtilnjG/GaeecbNZ55554Yqknn4D2eeSfgRYqaI2EGqrooS8muiijkDr6KKSCSjoppXNaeimmeSq46aec2qgpqKH66SmpqJYKwKipqjroqa3yKVWSsP64oaknSVmrj7deOauWu/bYq665QgmhhrgCRexl/1UOayxFy+bGpbNP/ipqsDxSGya0zxropLavFlsttjuC6ya343rbpLlFWosouQKwS6u426rLpLzA0hsus1Tie62+59q7pL/vAtwuvATT6K7CCCPrK7r18vutw9Hm9LDARCacI8T7SmulxjIuvDHGQ4JMJ8cBS7wuxa6GjPK9LLcMo8i2xiwzmi8PbPPNNPO6s8w9C/tzy0FnO7SrRZd7tKpJx7t0qU2bzGjUT4fadKxYn2xw1lwfvHXXYDP8ddhkN5pz2WhfjTbQZ68dttpuM9123De7PDbddZvJatZUk4x3xbsk6/Hfa/atMuGCWww4f4gXPrfYhzferbKTDy554hmBXxz55R0rXvlgnGvO1OJphS665+luTncCADs="
              },
              null,
              4
              /* STYLE */
            )
          ], true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 错误处理 "),
        $data.isError ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uqrcode-error",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "error", { error: $data.error }, () => [
            vue.createElementVNode(
              "text",
              { class: "uqrcode-error-message" },
              vue.toDisplayString($data.error.errMsg),
              1
              /* TEXT */
            )
          ], true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" H5保存提示 ")
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render], ["__scopeId", "data-v-ff61d38d"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/uv-qrcode/components/uv-qrcode/uv-qrcode.vue"]]);
  function parseFormat(format, timeData) {
    const { days } = timeData;
    let { hours, minutes, seconds, milliseconds } = timeData;
    if (format.includes("DD")) {
      format = format.replace("DD", padZero$1(days));
    } else {
      hours += days * 24;
    }
    if (format.includes("HH")) {
      format = format.replace("HH", padZero$1(hours));
    } else {
      minutes += hours * 60;
    }
    if (format.includes("mm")) {
      format = format.replace("mm", padZero$1(minutes));
    } else {
      seconds += minutes * 60;
    }
    if (format.includes("ss")) {
      format = format.replace("ss", padZero$1(seconds));
    } else {
      milliseconds += seconds * 1e3;
    }
    if (format.includes("S")) {
      const ms = padZero$1(milliseconds, 3);
      if (format.includes("SSS")) {
        format = format.replace("SSS", ms);
      } else if (format.includes("SS")) {
        format = format.replace("SS", ms.slice(0, 2));
      } else {
        format = format.replace("S", ms.charAt(0));
      }
    }
    return format;
  }
  const SECOND = 1e3;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  function parseTime(time) {
    const days = Math.floor(time / DAY);
    const hours = Math.floor(time % DAY / HOUR);
    const minutes = Math.floor(time % HOUR / MINUTE);
    const seconds = Math.floor(time % MINUTE / SECOND);
    const milliseconds = Math.floor(time % SECOND);
    return {
      total: time,
      days,
      hours,
      minutes,
      seconds,
      milliseconds
    };
  }
  function isSameSecond(time1, time2) {
    return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
  }
  function raf(fn) {
    return setTimeout(fn, 33);
  }
  function cancelRaf(id) {
    {
      clearTimeout(id);
    }
  }
  function useCountDown(options) {
    let timer2 = null;
    let endTime;
    let counting;
    const remain = vue.ref(options.time);
    const current = vue.computed(() => parseTime(remain.value));
    const pause = () => {
      counting = false;
      cancelRaf(timer2);
    };
    const getCurrentRemain = () => Math.max(endTime - Date.now(), 0);
    const setRemain = (value) => {
      remain.value = value;
      isDef(options.onChange) && options.onChange(current.value);
      if (value === 0) {
        pause();
        isDef(options.onFinish) && options.onFinish();
      }
    };
    const microTick = () => {
      timer2 = raf(() => {
        if (counting) {
          setRemain(getCurrentRemain());
          if (remain.value > 0) {
            microTick();
          }
        }
      });
    };
    const macroTick = () => {
      timer2 = raf(() => {
        if (counting) {
          const remainRemain = getCurrentRemain();
          if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
            setRemain(remainRemain);
          }
          if (remain.value > 0) {
            macroTick();
          }
        }
      });
    };
    const tick = () => {
      if (options.millisecond) {
        microTick();
      } else {
        macroTick();
      }
    };
    const start = () => {
      if (!counting) {
        endTime = Date.now() + remain.value;
        counting = true;
        tick();
      }
    };
    const reset = (totalTime = options.time) => {
      pause();
      remain.value = totalTime;
    };
    vue.onBeforeUnmount(pause);
    return {
      start,
      pause,
      reset,
      current
    };
  }
  const countDownProps = {
    ...baseProps,
    /**
     * 倒计时时长，单位毫秒
     */
    time: makeRequiredProp(Number),
    /**
     * 是否开启毫秒
     */
    millisecond: makeBooleanProp(false),
    /**
     * 格式化时间
     */
    format: makeStringProp("HH:mm:ss"),
    /**
     * 是否自动开始
     */
    autoStart: makeBooleanProp(true)
  };
  const __default__$g = {
    name: "wd-count-down",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$C = /* @__PURE__ */ vue.defineComponent({
    ...__default__$g,
    props: countDownProps,
    emits: ["change", "finish"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const { start, pause, reset, current } = useCountDown({
        time: props2.time,
        millisecond: props2.millisecond,
        onChange: (current2) => emit("change", current2),
        onFinish: () => emit("finish")
      });
      const timeText = vue.computed(() => parseFormat(props2.format, current.value));
      const resetTime = () => {
        reset(props2.time);
        if (props2.autoStart) {
          start();
        }
      };
      vue.watch(() => props2.time, resetTime, { immediate: true });
      __expose({
        start,
        pause,
        reset: resetTime
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(`wd-count-down ${_ctx.customClass}`),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", {
              key: 0,
              current: vue.unref(current)
            }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createTextVNode(
                  vue.toDisplayString(timeText.value),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-dfe7461b"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-count-down/wd-count-down.vue"]]);
  const loadingProps = {
    ...baseProps,
    /**
     * 加载指示器类型，可选值：'outline' | 'ring' | 'circle-outline' | 'circle-ring'
     */
    type: makeStringProp("ring"),
    /**
     * 设置加载指示器颜色
     */
    color: makeStringProp("#4D80F0"),
    /**
     * 设置加载指示器大小
     */
    size: makeNumericProp("32px")
  };
  const __default__$f = {
    name: "wd-loading",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$B = /* @__PURE__ */ vue.defineComponent({
    ...__default__$f,
    props: loadingProps,
    setup(__props) {
      const svgDefineId = context.id++;
      const svgDefineId1 = context.id++;
      const svgDefineId2 = context.id++;
      const icon = {
        outline(color = "#4D80F0") {
          return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="${svgDefineId}"><stop stop-color="#FFF" offset="0%" stop-opacity="0"/><stop stop-color="#FFF" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${color}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#${svgDefineId}) " stroke-width="3.5" stroke-linecap="round"/></g></svg>`;
        },
        ring(color = "#4D80F0", intermediateColor2 = "#a6bff7") {
          return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="${svgDefineId1}" gradientUnits="userSpaceOnUse" x1="50" x2="50" y2="180"><stop offset="0" stop-color="${color}"></stop> <stop offset="1" stop-color="${intermediateColor2}"></stop></linearGradient> <path fill="url(#${svgDefineId1})" d="M20 100c0-44.1 35.9-80 80-80V0C44.8 0 0 44.8 0 100s44.8 100 100 100v-20c-44.1 0-80-35.9-80-80z"></path> <linearGradient id="${svgDefineId2}" gradientUnits="userSpaceOnUse" x1="150" y1="20" x2="150" y2="180"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop> <stop offset="1" stop-color="${intermediateColor2}"></stop></linearGradient> <path fill="url(#${svgDefineId2})" d="M100 0v20c44.1 0 80 35.9 80 80s-35.9 80-80 80v20c55.2 0 100-44.8 100-100S155.2 0 100 0z"></path> <circle cx="100" cy="10" r="10" fill="${color}"></circle></svg>`;
        }
      };
      const props2 = __props;
      const svg = vue.ref("");
      const intermediateColor = vue.ref("");
      const iconSize = vue.ref("32px");
      vue.watch(
        () => props2.size,
        (newVal) => {
          iconSize.value = addUnit$1(newVal);
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.type,
        () => {
          buildSvg();
        },
        {
          deep: true,
          immediate: true
        }
      );
      const rootStyle = vue.computed(() => {
        const style = {
          width: iconSize.value,
          height: iconSize.value
        };
        return `${objToStyle(style)}; ${props2.customStyle}`;
      });
      const rootClass = vue.computed(() => {
        return `wd-loading  ${props2.customClass}`;
      });
      vue.onBeforeMount(() => {
        intermediateColor.value = gradient(props2.color, "#ffffff", 2)[1];
        buildSvg();
      });
      function buildSvg() {
        const { type, color } = props2;
        let adaptType = "ring";
        if (type === "circle-outline") {
          adaptType = "outline";
        } else if (type === "outline") {
          adaptType = "outline";
        } else if (type === "circle-ring") {
          adaptType = "ring";
        }
        const svgStr = `"data:image/svg+xml;base64,${encode(
          adaptType === "ring" ? icon[adaptType](color, intermediateColor.value) : icon[adaptType](color)
        )}"`;
        svg.value = svgStr;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(rootClass.value),
            style: vue.normalizeStyle(rootStyle.value)
          },
          [
            !_ctx.type || _ctx.type === "ring" || _ctx.type === "circle-ring" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "wd-loading__body"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "wd-loading__svg",
                  style: vue.normalizeStyle(`background-image: url(${svg.value});`)
                },
                null,
                4
                /* STYLE */
              )
            ])) : vue.createCommentVNode("v-if", true),
            _ctx.type === "circle-outline" || _ctx.type === "outline" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "wd-loading__body"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "wd-loading__svg",
                  style: vue.normalizeStyle(`background-image: url(${svg.value});`)
                },
                null,
                4
                /* STYLE */
              )
            ])) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-f2b508ee"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-loading/wd-loading.vue"]]);
  function chooseFile({ multiple, sizeType, sourceType, maxCount }) {
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count: multiple ? Math.min(maxCount, 9) : 1,
        // 最多可以选择的数量，如果不支持多选则数量为1
        sizeType,
        sourceType,
        success: resolve,
        fail: reject
      });
    });
  }
  const uploadProps = {
    ...baseProps,
    /**
     * 上传的文件列表,例如:[{name:'food.jpg',url:'https://xxx.cdn.com/xxx.jpg'}]
     * 类型：array
     * 默认值：[]
     */
    fileList: makeArrayProp(),
    /**
     * 必选参数，上传的地址
     * 类型：string
     * 默认值：''
     */
    action: makeStringProp(""),
    /**
     * 设置上传的请求头部
     * 类型：object
     * 默认值：{}
     */
    header: { type: Object, default: () => {
    } },
    /**
     * 是否支持多选文件
     * 类型：boolean
     * 默认值：false
     */
    multiple: makeBooleanProp(false),
    /**
     * 是否禁用
     * 类型：boolean
     * 默认值：false
     */
    disabled: makeBooleanProp(false),
    /**
     * 最大允许上传个数
     * 类型：number
     * 默认值：0
     */
    limit: makeNumberProp(0),
    /**
     * 限制上传个数的情况下，是否展示当前上传的个数
     * 类型：boolean
     * 默认值：true
     */
    showLimitNum: makeBooleanProp(true),
    /**
     * 文件大小限制，单位为byte
     * 类型：number
     * 默认值：Number.MAX_VALUE
     */
    maxSize: makeNumberProp(Number.MAX_VALUE),
    /**
     * 选择图片的来源，chooseImage接口详细参数，查看官方手册
     * 类型：array
     * 默认值：['album','camera']
     */
    sourceType: {
      type: Array,
      default: () => ["album", "camera"]
    },
    /**
     * 所选的图片的尺寸，chooseImage接口详细参数，查看官方手册
     * 类型：array
     * 默认值：['original','compressed']
     */
    sizeType: {
      type: Array,
      default: () => ["original", "compressed"]
    },
    /**
     * 文件对应的key，开发者在服务端可以通过这个key获取文件的二进制内容，uploadFile接口详细参数，查看官方手册
     * 类型：string
     * 默认值：'file'
     */
    name: makeStringProp("file"),
    /**
     * HTTP请求中其他额外的formdata，uploadFile接口详细参数，查看官方手册
     * 类型：object
     * 默认值：{}
     */
    formData: { type: Object, default: () => {
    } },
    /**
     * 预览失败执行操作
     * 类型：function({index,imgList})
     * 默认值：-
     */
    onPreviewFail: Function,
    /**
     * 上传文件之前的钩子，参数为上传的文件和文件列表，若返回false或者返回Promise且被reject，则停止上传。
     * 类型：function({files,fileList,resolve})
     * 默认值：-
     */
    beforeUpload: Function,
    /**
     * 选择图片之前的钩子，参数为文件列表，若返回false或者返回Promise且被reject，则停止上传。
     * 类型：function({fileList,resolve})
     * 默认值：-
     */
    beforeChoose: Function,
    /**
     * 删除文件之前的钩子，参数为要删除的文件和文件列表，若返回false或者返回Promise且被reject，则停止上传。
     * 类型：function({file,fileList,resolve})
     * 默认值：-
     */
    beforeRemove: Function,
    /**
     * 图片预览前的钩子，参数为预览的图片下标和图片列表，若返回false或者返回Promise且被reject，则停止上传。
     * 类型：function({index,imgList,resolve})
     * 默认值：-
     */
    beforePreview: Function,
    /**
     * 构建上传formData的钩子，参数为上传的文件、待处理的formData，返回值为处理后的formData，若返回false或者返回Promise且被reject，则停止上传。
     * 类型：function({file,formData,resolve})
     * 默认值：-
     * 最低版本：0.1.61
     */
    buildFormData: Function,
    /**
     * 加载中图标类型
     * 类型：string
     * 默认值：'ring'
     */
    loadingType: makeStringProp("ring"),
    /**
     * 加载中图标颜色
     * 类型：string
     * 默认值：'#ffffff'
     */
    loadingColor: makeStringProp("#ffffff"),
    accept: makeStringProp("image"),
    /**
     * file 数据结构中，status 对应的 key
     * 类型：string
     * 默认值：'status'
     */
    statusKey: makeStringProp("status"),
    /**
     * 开启默认唤起项插槽
     * 类型：boolean
     * 默认值：false
     */
    useDefaultSlot: makeBooleanProp(false),
    /**
     * 加载中图标尺寸
     * 类型：string
     * 默认值：'24px'
     */
    loadingSize: makeStringProp("24px"),
    customEvokeClass: makeStringProp(""),
    customPreviewClass: makeStringProp(""),
    /**
     * 预览图片的mode属性
     */
    imageMode: makeStringProp("aspectFit")
  };
  const __default__$e = {
    name: "wd-upload",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$A = /* @__PURE__ */ vue.defineComponent({
    ...__default__$e,
    props: uploadProps,
    emits: ["fail", "change", "success", "progress", "oversize", "chooseerror", "remove"],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const { translate } = useTranslate("upload");
      const uploadFiles = vue.ref([]);
      vue.watch(
        () => props2.fileList,
        (val) => {
          const { statusKey } = props2;
          if (isEqual(val, uploadFiles.value))
            return;
          const uploadFileList = val.map((item) => {
            item.uid = context.id++;
            item[statusKey] = item[statusKey] || "success";
            item.action = props2.action || "";
            item.response = item.response || "";
            return item;
          });
          uploadFiles.value = uploadFileList;
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.limit,
        (val) => {
          if (val && val < uploadFiles.value.length) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-upload/wd-upload.vue:91", "[wot-design]Error: props limit must less than fileList.length");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.beforePreview,
        (fn) => {
          if (fn && !isFunction(fn) && getType(fn) !== "asyncfunction") {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-upload/wd-upload.vue:104", "The type of beforePreview must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.onPreviewFail,
        (fn) => {
          if (fn && !isFunction(fn) && getType(fn) !== "asyncfunction") {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-upload/wd-upload.vue:117", "The type of onPreviewFail must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.beforeRemove,
        (fn) => {
          if (fn && !isFunction(fn) && getType(fn) !== "asyncfunction") {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-upload/wd-upload.vue:130", "The type of beforeRemove must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.beforeUpload,
        (fn) => {
          if (fn && !isFunction(fn) && getType(fn) !== "asyncfunction") {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-upload/wd-upload.vue:143", "The type of beforeUpload must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.beforeChoose,
        (fn) => {
          if (fn && !isFunction(fn) && getType(fn) !== "asyncfunction") {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-upload/wd-upload.vue:156", "The type of beforeChoose must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.buildFormData,
        (fn) => {
          if (fn && !isFunction(fn) && getType(fn) !== "asyncfunction") {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-upload/wd-upload.vue:169", "The type of buildFormData must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      function initFile(file) {
        const initState = {
          uid: context.id++,
          // 仅h5支持 name
          name: file.name || "",
          status: "loading",
          size: file.size,
          url: file.path,
          action: props2.action,
          percent: 0
        };
        uploadFiles.value.push(initState);
        const { buildFormData, formData = {} } = props2;
        if (buildFormData) {
          buildFormData({
            file: initState,
            formData,
            resolve: (formData2) => {
              formData2 && handleUpload(initState, formData2);
            }
          });
        } else {
          handleUpload(initState, formData);
        }
      }
      function handleError(err, file, formData) {
        const { statusKey } = props2;
        const index2 = uploadFiles.value.findIndex((item) => item.uid === file.uid);
        if (index2 > -1) {
          uploadFiles.value[index2][statusKey] = "fail";
          uploadFiles.value[index2].error = err.message;
          uploadFiles.value[index2].response = err;
          emit("fail", { error: err, file, formData });
        }
      }
      function handleSuccess(res, file, formData) {
        const { statusKey } = props2;
        const index2 = uploadFiles.value.findIndex((item) => item.uid === file.uid);
        if (index2 > -1) {
          uploadFiles.value[index2][statusKey] = "success";
          uploadFiles.value[index2].response = res.data;
          emit("change", { fileList: uploadFiles.value });
          emit("success", { file, fileList: uploadFiles.value, formData });
        }
      }
      function handleProgress(res, file) {
        const index2 = uploadFiles.value.findIndex((item) => item.uid === file.uid);
        if (index2 > -1) {
          uploadFiles.value[index2].percent = res.progress;
          emit("progress", { response: res, file });
        }
      }
      function handleUpload(file, formData) {
        const { action, name, header = {}, accept } = props2;
        const uploadTask = uni.uploadFile({
          url: action,
          header,
          name,
          fileName: name,
          fileType: accept,
          formData,
          filePath: file.url,
          success(res) {
            if (res.statusCode === 200) {
              handleSuccess(res, file, formData);
            } else {
              handleError(res, file, formData);
            }
          },
          fail(err) {
            handleError(err, file, formData);
          }
        });
        uploadTask.onProgressUpdate((res) => {
          handleProgress(res, file);
        });
      }
      function onChooseFile() {
        const { multiple, maxSize, accept, sizeType, limit, sourceType, beforeUpload } = props2;
        if (accept === "image") {
          chooseFile({
            multiple,
            sizeType,
            sourceType,
            maxCount: limit ? limit - uploadFiles.value.length : 9
          }).then((res) => {
            let files = Array.prototype.slice.call(res.tempFiles);
            if (!multiple) {
              files = files.slice(0, 1);
            }
            const mapFiles = (files2) => {
              files2.forEach(async (file) => {
                if (!isDef(file.size)) {
                  file.size = await getImageInfo(file.path);
                }
                file.size <= maxSize ? initFile(file) : emit("oversize", { file });
              });
            };
            if (beforeUpload) {
              beforeUpload({
                files,
                fileList: uploadFiles.value,
                resolve: (isPass) => {
                  isPass && mapFiles(files);
                }
              });
            } else {
              mapFiles(files);
            }
          }).catch((error2) => {
            emit("chooseerror", { error: error2 });
          });
        }
      }
      function getImageInfo(src) {
        return new Promise((resolve, reject) => {
          uni.getImageInfo({
            src,
            success: (res) => {
              resolve(res.height * res.width);
            },
            fail: () => {
              reject(0);
            }
          });
        });
      }
      function handleChoose() {
        if (props2.disabled)
          return;
        const { beforeChoose } = props2;
        if (beforeChoose) {
          beforeChoose({
            fileList: uploadFiles.value,
            resolve: (isPass) => {
              isPass && onChooseFile();
            }
          });
        } else {
          onChooseFile();
        }
      }
      function handleRemove(file, index2) {
        uploadFiles.value.splice(
          uploadFiles.value.findIndex((item) => item.uid === file.uid),
          1
        );
        emit("change", {
          fileList: uploadFiles.value
        });
        emit("remove", { file });
      }
      function removeFile(index2) {
        const { beforeRemove } = props2;
        const intIndex = index2;
        const file = uploadFiles.value[intIndex];
        if (beforeRemove) {
          beforeRemove({
            file,
            index: intIndex,
            fileList: uploadFiles.value,
            resolve: (isPass) => {
              isPass && handleRemove(file);
            }
          });
        } else {
          handleRemove(file);
        }
      }
      function onPreview(index2, lists) {
        const { onPreviewFail } = props2;
        uni.previewImage({
          urls: lists,
          current: lists[index2],
          fail() {
            if (onPreviewFail) {
              onPreviewFail({
                index: index2,
                imgList: lists
              });
            } else {
              uni.showToast({ title: "预览图片失败", icon: "none" });
            }
          }
        });
      }
      function onPreviewImage(index2) {
        const { beforePreview } = props2;
        const lists = uploadFiles.value.map((file) => file.url);
        if (beforePreview) {
          beforePreview({
            index: index2,
            imgList: lists,
            resolve: (isPass) => {
              isPass && onPreview(index2, lists);
            }
          });
        } else {
          onPreview(index2, lists);
        }
      }
      return (_ctx, _cache) => {
        const _component_wd_loading = resolveEasycom(vue.resolveDynamicComponent("wd-loading"), __easycom_0$1);
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(["wd-upload", _ctx.customClass]),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            vue.createCommentVNode(" 预览列表 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(uploadFiles.value, (file, index2) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    class: vue.normalizeClass(["wd-upload__preview", _ctx.customPreviewClass]),
                    key: index2
                  },
                  [
                    vue.createCommentVNode(" 成功时展示图片 "),
                    vue.createElementVNode("view", { class: "wd-upload__status-content" }, [
                      vue.createElementVNode("image", {
                        src: file.url,
                        mode: _ctx.imageMode,
                        class: "wd-upload__picture",
                        onClick: ($event) => onPreviewImage(index2)
                      }, null, 8, ["src", "mode", "onClick"])
                    ]),
                    file.status !== "success" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "wd-upload__mask wd-upload__status-content"
                    }, [
                      vue.createCommentVNode(" loading时展示loading图标和进度 "),
                      file.status === "loading" ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "wd-upload__status-content"
                      }, [
                        vue.createVNode(_component_wd_loading, {
                          type: _ctx.loadingType,
                          size: _ctx.loadingSize,
                          color: _ctx.loadingColor
                        }, null, 8, ["type", "size", "color"]),
                        vue.createElementVNode(
                          "text",
                          { class: "wd-upload__progress-txt" },
                          vue.toDisplayString(file.percent) + "%",
                          1
                          /* TEXT */
                        )
                      ])) : vue.createCommentVNode("v-if", true),
                      vue.createCommentVNode(" 失败时展示失败图标以及失败信息 "),
                      file.status === "fail" ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "wd-upload__status-content"
                      }, [
                        vue.createVNode(_component_wd_icon, {
                          name: "close-outline",
                          "custom-class": "wd-upload__icon"
                        }),
                        vue.createElementVNode(
                          "text",
                          { class: "wd-upload__progress-txt" },
                          vue.toDisplayString(file.error || vue.unref(translate)("error")),
                          1
                          /* TEXT */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" 上传状态为上传中时不展示移除按钮 "),
                    file.status !== "loading" && !_ctx.disabled ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                      key: 1,
                      name: "error-fill",
                      "custom-class": "wd-upload__close",
                      onClick: ($event) => removeFile(index2)
                    }, null, 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createElementVNode("view", { onClick: handleChoose }, [
              _ctx.useDefaultSlot ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 唤起项 "),
              !_ctx.useDefaultSlot && (!_ctx.limit || uploadFiles.value.length < _ctx.limit) ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  class: vue.normalizeClass(["wd-upload__evoke", _ctx.disabled ? "is-disabled" : "", _ctx.customEvokeClass])
                },
                [
                  vue.createCommentVNode(" 唤起项图标 "),
                  vue.createVNode(_component_wd_icon, {
                    class: "wd-upload__evoke-icon",
                    name: "fill-camera"
                  }),
                  vue.createCommentVNode(" 有限制个数时确认是否展示限制个数 "),
                  _ctx.limit && _ctx.showLimitNum ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "wd-upload__evoke-num"
                    },
                    "（" + vue.toDisplayString(uploadFiles.value.length) + "/" + vue.toDisplayString(_ctx.limit) + "）",
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ],
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-d50d9cde"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-upload/wd-upload.vue"]]);
  const textareaProps = {
    ...baseProps,
    // 原生属性
    /**
     * * 绑定值。
     * 类型：string | number
     */
    modelValue: makeNumericProp(""),
    /**
     * * 占位文本。
     * 类型：string
     * 默认值：'请输入...'
     */
    placeholder: String,
    /**
     * 指定placeholder的样式。
     * 类型：string
     */
    placeholderStyle: String,
    /**
     * * 指定placeholder的样式类。
     * 类型：string
     * 默认值：空字符串
     */
    placeholderClass: makeStringProp(""),
    /**
     * * 禁用输入框。
     * 类型：boolean
     * 默认值：false
     */
    disabled: makeBooleanProp(false),
    /**
     * * 最大输入长度，设置为-1表示不限制最大长度。
     * 类型：string
     * 默认值：-1
     */
    maxlength: makeNumberProp(-1),
    /**
     * * 自动聚焦并拉起键盘。
     * 类型：boolean
     * 默认值：false
     */
    autoFocus: makeBooleanProp(false),
    /**
     * * 获取焦点。
     * 类型：boolean
     * 默认值：false
     */
    focus: makeBooleanProp(false),
    /**
     * * 是否自动增高输入框高度，style.height属性在auto-height生效时不生效。
     * 类型：boolean
     * 默认值：false
     */
    autoHeight: makeBooleanProp(false),
    /**
     * * 如果textarea处于position:fixed区域，需要设置此属性为true。
     * 类型：boolean
     * 默认值：false
     */
    fixed: makeBooleanProp(false),
    /**
     * * 指定光标与键盘的距离，取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为实际距离。
     * 类型：number
     * 默认值：0
     */
    cursorSpacing: makeNumberProp(0),
    /**
     * * 指定focus时的光标位置。
     * 类型：number
     * 默认值：-1
     */
    cursor: makeNumberProp(-1),
    /**
     * * 设置键盘右下角按钮的文字。
     * 类型：string
     * 默认值：'done'
     * 可选值有'done', 'go', 'next', 'search', 'send'
     */
    confirmType: makeStringProp(null),
    /**
     * * 点击键盘右下角按钮时是否保持键盘不收起。
     * 类型：boolean
     * 默认值：false
     */
    confirmHold: makeBooleanProp(false),
    /**
     * * 是否显示键盘上方带有“完成”按钮那一栏。
     * 类型：boolean
     * 默认值：true
     */
    showConfirmBar: makeBooleanProp(true),
    /**
     * * 光标起始位置，自动聚集时有效，需与selection-end搭配使用。
     * 类型：number
     * 默认值：-1
     */
    selectionStart: makeNumberProp(-1),
    /**
     * * 光标结束位置，自动聚集时有效，需与selection-start搭配使用。
     * 类型：number
     * 默认值：-1
     */
    selectionEnd: makeNumberProp(-1),
    /**
     * * 键盘弹起时是否自动上推页面。
     * 类型：boolean
     * 默认值：true
     */
    adjustPosition: makeBooleanProp(true),
    /**
     * * 是否去掉iOS下的默认内边距。
     * 类型：boolean
     * 默认值：false
     */
    disableDefaultPadding: makeBooleanProp(false),
    /**
     * * focus状态下点击页面时是否不收起键盘。
     * 类型：boolean
     * 默认值：false
     */
    holdKeyboard: makeBooleanProp(false),
    // 非原生属性
    /**
     * * 显示为密码框。
     * 类型：boolean
     * 默认值：false
     */
    showPassword: makeBooleanProp(false),
    /**
     * * 是否显示清空按钮。
     * 类型：boolean
     * 默认值：false
     */
    clearable: makeBooleanProp(false),
    /**
     * * 输入框只读状态。
     * 类型：boolean
     * 默认值：false
     */
    readonly: makeBooleanProp(false),
    /**
     * * 前置图标，icon组件中的图标类名。
     * 类型：string
     */
    prefixIcon: String,
    /**
     * * 是否使用前置图标插槽。
     * 类型：boolean
     * 默认值：false
     */
    usePrefixSlot: makeBooleanProp(false),
    /**
     * * 是否显示字数限制，需要同时设置maxlength。
     * 类型：boolean
     * 默认值：false
     */
    showWordLimit: makeBooleanProp(false),
    /**
     * * 设置左侧标题。
     * 类型：string
     */
    label: String,
    /**
     * * 设置左侧标题宽度。
     * 类型：string
     * 默认值：'33%'
     */
    labelWidth: makeStringProp("33%"),
    /**
     * * 是否使用label插槽。
     * 类型：boolean
     * 默认值：false
     */
    useLabelSlot: makeBooleanProp(false),
    /**
     * * 设置输入框大小。
     * 类型：string
     */
    size: String,
    /**
     * * 设置输入框错误状态（红色）。
     * 类型：boolean
     * 默认值：false
     */
    error: makeBooleanProp(false),
    /**
     * * 当存在label属性时，设置标题和输入框垂直居中，默认为顶部居中。
     * 类型：boolean
     * 默认值：false
     */
    center: makeBooleanProp(false),
    /**
     * * 非cell类型下是否隐藏下划线。
     * 类型：boolean
     * 默认值：false
     */
    noBorder: makeBooleanProp(false),
    /**
     * * cell类型下必填样式。
     * 类型：boolean
     * 默认值：false
     */
    required: makeBooleanProp(false),
    /**
     * * 表单域model字段名，在使用表单校验功能的情况下，该属性是必填的。
     * 类型：string
     */
    prop: makeStringProp(""),
    /**
     * * 表单验证规则。
     * 类型：FormItemRule[]
     * 默认值：[]
     */
    rules: makeArrayProp(),
    /**
     * * 自定义文本域容器class名称。
     * 类型：string
     */
    customTextareaContainerClass: makeStringProp(""),
    /**
     * * 自定义文本域class名称。
     * 类型：string
     */
    customTextareaClass: makeStringProp(""),
    /**
     * * 自定义标签class名称。
     * 类型：string
     */
    customLabelClass: makeStringProp("")
  };
  const __default__$d = {
    name: "wd-textarea",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
    ...__default__$d,
    props: textareaProps,
    emits: [
      "update:modelValue",
      "clear",
      "change",
      "blur",
      "focus",
      "input",
      "keyboardheightchange",
      "confirm",
      "linechange",
      "clickprefixicon",
      "click"
    ],
    setup(__props, { emit: __emit }) {
      const { translate } = useTranslate("textarea");
      const props2 = __props;
      const emit = __emit;
      const showClear = vue.ref(false);
      const showWordCount = vue.ref(false);
      const clearing = vue.ref(false);
      const isFocus = vue.ref(false);
      const inputValue = vue.ref("");
      const cell = useCell();
      vue.watch(
        () => props2.focus,
        (newValue) => {
          isFocus.value = newValue;
        },
        { immediate: true, deep: true }
      );
      vue.watch(
        () => props2.modelValue,
        (newValue) => {
          const { disabled, readonly, clearable } = props2;
          if (newValue === null || newValue === void 0) {
            newValue = "";
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-textarea/wd-textarea.vue:120", "[wot-design] warning(wd-textarea): value can not be null or undefined.");
          }
          inputValue.value = newValue;
          showClear.value = Boolean(clearable && !disabled && !readonly && newValue);
        },
        { immediate: true, deep: true }
      );
      const { parent: form } = useParent(FORM_KEY);
      const errorMessage = vue.computed(() => {
        if (form && props2.prop && form.errorMessages && form.errorMessages[props2.prop]) {
          return form.errorMessages[props2.prop];
        } else {
          return "";
        }
      });
      const isRequired = vue.computed(() => {
        let formRequired = false;
        if (form && form.props.rules) {
          const rules = form.props.rules;
          for (const key in rules) {
            if (Object.prototype.hasOwnProperty.call(rules, key) && key === props2.prop && Array.isArray(rules[key])) {
              formRequired = rules[key].some((rule) => rule.required);
            }
          }
        }
        return props2.required || props2.rules.some((rule) => rule.required) || formRequired;
      });
      const currentLength = vue.computed(() => {
        return String(props2.modelValue || "").length;
      });
      const rootClass = vue.computed(() => {
        return `wd-textarea   ${props2.label || props2.useLabelSlot ? "is-cell" : ""} ${props2.center ? "is-center" : ""} ${cell.border.value ? "is-border" : ""} ${props2.size ? "is-" + props2.size : ""} ${props2.error ? "is-error" : ""} ${props2.disabled ? "is-disabled" : ""} ${props2.autoHeight ? "is-auto-height" : ""} ${currentLength.value > 0 ? "is-not-empty" : ""}  ${props2.noBorder ? "is-no-border" : ""} ${props2.customClass}`;
      });
      const labelClass = vue.computed(() => {
        return `wd-textarea__label ${props2.customLabelClass} ${isRequired.value ? "is-required" : ""}`;
      });
      const inputPlaceholderClass = vue.computed(() => {
        return `wd-textarea__placeholder  ${props2.placeholderClass}`;
      });
      const countClass = vue.computed(() => {
        return `${currentLength.value > 0 ? "wd-textarea__count-current" : ""} ${currentLength.value > props2.maxlength ? "is-error" : ""}`;
      });
      const labelStyle = vue.computed(() => {
        return props2.labelWidth ? objToStyle({
          "min-width": props2.labelWidth,
          "max-width": props2.labelWidth
        }) : "";
      });
      vue.onBeforeMount(() => {
        initState();
      });
      function initState() {
        const { disabled, readonly, clearable, maxlength, showWordLimit } = props2;
        showClear.value = Boolean(!disabled && !readonly && clearable && inputValue.value);
        showWordCount.value = Boolean(!disabled && !readonly && maxlength && showWordLimit);
        inputValue.value = formatValue(inputValue.value);
        emit("update:modelValue", inputValue.value);
      }
      function formatValue(value) {
        const { maxlength, showWordLimit } = props2;
        if (showWordLimit && maxlength !== -1 && value.length > maxlength) {
          return value.toString().substring(0, maxlength);
        }
        return value;
      }
      function clear() {
        inputValue.value = "";
        requestAnimationFrame().then(() => requestAnimationFrame()).then(() => requestAnimationFrame()).then(() => {
          emit("change", {
            value: ""
          });
          emit("update:modelValue", inputValue.value);
          emit("clear");
          requestAnimationFrame().then(() => {
            isFocus.value = true;
          });
        });
      }
      function handleBlur({ detail }) {
        isFocus.value = false;
        emit("change", {
          value: inputValue.value
        });
        emit("update:modelValue", inputValue.value);
        emit("blur", {
          value: inputValue.value,
          // textarea 有 cursor
          cursor: detail.cursor ? detail.cursor : null
        });
      }
      function handleFocus({ detail }) {
        if (clearing.value) {
          clearing.value = false;
          return;
        }
        isFocus.value = true;
        emit("focus", detail);
      }
      function handleInput() {
        inputValue.value = formatValue(inputValue.value);
        emit("update:modelValue", inputValue.value);
        emit("input", inputValue.value);
      }
      function handleKeyboardheightchange({ detail }) {
        emit("keyboardheightchange", detail);
      }
      function handleConfirm({ detail }) {
        emit("confirm", detail);
      }
      function handleLineChange({ detail }) {
        emit("linechange", detail);
      }
      function onClickPrefixIcon() {
        emit("clickprefixicon");
      }
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(rootClass.value),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            _ctx.label || _ctx.useLabelSlot ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass(labelClass.value),
                style: vue.normalizeStyle(labelStyle.value)
              },
              [
                _ctx.prefixIcon || _ctx.usePrefixSlot ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "wd-textarea__prefix"
                }, [
                  _ctx.prefixIcon && !_ctx.usePrefixSlot ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                    key: 0,
                    "custom-class": "wd-textarea__icon",
                    name: _ctx.prefixIcon,
                    onClick: onClickPrefixIcon
                  }, null, 8, ["name"])) : vue.renderSlot(_ctx.$slots, "prefix", { key: 1 }, void 0, true)
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", { class: "wd-textarea__label-inner" }, [
                  _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    { key: 0 },
                    vue.toDisplayString(_ctx.label),
                    1
                    /* TEXT */
                  )) : vue.renderSlot(_ctx.$slots, "label", { key: 1 }, void 0, true)
                ])
              ],
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 文本域 "),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(`wd-textarea__value ${showClear.value ? "is-suffix" : ""} ${_ctx.customTextareaContainerClass} ${showWordCount.value ? "is-show-limit" : ""}`)
              },
              [
                vue.withDirectives(vue.createElementVNode("textarea", {
                  class: vue.normalizeClass(`wd-textarea__inner ${_ctx.customTextareaClass}`),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
                  "show-count": false,
                  placeholder: _ctx.placeholder || vue.unref(translate)("placeholder"),
                  disabled: _ctx.disabled,
                  maxlength: _ctx.maxlength,
                  focus: isFocus.value,
                  "auto-focus": _ctx.autoFocus,
                  "placeholder-style": _ctx.placeholderStyle,
                  "placeholder-class": inputPlaceholderClass.value,
                  "auto-height": _ctx.autoHeight,
                  "cursor-spacing": _ctx.cursorSpacing,
                  fixed: _ctx.fixed,
                  cursor: _ctx.cursor,
                  "show-confirm-bar": _ctx.showConfirmBar,
                  "selection-start": _ctx.selectionStart,
                  "selection-end": _ctx.selectionEnd,
                  "adjust-position": _ctx.adjustPosition,
                  "hold-keyboard": _ctx.holdKeyboard,
                  "confirm-type": _ctx.confirmType,
                  "confirm-hold": _ctx.confirmHold,
                  "disable-default-padding": _ctx.disableDefaultPadding,
                  onInput: handleInput,
                  onFocus: handleFocus,
                  onBlur: handleBlur,
                  onConfirm: handleConfirm,
                  onLinechange: handleLineChange,
                  onKeyboardheightchange: handleKeyboardheightchange
                }, null, 42, ["placeholder", "disabled", "maxlength", "focus", "auto-focus", "placeholder-style", "placeholder-class", "auto-height", "cursor-spacing", "fixed", "cursor", "show-confirm-bar", "selection-start", "selection-end", "adjust-position", "hold-keyboard", "confirm-type", "confirm-hold", "disable-default-padding"]), [
                  [vue.vModelText, inputValue.value]
                ]),
                errorMessage.value ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "wd-textarea__error-message"
                  },
                  vue.toDisplayString(errorMessage.value),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                _ctx.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "wd-textarea__readonly-mask"
                })) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", { class: "wd-textarea__suffix" }, [
                  showClear.value ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                    key: 0,
                    "custom-class": "wd-textarea__clear",
                    name: "error-fill",
                    onClick: clear
                  })) : vue.createCommentVNode("v-if", true),
                  showWordCount.value ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "wd-textarea__count"
                  }, [
                    vue.createElementVNode(
                      "text",
                      {
                        class: vue.normalizeClass(countClass.value)
                      },
                      vue.toDisplayString(currentLength.value),
                      3
                      /* TEXT, CLASS */
                    ),
                    vue.createTextVNode(
                      " /" + vue.toDisplayString(_ctx.maxlength),
                      1
                      /* TEXT */
                    )
                  ])) : vue.createCommentVNode("v-if", true)
                ])
              ],
              2
              /* CLASS */
            )
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-7d71e04e"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-textarea/wd-textarea.vue"]]);
  const _sfc_main$y = {
    __name: "titleContent",
    setup(__props) {
      useNotify();
      let ifShowImg = vue.ref(true);
      let ifShowText = vue.ref(true);
      let ifShowTime = vue.ref(false);
      let ifShowAttend = vue.ref(false);
      let showBottom = vue.ref(false);
      let showReplay = vue.ref(false);
      let ifshowCode = vue.ref(false);
      let file = vue.ref([]);
      let TitleId = vue.ref("");
      let TitleName = vue.ref("");
      let TitleTime = vue.ref("");
      let TitleWriter = vue.ref("");
      let TitleWriterID = vue.ref("");
      let TitleWriterImg = vue.ref("");
      vue.ref("");
      vue.ref("");
      let TitleLike = vue.ref(0);
      let TitleLikeImg = vue.ref("../../static/buttomSrc/BeforeLike.png");
      let TitleCollection = vue.ref(0);
      let TitleCollectionImg = vue.ref("../../static/buttomSrc/BeforeCollection.png");
      let AttendText = vue.ref("参加/申请");
      let AttendLimit = vue.ref("");
      let attendNow = vue.ref("");
      let TitleView = vue.ref(0);
      let TextContent = vue.ref("");
      let ImageList = vue.ref([]);
      let time = vue.ref(6e3);
      let AttendList = vue.ref([]);
      let MyCommitContent = vue.ref("");
      let MyReplayID = vue.ref("");
      let MyReplayComment = vue.ref("");
      let MyCommitImgList = vue.ref(null);
      let CommitContent = vue.ref([]);
      vue.ref([]);
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let token = userData.token;
      const UpReplayBox = (id) => {
        showReplay.value = true;
        MyReplayID.value = id;
      };
      let options1 = vue.ref({
        margin: 10,
        useDynamicSize: false,
        style: "round",
        foregroundImageSrc: TitleWriterImg,
        foregroundImagePadding: 5,
        positionAdjustBackgroundColor: "#dded4d",
        positionProbeForegroundColor: "#4fc19b",
        darkBlockColor: "#3f6dc1",
        timingForegroundColor: "#4fc19b",
        positionAdjustForegroundColor: "#26adc1"
      });
      const ChangeLike = () => {
        if (TitleLikeImg.value == "../../static/buttomSrc/BeforeLike.png") {
          TitleLikeImg.value = "../../static/buttomSrc/Like.png";
        } else {
          TitleLikeImg.value = "../../static/buttomSrc/BeforeLike.png";
        }
      };
      const ChangeCollection = () => {
        if (TitleCollectionImg.value == "../../static/buttomSrc/BeforeCollection.png") {
          TitleCollectionImg.value = "../../static/buttomSrc/Collection.png";
        } else {
          TitleCollectionImg.value = "../../static/buttomSrc/BeforeCollection.png";
        }
      };
      const ChangeAttend = () => {
        if (AttendText.value == "参加/申请") {
          AttendText.value = "已参加";
        } else {
          AttendText.value = "参加/申请";
        }
      };
      const DoLike = () => {
        uni.request({ url: "http://116.62.176.59:8080/xqlgq/event/like/" + TitleId.value, method: "GET", header: { "token": token }, success: (res) => {
          if (res.data.code == 0) {
            ChangeLike();
            GetInformation();
          } else {
            tip2(res.data.msg);
          }
        }, fail: (err) => {
          tip2(err.errMsg);
        } });
      };
      const DoCollection = () => {
        uni.request({ url: "http://116.62.176.59:8080/xqlgq/event/collect/" + TitleId.value, method: "GET", header: { "token": token }, success: (res) => {
          if (res.data.code == 0) {
            ChangeCollection();
            GetInformation();
          } else {
            tip2(res.data.msg);
          }
        }, fail: (err) => {
          tip2(err.errMsg);
        } });
      };
      const DoAttend = () => {
        uni.request({ url: "http://116.62.176.59:8080/xqlgq/event/participant/" + TitleId.value, method: "GET", header: { "token": token }, success: (res) => {
          if (res.data.code == 0) {
            ChangeAttend();
            GetInformation();
          } else {
            tip2(res.data.msg);
          }
        }, fail: (err) => {
          tip2(err.errMsg);
        } });
      };
      const DoCommit = () => {
        showBottom.value = true;
      };
      const IfCommitLike = (bool) => {
        if (bool) {
          return "../../static/buttomSrc/CommitLike.png";
        } else {
          return "../../static/buttomSrc/BeforeCommitLike.png";
        }
      };
      const Back = () => {
        uni.navigateBack();
      };
      const tip2 = (words) => {
        uni.showToast({ title: words, icon: "none", duration: 2e3 });
      };
      function stringToArray(str) {
        try {
          return JSON.parse(str);
        } catch (error2) {
          return [];
        }
      }
      const GoUserShow = (id) => {
        uni.navigateTo({ url: "/pages/UserShow/UserShow?id=" + id, animationType: "fade-in" });
      };
      onLoad((param) => {
        TitleId.value = param.id;
        GetInformation();
        formatAppLog("log", "at pages/titleContent/titleContent.vue:259", param.id);
      });
      const handleChange1 = (fileList) => {
        MyCommitImgList.value = fileList;
      };
      const GetInformation = () => {
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/info/" + TitleId.value,
          method: "GET",
          header: {
            "token": token
          },
          success: (res) => {
            if (res.data.code == "0") {
              formatAppLog("log", "at pages/titleContent/titleContent.vue:270", res.data);
              let data = res.data.data;
              if (data.deadline != null) {
                ifShowTime.value = true;
              }
              if (data.participantLimit != null) {
                ifShowAttend.value = true;
              }
              TitleName.value = data.title;
              TitleTime.value = data.timestamp[0] + "-" + data.timestamp[1] + "-" + data.timestamp[2] + "  " + data.timestamp[3] + ":" + data.timestamp[4] + ":" + data.timestamp[5];
              TitleWriter.value = data.publisher.username;
              TitleWriterID.value = data.publisher.id;
              TitleWriterImg.value = "http://116.62.176.59:8080/xqlgq/files/" + data.publisher.userImage;
              TitleLike.value = data.like;
              TitleCollection.value = data.collect;
              formatAppLog("log", "at pages/titleContent/titleContent.vue:281", TitleCollection.value);
              if (data.likeAlready) {
                TitleLikeImg.value = "../../static/buttomSrc/Like.png";
              }
              if (data.collectAlready) {
                TitleCollectionImg.value = "../../static/buttomSrc/Collection.png";
              }
              if (data.participantAlready) {
                AttendText.value = "已参加";
              }
              TextContent.value = data.content;
              ImageList.value = stringToArray(data.images);
              time.value = data.cutDown;
              AttendList.value = data.participantList;
              AttendLimit.value = data.participantLimit;
              attendNow.value = data.participant;
              CommitContent.value = data.commentList;
              TitleView.value = data.view;
              formatAppLog("log", "at pages/titleContent/titleContent.vue:294", CommitContent.value);
            } else {
              tip2(res.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
      };
      const DoCommitLike = (CommitID) => {
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/comment/like/" + CommitID,
          header: {
            "token": token
          },
          success: (res) => {
            if (res.data.code == 0) {
              GetInformation();
            } else {
              tip2(res.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
      };
      function extractDataFields(jsonInput) {
        if (typeof jsonInput === "object" && jsonInput !== null) {
          const dataFields = [];
          for (const item of jsonInput.fileList) {
            if (item.response) {
              try {
                const response = JSON.parse(item.response);
                if (response.code && response.data) {
                  dataFields.push(response.data);
                }
              } catch (e2) {
                formatAppLog("error", "at pages/titleContent/titleContent.vue:336", "解析response时发生错误:", e2);
              }
            }
          }
          return dataFields;
        } else {
          throw new Error("输入的JSON对象无效");
        }
      }
      const upload = () => {
        let IMGLIST = null;
        if (MyCommitImgList.value != null) {
          IMGLIST = MyCommitImgList.value = JSON.stringify(extractDataFields(MyCommitImgList.value)).replace(/"/g, "");
        }
        let TEXT = MyCommitContent.value;
        MyCommitImgList.value = null;
        MyCommitContent.value = "";
        file.value = [];
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/comment/add",
          method: "POST",
          header: {
            "token": token
          },
          data: {
            "eventId": TitleId.value,
            "replyId": null,
            "content": TEXT,
            "images": IMGLIST
          },
          success: (res) => {
            if (res.data.code == 0) {
              GetInformation();
              showBottom.value = false;
            } else {
              tip2(res.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
      };
      const DoReplay = () => {
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/comment/add",
          method: "POST",
          header: {
            "token": token
          },
          data: {
            "eventId": TitleId.value,
            "replyId": MyReplayID.value,
            "content": MyReplayComment.value,
            "images": null
          },
          success: (res) => {
            if (res.data.code == 0) {
              GetInformation();
              showReplay.value = false;
            } else {
              tip2(res.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
        MyReplayID.value = "";
        MyReplayComment.value = "";
      };
      const Preview = (current, list) => {
        if (!(list instanceof Array)) {
          list = stringToArray(list);
        }
        current = "http://116.62.176.59:8080/xqlgq/files/" + current;
        list = list.map((item) => `http://116.62.176.59:8080/xqlgq/files/${item}`);
        uni.previewImage({
          "current": current,
          "urls": list,
          fail: (err) => {
            tip2(err);
          }
        });
      };
      const GoEventCodeShow = () => {
        ifshowCode.value = true;
      };
      return (_ctx, _cache) => {
        const _component_wd_notify = resolveEasycom(vue.resolveDynamicComponent("wd-notify"), __easycom_0$3);
        const _component_uv_qrcode = resolveEasycom(vue.resolveDynamicComponent("uv-qrcode"), __easycom_0$2);
        const _component_wd_popup = resolveEasycom(vue.resolveDynamicComponent("wd-popup"), __easycom_1$5);
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        const _component_wd_count_down = resolveEasycom(vue.resolveDynamicComponent("wd-count-down"), __easycom_6);
        const _component_wd_button = resolveEasycom(vue.resolveDynamicComponent("wd-button"), __easycom_12);
        const _component_wd_upload = resolveEasycom(vue.resolveDynamicComponent("wd-upload"), __easycom_3);
        const _component_wd_textarea = resolveEasycom(vue.resolveDynamicComponent("wd-textarea"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_wd_notify, null, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "column" } }, [
                  vue.createElementVNode("view", { style: { "height": "80rpx", "width": "100%" } }),
                  vue.createElementVNode("view", { style: { "font-size": "26rpx", "margin-bottom": "10rpx", "letter-spacing": "1rpx", "font-weight": "bold" } }, "您有新的消息")
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_wd_popup, {
              modelValue: vue.unref(ifshowCode),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(ifshowCode) ? ifshowCode.value = $event : ifshowCode = $event),
              "custom-style": "border-radius:20rpx;padding:20rpx;display:flex;justify-content: center; align-items: center;flex-direction: column;margin:10rpx;margin-bottom:0",
              onClose: _ctx.handleClose
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uv_qrcode, {
                  auto: "true",
                  size: "380rpx",
                  options: vue.unref(options1),
                  ref: "uvqrcode2",
                  value: "/pages/titleContent/titleContent?id=" + vue.unref(TitleId)
                }, null, 8, ["options", "value"]),
                vue.createElementVNode("view", { style: { "font-size": "30rpx", "margin": "10rpx" } }, "请在城屿App内扫码打开")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onClose"]),
            (vue.openBlock(), vue.createElementBlock("scroll-view", {
              key: 0,
              class: "content-background 文章背景 相对布局",
              "scroll-y": "true"
            }, [
              vue.createElementVNode("view", { class: "手机高" }),
              vue.createVNode(_component_wd_row, { style: { "margin": "40rpx", "margin-top": "20rpx", "margin-bottom": "0rpx" } }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_col, {
                    class: "横向布局",
                    span: 12
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_wd_icon, {
                        name: "thin-arrow-left",
                        size: "36rpx",
                        color: "#515151",
                        onClick: Back
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_col, { span: 12 }, {
                    default: vue.withCtx(() => [
                      vue.createCommentVNode(" 下面的view放参与者的头像 "),
                      vue.createElementVNode("view", { class: "右侧布局" }, [
                        vue.createElementVNode("image", {
                          class: "参与者头像",
                          src: vue.unref(TitleWriterImg),
                          onClick: _cache[1] || (_cache[1] = ($event) => GoUserShow(vue.unref(TitleWriterID)))
                        }, null, 8, ["src"])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createCommentVNode(" 第一层：头部区结束 "),
              vue.createElementVNode("view", { class: "横向布局 文章标题布局" }, [
                vue.createElementVNode(
                  "view",
                  { class: "文章标题" },
                  vue.toDisplayString(vue.unref(TitleName)),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "横向布局 小信息布局" }, [
                vue.createElementVNode(
                  "view",
                  { style: { "margin-right": "10rpx", "color": "#939393" } },
                  vue.toDisplayString(vue.unref(TitleTime)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { style: { "margin-right": "10rpx", "color": "#939393" } }),
                vue.createElementVNode("view", { style: { "margin-right": "10rpx", "color": "#939393" } }, [
                  vue.createVNode(_component_wd_icon, {
                    name: "view",
                    size: "20rpx"
                  }),
                  vue.createTextVNode(
                    " " + vue.toDisplayString(vue.unref(TitleView)),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { style: { "margin-right": "10rpx", "color": "#939393" } }),
                vue.createElementVNode(
                  "view",
                  { style: { "margin-right": "10rpx", "color": "#939393" } },
                  vue.toDisplayString(vue.unref(TitleWriter)),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "分割线" }),
              vue.createCommentVNode(" 第二层：标题区结束 "),
              vue.createElementVNode("view", { class: "内容背景" }, [
                vue.unref(ifShowText) ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "内容文本"
                  },
                  vue.toDisplayString(vue.unref(TextContent)),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                vue.unref(ifShowImg) ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(ImageList), (item, index2) => {
                      return vue.openBlock(), vue.createElementBlock("view", { class: "内容图片列表" }, [
                        vue.createElementVNode("image", {
                          class: "内容图片",
                          mode: "widthFix",
                          src: "http://116.62.176.59:8080/xqlgq/files/" + item,
                          onClick: ($event) => Preview(item, vue.unref(ImageList))
                        }, null, 8, ["src", "onClick"])
                      ]);
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ])) : vue.createCommentVNode("v-if", true),
                vue.unref(ifShowTime) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  class: "倒计时布局"
                }, [
                  vue.createElementVNode("view", { class: "倒计时背景" }, [
                    vue.createElementVNode("view", { class: "倒计时文本" }, "倒计时："),
                    vue.createVNode(_component_wd_count_down, { time: vue.unref(time) }, {
                      default: vue.withCtx(({ current }) => [
                        vue.createElementVNode("view", { class: "横向布局" }, [
                          vue.createElementVNode(
                            "span",
                            { class: "custom-count-down" },
                            vue.toDisplayString(current.days),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("span", { class: "custom-count-down-colon" }, "天"),
                          vue.createElementVNode(
                            "span",
                            { class: "custom-count-down" },
                            vue.toDisplayString(current.hours),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("span", { class: "custom-count-down-colon" }, ":"),
                          vue.createElementVNode(
                            "span",
                            { class: "custom-count-down" },
                            vue.toDisplayString(current.minutes),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("span", { class: "custom-count-down-colon" }, ":"),
                          vue.createElementVNode(
                            "span",
                            { class: "custom-count-down" },
                            vue.toDisplayString(current.seconds),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["time"])
                  ])
                ])) : vue.createCommentVNode("v-if", true),
                vue.unref(ifShowAttend) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 3,
                  class: "参加者布局"
                }, [
                  vue.createElementVNode("view", { class: "参加者背景" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "参加活动人数" },
                      "活动人员(" + vue.toDisplayString(vue.unref(attendNow)) + "/" + vue.toDisplayString(vue.unref(AttendLimit)) + ")",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "参加者列表布局" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(vue.unref(AttendList), (Attender) => {
                          return vue.openBlock(), vue.createElementBlock("view", null, [
                            vue.createElementVNode("image", {
                              class: "参加者头像",
                              src: "http://116.62.176.59:8080/xqlgq/files/" + Attender.userImage,
                              onClick: ($event) => GoUserShow(Attender.id)
                            }, null, 8, ["src", "onClick"])
                          ]);
                        }),
                        256
                        /* UNKEYED_FRAGMENT */
                      ))
                    ]),
                    vue.createVNode(_component_wd_button, {
                      block: "",
                      size: "large",
                      style: { "margin": "50rpx" },
                      onClick: DoAttend
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(
                          vue.toDisplayString(vue.unref(AttendText)),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", {
                  class: "横向布局",
                  style: { "margin": "40rpx", "margin-left": "50rpx", "color": "#5e5e5e", "font-size": "34rpx" }
                }, [
                  vue.createVNode(_component_wd_icon, {
                    style: { "margin-right": "10rpx" },
                    name: "format-horizontal-align-bottom",
                    size: "28px"
                  }),
                  vue.createTextVNode("评论区")
                ]),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(CommitContent), (Commit) => {
                    return vue.openBlock(), vue.createElementBlock("view", null, [
                      vue.createElementVNode("view", { class: "评论区列表背景" }, [
                        vue.createElementVNode("view", { class: "评论区列表" }, [
                          vue.createElementVNode("view", { class: "评论区头像姓名布局 横向布局" }, [
                            vue.createElementVNode("image", {
                              onClick: ($event) => GoUserShow(Commit.publisher.id),
                              class: "评论区头像背景",
                              src: "http://116.62.176.59:8080/xqlgq/files/" + Commit.publisher.userImage
                            }, null, 8, ["onClick", "src"]),
                            vue.createElementVNode("view", { class: "评论区姓名" }, [
                              vue.createElementVNode(
                                "view",
                                null,
                                vue.toDisplayString(Commit.publisher.username),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode("view", { class: "横向布局" }, [
                                vue.createElementVNode(
                                  "view",
                                  { class: "小文本 用户ID" },
                                  "id:" + vue.toDisplayString(Commit.publisher.id),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode(
                                  "view",
                                  { class: "小文本" },
                                  vue.toDisplayString(Commit.publisher.city),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode(
                                  "view",
                                  { class: "小文本" },
                                  vue.toDisplayString(Commit.commentTime[0]) + "-" + vue.toDisplayString(Commit.commentTime[1]) + "-" + vue.toDisplayString(Commit.commentTime[2]) + " " + vue.toDisplayString(Commit.commentTime[3]) + "-" + vue.toDisplayString(Commit.commentTime[4]) + "-" + vue.toDisplayString(Commit.commentTime[5]),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "评论区内容布局" }, [
                            vue.createElementVNode("view", { class: "评论区内容" }, [
                              vue.createElementVNode(
                                "text",
                                { class: "评论区文字" },
                                vue.toDisplayString(Commit.content),
                                1
                                /* TEXT */
                              )
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "横向布局 评论图片列表布局" }, [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(stringToArray(Commit.images), (CImg, index2) => {
                                return vue.openBlock(), vue.createElementBlock("view", null, [
                                  vue.createElementVNode("image", {
                                    class: "评论区域图片",
                                    src: "http://116.62.176.59:8080/xqlgq/files/" + CImg,
                                    mode: "aspectFill",
                                    onClick: ($event) => Preview(CImg, Commit.images)
                                  }, null, 8, ["src", "onClick"])
                                ]);
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ]),
                          vue.createElementVNode("view", { class: "评论区操作内容 横向布局" }, [
                            vue.createElementVNode("image", {
                              class: "评论区图标",
                              src: IfCommitLike(Commit.likeAlready),
                              onClick: ($event) => DoCommitLike(Commit.commentId)
                            }, null, 8, ["src", "onClick"]),
                            vue.createElementVNode(
                              "view",
                              { class: "评论区点赞数量" },
                              vue.toDisplayString(Commit.like),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("image", {
                              class: "评论区图标",
                              src: "/static/buttomSrc/Recommit.png",
                              onClick: ($event) => UpReplayBox(Commit.commentId)
                            }, null, 8, ["onClick"])
                          ]),
                          vue.createElementVNode("view", { class: "评论区回复背景" }, [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(Commit.commentList, (Reply) => {
                                return vue.openBlock(), vue.createElementBlock("view", { style: { "padding": "5rpx" } }, [
                                  vue.createElementVNode("view", {
                                    class: "回复内容",
                                    style: { "width": "540rpx", "height": "auto", "word-break": "break-all", "float": "left" }
                                  }, [
                                    vue.createElementVNode("span", {
                                      onClick: ($event) => GoUserShow(Reply.publisher.id),
                                      style: { "color": "#7e9d9d", "font-size": "26rpx" }
                                    }, vue.toDisplayString(Reply.publisher.username), 9, ["onClick"]),
                                    vue.createTextVNode(
                                      ":" + vue.toDisplayString(Reply.content),
                                      1
                                      /* TEXT */
                                    )
                                  ])
                                ]);
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ])
                        ])
                      ])
                    ]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                )),
                vue.createElementVNode("view", { style: { "height": "250rpx", "width": "100%", "text-align": "center", "color": "#939393", "font-size": "25rpx", "display": "flex", "justify-content": "center", "align-items": "center" } }, "找不到更多内容~快来发表你的看法吧！")
              ]),
              vue.createCommentVNode(" 第三层：内容区结束 ")
            ])),
            vue.createElementVNode("view", { class: "相对布局 右下角布局" }, [
              vue.createElementVNode("view", {
                class: "点赞布局",
                onClick: DoCollection
              }, [
                vue.createElementVNode("image", {
                  class: "点赞图片",
                  src: vue.unref(TitleCollectionImg)
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(vue.unref(TitleCollection)),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", {
                class: "点赞布局",
                onClick: DoLike
              }, [
                vue.createElementVNode("image", {
                  class: "点赞图片",
                  src: vue.unref(TitleLikeImg)
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(vue.unref(TitleLike)),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("image", {
                class: "评论图片",
                style: { "margin-right": "10rpx" },
                src: "/static/buttomSrc/eventCode.png",
                onClick: GoEventCodeShow
              }),
              vue.createElementVNode("image", {
                class: "评论图片",
                src: "/static/buttomSrc/comment.png",
                onClick: DoCommit
              })
            ]),
            vue.createVNode(_component_wd_popup, {
              modelValue: vue.unref(showBottom),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(showBottom) ? showBottom.value = $event : showBottom = $event),
              "custom-style": "padding: 30px 40px;border-radius: 25rpx 25rpx 0 0;",
              onClose: _ctx.handleClose,
              position: "bottom"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "全屏" }, [
                  vue.createElementVNode("view", { style: { "margin-bottom": "20rpx" } }, "发表评论："),
                  vue.createVNode(_component_wd_upload, {
                    class: "upload",
                    limit: "9",
                    multiple: "",
                    "file-list": vue.unref(file),
                    action: "http://116.62.176.59:8080/xqlgq/files/upload",
                    onChange: handleChange1
                  }, null, 8, ["file-list"]),
                  vue.createVNode(_component_wd_textarea, {
                    modelValue: vue.unref(MyCommitContent),
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(MyCommitContent) ? MyCommitContent.value = $event : MyCommitContent = $event),
                    placeholder: "请友善发言喔~",
                    size: "large",
                    style: { "height": "200rpx" },
                    placeholderStyle: "font-size:30rpx;margin-top:30rpx background-color:#c3c3c3"
                  }, null, 8, ["modelValue"]),
                  vue.createVNode(_component_wd_button, {
                    block: "",
                    size: "large",
                    onClick: upload
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("发表")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onClose"]),
            vue.createVNode(_component_wd_popup, {
              modelValue: vue.unref(showReplay),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.isRef(showReplay) ? showReplay.value = $event : showReplay = $event),
              "custom-style": "padding: 30px 40px;border-radius: 25rpx 25rpx 0 0;",
              onClose: _ctx.handleClose,
              position: "bottom"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "全屏" }, [
                  vue.createElementVNode(
                    "view",
                    { style: { "margin-bottom": "20rpx" } },
                    "回复第" + vue.toDisplayString(vue.unref(MyReplayID)) + "条评论：",
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_wd_textarea, {
                    modelValue: vue.unref(MyReplayComment),
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(MyReplayComment) ? MyReplayComment.value = $event : MyReplayComment = $event),
                    placeholder: "请友善发言喔~",
                    size: "large",
                    style: { "height": "200rpx" },
                    placeholderStyle: "font-size:30rpx;margin-top:30rpx background-color:#c3c3c3"
                  }, null, 8, ["modelValue"]),
                  vue.createVNode(_component_wd_button, {
                    block: "",
                    size: "large",
                    onClick: DoReplay
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("发表")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onClose"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesTitleContentTitleContent = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__file", "D:/前端学习笔记/uniapp/City/pages/titleContent/titleContent.vue"]]);
  const pickerViewProps = {
    ...baseProps,
    /**
     * 加载状态
     */
    loading: makeBooleanProp(false),
    /**
     * 加载的颜色，只能使用十六进制的色值写法，且不能使用缩写
     */
    loadingColor: makeStringProp("#4D80F0"),
    /**
     * picker内部滚筒高
     */
    columnsHeight: makeNumberProp(217),
    /**
     * 选项对象中，value对应的 key
     */
    valueKey: makeStringProp("value"),
    /**
     * 选项对象中，展示的文本对应的 key
     */
    labelKey: makeStringProp("label"),
    /**
     * 选中项，如果为多列选择器，则其类型应为数组
     */
    modelValue: {
      type: [String, Number, Boolean, Array, Array, Array],
      default: "",
      required: true
    },
    /**
     * 选择器数据，可以为字符串数组，也可以为对象数组，如果为二维数组，则为多列选择器
     */
    columns: makeArrayProp(),
    /**
     * 接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 setColumnData 方法修改其他列的数据源。
     */
    columnChange: Function
  };
  function formatArray(array2, valueKey, labelKey) {
    let tempArray = isArray(array2) ? array2 : [array2];
    const firstLevelTypeList = new Set(array2.map(getType));
    if (firstLevelTypeList.size !== 1 && firstLevelTypeList.has("object")) {
      throw Error("The columns are correct");
    }
    if (!isArray(array2[0])) {
      tempArray = [tempArray];
    }
    const result = tempArray.map((col) => {
      return col.map((row) => {
        if (!isObj(row)) {
          return {
            [valueKey]: row,
            [labelKey]: row
          };
        }
        if (!row.hasOwnProperty(valueKey) && !row.hasOwnProperty(labelKey)) {
          throw Error("Can't find valueKey and labelKey in columns");
        }
        if (!row.hasOwnProperty(labelKey)) {
          row[labelKey] = row[valueKey];
        }
        if (!row.hasOwnProperty(valueKey)) {
          row[valueKey] = row[labelKey];
        }
        return row;
      });
    });
    return result;
  }
  const __default__$c = {
    name: "wd-picker-view",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$x = /* @__PURE__ */ vue.defineComponent({
    ...__default__$c,
    props: pickerViewProps,
    emits: ["change", "pickstart", "pickend", "update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const formatColumns = vue.ref([]);
      const itemHeight = vue.ref(35);
      const selectedIndex = vue.ref([]);
      const preSelectedIndex = vue.ref([]);
      vue.watch(
        () => props2.modelValue,
        (newValue, oldValue) => {
          if (!isEqual(oldValue, newValue) && newValue) {
            selectWithValue(newValue);
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.columns,
        (newValue) => {
          formatColumns.value = formatArray(newValue, props2.valueKey, props2.labelKey);
          selectWithValue(props2.modelValue);
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => selectedIndex.value,
        (newValue) => {
          if (isEqual(newValue, preSelectedIndex.value))
            return;
          if (!isEqual(getValues(), props2.modelValue)) {
            handleChange(0);
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.columnChange,
        (newValue) => {
          if (newValue && !isFunction(newValue)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-picker-view/wd-picker-view.vue:108", "The type of columnChange must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      const { proxy } = vue.getCurrentInstance();
      function selectWithValue(value) {
        if (props2.columns.length === 0)
          return;
        if (value === "" || value === null || value === void 0 || isArray(value) && value.length === 0) {
          value = formatColumns.value.map((col) => {
            return col[0][props2.valueKey];
          });
        }
        const valueType = getType(value);
        const type = ["string", "number", "boolean", "array"];
        if (type.indexOf(valueType) === -1)
          formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-picker-view/wd-picker-view.vue:134", `value must be one of ${type.toString()}`);
        if (formatColumns.value.length === 0) {
          formatColumns.value = formatArray(props2.columns, props2.valueKey, props2.labelKey);
        }
        value = isArray(value) ? value : [value];
        value = value.slice(0, formatColumns.value.length);
        if (value.length === 0) {
          value = formatColumns.value.map(() => 0);
        }
        let selected = deepClone$1(selectedIndex.value);
        value.forEach((target, col) => {
          let row = formatColumns.value[col].findIndex((row2) => {
            return row2[props2.valueKey].toString() === target.toString();
          });
          row = row === -1 ? 0 : row;
          selected = selectWithIndex(col, row);
        });
        selectedIndex.value = selected.slice(0, value.length);
      }
      function selectWithIndex(columnIndex, rowIndex) {
        const col = formatColumns.value[columnIndex];
        if (!col || !col[rowIndex]) {
          throw Error(`The value to select with Col:${columnIndex} Row:${rowIndex} is correct`);
        }
        const select = deepClone$1(selectedIndex.value);
        if (col[rowIndex].disabled) {
          const prev = col.slice(0, rowIndex).reverse().findIndex((s2) => !s2.disabled);
          const next = col.slice(rowIndex + 1).findIndex((s2) => !s2.disabled);
          if (prev !== -1) {
            select[columnIndex] = rowIndex - 1 - prev;
          } else if (next !== -1) {
            select[columnIndex] = rowIndex + 1 + next;
          } else if (select[columnIndex] === void 0) {
            select[columnIndex] = 0;
          }
        } else {
          select[columnIndex] = rowIndex;
        }
        selectedIndex.value = deepClone$1(select);
        return selectedIndex.value;
      }
      function onChange({ detail: { value } }) {
        value = value.map((v2) => {
          return Number(v2 || 0);
        });
        const index2 = getChangeDiff(value);
        selectedIndex.value = deepClone$1(value);
        vue.nextTick(() => {
          if (props2.columnChange) {
            if (props2.columnChange.length < 4) {
              props2.columnChange(proxy.$.exposed, getSelects(), index2 || 0, () => {
              });
              handleChange(index2 || 0);
            } else {
              props2.columnChange(proxy.$.exposed, getSelects(), index2 || 0, () => {
                handleChange(index2 || 0);
              });
            }
          } else {
            handleChange(index2 || 0);
          }
        });
      }
      function getChangeIndex(now, origin) {
        if (!now || !origin)
          return -1;
        const index2 = now.findIndex((row, index22) => row !== origin[index22]);
        return index2;
      }
      function getChangeDiff(value) {
        value = value.slice(0, formatColumns.value.length);
        const origin = deepClone$1(selectedIndex.value);
        let selected = deepClone$1(selectedIndex.value);
        value.forEach((row, col) => {
          row = range$2(row, 0, formatColumns.value[col].length - 1);
          if (row === origin[col])
            return;
          selected = selectWithIndex(col, row);
        });
        selectedIndex.value = selected;
        preSelectedIndex.value = origin;
        const diffCol = getChangeIndex(selected, origin);
        if (diffCol === -1)
          return;
        const diffRow = selected[diffCol];
        return selected.length === 1 ? diffRow : diffCol;
      }
      function handleChange(index2) {
        const value = getValues();
        if (isEqual(value, props2.modelValue))
          return;
        emit("update:modelValue", value);
        setTimeout(() => {
          emit("change", {
            picker: proxy.$.exposed,
            value,
            index: index2
          });
        }, 0);
      }
      function getSelects() {
        const selects = selectedIndex.value.map((row, col) => formatColumns.value[col][row]);
        if (selects.length === 1) {
          return selects[0];
        }
        return selects;
      }
      function getValues() {
        const { valueKey } = props2;
        const values = selectedIndex.value.map((row, col) => formatColumns.value[col][row][valueKey]);
        if (values.length === 1) {
          return values[0];
        }
        return values;
      }
      function getLabels() {
        const { labelKey } = props2;
        return selectedIndex.value.map((row, col) => formatColumns.value[col][row][labelKey]);
      }
      function getColumnIndex(columnIndex) {
        return selectedIndex.value[columnIndex];
      }
      function getColumnData(columnIndex) {
        return formatColumns.value[columnIndex];
      }
      function setColumnData(columnIndex, data, jumpTo = 0) {
        selectedIndex.value = selectWithIndex(columnIndex, jumpTo);
        formatColumns.value[columnIndex] = formatArray(data, props2.valueKey, props2.labelKey).reduce((acc, val) => acc.concat(val), []);
      }
      function getColumnsData() {
        return formatColumns.value.slice(0);
      }
      function getSelectedIndex() {
        return selectedIndex.value;
      }
      function onPickStart() {
        emit("pickstart");
      }
      function onPickEnd() {
        emit("pickend");
      }
      __expose({
        getSelects,
        getValues,
        setColumnData,
        getColumnsData,
        getColumnData,
        getColumnIndex,
        getLabels,
        getSelectedIndex
      });
      return (_ctx, _cache) => {
        const _component_wd_loading = resolveEasycom(vue.resolveDynamicComponent("wd-loading"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(`wd-picker-view ${_ctx.customClass}`),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "wd-picker-view__loading"
            }, [
              vue.createVNode(_component_wd_loading, { color: _ctx.loadingColor }, null, 8, ["color"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle(`height: ${_ctx.columnsHeight - 20}px;`)
              },
              [
                vue.createElementVNode("picker-view", {
                  "mask-class": "wd-picker-view__mask",
                  "indicator-class": "wd-picker-view__roller",
                  "indicator-style": `height: ${itemHeight.value}px;`,
                  style: vue.normalizeStyle(`height: ${_ctx.columnsHeight - 20}px;`),
                  value: selectedIndex.value,
                  onChange,
                  onPickstart: onPickStart,
                  onPickend: onPickEnd
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(formatColumns.value, (col, colIndex) => {
                      return vue.openBlock(), vue.createElementBlock("picker-view-column", {
                        key: colIndex,
                        class: "wd-picker-view-column"
                      }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(col, (row, rowIndex) => {
                            return vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: rowIndex,
                                class: vue.normalizeClass(`wd-picker-view-column__item ${row["disabled"] ? "wd-picker-view-column__item--disabled" : ""}  ${selectedIndex.value[colIndex] == rowIndex ? "wd-picker-view-column__item--active" : ""}`),
                                style: vue.normalizeStyle(`line-height: ${itemHeight.value}px;`)
                              },
                              vue.toDisplayString(row[_ctx.labelKey]),
                              7
                              /* TEXT, CLASS, STYLE */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 44, ["indicator-style", "value"])
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-c3bc94ff"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-picker-view/wd-picker-view.vue"]]);
  function getPickerValue(value, type) {
    const values = [];
    const date2 = new Date(value);
    if (type === "time") {
      const pair = String(value).split(":");
      values.push(parseInt(pair[0]), parseInt(pair[1]));
    } else {
      values.push(date2.getFullYear(), date2.getMonth() + 1);
      if (type === "date") {
        values.push(date2.getDate());
      } else if (type === "datetime") {
        values.push(date2.getDate(), date2.getHours(), date2.getMinutes());
      }
    }
    return values;
  }
  const datetimePickerViewProps = {
    ...baseProps,
    /**
     * 选中项，当 type 为 time 时，类型为字符串，否则为 时间戳
     */
    modelValue: makeRequiredProp([String, Number, Date]),
    /**
     * 加载中
     */
    loading: makeBooleanProp(false),
    /**
     * 加载的颜色，只能使用十六进制的色值写法，且不能使用缩写
     */
    loadingColor: makeStringProp("#4D80F0"),
    /**
     * picker内部滚筒高
     */
    columnsHeight: makeNumberProp(217),
    valueKey: makeStringProp("value"),
    labelKey: makeStringProp("label"),
    /**
     * 选择器类型，可选值：date / year-month / time
     */
    type: makeStringProp("datetime"),
    /**
     * 自定义过滤选项的函数，返回列的选项数组
     */
    filter: Function,
    /**
     * 自定义弹出层选项文案的格式化函数，返回一个字符串
     */
    formatter: Function,
    /**
     * 自定义列的格式化函数
     */
    columnFormatter: Function,
    /**
     * 最小日期
     */
    minDate: makeNumberProp(new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime()),
    /**
     * 最大日期
     */
    maxDate: makeNumberProp(new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 11, 31).getTime()),
    /**
     * 最小小时，time类型时生效
     */
    minHour: makeNumberProp(0),
    /**
     * 最大小时，time类型时生效
     */
    maxHour: makeNumberProp(23),
    /**
     * 最小分钟，time类型时生效
     */
    minMinute: makeNumberProp(0),
    /**
     * 最大分钟，time类型时生效
     */
    maxMinute: makeNumberProp(59),
    startSymbol: makeBooleanProp(false)
  };
  const __default__$b = {
    name: "wd-datetime-picker-view",
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  };
  const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
    ...__default__$b,
    props: datetimePickerViewProps,
    emits: ["change", "pickstart", "pickend", "update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const isValidDate = (date2) => isDef(date2) && !Number.isNaN(date2);
      const times2 = (n2, iteratee) => {
        let index2 = -1;
        const length = n2 < 0 ? 0 : n2;
        const result = Array(length);
        while (++index2 < n2) {
          result[index2] = iteratee(index2);
        }
        return result;
      };
      const getMonthEndDay = (year, month) => {
        return 32 - new Date(year, month - 1, 32).getDate();
      };
      const props2 = __props;
      const emit = __emit;
      const datePickerview = vue.ref();
      const innerValue = vue.ref(null);
      const columns = vue.ref([]);
      const pickerValue = vue.ref([]);
      const created = vue.ref(false);
      const { proxy } = vue.getCurrentInstance();
      __expose({
        updateColumns,
        setColumns,
        getSelects,
        correctValue,
        getPickerValue,
        getOriginColumns,
        ...props2
      });
      const updateValue = debounce$1(() => {
        if (!created.value)
          return;
        const val = correctValue(props2.modelValue);
        const isEqual2 = val === innerValue.value;
        if (!isEqual2) {
          updateColumnValue(val);
        } else {
          columns.value = updateColumns();
        }
      }, 50);
      vue.watch(
        () => props2.modelValue,
        (val, oldVal) => {
          if (val === oldVal)
            return;
          const value = correctValue(val);
          updateColumnValue(value);
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        () => props2.type,
        (target) => {
          const type = ["date", "year-month", "time", "datetime"];
          if (type.indexOf(target) === -1) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-datetime-picker-view/wd-datetime-picker-view.vue:124", `type must be one of ${type}`);
          }
          updateValue();
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        () => props2.filter,
        (fn) => {
          if (fn && !isFunction(fn)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-datetime-picker-view/wd-datetime-picker-view.vue:136", "The type of filter must be Function");
          }
          updateValue();
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        () => props2.formatter,
        (fn) => {
          if (fn && !isFunction(fn)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-datetime-picker-view/wd-datetime-picker-view.vue:147", "The type of formatter must be Function");
          }
          updateValue();
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        () => props2.columnFormatter,
        (fn) => {
          if (fn && !isFunction(fn)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-datetime-picker-view/wd-datetime-picker-view.vue:158", "The type of columnFormatter must be Function");
          }
          updateValue();
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        [
          () => props2.minDate,
          () => props2.maxDate,
          () => props2.minHour,
          () => props2.maxHour,
          () => props2.minMinute,
          () => props2.minMinute,
          () => props2.maxMinute
        ],
        () => {
          updateValue();
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.onBeforeMount(() => {
        created.value = true;
        const innerValue2 = correctValue(props2.modelValue);
        updateColumnValue(innerValue2);
      });
      function onChange({ value }) {
        pickerValue.value = value;
        const result = updateInnerValue();
        emit("update:modelValue", result);
        emit("change", {
          value: result,
          picker: proxy.$.exposed
        });
      }
      function updateColumns() {
        const { formatter, columnFormatter } = props2;
        if (columnFormatter) {
          return columnFormatter(proxy.$.exposed);
        } else {
          return getOriginColumns().map((column) => {
            return column.values.map((value) => {
              return {
                label: formatter ? formatter(column.type, padZero$1(value)) : padZero$1(value),
                value
              };
            });
          });
        }
      }
      function setColumns(columnList) {
        columns.value = columnList;
      }
      function getOriginColumns() {
        const { filter } = props2;
        return getRanges().map(({ type, range: range2 }) => {
          let values = times2(range2[1] - range2[0] + 1, (index2) => {
            return range2[0] + index2;
          });
          if (filter) {
            values = filter(type, values);
          }
          return {
            type,
            values
          };
        });
      }
      function getRanges() {
        if (props2.type === "time") {
          return [
            {
              type: "hour",
              range: [props2.minHour, props2.maxHour]
            },
            {
              type: "minute",
              range: [props2.minMinute, props2.maxMinute]
            }
          ];
        }
        const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = getBoundary("max", innerValue.value);
        const { minYear, minDate, minMonth, minHour, minMinute } = getBoundary("min", innerValue.value);
        const result = [
          {
            type: "year",
            range: [minYear, maxYear]
          },
          {
            type: "month",
            range: [minMonth, maxMonth]
          },
          {
            type: "date",
            range: [minDate, maxDate]
          },
          {
            type: "hour",
            range: [minHour, maxHour]
          },
          {
            type: "minute",
            range: [minMinute, maxMinute]
          }
        ];
        if (props2.type === "date")
          result.splice(3, 2);
        if (props2.type === "year-month")
          result.splice(2, 3);
        return result;
      }
      function correctValue(value) {
        const isDateType = props2.type !== "time";
        if (isDateType && !isValidDate(value)) {
          value = props2.minDate;
        } else if (!isDateType && !value) {
          value = `${padZero$1(props2.minHour)}:00`;
        }
        if (!isDateType) {
          let [hour, minute] = value.split(":");
          hour = padZero$1(range$2(Number(hour), props2.minHour, props2.maxHour));
          minute = padZero$1(range$2(Number(minute), props2.minMinute, props2.maxMinute));
          return `${hour}:${minute}`;
        }
        value = Math.min(Math.max(Number(value), props2.minDate), props2.maxDate);
        return value;
      }
      function getBoundary(type, innerValue2) {
        const value = new Date(innerValue2);
        const boundary = new Date(props2[`${type}Date`]);
        const year = boundary.getFullYear();
        let month = 1;
        let date2 = 1;
        let hour = 0;
        let minute = 0;
        if (type === "max") {
          month = 12;
          date2 = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
          hour = 23;
          minute = 59;
        }
        if (value.getFullYear() === year) {
          month = boundary.getMonth() + 1;
          if (value.getMonth() + 1 === month) {
            date2 = boundary.getDate();
            if (value.getDate() === date2) {
              hour = boundary.getHours();
              if (value.getHours() === hour) {
                minute = boundary.getMinutes();
              }
            }
          }
        }
        return {
          [`${type}Year`]: year,
          [`${type}Month`]: month,
          [`${type}Date`]: date2,
          [`${type}Hour`]: hour,
          [`${type}Minute`]: minute
        };
      }
      function updateColumnValue(value) {
        const values = getPickerValue(value, props2.type);
        if (props2.modelValue !== value) {
          emit("update:modelValue", value);
          emit("change", {
            value,
            picker: proxy.$.exposed
          });
        }
        innerValue.value = value;
        columns.value = updateColumns();
        pickerValue.value = values;
      }
      function updateInnerValue() {
        const { type } = props2;
        let values = [];
        let innerValue2 = "";
        values = datePickerview.value.getValues();
        if (type === "time") {
          innerValue2 = `${padZero$1(values[0])}:${padZero$1(values[1])}`;
          return innerValue2;
        }
        const year = values[0] && parseInt(values[0]);
        const month = values[1] && parseInt(values[1]);
        const maxDate = getMonthEndDay(Number(year), Number(month));
        let date2 = 1;
        if (type !== "year-month") {
          date2 = (Number(values[2]) && parseInt(String(values[2]))) > maxDate ? maxDate : values[2] && parseInt(String(values[2]));
        }
        let hour = 0;
        let minute = 0;
        if (type === "datetime") {
          hour = Number(values[3]) && parseInt(values[3]);
          minute = Number(values[4]) && parseInt(values[4]);
        }
        const value = new Date(Number(year), Number(month) - 1, Number(date2), hour, minute).getTime();
        innerValue2 = correctValue(value);
        return innerValue2;
      }
      function columnChange(picker) {
        if (props2.type === "time" || props2.type === "year-month") {
          return;
        }
        const values = picker.getValues();
        const year = Number(values[0]);
        const month = Number(values[1]);
        const maxDate = getMonthEndDay(year, month);
        let date2 = Number(values[2]);
        date2 = date2 > maxDate ? maxDate : date2;
        let hour = 0;
        let minute = 0;
        if (props2.type === "datetime") {
          hour = Number(values[3]);
          minute = Number(values[4]);
        }
        const value = new Date(year, month - 1, date2, hour, minute).getTime();
        innerValue.value = correctValue(value);
        const newColumns = updateColumns().slice(0, 3);
        const selectedIndex = picker.getSelectedIndex().slice(0);
        newColumns.forEach((columns2, index2) => {
          const nextColumnIndex = index2 + 1;
          const nextColumnData = newColumns[nextColumnIndex];
          if (index2 === 2)
            return;
          picker.setColumnData(
            nextColumnIndex,
            nextColumnData,
            selectedIndex[nextColumnIndex] <= nextColumnData.length - 1 ? selectedIndex[nextColumnIndex] : 0
          );
        });
      }
      function onPickStart() {
        emit("pickstart");
      }
      function onPickEnd() {
        emit("pickend");
      }
      function getSelects() {
        return datePickerview.value && datePickerview.value.getSelects ? datePickerview.value.getSelects() : void 0;
      }
      return (_ctx, _cache) => {
        const _component_wd_picker_view = resolveEasycom(vue.resolveDynamicComponent("wd-picker-view"), __easycom_1$4);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_wd_picker_view, {
            "custom-class": _ctx.customClass,
            "custom-style": _ctx.customStyle,
            ref_key: "datePickerview",
            ref: datePickerview,
            modelValue: pickerValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pickerValue.value = $event),
            columns: columns.value,
            "columns-height": _ctx.columnsHeight,
            columnChange,
            loading: _ctx.loading,
            "loading-color": _ctx.loadingColor,
            onChange,
            onPickstart: onPickStart,
            onPickend: onPickEnd
          }, null, 8, ["custom-class", "custom-style", "modelValue", "columns", "columns-height", "loading", "loading-color"])
        ]);
      };
    }
  });
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-db34fecd"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-datetime-picker-view/wd-datetime-picker-view.vue"]]);
  const datetimePickerProps = {
    ...baseProps,
    /**
     * 选择器左侧文案，label可以不传
     */
    label: String,
    /**
     * 选择器占位符
     */
    placeholder: String,
    /**
     * 禁用
     */
    disabled: makeBooleanProp(false),
    /**
     * 只读
     */
    readonly: makeBooleanProp(false),
    /**
     * 加载中
     */
    loading: makeBooleanProp(false),
    /**
     * 加载的颜色，只能使用十六进制的色值写法，且不能使用缩写
     */
    loadingColor: makeStringProp("#4D80F0"),
    /**
     * 弹出层标题
     */
    title: String,
    /**
     * 取消按钮文案
     */
    cancelButtonText: String,
    /**
     * 确认按钮文案
     */
    confirmButtonText: String,
    /**
     * 是否必填
     */
    required: makeBooleanProp(false),
    /**
     * 设置选择器大小，可选值：large
     */
    size: String,
    /**
     * 设置左侧标题宽度
     */
    labelWidth: makeStringProp("33%"),
    /**
     * 使用默认插槽
     */
    useDefaultSlot: makeBooleanProp(false),
    /**
     * label 使用插槽
     */
    useLabelSlot: makeBooleanProp(false),
    /**
     * 是否为错误状态，错误状态时右侧内容为红色
     */
    error: makeBooleanProp(false),
    /**
     * 选择器的值靠右展示
     */
    alignRight: makeBooleanProp(false),
    /**
     * 点击遮罩是否关闭
     */
    closeOnClickModal: makeBooleanProp(true),
    /**
     * 弹出面板是否设置底部安全距离（iphone X 类型的机型）
     */
    safeAreaInsetBottom: makeBooleanProp(true),
    /**
     * 是否超出隐藏
     */
    ellipsis: makeBooleanProp(false),
    /**
     * picker内部滚筒高
     */
    columnsHeight: makeNumberProp(217),
    valueKey: makeStringProp("value"),
    labelKey: makeStringProp("label"),
    /**
     * 选中项，当 type 为 time 时，类型为字符串；当 type 为 Array 时，类型为范围选择；否则为 时间戳
     */
    modelValue: makeRequiredProp([String, Number, Date, Array]),
    /**
     * 选择器类型，可选值为：date / year-month / time
     */
    type: makeStringProp("datetime"),
    /**
     * 最小日期
     */
    minDate: makeNumberProp(new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime()),
    /**
     * 最大日期
     */
    maxDate: makeNumberProp(new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 11, 31).getTime()),
    /**
     * 最小小时，time类型时生效
     */
    minHour: makeNumberProp(0),
    /**
     * 最大小时，time类型时生效
     */
    maxHour: makeNumberProp(23),
    /**
     * 最小分钟，time类型时生效
     */
    minMinute: makeNumberProp(0),
    /**
     * 最大分钟，time类型时生效
     */
    maxMinute: makeNumberProp(59),
    /**
     * 自定义过滤选项的函数，返回列的选项数组
     */
    filter: Function,
    /**
     * 自定义弹出层选项文案的格式化函数，返回一个字符串
     */
    formatter: Function,
    /**
     * 自定义展示文案的格式化函数，返回一个字符串
     */
    displayFormat: Function,
    /**
     * 确定前校验函数，接收 (value, resolve, picker) 参数，通过 resolve 继续执行 picker，resolve 接收1个boolean参数
     */
    beforeConfirm: Function,
    /**
     * 在区域选择模式下，自定义展示tab标签文案的格式化函数，返回一个字符串
     */
    displayFormatTabLabel: Function,
    /**
     * 默认日期，类型保持与 value 一致，打开面板时面板自动选到默认日期
     */
    defaultValue: [String, Number, Array],
    /**
     * 弹窗层级
     */
    zIndex: makeNumberProp(15),
    /**
     * 表单域 model 字段名，在使用表单校验功能的情况下，该属性是必填的
     */
    prop: String,
    /**
     * 表单验证规则，结合wd-form组件使用
     */
    rules: makeArrayProp(),
    /**
     * pickerView 外部自定义样式
     */
    customViewClass: makeStringProp(""),
    /**
     * label 外部自定义样式
     */
    customLabelClass: makeStringProp(""),
    /**
     * value 外部自定义样式
     */
    customValueClass: makeStringProp("")
  };
  const __default__$a = {
    name: "wd-datetime-picker",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
    ...__default__$a,
    props: datetimePickerProps,
    emits: ["change", "open", "toggle", "cancel", "confirm", "update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const { translate } = useTranslate("datetime-picker");
      const datetimePickerView = vue.ref();
      const datetimePickerView1 = vue.ref();
      const showValue = vue.ref([]);
      const popupShow = vue.ref(false);
      const showStart = vue.ref(true);
      const region = vue.ref(false);
      const showTabLabel = vue.ref([]);
      const innerValue = vue.ref("");
      const endInnerValue = vue.ref("");
      const isPicking = vue.ref(false);
      const hasConfirmed = vue.ref(false);
      const isLoading = vue.ref(false);
      const { proxy } = vue.getCurrentInstance();
      const cell = useCell();
      vue.watch(
        () => props2.modelValue,
        (val, oldVal) => {
          if (isEqual(val, oldVal))
            return;
          if (isArray(val)) {
            region.value = true;
            innerValue.value = deepClone$1(getDefaultInnerValue(true));
            endInnerValue.value = deepClone$1(getDefaultInnerValue(true, true));
          } else {
            innerValue.value = deepClone$1(getDefaultInnerValue());
          }
          vue.nextTick(() => {
            setShowValue(false, false, true);
          });
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.displayFormat,
        (fn) => {
          if (fn && !isFunction(fn)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-datetime-picker/wd-datetime-picker.vue:218", "The type of displayFormat must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.filter,
        (fn) => {
          if (fn && !isFunction(fn)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-datetime-picker/wd-datetime-picker.vue:230", "The type of filter must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.formatter,
        (fn) => {
          if (fn && !isFunction(fn)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-datetime-picker/wd-datetime-picker.vue:242", "The type of formatter must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.beforeConfirm,
        (fn) => {
          if (fn && !isFunction(fn)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-datetime-picker/wd-datetime-picker.vue:254", "The type of beforeConfirm must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.displayFormatTabLabel,
        (fn) => {
          if (fn && !isFunction(fn)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-datetime-picker/wd-datetime-picker.vue:266", "The type of displayFormatTabLabel must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.defaultValue,
        (val) => {
          if (isArray(val) || region.value) {
            innerValue.value = deepClone$1(getDefaultInnerValue(true));
            endInnerValue.value = deepClone$1(getDefaultInnerValue(true, true));
          } else {
            innerValue.value = deepClone$1(getDefaultInnerValue());
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      const { parent: form } = useParent(FORM_KEY);
      const errorMessage = vue.computed(() => {
        if (form && props2.prop && form.errorMessages && form.errorMessages[props2.prop]) {
          return form.errorMessages[props2.prop];
        } else {
          return "";
        }
      });
      const isRequired = vue.computed(() => {
        let formRequired = false;
        if (form && form.props.rules) {
          const rules = form.props.rules;
          for (const key in rules) {
            if (Object.prototype.hasOwnProperty.call(rules, key) && key === props2.prop && Array.isArray(rules[key])) {
              formRequired = rules[key].some((rule) => rule.required);
            }
          }
        }
        return props2.required || props2.rules.some((rule) => rule.required) || formRequired;
      });
      const customColumnFormatter = (picker) => {
        if (!picker) {
          return [];
        }
        const { type } = props2;
        const { startSymbol, formatter } = picker;
        const start = picker.correctValue(innerValue.value);
        const end = picker.correctValue(endInnerValue.value);
        const currentValue = startSymbol ? picker.getPickerValue(start, type) : picker.getPickerValue(end, type);
        const boundary = startSymbol ? picker.getPickerValue(end, type) : picker.getPickerValue(start, type);
        const columns = picker.getOriginColumns();
        return columns.map((column, cIndex) => {
          return column.values.map((value) => {
            const disabled = columnDisabledRules(startSymbol, columns, cIndex, value, currentValue, boundary);
            return {
              label: formatter ? formatter(column.type, padZero$1(value)) : padZero$1(value),
              value,
              disabled
            };
          });
        });
      };
      vue.onBeforeMount(() => {
        const { modelValue: value } = props2;
        if (isArray(value)) {
          region.value = true;
          innerValue.value = deepClone$1(getDefaultInnerValue(true));
          endInnerValue.value = deepClone$1(getDefaultInnerValue(true, true));
        } else {
          innerValue.value = deepClone$1(getDefaultInnerValue());
        }
      });
      vue.onMounted(() => {
        setShowValue(false, false, true);
      });
      function getSelects(picker) {
        let value = picker === "before" ? innerValue.value : endInnerValue.value;
        let selected = [];
        if (value) {
          selected = getPickerValue(value, props2.type);
        }
        let selects = selected.map((value2) => {
          return {
            [props2.labelKey]: padZero$1(value2),
            [props2.valueKey]: value2
          };
        });
        return selects;
      }
      function noop() {
      }
      function getDefaultInnerValue(isRegion, isEnd) {
        const { modelValue: value, defaultValue } = props2;
        if (isRegion) {
          if (isEnd) {
            return (isArray(value) ? value[1] : "") || (defaultValue && isArray(defaultValue) ? defaultValue[1] : "");
          } else {
            return (isArray(value) ? value[0] : "") || (defaultValue && isArray(defaultValue) ? defaultValue[0] : "");
          }
        } else {
          return isDef(value || defaultValue) ? value || defaultValue : "";
        }
      }
      function open() {
        showPopup();
      }
      function close() {
        onCancel();
      }
      function showPopup() {
        if (props2.disabled || props2.readonly)
          return;
        emit("open");
        if (region.value) {
          popupShow.value = true;
          showStart.value = true;
          innerValue.value = deepClone$1(getDefaultInnerValue(true, false));
          endInnerValue.value = deepClone$1(getDefaultInnerValue(true, true));
        } else {
          popupShow.value = true;
          innerValue.value = deepClone$1(getDefaultInnerValue());
        }
        setShowValue(true, false, true);
      }
      function tabChange() {
        showStart.value = !showStart.value;
        const picker = showStart.value ? datetimePickerView.value : datetimePickerView1.value;
        picker.setColumns(picker.updateColumns());
        emit("toggle", showStart.value ? innerValue.value : endInnerValue.value);
      }
      function onChangeStart({ value }) {
        innerValue.value = deepClone$1(value);
        if (region.value) {
          showTabLabel.value = [setTabLabel(), deepClone$1(showTabLabel.value[1])];
          emit("change", {
            value: [value, endInnerValue.value]
          });
          datetimePickerView.value && datetimePickerView.value.setColumns(datetimePickerView.value.updateColumns());
          datetimePickerView1.value && datetimePickerView1.value.setColumns(datetimePickerView1.value.updateColumns());
        } else {
          emit("change", {
            value: innerValue.value
          });
        }
      }
      function onChangeEnd({ value }) {
        endInnerValue.value = deepClone$1(value);
        showTabLabel.value = [deepClone$1(showTabLabel.value[0]), setTabLabel(1)];
        emit("change", {
          value: [innerValue.value, value]
        });
        datetimePickerView.value && datetimePickerView.value.setColumns(datetimePickerView.value.updateColumns());
        datetimePickerView1.value && datetimePickerView1.value.setColumns(datetimePickerView1.value.updateColumns());
      }
      function onCancel() {
        popupShow.value = false;
        setTimeout(() => {
          if (region.value) {
            innerValue.value = deepClone$1(getDefaultInnerValue(true));
            endInnerValue.value = deepClone$1(getDefaultInnerValue(true, true));
          } else {
            innerValue.value = deepClone$1(getDefaultInnerValue());
          }
        }, 200);
        emit("cancel");
      }
      function onConfirm() {
        if (props2.loading || isLoading.value)
          return;
        if (isPicking.value) {
          hasConfirmed.value = true;
          return;
        }
        const { beforeConfirm } = props2;
        if (beforeConfirm) {
          beforeConfirm(
            region.value ? [innerValue.value, endInnerValue.value] : innerValue.value,
            (isPass) => {
              isPass && handleConfirm();
            },
            proxy.$.exposed
          );
        } else {
          handleConfirm();
        }
      }
      function onPickStart() {
        isPicking.value = true;
      }
      function onPickEnd() {
        isPicking.value = false;
        setTimeout(() => {
          if (hasConfirmed.value) {
            hasConfirmed.value = false;
            onConfirm();
          }
        }, 50);
      }
      function handleConfirm() {
        if (props2.loading || isLoading.value || props2.disabled) {
          popupShow.value = false;
          return;
        }
        const value = region.value ? [innerValue.value, endInnerValue.value] : innerValue.value;
        popupShow.value = false;
        emit("update:modelValue", value);
        emit("confirm", {
          value
        });
        setShowValue(false, true);
      }
      function setTabLabel(index2 = 0) {
        if (region.value) {
          let items = [];
          if (index2 === 0) {
            items = (datetimePickerView.value ? datetimePickerView.value.getSelects() : void 0) || innerValue.value && getSelects("before");
          } else {
            items = (datetimePickerView1.value ? datetimePickerView1.value.getSelects() : void 0) || endInnerValue.value && getSelects("after");
          }
          return defaultDisplayFormat2(items, true);
        } else {
          return "";
        }
      }
      function setShowValue(tab = false, isConfirm = false, beforeMount = false) {
        if (region.value) {
          const items = beforeMount ? innerValue.value && getSelects("before") || [] : datetimePickerView.value && datetimePickerView.value.getSelects && datetimePickerView.value.getSelects() || [];
          const endItems = beforeMount ? endInnerValue.value && getSelects("after") || [] : datetimePickerView1.value && datetimePickerView1.value.getSelects && datetimePickerView1.value.getSelects() || [];
          showValue.value = tab ? showValue.value : [
            props2.modelValue[0] || isConfirm ? defaultDisplayFormat2(items) : "",
            props2.modelValue[1] || isConfirm ? defaultDisplayFormat2(endItems) : ""
          ];
          showTabLabel.value = [defaultDisplayFormat2(items, true), defaultDisplayFormat2(endItems, true)];
        } else {
          const items = beforeMount ? innerValue.value && getSelects("before") || [] : datetimePickerView.value && datetimePickerView.value.getSelects && datetimePickerView.value.getSelects() || [];
          showValue.value = deepClone$1(props2.modelValue || isConfirm ? defaultDisplayFormat2(items) : "");
        }
      }
      function defaultDisplayFormat2(items, tabLabel = false) {
        if (items.length === 0)
          return "";
        if (tabLabel && props2.displayFormatTabLabel) {
          return props2.displayFormatTabLabel(items);
        }
        if (props2.displayFormat) {
          return props2.displayFormat(items);
        }
        if (props2.formatter) {
          const typeMaps = {
            datetime: ["year", "month", "date", "hour", "minute"],
            date: ["year", "month", "date"],
            time: ["hour", "minute"],
            "year-month": ["year", "month"]
          };
          return items.map((item, index2) => {
            return props2.formatter(typeMaps[props2.type][index2], item.value);
          }).join("");
        }
        switch (props2.type) {
          case "date":
            return `${items[0].label}-${items[1].label}-${items[2].label}`;
          case "year-month":
            return `${items[0].label}-${items[1].label}`;
          case "time":
            return `${items[0].label}:${items[1].label}`;
          case "datetime":
            return `${items[0].label}-${items[1].label}-${items[2].label} ${items[3].label}:${items[4].label}`;
        }
      }
      function columnDisabledRules(isStart, columns, cIndex, value, currentValue, boundary) {
        const { type } = props2;
        const column = columns[cIndex];
        if (type === "datetime") {
          const year = boundary[0];
          const month = boundary[1];
          const date2 = boundary[2];
          const hour = boundary[3];
          const minute = boundary[4];
          if (column.type === "year") {
            return isStart ? value > year : value < year;
          }
          if (column.type === "month" && currentValue[0] === year) {
            return isStart ? value > month : value < month;
          }
          if (column.type === "date" && currentValue[0] === year && currentValue[1] === month) {
            return isStart ? value > date2 : value < date2;
          }
          if (column.type === "hour" && currentValue[0] === year && currentValue[1] === month && currentValue[2] === date2) {
            return isStart ? value > hour : value < hour;
          }
          if (column.type === "minute" && currentValue[0] === year && currentValue[1] === month && currentValue[2] === date2 && currentValue[3] === hour) {
            return isStart ? value > minute : value < minute;
          }
        } else if (type === "year-month") {
          const year = boundary[0];
          const month = boundary[1];
          if (column.type === "year") {
            return isStart ? value > year : value < year;
          }
          if (column.type === "month" && currentValue[0] === year) {
            return isStart ? value > month : value < month;
          }
        } else if (type === "date") {
          const year = boundary[0];
          const month = boundary[1];
          const date2 = boundary[2];
          if (column.type === "year") {
            return isStart ? value > year : value < year;
          }
          if (column.type === "month" && currentValue[0] === year) {
            return isStart ? value > month : value < month;
          }
          if (column.type === "date" && currentValue[0] === year && currentValue[1] === month) {
            return isStart ? value > date2 : value < date2;
          }
        } else if (type === "time") {
          const hour = boundary[0];
          const minute = boundary[1];
          if (column.type === "hour") {
            return isStart ? value > hour : value < hour;
          }
          if (column.type === "minute" && currentValue[0] === hour) {
            return isStart ? value > minute : value < minute;
          }
        }
        return false;
      }
      function setLoading(loading) {
        isLoading.value = loading;
      }
      __expose({
        open,
        close,
        setLoading
      });
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_datetime_picker_view = resolveEasycom(vue.resolveDynamicComponent("wd-datetime-picker-view"), __easycom_1$3);
        const _component_wd_popup = resolveEasycom(vue.resolveDynamicComponent("wd-popup"), __easycom_1$5);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(`wd-picker ${_ctx.disabled ? "is-disabled" : ""} ${_ctx.size ? "is-" + _ctx.size : ""}  ${vue.unref(cell).border.value ? "is-border" : ""} ${_ctx.alignRight ? "is-align-right" : ""} ${_ctx.error ? "is-error" : ""} ${_ctx.customClass}`),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            vue.createCommentVNode("文案"),
            vue.createElementVNode("view", {
              class: "wd-picker__field",
              onClick: showPopup
            }, [
              _ctx.useDefaultSlot ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "wd-picker__cell"
              }, [
                _ctx.label || _ctx.useLabelSlot ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: vue.normalizeClass(`wd-picker__label ${_ctx.customLabelClass} ${isRequired.value ? "is-required" : ""}`),
                    style: vue.normalizeStyle(_ctx.labelWidth ? "min-width:" + _ctx.labelWidth + ";max-width:" + _ctx.labelWidth + ";" : "")
                  },
                  [
                    _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      { key: 0 },
                      [
                        vue.createTextVNode(
                          vue.toDisplayString(_ctx.label),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : vue.renderSlot(_ctx.$slots, "label", { key: 1 }, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", { class: "wd-picker__body" }, [
                  vue.createElementVNode("view", { class: "wd-picker__value-wraper" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(`wd-picker__value ${_ctx.customValueClass}`)
                      },
                      [
                        region.value ? (vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          { key: 0 },
                          [
                            vue.unref(isArray)(showValue.value) ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                              vue.createElementVNode(
                                "text",
                                {
                                  class: vue.normalizeClass(showValue.value[0] ? "" : "wd-picker__placeholder")
                                },
                                vue.toDisplayString(showValue.value[0] ? showValue.value[0] : _ctx.placeholder || vue.unref(translate)("placeholder")),
                                3
                                /* TEXT, CLASS */
                              ),
                              vue.createTextVNode(
                                " " + vue.toDisplayString(vue.unref(translate)("to")) + " ",
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode(
                                "text",
                                {
                                  class: vue.normalizeClass(showValue.value[1] ? "" : "wd-picker__placeholder")
                                },
                                vue.toDisplayString(showValue.value[1] ? showValue.value[1] : _ctx.placeholder || vue.unref(translate)("placeholder")),
                                3
                                /* TEXT, CLASS */
                              )
                            ])) : (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 1,
                                class: "wd-picker__placeholder"
                              },
                              vue.toDisplayString(_ctx.placeholder || vue.unref(translate)("placeholder")),
                              1
                              /* TEXT */
                            ))
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 1,
                            class: vue.normalizeClass(showValue.value ? "" : "wd-picker__placeholder")
                          },
                          vue.toDisplayString(showValue.value ? showValue.value : _ctx.placeholder || vue.unref(translate)("placeholder")),
                          3
                          /* TEXT, CLASS */
                        ))
                      ],
                      2
                      /* CLASS */
                    ),
                    !_ctx.disabled && !_ctx.readonly ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                      key: 0,
                      "custom-class": "wd-picker__arrow",
                      name: "arrow-right"
                    })) : vue.createCommentVNode("v-if", true)
                  ]),
                  errorMessage.value ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "wd-picker__error-message"
                    },
                    vue.toDisplayString(errorMessage.value),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ])
              ]))
            ]),
            vue.createCommentVNode("弹出层，picker-view 在隐藏时修改值，会触发多次change事件，从而导致所有列选中第一项，因此picker在关闭时不隐藏 "),
            vue.createVNode(_component_wd_popup, {
              modelValue: popupShow.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => popupShow.value = $event),
              position: "bottom",
              "hide-when-close": false,
              "close-on-click-modal": _ctx.closeOnClickModal,
              "safe-area-inset-bottom": _ctx.safeAreaInsetBottom,
              "z-index": _ctx.zIndex,
              onClose: onCancel,
              "custom-class": "wd-picker__popup"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "wd-picker__wraper" }, [
                  vue.createCommentVNode("toolBar"),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "wd-picker__toolbar",
                      onTouchmove: noop
                    },
                    [
                      vue.createCommentVNode("取消按钮"),
                      vue.createElementVNode(
                        "view",
                        {
                          class: "wd-picker__action wd-picker__action--cancel",
                          onClick: onCancel
                        },
                        vue.toDisplayString(_ctx.cancelButtonText || vue.unref(translate)("cancel")),
                        1
                        /* TEXT */
                      ),
                      vue.createCommentVNode("标题"),
                      _ctx.title ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: "wd-picker__title"
                        },
                        vue.toDisplayString(_ctx.title),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true),
                      vue.createCommentVNode("确定按钮"),
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass(`wd-picker__action ${_ctx.loading || isLoading.value ? "is-loading" : ""}`),
                          onClick: onConfirm
                        },
                        vue.toDisplayString(_ctx.confirmButtonText || vue.unref(translate)("confirm")),
                        3
                        /* TEXT, CLASS */
                      )
                    ],
                    32
                    /* NEED_HYDRATION */
                  ),
                  vue.createCommentVNode(" 区域选择tab展示 "),
                  region.value ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "wd-picker__region-tabs"
                  }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(`wd-picker__region ${showStart.value ? "is-active" : ""} `),
                        onClick: tabChange
                      },
                      [
                        vue.createElementVNode(
                          "view",
                          null,
                          vue.toDisplayString(vue.unref(translate)("start")),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "wd-picker__region-time" },
                          vue.toDisplayString(showTabLabel.value[0]),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(`wd-picker__region ${showStart.value ? "" : "is-active"}`),
                        onClick: tabChange
                      },
                      [
                        vue.createElementVNode(
                          "view",
                          null,
                          vue.toDisplayString(vue.unref(translate)("end")),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "wd-picker__region-time" },
                          vue.toDisplayString(showTabLabel.value[1]),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    )
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createCommentVNode("datetimePickerView"),
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(showStart.value ? "wd-picker__show" : "wd-picker__hidden")
                    },
                    [
                      vue.createVNode(_component_wd_datetime_picker_view, {
                        "custom-class": _ctx.customViewClass,
                        ref_key: "datetimePickerView",
                        ref: datetimePickerView,
                        type: _ctx.type,
                        modelValue: innerValue.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => innerValue.value = $event),
                        loading: _ctx.loading || isLoading.value,
                        "loading-color": _ctx.loadingColor,
                        "columns-height": _ctx.columnsHeight,
                        "value-key": _ctx.valueKey,
                        "label-key": _ctx.labelKey,
                        formatter: _ctx.formatter,
                        filter: _ctx.filter,
                        "column-formatter": vue.unref(isArray)(_ctx.modelValue) ? customColumnFormatter : void 0,
                        "max-hour": _ctx.maxHour,
                        "min-hour": _ctx.minHour,
                        "max-date": _ctx.maxDate,
                        "min-date": _ctx.minDate,
                        "max-minute": _ctx.maxMinute,
                        "min-minute": _ctx.minMinute,
                        "start-symbol": true,
                        onChange: onChangeStart,
                        onPickstart: onPickStart,
                        onPickend: onPickEnd
                      }, null, 8, ["custom-class", "type", "modelValue", "loading", "loading-color", "columns-height", "value-key", "label-key", "formatter", "filter", "column-formatter", "max-hour", "min-hour", "max-date", "min-date", "max-minute", "min-minute"])
                    ],
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(showStart.value ? "wd-picker__hidden" : "wd-picker__show")
                    },
                    [
                      vue.createVNode(_component_wd_datetime_picker_view, {
                        "custom-class": _ctx.customViewClass,
                        ref_key: "datetimePickerView1",
                        ref: datetimePickerView1,
                        type: _ctx.type,
                        modelValue: endInnerValue.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endInnerValue.value = $event),
                        loading: _ctx.loading || isLoading.value,
                        "loading-color": _ctx.loadingColor,
                        "columns-height": _ctx.columnsHeight,
                        "value-key": _ctx.valueKey,
                        "label-key": _ctx.labelKey,
                        formatter: _ctx.formatter,
                        filter: _ctx.filter,
                        "column-formatter": vue.unref(isArray)(_ctx.modelValue) ? customColumnFormatter : void 0,
                        "max-hour": _ctx.maxHour,
                        "min-hour": _ctx.minHour,
                        "max-date": _ctx.maxDate,
                        "min-date": _ctx.minDate,
                        "max-minute": _ctx.maxMinute,
                        "min-minute": _ctx.minMinute,
                        "start-symbol": false,
                        onChange: onChangeEnd,
                        onPickstart: onPickStart,
                        onPickend: onPickEnd
                      }, null, 8, ["custom-class", "type", "modelValue", "loading", "loading-color", "columns-height", "value-key", "label-key", "formatter", "filter", "column-formatter", "max-hour", "min-hour", "max-date", "min-date", "max-minute", "min-minute"])
                    ],
                    2
                    /* CLASS */
                  )
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "close-on-click-modal", "safe-area-inset-bottom", "z-index"])
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-2a8ca3bd"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-datetime-picker/wd-datetime-picker.vue"]]);
  const pickerProps = {
    ...baseProps,
    /**
     * label 外部自定义样式
     */
    customLabelClass: makeStringProp(""),
    /**
     * value 外部自定义样式
     */
    customValueClass: makeStringProp(""),
    /**
     * pickerView 外部自定义样式
     */
    customViewClass: makeStringProp(""),
    /**
     * 选择器左侧文案
     */
    label: String,
    /**
     * 选择器占位符
     */
    placeholder: String,
    /**
     * 是否禁用
     */
    disabled: makeBooleanProp(false),
    /**
     * 是否只读
     */
    readonly: makeBooleanProp(false),
    /**
     * 加载中
     */
    loading: makeBooleanProp(false),
    /**
     * 加载中颜色
     */
    loadingColor: makeStringProp("#4D80F0"),
    /* popup */
    /**
     * 弹出层标题
     */
    title: String,
    /**
     * 取消按钮文案
     */
    cancelButtonText: String,
    /**
     * 确认按钮文案
     */
    confirmButtonText: String,
    /**
     * 是否必填
     */
    required: makeBooleanProp(false),
    /**
     * 尺寸
     */
    size: String,
    /**
     * 标签宽度
     */
    labelWidth: String,
    /**
     * 使用默认插槽
     */
    useDefaultSlot: makeBooleanProp(false),
    /**
     * 使用标签插槽
     */
    useLabelSlot: makeBooleanProp(false),
    /**
     * 错误状态
     */
    error: makeBooleanProp(false),
    /**
     * 右对齐
     */
    alignRight: makeBooleanProp(false),
    /**
     * 确定前校验函数，接收 (value, resolve, picker) 参数，通过 resolve 继续执行 picker，resolve 接收1个boolean参数
     */
    beforeConfirm: Function,
    /**
     * 点击蒙层关闭
     */
    closeOnClickModal: makeBooleanProp(true),
    /**
     * 底部安全区域内
     */
    safeAreaInsetBottom: makeBooleanProp(true),
    /**
     * 文本溢出显示省略号
     */
    ellipsis: makeBooleanProp(false),
    /**
     * 选项总高度
     */
    columnsHeight: makeNumberProp(217),
    /**
     * 选项值对应的键名
     */
    valueKey: makeStringProp("value"),
    /**
     * 选项文本对应的键名
     */
    labelKey: makeStringProp("label"),
    /**
     * 选中项，如果为多列选择器，则其类型应为数组
     */
    modelValue: {
      type: [String, Number, Array],
      default: ""
    },
    /**
     * 选择器数据，可以为字符串数组，也可以为对象数组，如果为二维数组，则为多列选择器
     */
    columns: {
      type: Array,
      default: () => []
    },
    /**
     * 接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 setColumnData 方法修改其他列的数据源。
     */
    columnChange: Function,
    /**
     * 自定义展示文案的格式化函数，返回一个字符串
     */
    displayFormat: Function,
    /**
     * 自定义层级
     */
    zIndex: makeNumberProp(15),
    /**
     * 表单域 model 字段名，在使用表单校验功能的情况下，该属性是必填的
     */
    prop: String,
    /**
     * 表单验证规则，结合wd-form组件使用
     */
    rules: makeArrayProp()
  };
  const __default__$9 = {
    name: "wd-picker",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$u = /* @__PURE__ */ vue.defineComponent({
    ...__default__$9,
    props: pickerProps,
    emits: ["confirm", "open", "cancel", "update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const { translate } = useTranslate("picker");
      const props2 = __props;
      const emit = __emit;
      const pickerViewWd = vue.ref(null);
      const cell = useCell();
      const innerLoading = vue.ref(false);
      const popupShow = vue.ref(false);
      const showValue = vue.ref("");
      const pickerValue = vue.ref("");
      const displayColumns = vue.ref([]);
      const resetColumns = vue.ref([]);
      const isPicking = vue.ref(false);
      const hasConfirmed = vue.ref(false);
      const isLoading = vue.computed(() => {
        return props2.loading || innerLoading.value;
      });
      vue.watch(
        () => props2.displayFormat,
        (fn) => {
          if (fn && !isFunction(fn)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-picker/wd-picker.vue:125", "The type of displayFormat must be Function");
          }
          if (pickerViewWd.value && pickerViewWd.value.selectedIndex && pickerViewWd.value.selectedIndex.length !== 0) {
            if (isDef(props2.modelValue) && props2.modelValue !== "") {
              setShowValue(pickerViewWd.value.getSelects());
            } else {
              showValue.value = "";
            }
          }
        },
        {
          immediate: true,
          deep: true
        }
      );
      vue.watch(
        () => props2.modelValue,
        (newValue) => {
          pickerValue.value = newValue;
          if (isDef(newValue) && newValue !== "") {
            if (pickerViewWd.value && pickerViewWd.value.getSelects) {
              vue.nextTick(() => {
                setShowValue(pickerViewWd.value.getSelects());
              });
            } else {
              setShowValue(getSelects(newValue));
            }
          } else {
            showValue.value = "";
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.columns,
        (newValue) => {
          displayColumns.value = newValue;
          resetColumns.value = newValue;
          if (isDef(props2.modelValue) && props2.modelValue !== "") {
            if (pickerViewWd.value && pickerViewWd.value.getSelects) {
              vue.nextTick(() => {
                setShowValue(pickerViewWd.value.getSelects());
              });
            } else {
              setShowValue(getSelects(props2.modelValue));
            }
          } else {
            showValue.value = "";
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props2.columnChange,
        (newValue) => {
          if (newValue && !isFunction(newValue)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-picker/wd-picker.vue:192", "The type of columnChange must be Function");
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      const { parent: form } = useParent(FORM_KEY);
      const errorMessage = vue.computed(() => {
        if (form && props2.prop && form.errorMessages && form.errorMessages[props2.prop]) {
          return form.errorMessages[props2.prop];
        } else {
          return "";
        }
      });
      const isRequired = vue.computed(() => {
        let formRequired = false;
        if (form && form.props.rules) {
          const rules = form.props.rules;
          for (const key in rules) {
            if (Object.prototype.hasOwnProperty.call(rules, key) && key === props2.prop && Array.isArray(rules[key])) {
              formRequired = rules[key].some((rule) => rule.required);
            }
          }
        }
        return props2.required || props2.rules.some((rule) => rule.required) || formRequired;
      });
      const { proxy } = vue.getCurrentInstance();
      vue.onMounted(() => {
        isDef(props2.modelValue) && props2.modelValue !== "" && setShowValue(getSelects(props2.modelValue));
        if (isDef(props2.modelValue) && props2.modelValue !== "" && pickerViewWd.value && pickerViewWd.value.getSelects) {
          setShowValue(pickerViewWd.value.getSelects());
        }
      });
      vue.onBeforeMount(() => {
        displayColumns.value = deepClone$1(props2.columns);
        resetColumns.value = deepClone$1(props2.columns);
      });
      function getSelects(value) {
        const formatColumns = formatArray(props2.columns, props2.valueKey, props2.labelKey);
        if (props2.columns.length === 0)
          return;
        if (value === "" || !isDef(value) || isArray(value) && value.length === 0) {
          return;
        }
        const valueType = getType(value);
        const type = ["string", "number", "boolean", "array"];
        if (type.indexOf(valueType) === -1)
          return [];
        value = isArray(value) ? value : [value];
        value = value.slice(0, formatColumns.length);
        if (value.length === 0) {
          value = formatColumns.map(() => 0);
        }
        let selected = [];
        value.forEach((target, col) => {
          let row = formatColumns[col].findIndex((row2) => {
            return row2[props2.valueKey].toString() === target.toString();
          });
          row = row === -1 ? 0 : row;
          selected.push(row);
        });
        const selects = selected.map((row, col) => formatColumns[col][row]);
        if (selects.length === 1) {
          return selects[0];
        }
        return selects;
      }
      function open() {
        showPopup();
      }
      function close() {
        onCancel();
      }
      function showPopup() {
        if (props2.disabled || props2.readonly)
          return;
        emit("open");
        popupShow.value = true;
        pickerValue.value = props2.modelValue;
        displayColumns.value = resetColumns.value;
      }
      function onCancel() {
        popupShow.value = false;
        emit("cancel");
      }
      function onConfirm() {
        if (isLoading.value)
          return;
        if (isPicking.value) {
          hasConfirmed.value = true;
          return;
        }
        const { beforeConfirm } = props2;
        if (beforeConfirm && isFunction(beforeConfirm)) {
          beforeConfirm(
            pickerValue.value,
            (isPass) => {
              isPass && handleConfirm();
            },
            proxy.$.exposed
          );
        } else {
          handleConfirm();
        }
      }
      function handleConfirm() {
        if (isLoading.value || props2.disabled) {
          popupShow.value = false;
          return;
        }
        const selects = pickerViewWd.value.getSelects();
        const values = pickerViewWd.value.getValues();
        const columns = pickerViewWd.value.getColumnsData();
        popupShow.value = false;
        resetColumns.value = deepClone$1(columns);
        emit("update:modelValue", values);
        setShowValue(selects);
        emit("confirm", {
          value: values,
          selectedItems: selects
        });
      }
      function pickerViewChange({ value }) {
        pickerValue.value = value;
      }
      function setShowValue(items) {
        if (isArray(items) && !items.length || !items)
          return;
        const { valueKey, labelKey } = props2;
        showValue.value = (props2.displayFormat || defaultDisplayFormat)(items, { valueKey, labelKey });
      }
      function noop() {
      }
      function onPickStart() {
        isPicking.value = true;
      }
      function onPickEnd() {
        isPicking.value = false;
        if (hasConfirmed.value) {
          hasConfirmed.value = false;
          onConfirm();
        }
      }
      function setLoading(loading) {
        innerLoading.value = loading;
      }
      __expose({
        close,
        open,
        setLoading
      });
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_picker_view = resolveEasycom(vue.resolveDynamicComponent("wd-picker-view"), __easycom_1$4);
        const _component_wd_popup = resolveEasycom(vue.resolveDynamicComponent("wd-popup"), __easycom_1$5);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(`wd-picker ${_ctx.disabled ? "is-disabled" : ""} ${_ctx.size ? "is-" + _ctx.size : ""}  ${vue.unref(cell).border.value ? "is-border" : ""} ${_ctx.alignRight ? "is-align-right" : ""} ${_ctx.error ? "is-error" : ""} ${_ctx.customClass}`),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            vue.createCommentVNode("文案"),
            vue.createElementVNode("view", {
              class: "wd-picker__field",
              onClick: showPopup
            }, [
              _ctx.useDefaultSlot ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "wd-picker__cell"
              }, [
                _ctx.label || _ctx.useLabelSlot ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: vue.normalizeClass(`wd-picker__label ${_ctx.customLabelClass}  ${isRequired.value ? "is-required" : ""}`),
                    style: vue.normalizeStyle(_ctx.labelWidth ? "min-width:" + _ctx.labelWidth + ";max-width:" + _ctx.labelWidth + ";" : "")
                  },
                  [
                    _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      { key: 0 },
                      [
                        vue.createTextVNode(
                          vue.toDisplayString(_ctx.label),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : vue.renderSlot(_ctx.$slots, "label", { key: 1 }, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", { class: "wd-picker__body" }, [
                  vue.createElementVNode("view", { class: "wd-picker__value-wraper" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(`wd-picker__value ${_ctx.ellipsis && "is-ellipsis"} ${_ctx.customValueClass} ${showValue.value ? "" : "wd-picker__placeholder"}`)
                      },
                      vue.toDisplayString(showValue.value ? showValue.value : _ctx.placeholder || vue.unref(translate)("placeholder")),
                      3
                      /* TEXT, CLASS */
                    ),
                    !_ctx.disabled && !_ctx.readonly ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                      key: 0,
                      "custom-class": "wd-picker__arrow",
                      name: "arrow-right"
                    })) : vue.createCommentVNode("v-if", true)
                  ]),
                  errorMessage.value ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "wd-picker__error-message"
                    },
                    vue.toDisplayString(errorMessage.value),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ])
              ]))
            ]),
            vue.createCommentVNode("弹出层，picker-view 在隐藏时修改值，会触发多次change事件，从而导致所有列选中第一项，因此picker在关闭时不隐藏 "),
            vue.createVNode(_component_wd_popup, {
              modelValue: popupShow.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => popupShow.value = $event),
              position: "bottom",
              "hide-when-close": false,
              "close-on-click-modal": _ctx.closeOnClickModal,
              "z-index": _ctx.zIndex,
              "safe-area-inset-bottom": _ctx.safeAreaInsetBottom,
              onClose: onCancel,
              "custom-class": "wd-picker__popup"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "wd-picker__wraper" }, [
                  vue.createCommentVNode("toolBar"),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "wd-picker__toolbar",
                      onTouchmove: noop
                    },
                    [
                      vue.createCommentVNode("取消按钮"),
                      vue.createElementVNode(
                        "view",
                        {
                          class: "wd-picker__action wd-picker__action--cancel",
                          onClick: onCancel
                        },
                        vue.toDisplayString(_ctx.cancelButtonText || vue.unref(translate)("cancel")),
                        1
                        /* TEXT */
                      ),
                      vue.createCommentVNode("标题"),
                      _ctx.title ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: "wd-picker__title"
                        },
                        vue.toDisplayString(_ctx.title),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true),
                      vue.createCommentVNode("确定按钮"),
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass(`wd-picker__action ${isLoading.value ? "is-loading" : ""}`),
                          onClick: onConfirm
                        },
                        vue.toDisplayString(_ctx.confirmButtonText || vue.unref(translate)("done")),
                        3
                        /* TEXT, CLASS */
                      )
                    ],
                    32
                    /* NEED_HYDRATION */
                  ),
                  vue.createCommentVNode("pickerView"),
                  vue.createVNode(_component_wd_picker_view, {
                    ref_key: "pickerViewWd",
                    ref: pickerViewWd,
                    "custom-class": _ctx.customViewClass,
                    modelValue: pickerValue.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pickerValue.value = $event),
                    columns: displayColumns.value,
                    loading: isLoading.value,
                    "loading-color": _ctx.loadingColor,
                    "columns-height": _ctx.columnsHeight,
                    "value-key": _ctx.valueKey,
                    "label-key": _ctx.labelKey,
                    onChange: pickerViewChange,
                    onPickstart: onPickStart,
                    onPickend: onPickEnd,
                    "column-change": _ctx.columnChange
                  }, null, 8, ["custom-class", "modelValue", "columns", "loading", "loading-color", "columns-height", "value-key", "label-key", "column-change"])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "close-on-click-modal", "z-index", "safe-area-inset-bottom"])
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_10 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-e228acd5"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-picker/wd-picker.vue"]]);
  const _sfc_main$t = {
    __name: "Register",
    setup(__props) {
      let Account = vue.ref("");
      let Password = vue.ref("");
      let SecondPassword = vue.ref("");
      let locationX = vue.ref("");
      let locationY = vue.ref("");
      let brithdayData = vue.ref("");
      let email2 = vue.ref("");
      let sex = vue.ref("男");
      let phone = vue.ref("");
      const columns = vue.ref(["男", "女"]);
      let placeXY = vue.ref("");
      let cityName = vue.ref("未知");
      let userImg = vue.ref("");
      uni.getLocation({
        type: "wgs84",
        geocode: true,
        isHighAccuracy: true,
        success: function(res) {
          locationX.value = res.longitude;
          locationY.value = res.latitude;
          placeXY = locationX.value + "," + locationY.value;
          formatAppLog("log", "at pages/Register/Register.vue:59", placeXY);
          uni.request({
            url: "https://restapi.amap.com/v3/geocode/regeo",
            method: "GET",
            data: {
              location: placeXY,
              key: "ae7bbfcb1e77bf8aba15fedc250a005c"
            },
            success: (res2) => {
              cityName.value = res2.data.regeocode.addressComponent.city;
            },
            fail: (err) => {
              cityName.value = "获取位置失败";
            }
          });
        }
      });
      const DoRegister = () => {
        if (userImg.value == "") {
          userImg.value == null;
        }
        if (Account.value === "" || Password.value === "" || SecondPassword.value === "") {
          uni.showToast({
            title: "必要信息不全",
            icon: "none",
            duration: 2e3
          });
        } else if (Password.value != SecondPassword.value) {
          uni.showToast({
            title: "两次密码不一致",
            icon: "none",
            duration: 2e3
          });
        } else {
          uni.showLoading({
            title: "注册中..."
          });
          uni.request({
            url: "http://116.62.176.59:8080/xqlgq/user/register",
            method: "POST",
            timeout: 6e3,
            data: {
              username: Account.value,
              //账号
              password: Password.value,
              //密码
              locationX: locationX.value,
              //经度
              locationY: locationY.value,
              //纬度
              timestamp: brithdayData.value,
              //生日
              email: email2.value,
              //邮箱
              userSex: sex.value,
              //性别
              phoneNumber: phone.value,
              //手机号
              userImage: userImg.value,
              //头像时间戳
              city: cityName.value
            },
            success: (res) => {
              uni.hideLoading();
              if (res.data.code == "0") {
                formatAppLog("log", "at pages/Register/Register.vue:128", res.data.data);
                uni.navigateBack();
              } else {
                uni.showToast({
                  title: res.data.msg,
                  icon: "none",
                  duration: 2e3
                });
              }
            },
            fail: (err) => {
              uni.hideLoading();
              uni.showToast({
                title: err.errMsg,
                icon: "none",
                duration: 2e3
              });
            }
          });
        }
      };
      const BackToLogin = () => {
        uni.navigateBack();
      };
      const handleChange1 = (fileList) => {
        userImg.value = JSON.parse(fileList.fileList[0].response).data;
      };
      return (_ctx, _cache) => {
        const _component_phone_status = resolveEasycom(vue.resolveDynamicComponent("phone-status"), __easycom_0$7);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_upload = resolveEasycom(vue.resolveDynamicComponent("wd-upload"), __easycom_3);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        const _component_wd_input = resolveEasycom(vue.resolveDynamicComponent("wd-input"), __easycom_1$6);
        const _component_wd_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("wd-datetime-picker"), __easycom_9);
        const _component_wd_picker = resolveEasycom(vue.resolveDynamicComponent("wd-picker"), __easycom_10);
        const _component_wd_button = resolveEasycom(vue.resolveDynamicComponent("wd-button"), __easycom_12);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_phone_status),
            vue.createElementVNode("view", { class: "content-background 全屏" }, [
              vue.createElementVNode("view", { class: "RegisterTitle" }, "Register"),
              vue.createVNode(_component_wd_row, { class: "wdClass" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_col, {
                    class: "灰色字",
                    span: 12
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("上传头像：")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_col, {
                    class: "灰色字 右侧布局",
                    span: 12
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_wd_upload, {
                        class: "upload",
                        limit: "1",
                        "file-list": _ctx.file,
                        action: "http://116.62.176.59:8080/xqlgq/files/upload",
                        onChange: handleChange1
                      }, null, 8, ["file-list"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_input, {
                class: "inputClass",
                modelValue: vue.unref(Account),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(Account) ? Account.value = $event : Account = $event),
                maxlength: 10,
                "show-word-limit": "",
                placeholder: "请输入用户名(必填)"
              }, null, 8, ["modelValue"]),
              vue.createVNode(_component_wd_input, {
                class: "inputClass",
                modelValue: vue.unref(Password),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(Password) ? Password.value = $event : Password = $event),
                "show-password": "",
                placeholder: "请输入密码(必填)"
              }, null, 8, ["modelValue"]),
              vue.createVNode(_component_wd_input, {
                class: "inputClass",
                modelValue: vue.unref(SecondPassword),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(SecondPassword) ? SecondPassword.value = $event : SecondPassword = $event),
                "show-password": "",
                placeholder: "请再次输入密码"
              }, null, 8, ["modelValue"]),
              vue.createVNode(_component_wd_row, { class: "wdClass" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_col, {
                    class: "灰色字",
                    span: 12
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("当前经纬度：")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_col, {
                    class: "灰色字 右侧布局",
                    span: 12
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(vue.unref(locationX)) + ", " + vue.toDisplayString(vue.unref(locationY)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_row, { class: "wdClass" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_col, {
                    class: "灰色字",
                    span: 12
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("当前城市：")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_col, {
                    class: "灰色字 右侧布局",
                    span: 12
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(vue.unref(cityName)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_datetime_picker, {
                class: "时间框",
                modelValue: vue.unref(brithdayData),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(brithdayData) ? brithdayData.value = $event : brithdayData = $event),
                type: "date",
                label: "出生日期:",
                onConfirm: _ctx.handleConfirm,
                minDate: "1950"
              }, null, 8, ["modelValue", "onConfirm"]),
              vue.createVNode(_component_wd_picker, {
                class: "时间框",
                columns: columns.value,
                label: "性别",
                modelValue: vue.unref(sex),
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(sex) ? sex.value = $event : sex = $event),
                onConfirm: _ctx.handleConfirm
              }, null, 8, ["columns", "modelValue", "onConfirm"]),
              vue.createVNode(_component_wd_input, {
                class: "inputClass",
                modelValue: vue.unref(email2),
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.isRef(email2) ? email2.value = $event : email2 = $event),
                clearable: "",
                placeholder: "请输入邮箱"
              }, null, 8, ["modelValue"]),
              vue.createVNode(_component_wd_input, {
                class: "inputClass",
                modelValue: vue.unref(phone),
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.isRef(phone) ? phone.value = $event : phone = $event),
                clearable: "",
                placeholder: "请输入手机号"
              }, null, 8, ["modelValue"]),
              vue.createVNode(_component_wd_button, {
                class: "注册按钮",
                type: "success",
                block: "",
                onClick: DoRegister
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("注册")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_row, { class: "wdClass" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_col, {
                    class: "底部文字按钮",
                    span: 12,
                    onClick: BackToLogin
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("返回登录")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_wd_col, {
                    class: "底部文字按钮 右侧布局",
                    span: 12
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("客服反馈")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("view", { class: "底部盒子" })
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "D:/前端学习笔记/uniapp/City/pages/Register/Register.vue"]]);
  const switchProps = {
    ...baseProps,
    /**
     * 绑定值
     */
    modelValue: {
      type: [Boolean, String, Number],
      required: true,
      default: false
    },
    /**
     * 是否禁用
     */
    disabled: makeBooleanProp(false),
    /**
     * 激活值
     */
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    /**
     * 非激活值
     */
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    /**
     * 激活颜色
     */
    activeColor: String,
    /**
     * 非激活颜色
     */
    inactiveColor: String,
    /**
     * 大小
     */
    size: makeNumericProp(28),
    /**
     * 在改变前执行的函数
     */
    beforeChange: Function
  };
  const __default__$8 = {
    name: "wd-switch",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
    ...__default__$8,
    props: switchProps,
    emits: ["change", "update:modelValue"],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const rootClass = vue.computed(() => {
        return `wd-switch ${props2.customClass} ${props2.disabled ? "is-disabled" : ""} ${props2.modelValue === props2.activeValue ? "is-checked" : ""}`;
      });
      const rootStyle = vue.computed(() => {
        const rootStyle2 = {
          "font-size": addUnit$1(props2.size),
          background: props2.modelValue === props2.activeValue ? props2.activeColor : props2.inactiveColor,
          "border-color": props2.modelValue === props2.activeValue ? props2.activeColor : props2.inactiveColor
        };
        return `${objToStyle(rootStyle2)};${props2.customStyle}`;
      });
      const circleStyle = vue.computed(() => {
        const circleStyle2 = props2.modelValue === props2.activeValue && props2.activeColor || props2.modelValue !== props2.activeValue && props2.inactiveColor ? "box-shadow: none;" : "";
        return circleStyle2;
      });
      function switchValue() {
        if (props2.disabled)
          return;
        const newVal = props2.modelValue === props2.activeValue ? props2.inactiveValue : props2.activeValue;
        if (props2.beforeChange && isFunction(props2.beforeChange)) {
          props2.beforeChange({
            value: newVal,
            resolve: (pass) => {
              if (pass) {
                emit("update:modelValue", newVal);
                emit("change", {
                  value: newVal
                });
              }
            }
          });
        } else {
          emit("update:modelValue", newVal);
          emit("change", {
            value: newVal
          });
        }
      }
      vue.onBeforeMount(() => {
        if ([props2.activeValue, props2.inactiveValue].indexOf(props2.modelValue) === -1) {
          emit("update:modelValue", props2.inactiveValue);
          emit("change", {
            value: props2.inactiveValue
          });
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(rootClass.value),
            style: vue.normalizeStyle(rootStyle.value),
            onClick: switchValue
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: "wd-switch__circle",
                style: vue.normalizeStyle(circleStyle.value)
              },
              null,
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-751565c9"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-switch/wd-switch.vue"]]);
  const _sfc_main$r = {
    __name: "privacy",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let id = userData.id;
      let token = userData.token;
      let PrivacyEmail = vue.ref();
      let PrivacyPhone = vue.ref();
      let PrivacySex = vue.ref();
      let PrivacyBrithday = vue.ref();
      let PrivacyEvent = vue.ref();
      let PrivacyCollect = vue.ref();
      let PrivacyAttend = vue.ref();
      let PrivacyPut = vue.ref();
      uni.request({
        url: "http://116.62.176.59:8080/xqlgq/user/privacy/get",
        //仅为示例，并非真实接口地址。
        header: {
          "token": token
        },
        success: (res) => {
          formatAppLog("log", "at pages/privacy/privacy.vue:56", res.data);
          PrivacyEmail.value = res.data.data.email;
          PrivacyPhone.value = res.data.data.phoneNumber;
          PrivacySex.value = res.data.data.userSex;
          PrivacyBrithday.value = res.data.data.birthday;
          PrivacyEvent.value = res.data.data.event;
          PrivacyCollect.value = res.data.data.collectEventList;
          PrivacyAttend.value = res.data.data.participatedEventList;
          PrivacyPut.value = res.data.data.organizedEventList;
        }
      });
      const Change = () => {
        formatAppLog("log", "at pages/privacy/privacy.vue:69", PrivacyEmail.value);
        formatAppLog("log", "at pages/privacy/privacy.vue:70", PrivacyPhone.value);
        formatAppLog("log", "at pages/privacy/privacy.vue:71", PrivacySex.value);
        formatAppLog("log", "at pages/privacy/privacy.vue:72", PrivacyBrithday.value);
        formatAppLog("log", "at pages/privacy/privacy.vue:73", PrivacyEvent.value);
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/privacy/update",
          method: "POST",
          header: {
            "token": token
          },
          data: {
            "id": id,
            "email": PrivacyEmail.value,
            "phoneNumber": PrivacyPhone.value,
            "userSex": PrivacySex.value,
            "birthday": PrivacyBrithday.value,
            "event": PrivacyEvent.value,
            "collectEventList": PrivacyCollect.value,
            "participatedEventList": PrivacyAttend.value,
            "organizedEventList": PrivacyPut.value
          },
          success: (res) => {
            formatAppLog("log", "at pages/privacy/privacy.vue:92", res.data);
          },
          fail: (err) => {
            formatAppLog("log", "at pages/privacy/privacy.vue:95", err);
          }
        });
      };
      const Back = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_switch = resolveEasycom(vue.resolveDynamicComponent("wd-switch"), __easycom_5);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        const _component_wd_button = resolveEasycom(vue.resolveDynamicComponent("wd-button"), __easycom_12);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-background 全屏" }, [
          vue.createElementVNode("view", { class: "横向布局" }, [
            vue.createVNode(_component_wd_icon, {
              onClick: Back,
              class: "TitileFont",
              name: "thin-arrow-left",
              size: "30rpx"
            }),
            vue.createElementVNode("view", { class: "ICON-TitileFont" }, "Privacy")
          ]),
          vue.createVNode(_component_wd_row, { class: "wdClass 上下间距 额外上间距" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("是否公开邮箱：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_switch, {
                    modelValue: vue.unref(PrivacyEmail),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(PrivacyEmail) ? PrivacyEmail.value = $event : PrivacyEmail = $event),
                    "active-color": "#6ce68f",
                    "inactive-color": "#fd633c"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_row, { class: "wdClass 上下间距" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("是否公开手机号：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_switch, {
                    modelValue: vue.unref(PrivacyPhone),
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(PrivacyPhone) ? PrivacyPhone.value = $event : PrivacyPhone = $event),
                    "active-color": "#6ce68f",
                    "inactive-color": "#fd633c"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_row, { class: "wdClass 上下间距" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("是否公开性别：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_switch, {
                    modelValue: vue.unref(PrivacySex),
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(PrivacySex) ? PrivacySex.value = $event : PrivacySex = $event),
                    "active-color": "#6ce68f",
                    "inactive-color": "#fd633c"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_row, { class: "wdClass 上下间距" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("是否公开生日：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_switch, {
                    modelValue: vue.unref(PrivacyBrithday),
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(PrivacyBrithday) ? PrivacyBrithday.value = $event : PrivacyBrithday = $event),
                    "active-color": "#6ce68f",
                    "inactive-color": "#fd633c"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_row, { class: "wdClass 上下间距" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("是否公开自己发布的事件：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_switch, {
                    modelValue: vue.unref(PrivacyEvent),
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(PrivacyEvent) ? PrivacyEvent.value = $event : PrivacyEvent = $event),
                    "active-color": "#6ce68f",
                    "inactive-color": "#fd633c"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_row, { class: "wdClass 上下间距" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("是否公开收藏夹：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_switch, {
                    modelValue: vue.unref(PrivacyCollect),
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.isRef(PrivacyCollect) ? PrivacyCollect.value = $event : PrivacyCollect = $event),
                    "active-color": "#6ce68f",
                    "inactive-color": "#fd633c"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_row, { class: "wdClass 上下间距" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("是否公开自己参加的活动：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_switch, {
                    modelValue: vue.unref(PrivacyAttend),
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.isRef(PrivacyAttend) ? PrivacyAttend.value = $event : PrivacyAttend = $event),
                    "active-color": "#6ce68f",
                    "inactive-color": "#fd633c"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_row, { class: "wdClass 上下间距" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("是否公开自己发起的活动：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_wd_switch, {
                    modelValue: vue.unref(PrivacyPut),
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => vue.isRef(PrivacyPut) ? PrivacyPut.value = $event : PrivacyPut = $event),
                    "active-color": "#6ce68f",
                    "inactive-color": "#fd633c"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_button, {
            class: "间距",
            block: "",
            type: "success",
            size: "large",
            onClick: Change
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("确定")
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesPrivacyPrivacy = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__file", "D:/前端学习笔记/uniapp/City/pages/privacy/privacy.vue"]]);
  const _sfc_main$q = {
    __name: "UserShow",
    setup(__props) {
      const name = vue.ref("");
      const img = vue.ref("");
      const sign = vue.ref("这个人很懒，什么都没有留下~");
      const id = vue.ref("");
      const sex = vue.ref("");
      const city = vue.ref("");
      const phone = vue.ref("");
      const email2 = vue.ref("");
      const GuanZhu = vue.ref("未关注");
      const Fans = vue.ref("0");
      const Idols = vue.ref("0");
      const ChangeGuanZhu = vue.ref("color: #ffffff; background-color: #b2bbec;");
      let usertoken = "";
      let userSearchID = "";
      let IfShowType1 = vue.ref(true);
      let IfShowType2 = vue.ref(false);
      let IfShowType3 = vue.ref(false);
      let IfShowType4 = vue.ref(false);
      let ButtonType = vue.ref("color:#1c1c1c;background-color:#FFFFFF;box-shadow:2rpx 2rpx 2rpx #838383;");
      let ButtonType1 = vue.ref("color:#1c1c1c;background-color:#FFFFFF;box-shadow:2rpx 2rpx 2rpx #838383;");
      let ButtonType2 = vue.ref("");
      let ButtonType3 = vue.ref("");
      let ButtonType4 = vue.ref("");
      let Type1 = vue.ref([]);
      let Type2 = vue.ref([]);
      let Type3 = vue.ref([]);
      let Type4 = vue.ref([]);
      let IfMyself = vue.ref(false);
      let IfShowCode = vue.ref(false);
      let options1 = vue.ref({
        margin: 10,
        useDynamicSize: false,
        style: "round",
        foregroundImageSrc: img,
        foregroundImagePadding: 5,
        positionAdjustBackgroundColor: "#dded4d",
        positionProbeForegroundColor: "#4fc19b",
        darkBlockColor: "#3f6dc1",
        timingForegroundColor: "#4fc19b",
        positionAdjustForegroundColor: "#26adc1"
      });
      const ChangeTypeClass = (id2) => {
        if (id2 == 1) {
          ButtonType1.value = ButtonType.value;
          ButtonType2.value = "";
          ButtonType3.value = "";
          ButtonType4.value = "";
          IfShowType1.value = true;
          IfShowType2.value = false;
          IfShowType3.value = false;
          IfShowType4.value = false;
        } else if (id2 == 2) {
          ButtonType1.value = "";
          ButtonType2.value = ButtonType.value;
          ButtonType3.value = "";
          ButtonType4.value = "";
          IfShowType1.value = false;
          IfShowType2.value = true;
          IfShowType3.value = false;
          IfShowType4.value = false;
        } else if (id2 == 3) {
          ButtonType1.value = "";
          ButtonType2.value = "";
          ButtonType3.value = ButtonType.value;
          ButtonType4.value = "";
          IfShowType1.value = false;
          IfShowType2.value = false;
          IfShowType3.value = true;
          IfShowType4.value = false;
        } else if (id2 == 4) {
          ButtonType1.value = "";
          ButtonType2.value = "";
          ButtonType3.value = "";
          ButtonType4.value = ButtonType.value;
          IfShowType1.value = false;
          IfShowType2.value = false;
          IfShowType3.value = false;
          IfShowType4.value = true;
        }
      };
      const Back = () => {
        uni.navigateBack();
      };
      onLoad((e2) => {
        let userData = JSON.parse(uni.getStorageSync("UserInformation"));
        let searchID = e2.id;
        userSearchID = e2.id;
        let token = userData.token;
        usertoken = userData.token;
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/info/" + searchID,
          method: "GET",
          header: {
            "token": token
          },
          success: (res) => {
            formatAppLog("log", "at pages/UserShow/UserShow.vue:263", res.data.data);
            let resdata2 = res.data.data;
            name.value = resdata2.username;
            img.value = "http://116.62.176.59:8080/xqlgq/files/" + resdata2.userImage;
            sign.value = resdata2.sign || "未公开";
            id.value = resdata2.id;
            sex.value = resdata2.userSex || "未公开";
            city.value = resdata2.city || "未公开";
            phone.value = resdata2.phoneNumber || "未公开";
            email2.value = resdata2.email || "未公开";
            Fans.value = resdata2.fan || "0";
            Idols.value = resdata2.idol || "0";
            Type1.value = resdata2.collectEventList;
            Type2.value = resdata2.participatedEventList;
            Type3.value = resdata2.organizedEventList;
            Type4.value = resdata2.eventList;
            formatAppLog("log", "at pages/UserShow/UserShow.vue:279", Type4.value);
            uni.setStorageSync("dataMyMap", JSON.stringify(Type4.value));
            if (resdata2.relationship == "Myself") {
              IfMyself.value = true;
            }
            if (resdata2.relationship == null || resdata2.relationship == "Fan") {
              GuanZhu.value = "未关注";
              ChangeGuanZhu.value = "color: #ffffff; background-color: #b2bbec;";
            } else {
              GuanZhu.value = "已关注";
              ChangeGuanZhu.value = "color: #5e5e5e; background-color: #ffffff;";
            }
          },
          fail: (err) => {
            formatAppLog("log", "at pages/UserShow/UserShow.vue:295", err);
          }
        });
        formatAppLog("log", "at pages/UserShow/UserShow.vue:298", resdata.userImage);
      });
      const DoGuanZhu = () => {
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/follow/" + userSearchID,
          header: { "token": usertoken },
          success: (res) => {
            if (res.data.code == "0") {
              if (GuanZhu.value == "已关注") {
                GuanZhu.value = "未关注";
                ChangeGuanZhu.value = "color: #ffffff; background-color: #b2bbec;";
              } else {
                GuanZhu.value = "已关注";
                ChangeGuanZhu.value = "color: #5e5e5e; background-color: #ffffff;";
              }
            } else {
              uni.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 2e3
              });
            }
          },
          fail: (err) => {
            formatAppLog("log", "at pages/UserShow/UserShow.vue:329", err);
          }
        });
      };
      function convertStringToNumberArray(str) {
        return JSON.parse(str.replace(/(\w+)/g, '"$1"'));
      }
      const IfHaveImg = (image2) => {
        if (image2 != "") {
          return true;
        } else {
          return false;
        }
      };
      const GoEvent = (id2) => {
        uni.navigateTo({
          url: "/pages/titleContent/titleContent?id=" + id2
        });
      };
      const GoShowCode = () => {
        formatAppLog("log", "at pages/UserShow/UserShow.vue:354", img.value);
        IfShowCode.value = true;
      };
      const GoMyMap = () => {
        uni.navigateTo({
          url: "/pages/indexMap/myMap/myMap"
        });
      };
      return (_ctx, _cache) => {
        const _component_uv_qrcode = resolveEasycom(vue.resolveDynamicComponent("uv-qrcode"), __easycom_0$2);
        const _component_wd_popup = resolveEasycom(vue.resolveDynamicComponent("wd-popup"), __easycom_1$5);
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_wd_popup, {
              modelValue: vue.unref(IfShowCode),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(IfShowCode) ? IfShowCode.value = $event : IfShowCode = $event),
              "custom-style": "border-radius:20rpx;padding:20rpx;display:flex;justify-content: center; align-items: center;flex-direction: column;margin:10rpx;margin-bottom:0",
              onClose: _ctx.handleClose
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uv_qrcode, {
                  auto: "true",
                  size: "380rpx",
                  options: vue.unref(options1),
                  ref: "uvqrcode2",
                  value: "/pages/UserShow/UserShow?id=" + id.value
                }, null, 8, ["options", "value"]),
                vue.createElementVNode("view", { style: { "font-size": "30rpx", "margin": "10rpx" } }, "请在城屿App内扫码打开")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onClose"]),
            vue.createElementVNode("view", { class: "content-background" }, [
              vue.createElementVNode("view", { class: "left-around" }, [
                vue.createElementVNode("view", { class: "横向布局" }, [
                  vue.createVNode(_component_wd_icon, {
                    onClick: Back,
                    class: "TitileFont",
                    name: "thin-arrow-left",
                    size: "28px",
                    color: "#ffffff"
                  }),
                  vue.createElementVNode("view", { class: "ICON-TitileFont 白色" }, "Cards")
                ]),
                vue.createElementVNode("view", { class: "横向布局" }, [
                  vue.createElementVNode("image", {
                    class: "头像",
                    src: img.value,
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "头名区" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "用户名" },
                      vue.toDisplayString(name.value),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "签名" },
                      vue.toDisplayString(sign.value),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("view", { class: "用户操作区" }, [
                  vue.createElementVNode("view", { class: "横向布局" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "Guanzhu" },
                      "粉丝数：" + vue.toDisplayString(Fans.value),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "Guanzhu" },
                      "关注数：" + vue.toDisplayString(Idols.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createCommentVNode(' <wd-checkbox class="关注" :modelValue="GuanZhu" shape="button"  @click="DoGuanZhu">关注</wd-checkbox> '),
                  vue.createElementVNode("view", { class: "按钮区" }, [
                    vue.unref(IfMyself) ? (vue.openBlock(), vue.createElementBlock("image", {
                      key: 0,
                      style: { "height": "40rpx", "width": "40rpx", "margin-right": "15rpx" },
                      src: "/static/buttomSrc/erweima.png",
                      onClick: GoShowCode
                    })) : vue.createCommentVNode("v-if", true),
                    !vue.unref(IfMyself) ? (vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: 1,
                        class: "关注按钮",
                        style: vue.normalizeStyle(ChangeGuanZhu.value),
                        onClick: DoGuanZhu
                      },
                      vue.toDisplayString(GuanZhu.value),
                      5
                      /* TEXT, STYLE */
                    )) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("view", {
                      class: "联系按钮",
                      onClick: GoMyMap
                    }, "个人地图")
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "中间信息区" }, [
                vue.createElementVNode("view", { class: "横向布局 水平对齐 间距" }, [
                  vue.createVNode(_component_wd_icon, {
                    name: "user-circle",
                    size: "35px",
                    color: "#606060"
                  }),
                  vue.createElementVNode("view", { class: "中间标题" }, "information")
                ]),
                vue.createVNode(_component_wd_row, { class: "wdClass 上下间距 额外上间距" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("ID：")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字 右侧布局",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(
                          vue.toDisplayString(id.value),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_wd_row, { class: "wdClass 上下间距 额外上间距" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("性别：")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字 右侧布局",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(
                          vue.toDisplayString(sex.value),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_wd_row, { class: "wdClass 上下间距 额外上间距" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("所在城市：")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字 右侧布局",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(
                          vue.toDisplayString(city.value),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_wd_row, { class: "wdClass 上下间距 额外上间距" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("电话：")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字 右侧布局",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(
                          vue.toDisplayString(phone.value),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_wd_row, { class: "wdClass 上下间距 额外上间距" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("邮箱：")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_wd_col, {
                      class: "灰色字 右侧布局",
                      span: 12
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(
                          vue.toDisplayString(email2.value),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              vue.createElementVNode("view", { class: "right-around" }, [
                vue.createElementVNode("view", { class: "右侧布局" }, [
                  vue.createElementVNode("view", { class: "底部标题" }, "Activities")
                ]),
                vue.createElementVNode("view", {
                  class: "右侧布局",
                  style: { "width": "100%", "margin-bottom": "30rpx" }
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "收藏夹名",
                      style: vue.normalizeStyle(vue.unref(ButtonType4)),
                      onClick: _cache[1] || (_cache[1] = ($event) => ChangeTypeClass(4))
                    },
                    "发布",
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "收藏夹名",
                      style: vue.normalizeStyle(vue.unref(ButtonType3)),
                      onClick: _cache[2] || (_cache[2] = ($event) => ChangeTypeClass(3))
                    },
                    "发起",
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "收藏夹名",
                      style: vue.normalizeStyle(vue.unref(ButtonType2)),
                      onClick: _cache[3] || (_cache[3] = ($event) => ChangeTypeClass(2))
                    },
                    "参与",
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "收藏夹名",
                      style: vue.normalizeStyle(vue.unref(ButtonType1)),
                      onClick: _cache[4] || (_cache[4] = ($event) => ChangeTypeClass(1))
                    },
                    "收藏",
                    4
                    /* STYLE */
                  )
                ]),
                vue.createElementVNode("scroll-view", {
                  "scroll-y": "true",
                  style: { "height": "1100rpx" }
                }, [
                  vue.withDirectives(vue.createElementVNode(
                    "view",
                    null,
                    [
                      vue.createElementVNode("view", { class: "列表布局" }, [
                        vue.createElementVNode("view", { class: "列表背景" }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(vue.unref(Type1), (item) => {
                              return vue.openBlock(), vue.createElementBlock("view", { class: "列表元素 横向布局" }, [
                                IfHaveImg(convertStringToNumberArray(item.images)) ? (vue.openBlock(), vue.createElementBlock("image", {
                                  key: 0,
                                  class: "列表图片",
                                  src: "http://116.62.176.59:8080/xqlgq/files/" + convertStringToNumberArray(item.images)[0],
                                  mode: "aspectFill"
                                }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
                                vue.createElementVNode("view", {
                                  class: "列表文字布局",
                                  style: { "justify-content": "space-evenly" },
                                  onClick: ($event) => GoEvent(item.gid)
                                }, [
                                  vue.createElementVNode(
                                    "view",
                                    { style: { "margin-left": "15rpx", "margin-bottom": "10rpx", "color": "#ffffff", "font-size": "34rpx", "word-break": "break-all" } },
                                    vue.toDisplayString(item.title),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createElementVNode(
                                    "view",
                                    { style: { "color": "#ffffff", "font-size": "26rpx", "margin-left": "24rpx" } },
                                    vue.toDisplayString(item.timestamp[0]) + "-" + vue.toDisplayString(item.timestamp[1]) + "-" + vue.toDisplayString(item.timestamp[2]) + " " + vue.toDisplayString(item.timestamp[3]) + ":" + vue.toDisplayString(item.timestamp[4]) + ":" + vue.toDisplayString(item.timestamp[5]),
                                    1
                                    /* TEXT */
                                  )
                                ], 8, ["onClick"])
                              ]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ])
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  ), [
                    [vue.vShow, vue.unref(IfShowType1)]
                  ]),
                  vue.withDirectives(vue.createElementVNode(
                    "view",
                    null,
                    [
                      vue.createElementVNode("view", { class: "列表布局" }, [
                        vue.createElementVNode("view", { class: "列表背景" }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(vue.unref(Type2), (item) => {
                              return vue.openBlock(), vue.createElementBlock("view", { class: "列表元素 横向布局" }, [
                                IfHaveImg(convertStringToNumberArray(item.images)) ? (vue.openBlock(), vue.createElementBlock("image", {
                                  key: 0,
                                  class: "列表图片",
                                  src: "http://116.62.176.59:8080/xqlgq/files/" + convertStringToNumberArray(item.images)[0],
                                  mode: "aspectFill"
                                }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
                                vue.createElementVNode("view", {
                                  class: "列表文字布局",
                                  style: { "justify-content": "space-evenly" },
                                  onClick: ($event) => GoEvent(item.gid)
                                }, [
                                  vue.createElementVNode(
                                    "view",
                                    { style: { "margin-left": "15rpx", "margin-bottom": "10rpx", "color": "#ffffff", "font-size": "34rpx", "word-break": "break-all" } },
                                    vue.toDisplayString(item.title),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createElementVNode(
                                    "view",
                                    { style: { "color": "#ffffff", "font-size": "26rpx", "margin-left": "24rpx" } },
                                    vue.toDisplayString(item.timestamp[0]) + "-" + vue.toDisplayString(item.timestamp[1]) + "-" + vue.toDisplayString(item.timestamp[2]) + " " + vue.toDisplayString(item.timestamp[3]) + ":" + vue.toDisplayString(item.timestamp[4]) + ":" + vue.toDisplayString(item.timestamp[5]),
                                    1
                                    /* TEXT */
                                  )
                                ], 8, ["onClick"])
                              ]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ])
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  ), [
                    [vue.vShow, vue.unref(IfShowType2)]
                  ]),
                  vue.withDirectives(vue.createElementVNode(
                    "view",
                    null,
                    [
                      vue.createElementVNode("view", { class: "列表布局" }, [
                        vue.createElementVNode("view", { class: "列表背景" }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(vue.unref(Type3), (item) => {
                              return vue.openBlock(), vue.createElementBlock("view", { class: "列表元素 横向布局" }, [
                                IfHaveImg(convertStringToNumberArray(item.images)) ? (vue.openBlock(), vue.createElementBlock("image", {
                                  key: 0,
                                  class: "列表图片",
                                  src: "http://116.62.176.59:8080/xqlgq/files/" + convertStringToNumberArray(item.images)[0],
                                  mode: "aspectFill"
                                }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
                                vue.createElementVNode("view", {
                                  class: "列表文字布局",
                                  style: { "justify-content": "space-evenly" },
                                  onClick: ($event) => GoEvent(item.gid)
                                }, [
                                  vue.createElementVNode(
                                    "view",
                                    { style: { "margin-left": "15rpx", "margin-bottom": "10rpx", "color": "#ffffff", "font-size": "34rpx", "word-break": "break-all" } },
                                    vue.toDisplayString(item.title),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createElementVNode(
                                    "view",
                                    { style: { "color": "#ffffff", "font-size": "26rpx", "margin-left": "24rpx" } },
                                    vue.toDisplayString(item.timestamp[0]) + "-" + vue.toDisplayString(item.timestamp[1]) + "-" + vue.toDisplayString(item.timestamp[2]) + " " + vue.toDisplayString(item.timestamp[3]) + ":" + vue.toDisplayString(item.timestamp[4]) + ":" + vue.toDisplayString(item.timestamp[5]),
                                    1
                                    /* TEXT */
                                  )
                                ], 8, ["onClick"])
                              ]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ])
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  ), [
                    [vue.vShow, vue.unref(IfShowType3)]
                  ]),
                  vue.withDirectives(vue.createElementVNode(
                    "view",
                    null,
                    [
                      vue.createElementVNode("view", { class: "列表布局" }, [
                        vue.createElementVNode("view", { class: "列表背景" }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(vue.unref(Type4), (item) => {
                              return vue.openBlock(), vue.createElementBlock("view", { class: "列表元素 横向布局" }, [
                                IfHaveImg(convertStringToNumberArray(item.images)) ? (vue.openBlock(), vue.createElementBlock("image", {
                                  key: 0,
                                  class: "列表图片",
                                  src: "http://116.62.176.59:8080/xqlgq/files/" + convertStringToNumberArray(item.images)[0],
                                  mode: "aspectFill"
                                }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
                                vue.createElementVNode("view", {
                                  class: "列表文字布局",
                                  style: { "justify-content": "space-evenly" },
                                  onClick: ($event) => GoEvent(item.gid)
                                }, [
                                  vue.createElementVNode(
                                    "view",
                                    { style: { "margin-left": "15rpx", "margin-bottom": "10rpx", "color": "#ffffff", "font-size": "34rpx", "word-break": "break-all" } },
                                    vue.toDisplayString(item.title),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createElementVNode(
                                    "view",
                                    { style: { "color": "#ffffff", "font-size": "26rpx", "margin-left": "24rpx" } },
                                    vue.toDisplayString(item.timestamp[0]) + "-" + vue.toDisplayString(item.timestamp[1]) + "-" + vue.toDisplayString(item.timestamp[2]) + " " + vue.toDisplayString(item.timestamp[3]) + ":" + vue.toDisplayString(item.timestamp[4]) + ":" + vue.toDisplayString(item.timestamp[5]),
                                    1
                                    /* TEXT */
                                  )
                                ], 8, ["onClick"])
                              ]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ])
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  ), [
                    [vue.vShow, vue.unref(IfShowType4)]
                  ])
                ])
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesUserShowUserShow = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "D:/前端学习笔记/uniapp/City/pages/UserShow/UserShow.vue"]]);
  const _sfc_main$p = {
    __name: "ChangeInformation",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      formatAppLog("log", "at pages/ChangeInformation/ChangeInformation.vue:22", userData);
      let token = userData.token;
      const Back = () => {
        uni.navigateBack();
      };
      let UserName = vue.ref(userData.name);
      let UserSign = vue.ref(userData.sign);
      let UserEmail = vue.ref(userData.email);
      let UserPhone = vue.ref(userData.phone);
      let PrimaryName = userData.name;
      const Update = () => {
        if (PrimaryName == UserName.value) {
          PrimaryName = null;
        } else {
          PrimaryName = UserName.value;
        }
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/register",
          method: "POST",
          header: {
            "token": token
          },
          data: {
            "username": PrimaryName,
            "email": UserEmail.value,
            "sign": UserSign.value,
            "phoneNumber": UserPhone.value
          },
          success(res) {
            formatAppLog("log", "at pages/ChangeInformation/ChangeInformation.vue:52", res.data);
            if (res.data.code == "0") {
              userData.name = UserName.value;
              userData.sign = UserSign.value;
              userData.email = UserEmail.value;
              userData.phone = UserPhone.value;
              let STRING_MSS = JSON.stringify(userData);
              formatAppLog("log", "at pages/ChangeInformation/ChangeInformation.vue:61", STRING_MSS);
              uni.setStorageSync("UserInformation", STRING_MSS);
              uni.showToast({
                title: "更新成功",
                icon: "none",
                duration: 2e3
              });
            } else {
              uni.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 2e3
              });
            }
          },
          fail: (err) => {
            uni.showToast({
              title: err,
              icon: "none",
              duration: 2e3
            });
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_input = resolveEasycom(vue.resolveDynamicComponent("wd-input"), __easycom_1$6);
        const _component_wd_button = resolveEasycom(vue.resolveDynamicComponent("wd-button"), __easycom_12);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-background 全屏" }, [
          vue.createElementVNode("view", { class: "横向布局" }, [
            vue.createVNode(_component_wd_icon, {
              onClick: Back,
              class: "TitileFont",
              name: "thin-arrow-left",
              size: "30rpx"
            }),
            vue.createElementVNode("view", { class: "ICON-TitileFont" }, "Myself")
          ]),
          vue.createElementVNode("view", { class: "标题" }, "用户名："),
          vue.createVNode(_component_wd_input, {
            class: "inputClass",
            modelValue: vue.unref(UserName),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(UserName) ? UserName.value = $event : UserName = $event),
            clearable: "",
            placeholder: "请输入邮箱"
          }, null, 8, ["modelValue"]),
          vue.createElementVNode("view", { class: "标题" }, "签名："),
          vue.createVNode(_component_wd_input, {
            class: "inputClass",
            modelValue: vue.unref(UserSign),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(UserSign) ? UserSign.value = $event : UserSign = $event),
            clearable: "",
            placeholder: "请输入邮箱"
          }, null, 8, ["modelValue"]),
          vue.createElementVNode("view", { class: "标题" }, "邮箱："),
          vue.createVNode(_component_wd_input, {
            class: "inputClass",
            modelValue: vue.unref(UserEmail),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(UserEmail) ? UserEmail.value = $event : UserEmail = $event),
            clearable: "",
            placeholder: "请输入邮箱"
          }, null, 8, ["modelValue"]),
          vue.createElementVNode("view", { class: "标题" }, "手机号："),
          vue.createVNode(_component_wd_input, {
            class: "inputClass",
            modelValue: vue.unref(UserPhone),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(UserPhone) ? UserPhone.value = $event : UserPhone = $event),
            clearable: "",
            placeholder: "请输入邮箱"
          }, null, 8, ["modelValue"]),
          vue.createVNode(_component_wd_button, {
            block: "",
            class: "button",
            type: "success",
            size: "large",
            onClick: Update
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("更新")
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesChangeInformationChangeInformation = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "D:/前端学习笔记/uniapp/City/pages/ChangeInformation/ChangeInformation.vue"]]);
  const searchProps = {
    ...baseProps,
    /**
     * 输入框内容，双向绑定
     * 类型: string
     * 默认值: ''
     */
    modelValue: makeStringProp(""),
    /**
     * 是否使用输入框右侧插槽
     * 类型: boolean
     * 默认值: false
     * @deprecated 该属性已废弃，将在下一个minor版本被移除，直接使用插槽即可
     */
    useSuffixSlot: makeBooleanProp(false),
    /**
     * 搜索框占位文本
     * 类型: string
     */
    placeholder: String,
    /**
     * 搜索框右侧文本
     * 类型: string
     */
    cancelTxt: String,
    /**
     * 搜索框亮色（白色）
     * 类型: boolean
     * 默认值: false
     */
    light: makeBooleanProp(false),
    /**
     * 是否隐藏右侧文本
     * 类型: boolean
     * 默认值: false
     */
    hideCancel: makeBooleanProp(false),
    /**
     * 是否禁用搜索框
     * 类型: boolean
     * 默认值: false
     */
    disabled: makeBooleanProp(false),
    /**
     * 原生属性，设置最大长度。-1 表示无限制
     * 类型: string / number
     * 默认值: -1
     */
    maxlength: makeNumericProp(-1),
    /**
     * placeholder 居左边
     * 类型: boolean
     * 默认值: false
     */
    placeholderLeft: makeBooleanProp(false),
    /**
     * 是否自动聚焦
     * 类型: boolean
     * 默认值: false
     * 最低版本: 0.1.63
     */
    focus: makeBooleanProp(false),
    /**
     * 是否在点击清除按钮时聚焦输入框
     * 类型: boolean
     * 默认值: false
     * 最低版本: 0.1.63
     */
    focusWhenClear: makeBooleanProp(false)
  };
  const __default__$7 = {
    name: "wd-search",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
    ...__default__$7,
    props: searchProps,
    emits: ["update:modelValue", "change", "clear", "search", "focus", "blur", "cancel"],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const { translate } = useTranslate("search");
      const isFocused = vue.ref(false);
      const showInput = vue.ref(false);
      const str = vue.ref("");
      const showPlaceHolder = vue.ref(true);
      const clearing = vue.ref(false);
      vue.watch(
        () => props2.modelValue,
        (newValue) => {
          str.value = newValue;
          if (newValue) {
            showInput.value = true;
          }
        },
        { immediate: true }
      );
      vue.watch(
        () => props2.focus,
        (newValue) => {
          if (newValue) {
            if (props2.disabled)
              return;
            closeCover();
          }
        }
      );
      vue.onMounted(() => {
        if (props2.focus) {
          closeCover();
        }
      });
      const rootClass = vue.computed(() => {
        return `wd-search  ${props2.light ? "is-light" : ""}  ${props2.hideCancel ? "is-without-cancel" : ""} ${props2.customClass}`;
      });
      const coverStyle = vue.computed(() => {
        const coverStyle2 = {
          display: str.value === "" && showPlaceHolder.value ? "flex" : "none"
        };
        return objToStyle(coverStyle2);
      });
      function hackFocus(focus) {
        showInput.value = focus;
        requestAnimationFrame(() => {
          isFocused.value = focus;
        });
      }
      function closeCover() {
        if (props2.disabled)
          return;
        requestAnimationFrame().then(() => requestAnimationFrame()).then(() => requestAnimationFrame()).then(() => {
          showPlaceHolder.value = false;
          hackFocus(true);
        });
      }
      function inputValue(event) {
        str.value = event.detail.value;
        emit("update:modelValue", event.detail.value);
        emit("change", {
          value: event.detail.value
        });
      }
      function clearSearch() {
        str.value = "";
        clearing.value = true;
        if (props2.focusWhenClear) {
          isFocused.value = false;
        }
        requestAnimationFrame().then(() => requestAnimationFrame()).then(() => requestAnimationFrame()).then(() => {
          if (props2.focusWhenClear) {
            showPlaceHolder.value = false;
            hackFocus(true);
          } else {
            showPlaceHolder.value = true;
            hackFocus(false);
          }
          emit("change", {
            value: ""
          });
          emit("update:modelValue", "");
          emit("clear");
        });
      }
      function search({ detail: { value } }) {
        emit("search", {
          value
        });
      }
      function searchFocus() {
        if (clearing.value) {
          clearing.value = false;
          return;
        }
        showPlaceHolder.value = false;
        emit("focus", {
          value: str.value
        });
      }
      function searchBlur() {
        if (clearing.value)
          return;
        showPlaceHolder.value = !str.value;
        showInput.value = !showPlaceHolder.value;
        isFocused.value = false;
        emit("blur", {
          value: str.value
        });
      }
      function handleCancel() {
        emit("cancel", {
          value: str.value
        });
      }
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(rootClass.value),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            vue.createCommentVNode("自定义label插槽"),
            vue.createCommentVNode("搜索框主体"),
            vue.createElementVNode("view", { class: "wd-search__block" }, [
              vue.renderSlot(_ctx.$slots, "prefix", {}, void 0, true),
              vue.createElementVNode("view", { class: "wd-search__field" }, [
                !_ctx.placeholderLeft ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    style: vue.normalizeStyle(coverStyle.value),
                    class: "wd-search__cover",
                    onClick: closeCover
                  },
                  [
                    vue.createVNode(_component_wd_icon, {
                      name: "search",
                      size: "18px",
                      "custom-class": "wd-search__search-icon"
                    }),
                    vue.createElementVNode(
                      "text",
                      { class: "wd-search__placeholder-txt" },
                      vue.toDisplayString(_ctx.placeholder || vue.unref(translate)("search")),
                      1
                      /* TEXT */
                    )
                  ],
                  4
                  /* STYLE */
                )) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode("icon:search"),
                showInput.value || str.value || _ctx.placeholderLeft ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                  key: 1,
                  name: "search",
                  size: "18px",
                  "custom-class": "wd-search__search-left-icon"
                })) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode("搜索框"),
                showInput.value || str.value || _ctx.placeholderLeft ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                  key: 2,
                  placeholder: _ctx.placeholder || vue.unref(translate)("search"),
                  "placeholder-class": "wd-search__placeholder-txt",
                  "confirm-type": "search",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => str.value = $event),
                  class: "wd-search__input",
                  onFocus: searchFocus,
                  onInput: inputValue,
                  onBlur: searchBlur,
                  onConfirm: search,
                  disabled: _ctx.disabled,
                  maxlength: _ctx.maxlength,
                  focus: isFocused.value
                }, null, 40, ["placeholder", "disabled", "maxlength", "focus"])), [
                  [vue.vModelText, str.value]
                ]) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode("icon:clear"),
                str.value ? (vue.openBlock(), vue.createBlock(_component_wd_icon, {
                  key: 3,
                  "custom-class": "wd-search__clear wd-search__clear-icon",
                  name: "error-fill",
                  size: "16px",
                  onClick: clearSearch
                })) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createCommentVNode("the button behind input,care for hideCancel without displaying"),
            !_ctx.hideCancel ? vue.renderSlot(_ctx.$slots, "suffix", { key: 0 }, () => [
              vue.createCommentVNode("默认button"),
              vue.createElementVNode(
                "view",
                {
                  class: "wd-search__cancel",
                  onClick: handleCancel
                },
                vue.toDisplayString(_ctx.cancelTxt || vue.unref(translate)("cancel")),
                1
                /* TEXT */
              )
            ], true) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-cc0202be"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-search/wd-search.vue"]]);
  const _sfc_main$n = {
    __name: "searchFriends",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let token = userData.token;
      let searchContent = vue.ref("");
      let friendList = vue.ref([]);
      const Back = () => {
        uni.navigateBack();
      };
      const search = () => {
        uni.showLoading({
          title: "搜索中..."
        });
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/search",
          method: "POST",
          header: {
            "token": token
          },
          data: {
            query: searchContent.value,
            pageNum: 1,
            pageSize: 20
          },
          success: (res) => {
            uni.hideLoading();
            formatAppLog("log", "at pages/searchFriends/searchFriends.vue:56", res.data);
            if (res.data.code == "0") {
              friendList.value = res.data.data.list;
            } else {
              uni.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 2e3
              });
            }
          },
          fail: (err) => {
            uni.hideLoading();
            uni.showToast({
              title: err,
              icon: "none",
              duration: 2e3
            });
          }
        });
      };
      const GoUserShow = (id) => {
        uni.navigateTo({
          url: "/pages/UserShow/UserShow?id=" + id,
          animationType: "fade-in"
        });
      };
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_search = resolveEasycom(vue.resolveDynamicComponent("wd-search"), __easycom_1$2);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-background 全屏" }, [
          vue.createElementVNode("view", { class: "横向布局" }, [
            vue.createVNode(_component_wd_icon, {
              onClick: Back,
              class: "TitileFont",
              name: "thin-arrow-left",
              size: "30rpx"
            }),
            vue.createElementVNode("view", { class: "ICON-TitileFont" }, "Find Friends")
          ]),
          vue.createVNode(_component_wd_search, {
            "hide-cancel": "",
            focus: "",
            onSearch: search,
            modelValue: vue.unref(searchContent),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(searchContent) ? searchContent.value = $event : searchContent = $event)
          }, null, 8, ["modelValue"]),
          vue.createElementVNode("view", { class: "列表大背景" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(friendList), (friend) => {
                return vue.openBlock(), vue.createElementBlock("view", null, [
                  vue.createVNode(_component_wd_row, {
                    class: "列表背景",
                    onClick: ($event) => GoUserShow(friend.id)
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(
                        _component_wd_col,
                        { span: "20" },
                        {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("view", { class: "横向布局" }, [
                              vue.createElementVNode("image", {
                                src: "http://116.62.176.59:8080/xqlgq/files/" + friend.userImage,
                                mode: "aspectFill",
                                class: "好友头像"
                              }, null, 8, ["src"]),
                              vue.createElementVNode(
                                "view",
                                { class: "朋友id" },
                                " id : " + vue.toDisplayString(friend.id),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode(
                                "view",
                                { class: "朋友姓名" },
                                vue.toDisplayString(friend.username),
                                1
                                /* TEXT */
                              )
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      ),
                      vue.createVNode(_component_wd_col, { span: "4" }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("view", { class: "右侧布局 进入图标布局" }, [
                            vue.createVNode(_component_wd_icon, {
                              class: "右侧图标",
                              name: "page-last",
                              size: "30px",
                              color: "#9e9e9e"
                            })
                          ])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick"])
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const PagesSearchFriendsSearchFriends = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "D:/前端学习笔记/uniapp/City/pages/searchFriends/searchFriends.vue"]]);
  const _sfc_main$m = {
    __name: "ChangeUserImg",
    setup(__props) {
      let userImg = vue.ref("");
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let token = userData.token;
      const handleChange1 = (fileList) => {
        userImg.value = JSON.parse(fileList.fileList[0].response).data;
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/register",
          method: "POST",
          header: {
            "token": token
          },
          data: {
            "userImage": userImg.value
          },
          success(res) {
            formatAppLog("log", "at pages/ChangeInformation/ChangeUserImg.vue:38", res.data);
            if (res.data.code == "0") {
              uni.showToast({
                title: "上传成功",
                icon: "none",
                duration: 2e3
              });
            } else {
              uni.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 2e3
              });
            }
          },
          fail: (err) => {
            uni.showToast({
              title: err,
              icon: "none",
              duration: 2e3
            });
          }
        });
      };
      const Back = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_upload = resolveEasycom(vue.resolveDynamicComponent("wd-upload"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-background 全屏" }, [
          vue.createElementVNode("view", { class: "横向布局" }, [
            vue.createVNode(_component_wd_icon, {
              onClick: Back,
              class: "TitileFont",
              name: "thin-arrow-left",
              size: "30rpx"
            }),
            vue.createElementVNode("view", { class: "ICON-TitileFont" }, "My Avatar")
          ]),
          vue.createElementVNode("view", { class: "小文本" }, "上传新的用户头像："),
          vue.createElementVNode("view", { class: "居中对齐" }, [
            vue.createVNode(_component_wd_upload, {
              class: "upload",
              limit: "1",
              "file-list": _ctx.file,
              action: "http://116.62.176.59:8080/xqlgq/files/upload",
              onChange: handleChange1
            }, null, 8, ["file-list"])
          ])
        ]);
      };
    }
  };
  const PagesChangeInformationChangeUserImg = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "D:/前端学习笔记/uniapp/City/pages/ChangeInformation/ChangeUserImg.vue"]]);
  const _sfc_main$l = {
    __name: "ChangeBackImg",
    setup(__props) {
      let userImg = vue.ref("");
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let token = userData.token;
      const handleChange1 = (fileList) => {
        userImg.value = JSON.parse(fileList.fileList[0].response).data;
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/register",
          method: "POST",
          header: {
            "token": token
          },
          data: {
            "backImg": userImg.value
          },
          success(res) {
            formatAppLog("log", "at pages/ChangeInformation/ChangeBackImg/ChangeBackImg.vue:38", res.data);
            if (res.data.code == "0") {
              uni.showToast({
                title: "上传成功",
                icon: "none",
                duration: 2e3
              });
            } else {
              uni.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 2e3
              });
            }
          },
          fail: (err) => {
            uni.showToast({
              title: err,
              icon: "none",
              duration: 2e3
            });
          }
        });
      };
      const Back = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_upload = resolveEasycom(vue.resolveDynamicComponent("wd-upload"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-background 全屏" }, [
          vue.createElementVNode("view", { class: "横向布局" }, [
            vue.createVNode(_component_wd_icon, {
              onClick: Back,
              class: "TitileFont",
              name: "thin-arrow-left",
              size: "30rpx"
            }),
            vue.createElementVNode("view", { class: "ICON-TitileFont" }, "My Background")
          ]),
          vue.createElementVNode("view", { class: "小文本" }, "上传新的背景图片："),
          vue.createElementVNode("view", { class: "居中对齐" }, [
            vue.createVNode(_component_wd_upload, {
              class: "upload",
              limit: "1",
              "file-list": _ctx.file,
              action: "http://116.62.176.59:8080/xqlgq/files/upload",
              onChange: handleChange1
            }, null, 8, ["file-list"])
          ])
        ]);
      };
    }
  };
  const PagesChangeInformationChangeBackImgChangeBackImg = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "D:/前端学习笔记/uniapp/City/pages/ChangeInformation/ChangeBackImg/ChangeBackImg.vue"]]);
  const _sfc_main$k = {
    __name: "ChangeCity",
    setup(__props) {
      const Back = () => {
        uni.navigateBack();
      };
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let token = userData.token;
      let locationX = vue.ref("");
      let locationY = vue.ref("");
      let placeXY = "";
      let cityName = vue.ref("未知");
      uni.getLocation({
        type: "wgs84",
        geocode: true,
        isHighAccuracy: true,
        success: function(res) {
          locationX.value = res.longitude;
          locationY.value = res.latitude;
          placeXY = locationX.value + "," + locationY.value;
          formatAppLog("log", "at pages/ChangeInformation/ChangeCity/ChangeCity.vue:40", placeXY);
          uni.request({
            url: "https://restapi.amap.com/v3/geocode/regeo",
            method: "GET",
            data: {
              location: placeXY,
              key: "ae7bbfcb1e77bf8aba15fedc250a005c"
            },
            success: (res2) => {
              cityName.value = res2.data.regeocode.addressComponent.city;
            },
            fail: (err) => {
              cityName.value = "获取位置失败";
            }
          });
        }
      });
      const Update = () => {
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/user/register",
          method: "POST",
          header: {
            "token": token
          },
          data: {
            "city": cityName.value,
            "locationX": locationX.value,
            "locationY": locationY.value
          },
          success(res) {
            formatAppLog("log", "at pages/ChangeInformation/ChangeCity/ChangeCity.vue:74", res.data);
            if (res.data.code == "0") {
              userData.city = cityName.value;
              userData.locationX = locationX.value;
              userData.locationY = locationY.value;
              let STRING_MSS = JSON.stringify(userData);
              formatAppLog("log", "at pages/ChangeInformation/ChangeCity/ChangeCity.vue:81", STRING_MSS);
              uni.setStorageSync("UserInformation", STRING_MSS);
              uni.showToast({
                title: "更新成功",
                icon: "none",
                duration: 2e3
              });
            } else {
              uni.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 2e3
              });
            }
          },
          fail: (err) => {
            uni.showToast({
              title: err,
              icon: "none",
              duration: 2e3
            });
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        const _component_wd_button = resolveEasycom(vue.resolveDynamicComponent("wd-button"), __easycom_12);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-background 全屏" }, [
          vue.createElementVNode("view", { class: "横向布局" }, [
            vue.createVNode(_component_wd_icon, {
              onClick: Back,
              class: "TitileFont",
              name: "thin-arrow-left",
              size: "30rpx"
            }),
            vue.createElementVNode("view", { class: "ICON-TitileFont" }, "My City")
          ]),
          vue.createVNode(_component_wd_row, { class: "wdClass" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("当前经纬度：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(locationX)) + ", " + vue.toDisplayString(vue.unref(locationY)),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_row, { class: "wdClass" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_wd_col, {
                class: "灰色字",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("当前城市：")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_wd_col, {
                class: "灰色字 右侧布局",
                span: 12
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(cityName)),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_wd_button, {
            block: "",
            class: "button",
            type: "success",
            size: "large",
            onClick: Update
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("更新")
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesChangeInformationChangeCityChangeCity = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "D:/前端学习笔记/uniapp/City/pages/ChangeInformation/ChangeCity/ChangeCity.vue"]]);
  const inputNumberProps = {
    ...baseProps,
    /**
     * 绑定值
     */
    modelValue: makeRequiredProp(numericProp),
    /**
     * 最小值
     */
    min: makeNumberProp(1),
    /**
     * 最大值
     */
    max: makeNumberProp(Number.MAX_SAFE_INTEGER),
    /**
     * 步进值
     */
    step: makeNumberProp(1),
    /**
     * 是否严格按照步进值递增或递减
     */
    stepStrictly: makeBooleanProp(false),
    /**
     * 数值精度
     */
    precision: makeNumberProp(0),
    /**
     * 是否禁用
     */
    disabled: makeBooleanProp(false),
    /**
     * 是否禁用输入框
     */
    disableInput: makeBooleanProp(false),
    /**
     * 是否禁用减号按钮
     */
    disableMinus: makeBooleanProp(false),
    /**
     * 是否禁用加号按钮
     */
    disablePlus: makeBooleanProp(false),
    /**
     * 是否不显示输入框
     */
    withoutInput: makeBooleanProp(false),
    /**
     * 输入框宽度
     */
    inputWidth: makeNumericProp(36),
    /**
     * 是否允许为空
     */
    allowNull: makeBooleanProp(false),
    /**
     * 输入框占位符
     */
    placeholder: makeStringProp("")
  };
  const __default__$6 = {
    name: "wd-input-number",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
    ...__default__$6,
    props: inputNumberProps,
    emits: ["focus", "blur", "change", "update:modelValue"],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const minDisabled = vue.ref(false);
      const maxDisabled = vue.ref(false);
      const inputValue = vue.ref("");
      vue.watch(
        () => props2.modelValue,
        (newValue) => {
          inputValue.value = newValue;
          splitDisabled(newValue);
        },
        { immediate: true, deep: true }
      );
      vue.watch(
        [() => props2.max, () => props2.min],
        () => {
          updateBoundary();
        },
        { immediate: true, deep: true }
      );
      vue.watch(
        () => props2.disabled,
        (newValue) => {
          minDisabled.value = newValue;
          maxDisabled.value = newValue;
        },
        { immediate: true, deep: true }
      );
      function updateBoundary() {
        debounce$1(() => {
          const value = formatValue(inputValue.value);
          setValue(value);
          splitDisabled(value);
        }, 30)();
      }
      function splitDisabled(value) {
        const { disabled, min, max, step } = props2;
        minDisabled.value = disabled || Number(value) <= min || changeStep(value, -step) < min;
        maxDisabled.value = disabled || Number(value) >= max || changeStep(value, step) > max;
      }
      function toPrecision(value) {
        return Number(parseFloat(`${Math.round(value * Math.pow(10, props2.precision)) / Math.pow(10, props2.precision)}`).toFixed(props2.precision));
      }
      function getPrecision(value) {
        if (value === void 0)
          return 0;
        const valueString = value.toString();
        const dotPosition = valueString.indexOf(".");
        let precision = 0;
        if (dotPosition !== -1) {
          precision = valueString.length - dotPosition - 1;
        }
        return precision;
      }
      function toStrictlyStep(value) {
        const stepPrecision = getPrecision(props2.step);
        const precisionFactory = Math.pow(10, stepPrecision);
        return Math.round(Number(value) / props2.step) * precisionFactory * props2.step / precisionFactory;
      }
      function setValue(value, change = true) {
        if (props2.allowNull && (!isDef(value) || value === "")) {
          dispatchChangeEvent(value, change);
          return;
        }
        if (props2.stepStrictly) {
          value = toStrictlyStep(value);
        }
        if ((value || value === 0) && props2.precision !== void 0) {
          value = toPrecision(Number(value));
        }
        if (Number(value) > props2.max)
          value = toPrecision(props2.max);
        if (Number(value) < props2.min)
          value = toPrecision(props2.min);
        dispatchChangeEvent(value, change);
      }
      function changeStep(val, step) {
        val = Number(val);
        if (isNaN(val)) {
          return props2.min;
        }
        const precisionFactory = Math.pow(10, props2.precision);
        return toPrecision((val * precisionFactory + step * precisionFactory) / precisionFactory);
      }
      function sub() {
        if (minDisabled.value || props2.disableMinus)
          return;
        const newValue = changeStep(inputValue.value, -props2.step);
        dispatchChangeEvent(newValue);
      }
      function add() {
        if (maxDisabled.value || props2.disablePlus)
          return;
        const newValue = changeStep(inputValue.value, props2.step);
        dispatchChangeEvent(newValue);
      }
      function handleInput(event) {
        const value = event.detail.value || "";
        dispatchChangeEvent(value);
      }
      function handleFocus(event) {
        emit("focus", event.detail);
      }
      function handleBlur() {
        const value = formatValue(inputValue.value);
        setValue(value);
        emit("blur", {
          value
        });
      }
      function dispatchChangeEvent(value, change = true) {
        inputValue.value = value;
        change && emit("change", { value });
        change && emit("update:modelValue", inputValue.value);
      }
      function formatValue(value) {
        if (props2.allowNull && (!isDef(value) || value === "")) {
          return "";
        }
        value = Number(value);
        if (isNaN(value)) {
          value = props2.min;
        }
        if (props2.stepStrictly) {
          value = toStrictlyStep(value);
        }
        if (props2.precision !== void 0) {
          value = value.toFixed(props2.precision);
        }
        return Number(value);
      }
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(`wd-input-number ${_ctx.customClass} ${_ctx.disabled ? "is-disabled" : ""} ${_ctx.withoutInput ? "is-without-input" : ""}`),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(`wd-input-number__action ${minDisabled.value || _ctx.disableMinus ? "is-disabled" : ""}`),
                onClick: sub
              },
              [
                vue.createVNode(_component_wd_icon, {
                  name: "decrease",
                  "custom-class": "wd-input-number__action-icon"
                })
              ],
              2
              /* CLASS */
            ),
            !_ctx.withoutInput ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "wd-input-number__inner",
              onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "wd-input-number__input",
                style: vue.normalizeStyle(`${_ctx.inputWidth ? "width: " + _ctx.inputWidth : ""}`),
                type: "digit",
                disabled: _ctx.disabled || _ctx.disableInput,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
                placeholder: _ctx.placeholder,
                onInput: handleInput,
                onFocus: handleFocus,
                onBlur: handleBlur
              }, null, 44, ["disabled", "placeholder"]), [
                [vue.vModelText, inputValue.value]
              ]),
              vue.createElementVNode("view", { class: "wd-input-number__input-border" })
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(`wd-input-number__action ${maxDisabled.value || _ctx.disablePlus ? "is-disabled" : ""}`),
                onClick: add
              },
              [
                vue.createVNode(_component_wd_icon, {
                  name: "add",
                  "custom-class": "wd-input-number__action-icon"
                })
              ],
              2
              /* CLASS */
            )
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-a2d9dd24"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-input-number/wd-input-number.vue"]]);
  const COLLAPSE_KEY = Symbol("wd-collapse");
  const collapseProps = {
    ...baseProps,
    /**
     * 查看更多模式下的插槽外部自定义样式
     */
    customMoreSlotClass: makeStringProp(""),
    /**
     * 绑定值
     */
    modelValue: {
      type: [String, Array, Boolean]
    },
    /**
     * 手风琴模式
     */
    accordion: makeBooleanProp(false),
    /**
     * 查看更多的折叠面板
     */
    viewmore: makeBooleanProp(false),
    /**
     * 查看更多的自定义插槽使用标志
     */
    useMoreSlot: makeBooleanProp(false),
    /**
     * 查看更多的折叠面板，收起时的显示行数
     */
    lineNum: makeNumberProp(2)
  };
  const collapseItemProps = {
    ...baseProps,
    /**
     * 折叠栏的标题
     */
    title: String,
    /**
     * 禁用折叠栏
     */
    disabled: makeBooleanProp(false),
    /**
     * 折叠栏的标识符
     */
    name: makeRequiredProp(String),
    /**
     * 打开前的回调函数，返回 false 可以阻止打开，支持返回 Promise
     */
    beforeExpend: Function
  };
  const __default__$5 = {
    name: "wd-collapse-item",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    ...__default__$5,
    props: collapseItemProps,
    setup(__props, { expose: __expose }) {
      const $body = ".wd-collapse-item__body";
      const props2 = __props;
      const { parent: collapse, index: index2 } = useParent(COLLAPSE_KEY);
      const height = vue.ref("");
      const expanded = vue.ref(false);
      const transD = vue.ref("0.3s");
      const { proxy } = vue.getCurrentInstance();
      const isFirst = vue.computed(() => {
        return index2.value === 0;
      });
      const contentStyle = vue.computed(() => {
        let style = {
          height: expanded.value ? height.value + "px" : "0px",
          "transition-duration": transD.value
        };
        return objToStyle(style);
      });
      const selected = vue.computed(() => {
        if (collapse) {
          return collapse.props.modelValue;
        } else {
          return [];
        }
      });
      vue.watch(
        () => selected.value,
        (newVal) => {
          const name = props2.name;
          if (isDef(newVal)) {
            if (typeof newVal === "string" && newVal === name) {
              doResetHeight($body);
              expanded.value = true;
            } else if (isArray(newVal) && newVal.indexOf(name) >= 0) {
              doResetHeight($body);
              expanded.value = true;
            } else {
              expanded.value = false;
            }
          } else {
            expanded.value = false;
          }
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.onMounted(() => {
        init();
      });
      function init() {
        doResetHeight($body);
      }
      function doResetHeight(select) {
        getRect(select, false, proxy).then((rect) => {
          if (!rect)
            return;
          const { height: rectHeight } = rect;
          height.value = Number(rectHeight);
        });
      }
      function handleClick() {
        if (props2.disabled)
          return;
        let name = props2.name;
        const nexexpanded = !expanded.value;
        if (nexexpanded) {
          if (props2.beforeExpend) {
            const response = props2.beforeExpend(name);
            if (!response) {
              return;
            }
            if (isPromise(response)) {
              response.then(() => {
                collapse && collapse.toggle(name, !expanded.value);
              });
            } else {
              collapse && collapse.toggle(name, !expanded.value);
            }
          } else {
            collapse && collapse.toggle(name, !expanded.value);
          }
        } else {
          collapse && collapse.toggle(name, !expanded.value);
        }
      }
      function getExpanded() {
        return expanded.value;
      }
      __expose({ getExpanded });
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(`wd-collapse-item ${_ctx.disabled ? "is-disabled" : ""} is-border ${_ctx.customClass}`),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(`wd-collapse-item__header  ${isFirst.value ? "wd-collapse-item__header-first" : ""}`),
                onClick: handleClick
              },
              [
                vue.createElementVNode(
                  "text",
                  { class: "wd-collapse-item__title" },
                  vue.toDisplayString(_ctx.title),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_wd_icon, {
                  name: "arrow-down",
                  "custom-class": `wd-collapse-item__arrow ${expanded.value ? "is-retract" : ""}`
                }, null, 8, ["custom-class"])
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: "wd-collapse-item__wrapper",
                style: vue.normalizeStyle(contentStyle.value)
              },
              [
                vue.createElementVNode("view", { class: "wd-collapse-item__body" }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ])
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_8 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-9fdfc147"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-collapse-item/wd-collapse-item.vue"]]);
  const __default__$4 = {
    name: "wd-collapse",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
    ...__default__$4,
    props: collapseProps,
    emits: ["change", "update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const { translate } = useTranslate("collapse");
      const contentLineNum = vue.ref(0);
      const { linkChildren, children } = useChildren(COLLAPSE_KEY);
      linkChildren({ props: props2, toggle });
      vue.watch(
        () => props2.modelValue,
        (newVal) => {
          const { viewmore, accordion } = props2;
          if (accordion && typeof newVal !== "string") {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-collapse/wd-collapse.vue:66", "accordion value must be string");
          } else if (!accordion && !viewmore && !isArray(newVal)) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-collapse/wd-collapse.vue:68", "value must be Array");
          }
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        () => props2.lineNum,
        (newVal) => {
          if (newVal <= 0) {
            formatAppLog("error", "at uni_modules/wot-design-uni/components/wd-collapse/wd-collapse.vue:78", "lineNum must greater than 0");
          }
        },
        { deep: true, immediate: true }
      );
      vue.onBeforeMount(() => {
        const { lineNum, viewmore, modelValue } = props2;
        contentLineNum.value = viewmore && !modelValue ? lineNum : 0;
      });
      function updateChange(activeNames) {
        emit("update:modelValue", activeNames);
        emit("change", {
          value: activeNames
        });
      }
      function toggle(name, expanded) {
        const { accordion, modelValue } = props2;
        if (accordion) {
          updateChange(name === modelValue ? "" : name);
        } else if (expanded) {
          updateChange(modelValue.concat(name));
        } else {
          updateChange(modelValue.filter((activeName) => activeName !== name));
        }
      }
      const toggleAll = (options = {}) => {
        if (props2.accordion) {
          return;
        }
        if (typeof options === "boolean") {
          options = { expanded: options };
        }
        const { expanded, skipDisabled } = options;
        const names = [];
        children.forEach((item, index2) => {
          if (item.disabled && skipDisabled) {
            if (item.$.exposed.getExpanded()) {
              names.push(item.name || index2);
            }
          } else {
            if (isDef(expanded) ? expanded : !item.$.exposed.getExpanded()) {
              names.push(item.name || index2);
            }
          }
        });
        updateChange(names);
      };
      function handleMore() {
        emit("update:modelValue", !props2.modelValue);
        emit("change", {
          value: !props2.modelValue
        });
      }
      __expose({
        toggleAll
      });
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(`wd-collapse ${_ctx.viewmore ? "is-viewmore" : ""} ${_ctx.customClass}`),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            vue.createCommentVNode(" 普通或手风琴 "),
            !_ctx.viewmore ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" 查看更多模式 "),
                vue.createElementVNode("view", null, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(`wd-collapse__content ${!_ctx.modelValue ? "is-retract" : ""} `),
                      style: vue.normalizeStyle(`-webkit-line-clamp: ${contentLineNum.value}; -webkit-box-orient: vertical`)
                    },
                    [
                      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ],
                    6
                    /* CLASS, STYLE */
                  ),
                  vue.createElementVNode("view", {
                    class: "wd-collapse__more",
                    onClick: handleMore
                  }, [
                    vue.createCommentVNode(" 自定义展开按钮 "),
                    _ctx.useMoreSlot ? (vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: 0,
                        class: vue.normalizeClass(_ctx.customMoreSlotClass)
                      },
                      [
                        vue.renderSlot(_ctx.$slots, "more", {}, void 0, true)
                      ],
                      2
                      /* CLASS */
                    )) : (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      { key: 1 },
                      [
                        vue.createCommentVNode(" 显示展开或折叠按钮 "),
                        vue.createElementVNode(
                          "span",
                          { class: "wd-collapse__more-txt" },
                          vue.toDisplayString(!_ctx.modelValue ? vue.unref(translate)("expand") : vue.unref(translate)("retract")),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(`wd-collapse__arrow ${_ctx.modelValue ? "is-retract" : ""}`)
                          },
                          [
                            vue.createVNode(_component_wd_icon, { name: "arrow-down" })
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ])
                ])
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            ))
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_11 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-b3a2d45a"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-collapse/wd-collapse.vue"]]);
  const _sfc_main$g = {
    __name: "PutEvent",
    setup(__props) {
      let collapse = vue.ref(["item3"]);
      let file = vue.ref([]);
      vue.ref([]);
      let MyEventImgList = vue.ref([]);
      let MyEventTextContent = vue.ref("");
      let MyEventTitle = vue.ref("");
      let MyEventIfTeam = vue.ref(false);
      let MyEventTeamMax = vue.ref(null);
      let MyEventDDL = vue.ref(null);
      let MyEventPay = vue.ref(null);
      let MyEventType = vue.ref("普通");
      let MyEventTag = vue.ref([]);
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let locationX = vue.ref("");
      let locationY = vue.ref("");
      let cityName = vue.ref("未知");
      let placeXY = vue.ref(",");
      let tagtext = vue.ref("");
      const columns = vue.ref(["普通", "求助", "公益", "学术", "美食", "运动", "游戏"]);
      uni.getLocation({
        type: "wgs84",
        geocode: true,
        isHighAccuracy: true,
        success: function(res) {
          locationX.value = res.longitude;
          locationY.value = res.latitude;
          placeXY = locationX.value + "," + locationY.value;
          formatAppLog("log", "at pages/PutEvent/PutEvent.vue:101", placeXY);
          uni.request({
            url: "https://restapi.amap.com/v3/geocode/regeo",
            method: "GET",
            data: {
              location: placeXY,
              key: "ae7bbfcb1e77bf8aba15fedc250a005c"
            },
            success: (res2) => {
              formatAppLog("log", "at pages/PutEvent/PutEvent.vue:110", res2.data);
              cityName.value = res2.data.regeocode.addressComponent.city + res2.data.regeocode.addressComponent.district + res2.data.regeocode.addressComponent.streetNumber.street;
            },
            fail: (err) => {
              tip2("请开启定位！");
              uni.navigateBack();
            }
          });
        }
      });
      function removeElementAtIndex(arr, index2) {
        arr.splice(index2, 1);
      }
      const tip2 = (words) => {
        uni.showToast({ title: words, icon: "none", duration: 2e3 });
      };
      const handleChange1 = (fileList) => {
        MyEventImgList.value = fileList;
        formatAppLog("log", "at pages/PutEvent/PutEvent.vue:134", MyEventImgList.value);
      };
      const Back = () => {
        uni.navigateBack();
      };
      function extractDataFields(jsonInput) {
        if (typeof jsonInput === "object" && jsonInput !== null) {
          const dataFields = [];
          for (const item of jsonInput.fileList) {
            if (item.response) {
              try {
                const response = JSON.parse(item.response);
                if (response.code && response.data) {
                  dataFields.push(response.data);
                }
              } catch (e2) {
                formatAppLog("error", "at pages/PutEvent/PutEvent.vue:147", "解析response时发生错误:", e2);
              }
            }
          }
          return dataFields;
        } else {
          throw new Error("输入的JSON对象无效");
        }
      }
      const upload = () => {
        let IMGLIST, TEAMMAX;
        if (JSON.stringify(MyEventImgList.value) != "[]") {
          IMGLIST = MyEventImgList.value = JSON.stringify(extractDataFields(MyEventImgList.value)).replace(/"/g, "");
        } else {
          IMGLIST = [];
        }
        if (MyEventIfTeam.value) {
          TEAMMAX = MyEventTeamMax.value;
        } else {
          TEAMMAX = null;
        }
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/add",
          method: "POST",
          header: {
            "token": userData.token
          },
          data: {
            "locationX": locationX.value,
            "locationY": locationY.value,
            "title": MyEventTitle.value,
            "content": MyEventTextContent.value,
            "type": MyEventType.value,
            "images": JSON.stringify(IMGLIST),
            "payment": MyEventPay.value,
            "deadline": MyEventDDL.value,
            "participantLimit": TEAMMAX,
            "tag": JSON.stringify(MyEventTag.value).replace(/"/g, "")
          },
          success: (res) => {
            if (res.data.code == 0) {
              tip2("发布成功");
              uni.navigateBack();
            } else {
              tip2(res.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
      };
      const TagCnfirm = (value) => {
        formatAppLog("log", "at pages/PutEvent/PutEvent.vue:212", value.detail.value);
        MyEventTag.value.push(value.detail.value);
        tagtext.value = "";
      };
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_input = resolveEasycom(vue.resolveDynamicComponent("wd-input"), __easycom_1$6);
        const _component_wd_textarea = resolveEasycom(vue.resolveDynamicComponent("wd-textarea"), __easycom_2);
        const _component_wd_upload = resolveEasycom(vue.resolveDynamicComponent("wd-upload"), __easycom_3);
        const _component_wd_col = resolveEasycom(vue.resolveDynamicComponent("wd-col"), __easycom_4);
        const _component_wd_switch = resolveEasycom(vue.resolveDynamicComponent("wd-switch"), __easycom_5);
        const _component_wd_row = resolveEasycom(vue.resolveDynamicComponent("wd-row"), __easycom_6$1);
        const _component_wd_input_number = resolveEasycom(vue.resolveDynamicComponent("wd-input-number"), __easycom_7);
        const _component_wd_collapse_item = resolveEasycom(vue.resolveDynamicComponent("wd-collapse-item"), __easycom_8);
        const _component_wd_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("wd-datetime-picker"), __easycom_9);
        const _component_wd_picker = resolveEasycom(vue.resolveDynamicComponent("wd-picker"), __easycom_10);
        const _component_wd_collapse = resolveEasycom(vue.resolveDynamicComponent("wd-collapse"), __easycom_11);
        const _component_wd_button = resolveEasycom(vue.resolveDynamicComponent("wd-button"), __easycom_12);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-background 全屏" }, [
          vue.createElementVNode("view", { class: "横向布局" }, [
            vue.createVNode(_component_wd_icon, {
              onClick: Back,
              class: "TitileFont",
              name: "thin-arrow-left",
              size: "30rpx"
            }),
            vue.createElementVNode("view", { class: "ICON-TitileFont" }, "Upload Action")
          ]),
          vue.createElementVNode("scroll-view", {
            style: { "height": "100%", "width": "100%", "padding-bottom": "100rpx" },
            "scroll-y": "true"
          }, [
            vue.createVNode(_component_wd_input, {
              class: "标题输入框",
              type: "text",
              maxlength: 25,
              "show-word-limit": "",
              modelValue: vue.unref(MyEventTitle),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(MyEventTitle) ? MyEventTitle.value = $event : MyEventTitle = $event),
              placeholder: "请输入标题",
              onChange: _ctx.handleChange
            }, null, 8, ["modelValue", "onChange"]),
            vue.createVNode(_component_wd_textarea, {
              modelValue: vue.unref(MyEventTextContent),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(MyEventTextContent) ? MyEventTextContent.value = $event : MyEventTextContent = $event),
              "auto-height": "",
              maxlength: 1500,
              "show-word-limit": "",
              clearable: "",
              placeholder: "请填写内容",
              style: { "margin": "20rpx", "min-height": "200rpx", "padding": "10rpx" }
            }, null, 8, ["modelValue"]),
            vue.createVNode(_component_wd_upload, {
              class: "upload",
              limit: "9",
              multiple: "",
              "file-list": vue.unref(file),
              action: "http://116.62.176.59:8080/xqlgq/files/upload",
              onChange: handleChange1
            }, null, 8, ["file-list"]),
            vue.createVNode(_component_wd_collapse, {
              modelValue: vue.unref(collapse),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => vue.isRef(collapse) ? collapse.value = $event : collapse = $event)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_wd_collapse_item, {
                  class: "标签",
                  title: "组队活动",
                  name: "item1"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_row, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_wd_col, {
                          class: "灰色字",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("开启组队：")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        vue.createVNode(_component_wd_col, {
                          class: "灰色字 右侧布局",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_wd_switch, {
                              modelValue: vue.unref(MyEventIfTeam),
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(MyEventIfTeam) ? MyEventIfTeam.value = $event : MyEventIfTeam = $event),
                              "active-color": "#6ce68f",
                              "inactive-color": "#fd633c"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_wd_row, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_wd_col, {
                          class: "灰色字",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("活动人数：")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        vue.createVNode(_component_wd_col, {
                          class: "灰色字 右侧布局",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_wd_input_number, {
                              max: "60",
                              modelValue: vue.unref(MyEventTeamMax),
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(MyEventTeamMax) ? MyEventTeamMax.value = $event : MyEventTeamMax = $event),
                              onChange: _ctx.handleChange,
                              "input-width": "70px"
                            }, null, 8, ["modelValue", "onChange"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_wd_collapse_item, {
                  class: "标签",
                  title: "限定时间",
                  name: "item2"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_datetime_picker, {
                      minDate: "2024",
                      class: "时间框",
                      modelValue: vue.unref(MyEventDDL),
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(MyEventDDL) ? MyEventDDL.value = $event : MyEventDDL = $event),
                      type: "datetime",
                      label: "截止日期:",
                      onConfirm: _ctx.handleConfirm
                    }, null, 8, ["modelValue", "onConfirm"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_wd_collapse_item, {
                  class: "标签",
                  title: "分类/TAG",
                  name: "item3"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_picker, {
                      class: "时间框",
                      columns: columns.value,
                      label: "分类",
                      modelValue: vue.unref(MyEventType),
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.isRef(MyEventType) ? MyEventType.value = $event : MyEventType = $event),
                      onConfirm: _ctx.handleConfirm
                    }, null, 8, ["columns", "modelValue", "onConfirm"]),
                    vue.createElementVNode("view", {
                      style: { "flex-wrap": "wrap", "padding": "20rpx" },
                      class: "横向布局"
                    }, [
                      vue.createVNode(_component_wd_icon, {
                        name: "view",
                        size: "20rpx"
                      }),
                      vue.createElementVNode("view", {
                        onClick: _cache[6] || (_cache[6] = (...args) => _ctx.ShowTagSay && _ctx.ShowTagSay(...args))
                      }, "TAG："),
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(vue.unref(MyEventTag), (tag, index2) => {
                          return vue.openBlock(), vue.createElementBlock("view", null, [
                            vue.createElementVNode("view", {
                              onLongpress: ($event) => removeElementAtIndex(vue.unref(MyEventTag), index2),
                              style: { "margin-right": "15rpx", "padding": "10rpx", "background-color": "#7eb1b2", "border-radius": "10rpx", "color": "aliceblue", "font-size": "20rpx" }
                            }, vue.toDisplayString(tag), 41, ["onLongpress"])
                          ]);
                        }),
                        256
                        /* UNKEYED_FRAGMENT */
                      )),
                      vue.createElementVNode("view", null, [
                        vue.withDirectives(vue.createElementVNode(
                          "input",
                          {
                            class: "inputTag",
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => vue.isRef(tagtext) ? tagtext.value = $event : tagtext = $event),
                            style: { "width": "100rpx", "height": "48rpx", "background-color": "#7eb1b2", "border-radius": "10rpx", "color": "aliceblue", "opacity": "0.7", "text-align": "center", "font-weight": "bold" },
                            "placeholder-style": "color:#ffffff ;font-size:28rpx",
                            placeholder: "+",
                            onConfirm: TagCnfirm
                          },
                          null,
                          544
                          /* NEED_HYDRATION, NEED_PATCH */
                        ), [
                          [vue.vModelText, vue.unref(tagtext)]
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_wd_collapse_item, {
                  class: "标签",
                  title: "位置信息",
                  name: "item4"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_wd_row, { class: "" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_wd_col, {
                          class: "灰色字",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("当前经纬度：")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        vue.createVNode(_component_wd_col, {
                          class: "灰色字 右侧布局",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(
                              vue.toDisplayString(vue.unref(locationX)) + ", " + vue.toDisplayString(vue.unref(locationY)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_wd_row, { class: "" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_wd_col, {
                          class: "灰色字",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode("当前地区：")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        vue.createVNode(_component_wd_col, {
                          class: "灰色字 右侧布局",
                          span: 12
                        }, {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(
                              vue.toDisplayString(vue.unref(cityName)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            vue.createVNode(_component_wd_button, {
              block: "",
              size: "large",
              class: "发布按钮",
              onClick: upload,
              type: "success"
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("发布")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]);
      };
    }
  };
  const PagesPutEventPutEvent = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "D:/前端学习笔记/uniapp/City/pages/PutEvent/PutEvent.vue"]]);
  function useTouch() {
    const direction = vue.ref("");
    const deltaX = vue.ref(0);
    const deltaY = vue.ref(0);
    const offsetX = vue.ref(0);
    const offsetY = vue.ref(0);
    const startX = vue.ref(0);
    const startY = vue.ref(0);
    function touchStart(event) {
      const touch = event.touches[0];
      direction.value = "";
      deltaX.value = 0;
      deltaY.value = 0;
      offsetX.value = 0;
      offsetY.value = 0;
      startX.value = touch.clientX;
      startY.value = touch.clientY;
    }
    function touchMove(event) {
      const touch = event.touches[0];
      deltaX.value = touch.clientX - startX.value;
      deltaY.value = touch.clientY - startY.value;
      offsetX.value = Math.abs(deltaX.value);
      offsetY.value = Math.abs(deltaY.value);
      direction.value = offsetX.value > offsetY.value ? "horizontal" : offsetX.value < offsetY.value ? "vertical" : "";
    }
    return {
      touchStart,
      touchMove,
      direction,
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      startX,
      startY
    };
  }
  const sliderProps = {
    ...baseProps,
    /**
     * 自定义最小值的样式类名
     * 类型: string
     * 默认值: ''
     */
    customMinClass: makeStringProp(""),
    /**
     * 自定义最大值的样式类名
     * 类型: string
     * 默认值: ''
     */
    customMaxClass: makeStringProp(""),
    /**
     * 是否隐藏左右的最大最小值
     * 类型: boolean
     * 默认值: false
     */
    hideMinMax: makeBooleanProp(false),
    /**
     * 是否隐藏当前滑块值
     * 类型: boolean
     * 默认值: false
     */
    hideLabel: makeBooleanProp(false),
    /**
     * 是否禁用滑块
     * 类型: boolean
     * 默认值: false
     */
    disabled: makeBooleanProp(false),
    /**
     * 进度条未激活的背景颜色
     * 类型: string
     * 默认值: '#e5e5e5'
     */
    inactiveColor: makeStringProp("#e5e5e5"),
    /**
     * 进度条激活的背景颜色
     * 类型: string
     * 默认值: ''
     */
    activeColor: makeStringProp(""),
    /**
     * 滑块的最大值
     * 类型: number
     * 默认值: 100
     */
    max: makeNumberProp(100),
    /**
     * 滑块的最小值
     * 类型: number
     * 默认值: 0
     */
    min: makeNumberProp(0),
    /**
     * 滑块的步进值
     * 类型: number
     * 默认值: 1
     */
    step: makeNumberProp(1),
    /**
     * 滑块的值，如果为数组，则为双向滑块
     * 类型: number | number[]
     * 默认值: 0
     */
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  };
  const __default__$3 = {
    name: "wd-slider",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
    ...__default__$3,
    props: sliderProps,
    emits: ["dragstart", "dragmove", "dragend", "update:modelValue"],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const rightSlider = {
        startValue: 0,
        deltaX: 0,
        newValue: 0
      };
      const sliderId = vue.ref(`sliderId${uuid()}`);
      const touchLeft = useTouch();
      const touchRight = useTouch();
      const showRight = vue.ref(false);
      const barStyle = vue.ref("width: 0; height: 3px");
      const barHeight = vue.ref("3px");
      const leftNewValue = vue.ref(0);
      const rightNewValue = vue.ref(0);
      const rightBarPercent = vue.ref(0);
      const leftBarPercent = vue.ref(0);
      const trackWidth = vue.ref(0);
      const trackLeft = vue.ref(0);
      const startValue = vue.ref(0);
      const currentValue = vue.ref(0);
      const newValue = vue.ref(0);
      const maxValue = vue.ref(100);
      const minValue = vue.ref(0);
      const stepValue = vue.ref(1);
      vue.watch(
        () => props2.max,
        (newValue2) => {
          if (newValue2 < 0) {
            maxValue.value = 100;
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-slider/wd-slider.vue:100", "[wot design] warning(wd-slider): max value must be greater than 0");
          } else if (newValue2 <= props2.min) {
            maxValue.value = props2.min;
            minValue.value = newValue2;
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-slider/wd-slider.vue:104", "[wot design] warning(wd-slider): max value must be greater than min value");
          } else {
            maxValue.value = newValue2;
          }
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        () => props2.min,
        (newValue2) => {
          if (newValue2 < 0) {
            minValue.value = 0;
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-slider/wd-slider.vue:117", "[wot design] warning(wd-slider): min value must be greater than 0");
          } else if (newValue2 >= props2.max) {
            minValue.value = props2.max;
            maxValue.value = newValue2;
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-slider/wd-slider.vue:121", "[wot design] warning(wd-slider): min value must be less than max value");
          } else {
            minValue.value = newValue2;
          }
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        () => props2.step,
        (newValue2) => {
          if (newValue2 <= 0) {
            stepValue.value = 1;
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-slider/wd-slider.vue:134", "[wot design] warning(wd-slider): step must be greater than 0");
          }
        },
        { deep: true, immediate: true }
      );
      vue.watch(
        () => props2.modelValue,
        (newValue2, oldValue) => {
          if (newValue2 === null || newValue2 === void 0) {
            emit("update:modelValue", oldValue);
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-slider/wd-slider.vue:146", "[wot design] warning(wd-slider): value can nott be null or undefined");
          } else if (isArray(newValue2) && newValue2.length !== 2) {
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-slider/wd-slider.vue:148", "[wot design] warning(wd-slider): value must be dyadic array");
          } else if (!isNumber(newValue2) && !isArray(newValue2)) {
            emit("update:modelValue", oldValue);
            formatAppLog("warn", "at uni_modules/wot-design-uni/components/wd-slider/wd-slider.vue:151", "[wot design] warning(wd-slider): value must be dyadic array Or Number");
          }
          currentValue.value = newValue2;
          if (isArray(newValue2)) {
            if (oldValue && isArray(oldValue) && equal(newValue2, oldValue))
              return;
            showRight.value = true;
            if (leftBarPercent.value <= rightBarPercent.value) {
              leftBarSlider(newValue2[0]);
              rightBarSlider(newValue2[1]);
            } else {
              leftBarSlider(newValue2[1]);
              rightBarSlider(newValue2[0]);
            }
          } else {
            if (newValue2 === oldValue)
              return;
            leftBarSlider(newValue2);
          }
        },
        { deep: true, immediate: true }
      );
      const { proxy } = vue.getCurrentInstance();
      const rootClass = vue.computed(() => {
        const rootClass2 = `wd-slider ${!props2.hideLabel ? "wd-slider__has-label" : ""} ${props2.disabled ? "wd-slider--disabled" : ""} ${props2.customClass}`;
        return rootClass2;
      });
      const barWrapperStyle = vue.computed(() => {
        const barWrapperStyle2 = `${props2.inactiveColor ? "background:" + props2.inactiveColor : ""}`;
        return barWrapperStyle2;
      });
      const barCustomStyle = vue.computed(() => {
        const barWrapperStyle2 = `${barStyle.value};${props2.activeColor ? "background:" + props2.activeColor : ""}`;
        return barWrapperStyle2;
      });
      const buttonLeftStyle = vue.computed(() => {
        const buttonLeftStyle2 = `left: ${leftBarPercent.value}%; visibility: ${!props2.disabled ? "show" : "hidden"};`;
        return buttonLeftStyle2;
      });
      const buttonRightStyle = vue.computed(() => {
        const buttonRightStyle2 = `left: ${rightBarPercent.value}%; visibility: ${!props2.disabled ? "show" : "hidden"}`;
        return buttonRightStyle2;
      });
      vue.onMounted(() => {
        getRect(`#${sliderId.value}`, false, proxy).then((data) => {
          trackWidth.value = Number(data.width);
          trackLeft.value = Number(data.left);
        });
      });
      function onTouchStart(event) {
        const { disabled, modelValue } = props2;
        if (disabled)
          return;
        touchLeft.touchStart(event);
        startValue.value = !isArray(modelValue) ? format(modelValue) : leftBarPercent.value < rightBarPercent.value ? format(modelValue[0]) : format(modelValue[1]);
        emit("dragstart", {
          value: currentValue.value
        });
      }
      function onTouchMove(event) {
        const { disabled } = props2;
        if (disabled)
          return;
        touchLeft.touchMove(event);
        const diff = touchLeft.deltaX.value / trackWidth.value * (maxValue.value - minValue.value);
        newValue.value = startValue.value + diff;
        leftBarSlider(newValue.value);
        emit("dragmove", {
          value: currentValue.value
        });
      }
      function onTouchEnd() {
        if (props2.disabled)
          return;
        emit("dragend", {
          value: currentValue.value
        });
      }
      function onTouchStartRight(event) {
        if (props2.disabled)
          return;
        const { modelValue } = props2;
        touchRight.touchStart(event);
        rightSlider.startValue = leftBarPercent.value < rightBarPercent.value ? format(modelValue[1]) : format(modelValue[0]);
        emit("dragstart", {
          value: currentValue.value
        });
      }
      function onTouchMoveRight(event) {
        if (props2.disabled)
          return;
        touchRight.touchMove(event);
        const diff = touchRight.deltaX.value / trackWidth.value * (maxValue.value - minValue.value);
        rightSlider.newValue = format(rightSlider.startValue + diff);
        rightBarSlider(rightSlider.newValue);
        emit("dragmove", {
          value: currentValue.value
        });
      }
      function onTouchEndRight() {
        if (props2.disabled)
          return;
        emit("dragend", {
          value: currentValue.value
        });
      }
      function rightBarSlider(value) {
        value = format(value);
        rightNewValue.value = value;
        emit("update:modelValue", [Math.min(leftNewValue.value, rightNewValue.value), Math.max(leftNewValue.value, rightNewValue.value)]);
        rightBarPercent.value = formatPercent(value);
        styleControl();
      }
      function leftBarSlider(value) {
        value = format(value);
        const percent = formatPercent(value);
        if (!showRight.value) {
          emit("update:modelValue", value);
          leftNewValue.value = value;
          leftBarPercent.value = percent;
          barStyle.value = `width: ${percent}%; height: ${barHeight.value};`;
        } else {
          leftNewValue.value = value;
          leftBarPercent.value = percent;
          emit("update:modelValue", [Math.min(leftNewValue.value, rightNewValue.value), Math.max(leftNewValue.value, rightNewValue.value)]);
          styleControl();
        }
      }
      function styleControl() {
        const barLeft = leftBarPercent.value < rightBarPercent.value ? [leftBarPercent.value, rightBarPercent.value] : [rightBarPercent.value, leftBarPercent.value];
        const barStyleTemp = `width: ${barLeft[1] - barLeft[0]}%; height: ${barHeight.value}; left: ${barLeft[0]}%`;
        currentValue.value = leftNewValue.value < rightNewValue.value ? [leftNewValue.value, rightNewValue.value] : [rightNewValue.value, leftNewValue.value];
        barStyle.value = barStyleTemp;
      }
      function equal(arr1, arr2) {
        if (!isDef(arr1) || !isDef(arr2)) {
          return false;
        }
        let i2 = 0;
        arr1.forEach((item, index2) => {
          item === arr2[index2] && i2++;
        });
        return i2 === 2;
      }
      function format(value) {
        const formatValue = Math.round(Math.max(minValue.value, Math.min(value, maxValue.value)) / stepValue.value) * stepValue.value;
        return formatValue;
      }
      function formatPercent(value) {
        const percentage = (value - minValue.value) / (maxValue.value - minValue.value) * 100;
        return percentage;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(rootClass.value),
          style: vue.normalizeStyle(_ctx.customStyle),
          id: sliderId.value
        }, [
          !_ctx.hideMinMax ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: vue.normalizeClass(`wd-slider__label-min ${_ctx.customMinClass}`)
            },
            vue.toDisplayString(minValue.value),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "wd-slider__bar-wrapper",
              style: vue.normalizeStyle(barWrapperStyle.value)
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "wd-slider__bar",
                  style: vue.normalizeStyle(barCustomStyle.value)
                },
                null,
                4
                /* STYLE */
              ),
              vue.createCommentVNode(" 左边 "),
              vue.createElementVNode(
                "view",
                {
                  class: "wd-slider__button-wrapper",
                  style: vue.normalizeStyle(buttonLeftStyle.value),
                  onTouchstart: onTouchStart,
                  onTouchmove: onTouchMove,
                  onTouchend: onTouchEnd,
                  onTouchcancel: onTouchEnd
                },
                [
                  !_ctx.hideLabel ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "wd-slider__label"
                    },
                    vue.toDisplayString(leftNewValue.value),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("view", { class: "wd-slider__button" })
                ],
                36
                /* STYLE, NEED_HYDRATION */
              ),
              vue.createCommentVNode(" 右边 "),
              showRight.value ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "wd-slider__button-wrapper",
                  style: vue.normalizeStyle(buttonRightStyle.value),
                  onTouchstart: onTouchStartRight,
                  onTouchmove: onTouchMoveRight,
                  onTouchend: onTouchEndRight,
                  onTouchcancel: onTouchEndRight
                },
                [
                  !_ctx.hideLabel ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "wd-slider__label"
                    },
                    vue.toDisplayString(rightNewValue.value),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("view", { class: "wd-slider__button" })
                ],
                36
                /* STYLE, NEED_HYDRATION */
              )) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          ),
          !_ctx.hideMinMax ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 1,
              class: vue.normalizeClass(`wd-slider__label-max ${_ctx.customMaxClass}`)
            },
            vue.toDisplayString(maxValue.value),
            3
            /* TEXT, CLASS */
          )) : vue.createCommentVNode("v-if", true)
        ], 14, ["id"]);
      };
    }
  });
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-522c6076"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-slider/wd-slider.vue"]]);
  const _sfc_main$e = {
    __name: "search",
    setup(__props) {
      let searchplace = vue.ref(5);
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let TypeArr = vue.ref(["普通", "求助", "游戏", "运动", "公益", "美食", "学术"]);
      let IfType1 = vue.ref("color: #ffffff;background-color: #81aba8;");
      let IfType2 = vue.ref("color: #ffffff;background-color: #81aba8;");
      let IfType3 = vue.ref("color: #ffffff;background-color: #81aba8;");
      let IfType4 = vue.ref("color: #ffffff;background-color: #81aba8;");
      let IfType5 = vue.ref("color: #ffffff;background-color: #81aba8;");
      let IfType6 = vue.ref("color: #ffffff;background-color: #81aba8;");
      let IfType7 = vue.ref("color: #ffffff;background-color: #81aba8;");
      let Logs = vue.ref(JSON.parse(uni.getStorageSync("UserSearch")));
      let search = vue.ref("");
      let list = vue.ref([]);
      const Search = (item) => {
        if (item != "" && !Logs.value.includes(item)) {
          if (Logs.value.length < 15) {
            Logs.value.unshift(item);
            uni.setStorageSync("UserSearch", JSON.stringify(Logs.value));
          } else {
            Logs.value.pop();
            Logs.value.unshift(item);
            uni.setStorageSync("UserSearch", JSON.stringify(Logs.value));
          }
        }
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/event/search",
          method: "POST",
          header: {
            "token": userData.token
          },
          data: {
            "type": JSON.stringify(TypeArr.value),
            "locationX": userData.locationX,
            "locationY": userData.locationY,
            "range": searchplace.value,
            "query": item
          },
          success: (res) => {
            if (res.data.code == 0) {
              list.value = res.data.data.list;
              uni.setStorageSync("SearchList", JSON.stringify(list.value));
              formatAppLog("log", "at pages/search/search.vue:100", list.value);
              uni.switchTab({
                url: "/pages/myFriends/myFriends",
                success: () => {
                  uni.$emit("update", {
                    type: TypeArr.value,
                    content: item
                  });
                }
              });
            } else {
              tip2(res.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
      };
      const Back = () => {
        uni.navigateBack();
      };
      const DeleteLog = (item) => {
        let index2 = Logs.value.indexOf(item);
        if (index2 !== -1) {
          Logs.value.splice(index2, 1);
        }
      };
      const changeType1 = () => {
        if (IfType1.value == "") {
          IfType1.value = "color: #ffffff;background-color: #81aba8;";
          TypeArr.value.push("普通");
        } else {
          IfType1.value = "";
          deleteTypeByName("普通");
        }
      };
      const changeType2 = () => {
        if (IfType2.value == "") {
          IfType2.value = "color: #ffffff;background-color: #81aba8;";
          TypeArr.value.push("求助");
        } else {
          IfType2.value = "";
          deleteTypeByName("求助");
        }
      };
      const changeType3 = () => {
        if (IfType3.value == "") {
          IfType3.value = "color: #ffffff;background-color: #81aba8;";
          TypeArr.value.push("学术");
        } else {
          IfType3.value = "";
          deleteTypeByName("学术");
        }
      };
      const changeType4 = () => {
        if (IfType4.value == "") {
          IfType4.value = "color: #ffffff;background-color: #81aba8;";
          TypeArr.value.push("运动");
        } else {
          IfType4.value = "";
          deleteTypeByName("运动");
        }
      };
      const changeType5 = () => {
        if (IfType5.value == "") {
          IfType5.value = "color: #ffffff;background-color: #81aba8;";
          TypeArr.value.push("游戏");
        } else {
          IfType5.value = "";
          deleteTypeByName("游戏");
        }
      };
      const changeType6 = () => {
        if (IfType6.value == "") {
          IfType6.value = "color: #ffffff;background-color: #81aba8;";
          TypeArr.value.push("公益");
        } else {
          IfType6.value = "";
          deleteTypeByName("公益");
        }
      };
      const changeType7 = () => {
        if (IfType7.value == "") {
          IfType7.value = "color: #ffffff;background-color: #81aba8;";
          TypeArr.value.push("美食");
        } else {
          IfType7.value = "";
          deleteTypeByName("美食");
        }
      };
      const deleteTypeByName = (name) => {
        const index2 = TypeArr.value.findIndex((type) => type === name);
        if (index2 !== -1) {
          TypeArr.value.splice(index2, 1);
        }
      };
      const tip2 = (words) => {
        uni.showToast({ title: words, icon: "none", duration: 2e3 });
      };
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_slider = resolveEasycom(vue.resolveDynamicComponent("wd-slider"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          "scroll-y": "true",
          class: "content-background 全屏"
        }, [
          vue.createElementVNode("view", { class: "横向布局" }, [
            vue.createVNode(_component_wd_icon, {
              onClick: Back,
              class: "TitileFont",
              name: "thin-arrow-left",
              size: "28rpx"
            }),
            vue.createElementVNode("view", {
              class: "ICON-TitileFont",
              style: { "font-size": "40rpx" }
            }, "搜索")
          ]),
          vue.createElementVNode("view", { class: "分割线文本" }, "搜索内容："),
          vue.createElementVNode("view", { class: "搜索框背景" }, [
            vue.createElementVNode("view", { class: "搜索框背景板" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "搜索框",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(search) ? search.value = $event : search = $event),
                  placeholder: "标题/作者/tag/内容",
                  "confirm-type": "search",
                  onConfirm: _cache[1] || (_cache[1] = ($event) => Search(vue.unref(search))),
                  "placeholder-style": "letter-spacing:2rpx"
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(search)]
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "分割线文本" }, "搜索分区选择："),
          vue.createElementVNode("view", { style: { "width": "100%", "display": "flex", "justify-content": "center", "align-items": "center", "margin-top": "20rpx" } }, [
            vue.createElementVNode("view", { style: { "width": "90%", "display": "flex", "flex-direction": "row", "flex-wrap": "wrap" } }, [
              vue.createElementVNode(
                "view",
                {
                  class: "分区选择",
                  style: vue.normalizeStyle(vue.unref(IfType1)),
                  onClick: changeType1
                },
                "普通",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "分区选择",
                  style: vue.normalizeStyle(vue.unref(IfType2)),
                  onClick: changeType2
                },
                "求助",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "分区选择",
                  style: vue.normalizeStyle(vue.unref(IfType3)),
                  onClick: changeType3
                },
                "学术",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "分区选择",
                  style: vue.normalizeStyle(vue.unref(IfType4)),
                  onClick: changeType4
                },
                "运动",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "分区选择",
                  style: vue.normalizeStyle(vue.unref(IfType5)),
                  onClick: changeType5
                },
                "游戏",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "分区选择",
                  style: vue.normalizeStyle(vue.unref(IfType6)),
                  onClick: changeType6
                },
                "公益",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "分区选择",
                  style: vue.normalizeStyle(vue.unref(IfType7)),
                  onClick: changeType7
                },
                "美食",
                4
                /* STYLE */
              )
            ])
          ]),
          vue.createElementVNode("view", { class: "分割线文本" }, "搜索附近范围 (KM)："),
          vue.createVNode(_component_wd_slider, {
            style: { "margin": "50rpx", "margin-top": "20rpx", "margin-bottom": "20rpx" },
            modelValue: vue.unref(searchplace),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(searchplace) ? searchplace.value = $event : searchplace = $event),
            min: 1,
            max: 20,
            "active-color": "#3fb77b"
          }, null, 8, ["modelValue"]),
          vue.createElementVNode("view", { class: "分割线文本" }, "最近搜索："),
          vue.createElementVNode("view", { style: { "width": "100%", "display": "flex", "justify-content": "center", "align-items": "center", "margin-top": "20rpx" } }, [
            vue.createElementVNode("view", { style: { "width": "90%", "display": "flex", "flex-direction": "row", "flex-wrap": "wrap" } }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(Logs), (log, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", null, [
                    vue.createElementVNode("view", {
                      class: "分区选择 横向布局",
                      style: { "color": "#ffffff", "background-color": "#8faba8" },
                      onClick: ($event) => Search(log)
                    }, [
                      vue.createTextVNode(
                        vue.toDisplayString(log) + " ",
                        1
                        /* TEXT */
                      ),
                      vue.createVNode(_component_wd_icon, {
                        name: "close-bold",
                        size: "22px",
                        onClick: ($event) => DeleteLog(log)
                      }, null, 8, ["onClick"])
                    ], 8, ["onClick"])
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "D:/前端学习笔记/uniapp/City/pages/search/search.vue"]]);
  const _sfc_main$d = {
    __name: "indexMap",
    setup(__props) {
      var wv;
      let abc = JSON.stringify(uni.getStorageSync("dataStudy"));
      formatAppLog("log", "at pages/indexMap/indexMap.vue:13", abc);
      const { ctx } = vue.getCurrentInstance();
      const webjs = (js) => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          formatAppLog("log", "at pages/indexMap/indexMap.vue:18", currentWebview.children());
          wv = currentWebview.children()[0];
          wv.evalJS("dataAcademic.property =" + js);
        }, 2e3);
      };
      const Back = () => {
        uni.navigateBack();
      };
      vue.onMounted(() => {
        webjs(abc);
        formatAppLog("log", "at pages/indexMap/indexMap.vue:25", "123121");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "web-view",
              {
                src: "../../hybrid/html/topicmap/academic/academic.html",
                height: "1000rpx",
                onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.loadmarker && _ctx.loadmarker(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("cover-view", { class: "TopMargin" }, [
              vue.createElementVNode("cover-image", {
                src: "/static/buttomSrc/return.png",
                class: "return",
                onClick: Back
              }),
              vue.createElementVNode("cover-view", { class: "标题文本" }, "学术专栏")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexMapIndexMap = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "D:/前端学习笔记/uniapp/City/pages/indexMap/indexMap.vue"]]);
  const _sfc_main$c = {
    __name: "Study",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      uni.request({
        url: "http://116.62.176.59:8080/xqlgq/event/search",
        method: "POST",
        header: { "token": userData.token },
        data: { "type": "学术" },
        success: (res) => {
          if (res.data.code == 0) {
            uni.setStorageSync("dataStudy", res.data.data);
          }
        }
      });
      var wv;
      let abc = JSON.stringify(uni.getStorageSync("dataStudy"));
      const { ctx } = vue.getCurrentInstance();
      const webjs = (js) => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          formatAppLog("log", "at pages/indexMap/Study.vue:21", currentWebview.children());
          wv = currentWebview.children()[0];
          wv.evalJS("dataAcademic.property =" + js);
        }, 2e3);
      };
      const Back = () => {
        uni.navigateBack();
      };
      vue.onMounted(() => {
        webjs(abc);
        formatAppLog("log", "at pages/indexMap/Study.vue:28", "123121");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "web-view",
              {
                src: "../../hybrid/html/topicmap/academic/academic.html",
                height: "1000rpx",
                onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.loadmarker && _ctx.loadmarker(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("cover-view", { class: "TopMargin" }, [
              vue.createElementVNode("cover-image", {
                src: "/static/buttomSrc/return.png",
                class: "return",
                onClick: Back
              }),
              vue.createElementVNode("cover-view", { class: "标题文本" }, "学术专栏")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexMapStudy = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "D:/前端学习笔记/uniapp/City/pages/indexMap/Study.vue"]]);
  const _sfc_main$b = {
    __name: "Sport",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      uni.request({
        url: "http://116.62.176.59:8080/xqlgq/event/search",
        method: "POST",
        header: { "token": userData.token },
        data: { "type": "运动" },
        success: (res) => {
          if (res.data.code == 0) {
            uni.setStorageSync("dataSport", res.data.data);
          }
        }
      });
      var wv;
      let abc = JSON.stringify(uni.getStorageSync("dataSport"));
      formatAppLog("log", "at pages/indexMap/Sport.vue:20", abc);
      const { ctx } = vue.getCurrentInstance();
      const webjs = (js) => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          formatAppLog("log", "at pages/indexMap/Sport.vue:25", currentWebview.children());
          wv = currentWebview.children()[0];
          wv.evalJS("dataSports.property =" + js);
        }, 2e3);
      };
      const Back = () => {
        uni.navigateBack();
      };
      vue.onMounted(() => {
        webjs(abc);
        formatAppLog("log", "at pages/indexMap/Sport.vue:32", "123121");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "web-view",
              {
                src: "../../hybrid/html/topicmap/sports/sportsmap.html",
                height: "1000rpx",
                onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.loadmarker && _ctx.loadmarker(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("cover-view", { class: "TopMargin" }, [
              vue.createElementVNode("cover-image", {
                src: "/static/buttomSrc/return.png",
                class: "return",
                onClick: Back
              }),
              vue.createElementVNode("cover-view", { class: "标题文本" }, "运动专栏")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexMapSport = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "D:/前端学习笔记/uniapp/City/pages/indexMap/Sport.vue"]]);
  const _sfc_main$a = {
    __name: "Volunteer",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      uni.request({
        url: "http://116.62.176.59:8080/xqlgq/event/search",
        method: "POST",
        header: { "token": userData.token },
        data: { "type": "公益" },
        success: (res) => {
          if (res.data.code == 0) {
            uni.setStorageSync("dataVolunteer", res.data.data);
          }
        }
      });
      var wv;
      let abc = JSON.stringify(uni.getStorageSync("dataVolunteer"));
      formatAppLog("log", "at pages/indexMap/Volunteer.vue:19", abc);
      const { ctx } = vue.getCurrentInstance();
      const webjs = (js) => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          formatAppLog("log", "at pages/indexMap/Volunteer.vue:24", currentWebview.children());
          wv = currentWebview.children()[0];
          wv.evalJS("dataVolunteer.property =" + js);
        }, 2e3);
      };
      const Back = () => {
        uni.navigateBack();
      };
      vue.onMounted(() => {
        webjs(abc);
        formatAppLog("log", "at pages/indexMap/Volunteer.vue:31", "123121");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "web-view",
              {
                src: "../../hybrid/html/topicmap/volunteer/Volunteer.html",
                height: "1000rpx",
                onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.loadmarker && _ctx.loadmarker(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("cover-view", { class: "TopMargin" }, [
              vue.createElementVNode("cover-image", {
                src: "/static/buttomSrc/return.png",
                class: "return",
                onClick: Back
              }),
              vue.createElementVNode("cover-view", { class: "标题文本" }, "公益专栏")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexMapVolunteer = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "D:/前端学习笔记/uniapp/City/pages/indexMap/Volunteer.vue"]]);
  const _sfc_main$9 = {
    __name: "Game",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      uni.request({
        url: "http://116.62.176.59:8080/xqlgq/event/search",
        method: "POST",
        header: { "token": userData.token },
        data: { "type": "游戏" },
        success: (res) => {
          if (res.data.code == 0) {
            uni.setStorageSync("dataGame", res.data.data);
          }
        }
      });
      var wv;
      let abc = JSON.stringify(uni.getStorageSync("dataGame"));
      formatAppLog("log", "at pages/indexMap/Game.vue:19", abc);
      const { ctx } = vue.getCurrentInstance();
      const webjs = (js) => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          formatAppLog("log", "at pages/indexMap/Game.vue:24", currentWebview.children());
          wv = currentWebview.children()[0];
          wv.evalJS("dataGame.property =" + js);
        }, 2e3);
      };
      const Back = () => {
        uni.navigateBack();
      };
      vue.onMounted(() => {
        webjs(abc);
        formatAppLog("log", "at pages/indexMap/Game.vue:31", "123121");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "web-view",
              {
                src: "../../hybrid/html/topicmap/game/game.html",
                height: "1000rpx",
                onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.loadmarker && _ctx.loadmarker(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("cover-view", { class: "TopMargin" }, [
              vue.createElementVNode("cover-image", {
                src: "/static/buttomSrc/return.png",
                class: "return",
                onClick: Back
              }),
              vue.createElementVNode("cover-view", { class: "标题文本" }, "游戏专栏")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexMapGame = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "D:/前端学习笔记/uniapp/City/pages/indexMap/Game.vue"]]);
  const _sfc_main$8 = {
    __name: "Food",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      uni.request({
        url: "http://116.62.176.59:8080/xqlgq/event/search",
        method: "POST",
        header: { "token": userData.token },
        data: { "type": "美食" },
        success: (res) => {
          if (res.data.code == 0) {
            uni.setStorageSync("dataFood", res.data.data);
          }
        }
      });
      var wv;
      let abc = JSON.stringify(uni.getStorageSync("dataFood"));
      formatAppLog("log", "at pages/indexMap/Food.vue:19", abc);
      const { ctx } = vue.getCurrentInstance();
      const webjs = (js) => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          formatAppLog("log", "at pages/indexMap/Food.vue:24", currentWebview.children());
          wv = currentWebview.children()[0];
          wv.evalJS("dataFood.property =" + js);
        }, 2e3);
      };
      const Back = () => {
        uni.navigateBack();
      };
      vue.onMounted(() => {
        webjs(abc);
        formatAppLog("log", "at pages/indexMap/Food.vue:32", "123121");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "web-view",
              {
                src: "../../hybrid/html/topicmap/food/food.html",
                height: "1000rpx",
                onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.loadmarker && _ctx.loadmarker(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("cover-view", { class: "TopMargin" }, [
              vue.createElementVNode("cover-image", {
                src: "/static/buttomSrc/return.png",
                class: "return",
                onClick: Back
              }),
              vue.createElementVNode("cover-view", { class: "标题文本" }, "食物专栏")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexMapFood = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "D:/前端学习笔记/uniapp/City/pages/indexMap/Food.vue"]]);
  const _sfc_main$7 = {
    __name: "ManyInformation",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let ManyEvents = vue.ref([]);
      onLoad((data) => {
        let list = data.list.split(",");
        for (let i2 = 0; i2 < list.length; i2++) {
          uni.request({
            url: "http://116.62.176.59:8080/xqlgq/event/info/" + list[i2],
            method: "GET",
            header: {
              "token": userData.token
            },
            success: (res) => {
              if (res.data.code == 0) {
                formatAppLog("log", "at pages/ManyInformation/ManyInformation.vue:69", res.data.data);
                ManyEvents.value.push(res.data.data);
              } else {
                tip2(res.data.msg);
              }
            },
            fail: (err) => {
              tip2(err.errMsg);
            }
          });
        }
      });
      const GoEvent = (id) => {
        uni.navigateTo({
          url: "/pages/titleContent/titleContent?id=" + id
        });
      };
      const tip2 = (words) => {
        uni.showToast({ title: words, icon: "none", duration: 2e3 });
      };
      const back = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "横向布局" }, [
              vue.createVNode(_component_wd_icon, {
                onClick: back,
                class: "TitileFont",
                name: "thin-arrow-left",
                size: "28rpx"
              }),
              vue.createElementVNode("view", {
                class: "ICON-TitileFont",
                style: { "font-size": "35rpx", "color": "#444444" }
              }, "动态详情")
            ]),
            vue.createElementVNode("scroll-view", {
              "scroll-y": "true",
              class: "content-background 全屏"
            }, [
              vue.createElementVNode("view", { class: "列表背景" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(ManyEvents), (item) => {
                    return vue.openBlock(), vue.createElementBlock("view", { style: { "width": "100%" } }, [
                      vue.createElementVNode("view", {
                        class: "列表布局",
                        onClick: ($event) => GoEvent(item.gid),
                        style: { "padding-bottom": "20rpx" }
                      }, [
                        vue.createElementVNode("view", { class: "横向布局" }, [
                          vue.createElementVNode("image", {
                            class: "头像",
                            src: "http://116.62.176.59:8080/xqlgq/files/" + item.publisher.userImage
                          }, null, 8, ["src"]),
                          vue.createElementVNode("view", { class: "头名区布局" }, [
                            vue.createElementVNode(
                              "view",
                              { style: { "font-size": "28rpx", "color": "#444444" } },
                              vue.toDisplayString(item.publisher.username),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "view",
                              { style: { "font-size": "20rpx", "margin-top": "3rpx", "font-family": "'Courier New', Courier, monospace" } },
                              vue.toDisplayString(item.timestamp[0]) + "-" + vue.toDisplayString(item.timestamp[1]) + "-" + vue.toDisplayString(item.timestamp[2]) + " " + vue.toDisplayString(item.timestamp[3]) + ":" + vue.toDisplayString(item.timestamp[4]) + ":" + vue.toDisplayString(item.timestamp[5]),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        vue.createElementVNode(
                          "view",
                          { style: { "width": "600rpx", "margin-left": "120rpx", "word-wrap": "break-word", "font-weight": "bold", "color": "#444444" } },
                          vue.toDisplayString(item.title),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { style: { "width": "600rpx", "margin-left": "120rpx", "word-wrap": "break-word", "color": "#444444", "font-size": "24rpx", "margin-top": "10rpx", "line-height": "38rpx", "letter-spacing": "1rpx" } },
                          vue.toDisplayString(item.content.slice(0, 50)) + "...",
                          1
                          /* TEXT */
                        ),
                        item.images != [] ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
                          key: 0,
                          style: { "width": "600rpx", "margin-left": "110rpx" },
                          "scroll-x": "true"
                        }, [
                          vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "row" } }, [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(JSON.parse(item.images), (imagea, index2) => {
                                return vue.openBlock(), vue.createElementBlock("view", null, [
                                  vue.createElementVNode("image", {
                                    mode: "aspectFill",
                                    style: { "margin-top": "20rpx", "width": "180rpx", "height": "180rpx", "background-color": "#f3f3f3", "border-radius": "20rpx", "margin-bottom": "20rpx", "margin-right": "5rpx" },
                                    src: "http://116.62.176.59:8080/xqlgq/files/" + imagea
                                  }, null, 8, ["src"])
                                ]);
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ])
                        ])) : vue.createCommentVNode("v-if", true)
                      ], 8, ["onClick"])
                    ]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesManyInformationManyInformation = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "D:/前端学习笔记/uniapp/City/pages/ManyInformation/ManyInformation.vue"]]);
  const imgProps = {
    ...baseProps,
    customImage: makeStringProp(""),
    /**
     * 图片链接
     */
    src: String,
    /**
     * 是否显示为圆形
     */
    round: makeBooleanProp(false),
    /**
     * 填充模式：'top left' / 'top right' / 'bottom left' / 'bottom right' / 'right' / 'left' / 'center' / 'bottom' / 'top' / 'heightFix' / 'widthFix' / 'aspectFill' / 'aspectFit' / 'scaleToFill'
     */
    mode: makeStringProp("scaleToFill"),
    /**
     * 是否懒加载
     */
    lazyLoad: makeBooleanProp(false),
    /**
     * 宽度，默认单位为px
     */
    width: numericProp,
    /**
     * 高度，默认单位为px
     */
    height: numericProp,
    /**
     * 圆角大小，默认单位为px
     */
    radius: numericProp,
    /**
     * 是否允许预览
     */
    enablePreview: makeBooleanProp(false)
  };
  const __default__$2 = {
    name: "wd-img",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$2,
    props: imgProps,
    emits: ["error", "click", "load"],
    setup(__props, { emit: __emit }) {
      const props2 = __props;
      const emit = __emit;
      const rootStyle = vue.computed(() => {
        const style = {};
        if (isDef(props2.height)) {
          style["height"] = addUnit$1(props2.height);
        }
        if (isDef(props2.width)) {
          style["width"] = addUnit$1(props2.width);
        }
        if (isDef(props2.radius)) {
          style["border-radius"] = addUnit$1(props2.radius);
          style["overflow"] = "hidden";
        }
        return `${objToStyle(style)};${props2.customStyle}`;
      });
      const rootClass = vue.computed(() => {
        return `wd-img  ${props2.round ? "is-round" : ""} ${props2.customClass}`;
      });
      function handleError(event) {
        emit("error", event);
      }
      function handleClick() {
        if (props2.enablePreview && props2.src) {
          uni.previewImage({
            urls: [props2.src]
          });
        }
        emit("click");
      }
      function handleLoad(event) {
        emit("load", event);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(rootClass.value),
            onClick: handleClick,
            style: vue.normalizeStyle(rootStyle.value)
          },
          [
            vue.createElementVNode("image", {
              class: vue.normalizeClass(`wd-img__image ${_ctx.customImage}`),
              src: _ctx.src,
              mode: _ctx.mode,
              "lazy-load": _ctx.lazyLoad,
              onLoad: handleLoad,
              onError: handleError
            }, null, 42, ["src", "mode", "lazy-load"])
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-cb0c5dbc"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-img/wd-img.vue"]]);
  const statusTipProps = {
    ...baseProps,
    /**
     * 缺省图片类型，支持传入图片 URL。
     * 类型: string
     * 可选值: search, network, content, collect, comment, halo, message
     * 默认值: network
     */
    image: makeStringProp("network"),
    /**
     * 图片大小，默认单位为 `px`。
     * 类型: string 或 number 或 ImageSize
     * 默认值: 空字符串
     */
    imageSize: {
      type: [String, Number, Object],
      default: ""
    },
    /**
     * 提示文案。
     * 类型: string
     * 默认值: 空字符串
     */
    tip: makeStringProp(""),
    /**
     * 图片裁剪、缩放的模式
     * 类型：string
     * 默认值：'aspectFill'
     */
    imageMode: makeStringProp("aspectFill")
  };
  const __default__$1 = {
    name: "wd-status-tip",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$1,
    props: statusTipProps,
    setup(__props) {
      const props2 = __props;
      const imgUrl = vue.computed(() => {
        let img = "";
        switch (props2.image) {
          case "collect":
            img = "https://img.wot-design-uni.cn/wdu/collect.png";
            break;
          case "comment":
            img = "https://img.wot-design-uni.cn/wdu/comment.png";
            break;
          case "content":
            img = "https://img.wot-design-uni.cn/wdu/content.png";
            break;
          case "halo":
            img = "https://img.wot-design-uni.cn/wdu/halo.png";
            break;
          case "message":
            img = "https://img.wot-design-uni.cn/wdu/message.png";
            break;
          case "network":
            img = "https://img.wot-design-uni.cn/wdu/network.png";
            break;
          case "search":
            img = "https://img.wot-design-uni.cn/wdu/search.png";
            break;
          default:
            img = props2.image;
        }
        return img;
      });
      const imgStyle = vue.computed(() => {
        let style = {};
        if (props2.imageSize) {
          if (isObj(props2.imageSize)) {
            isDef(props2.imageSize.height) && (style.height = addUnit$1(props2.imageSize.height));
            isDef(props2.imageSize.width) && (style.width = addUnit$1(props2.imageSize.width));
          } else {
            style = {
              height: addUnit$1(props2.imageSize),
              width: addUnit$1(props2.imageSize)
            };
          }
        }
        return `${objToStyle(style)}`;
      });
      return (_ctx, _cache) => {
        const _component_wd_img = resolveEasycom(vue.resolveDynamicComponent("wd-img"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(`wd-status-tip  ${_ctx.customClass}`),
            style: vue.normalizeStyle(_ctx.customStyle)
          },
          [
            imgUrl.value ? (vue.openBlock(), vue.createBlock(_component_wd_img, {
              key: 0,
              mode: _ctx.imageMode,
              src: imgUrl.value,
              "custom-class": "wd-status-tip__image",
              "custom-style": imgStyle.value
            }, null, 8, ["mode", "src", "custom-style"])) : vue.createCommentVNode("v-if", true),
            _ctx.tip ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "wd-status-tip__text"
              },
              vue.toDisplayString(_ctx.tip),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f52470e5"], ["__file", "D:/前端学习笔记/uniapp/City/uni_modules/wot-design-uni/components/wd-status-tip/wd-status-tip.vue"]]);
  const _sfc_main$4 = {
    __name: "Notice",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      let num = vue.ref(uni.getStorageSync("UserNotice"));
      let list = vue.ref([]);
      let IfHaveNotice = vue.ref(true);
      uni.request({
        url: "http://116.62.176.59:8080/xqlgq/notice/list",
        method: "GET",
        header: {
          token: userData.token
        },
        success: (res) => {
          if (res.data.code == 0) {
            formatAppLog("log", "at pages/Notice/Notice.vue:53", res.data.data);
            list.value = res.data.data;
            if (list.value.length >= 1) {
              IfHaveNotice.value = true;
            } else {
              IfHaveNotice.value = false;
            }
          } else {
            tip2(res.data.msg);
            IfHaveNotice.value = false;
          }
        },
        fail: (err) => {
          tip2(err.errMsg);
          IfHaveNotice.value = false;
        }
      });
      const DoNotice = (id, Url, index2) => {
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/notice/" + id,
          method: "DELETE",
          header: {
            token: userData.token
          },
          success: (res) => {
            if (res.data.code == 0) {
              if (num.value != 1) {
                num--;
                uni.setTabBarBadge({
                  //显示数字
                  index: 3,
                  //tabbar下标
                  text: num.value
                });
              } else {
                num.value = "";
                IfHaveNotice.value = false;
              }
              uni.setStorageSync("UserNotice", num.value);
              list.value.splice(index2, 1);
              uni.navigateTo({
                url: Url
              });
            } else {
              tip2(res.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
      };
      const Delete = (id, Url, index2) => {
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/notice/" + id,
          method: "DELETE",
          header: {
            token: userData.token
          },
          success: (res) => {
            if (res.data.code == 0) {
              if (num.value != 1) {
                num--;
                uni.setTabBarBadge({
                  //显示数字
                  index: 3,
                  //tabbar下标
                  text: num.value
                });
              } else {
                num.value = "";
                IfHaveNotice.value = false;
              }
              uni.setStorageSync("UserNotice", num.value);
              list.value.splice(index2, 1);
            } else {
              tip2(res.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
      };
      const DeleteAll = () => {
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/notice/0",
          method: "DELETE",
          header: {
            token: userData.token
          },
          success: (res) => {
            if (res.data.code == 0) {
              num.value = "0";
              uni.setStorageSync("UserNotice", "");
              list.value = [];
              IfHaveNotice.value = false;
            } else {
              tip2(res.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
      };
      const Back = () => {
        uni.navigateBack();
      };
      const IfShowContent = (a2, b2) => {
        if (a2 === "" && b2 === void 0) {
          return false;
        } else {
          return true;
        }
      };
      const tip2 = (words) => {
        uni.showToast({ title: words, icon: "none", duration: 2e3 });
      };
      uni.onSocketMessage(function(res) {
        formatAppLog("log", "at pages/Notice/Notice.vue:192", "////////////////////////////////////////////");
        num = vue.ref(uni.getStorageSync("UserNotice"));
        uni.request({
          url: "http://116.62.176.59:8080/xqlgq/notice/list",
          method: "GET",
          header: {
            token: userData.token
          },
          success: (res2) => {
            if (res2.data.code == 0) {
              formatAppLog("log", "at pages/Notice/Notice.vue:203", res2.data.data);
              list.value = res2.data.data;
              if (list.value.length >= 1) {
                IfHaveNotice.value = true;
              } else {
                IfHaveNotice.value = false;
              }
            } else {
              tip2(res2.data.msg);
            }
          },
          fail: (err) => {
            tip2(err.errMsg);
          }
        });
      });
      return (_ctx, _cache) => {
        const _component_wd_icon = resolveEasycom(vue.resolveDynamicComponent("wd-icon"), __easycom_0$6);
        const _component_wd_status_tip = resolveEasycom(vue.resolveDynamicComponent("wd-status-tip"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-background 全屏" }, [
          vue.createElementVNode("view", { class: "横向布局" }, [
            vue.createVNode(_component_wd_icon, {
              onClick: Back,
              class: "TitileFont",
              name: "thin-arrow-left",
              size: "30rpx"
            }),
            vue.createElementVNode(
              "view",
              { class: "ICON-TitileFont" },
              "Notice(" + vue.toDisplayString(vue.unref(num)) + ")",
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", {
              style: { "margin-top": "50rpx", "right": "30rpx", "padding": "7rpx", "padding-left": "15rpx", "padding-right": "15rpx", "background-color": "#f86969", "border-radius": "10rpx", "color": "#ffffff", "font-size": "28rpx" },
              onClick: DeleteAll
            }, "删除全部")
          ]),
          vue.createElementVNode("view", { class: "列表布局" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(list), (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", { style: { "width": "100%", "display": "flex", "justify-content": "center", "align-items": "center" } }, [
                  vue.createElementVNode("view", { class: "列表背景" }, [
                    vue.createElementVNode("image", {
                      class: "删除按钮",
                      src: "/static/buttomSrc/delete.png",
                      onClick: ($event) => Delete(item.id, item.click, index2)
                    }, null, 8, ["onClick"]),
                    vue.createElementVNode("view", {
                      class: "信息布局",
                      onClick: ($event) => DoNotice(item.id, item.click, index2)
                    }, [
                      vue.createElementVNode("view", { style: { "font-size": "30rpx", "color": "#404040", "letter-spacing": "1rpx", "word-break": "break-all", "float": "left", "margin-bottom": "10rpx" } }, [
                        vue.createElementVNode(
                          "span",
                          { style: { "font-weight": "500", "margin-right": "4rpx", "font-size": "35rpx", "color": "#647e77" } },
                          vue.toDisplayString(item.title.split(" ")[0]),
                          1
                          /* TEXT */
                        ),
                        vue.createTextVNode(
                          vue.toDisplayString(item.title.split(" ")[1]),
                          1
                          /* TEXT */
                        )
                      ]),
                      IfShowContent(item.content, item.title.split(" ")[2]) ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 0,
                          style: { "background-color": "#c9d7d7", "border-radius": "10rpx", "padding": "5rpx", "font-size": "28rpx", "color": "#404040", "padding-left": "15rpx" }
                        },
                        '"' + vue.toDisplayString(item.content) + vue.toDisplayString(item.title.split(" ")[2]) + '"',
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode(
                        "view",
                        { style: { "font-family": "'Courier New', Courier, monospace", "font-size": "24rpx", "margin-top": "10rpx" } },
                        vue.toDisplayString(item.time[0]) + "-" + vue.toDisplayString(item.time[1]) + "-" + vue.toDisplayString(item.time[2]) + " " + vue.toDisplayString(item.time[3]) + ":" + vue.toDisplayString(item.time[4]) + ":" + vue.toDisplayString(item.time[5]),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"])
                  ])
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            )),
            !vue.unref(IfHaveNotice) ? (vue.openBlock(), vue.createBlock(_component_wd_status_tip, {
              key: 0,
              image: "content",
              tip: "暂无内容",
              "image-size": { height: 200, width: 300 },
              style: { "margin-top": "200rpx" }
            })) : vue.createCommentVNode("v-if", true)
          ])
        ]);
      };
    }
  };
  const PagesNoticeNotice = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "D:/前端学习笔记/uniapp/City/pages/Notice/Notice.vue"]]);
  const _sfc_main$3 = {
    __name: "friendCricle",
    setup(__props) {
      let userData = JSON.parse(uni.getStorageSync("UserInformation"));
      vue.ref("");
      uni.request({
        url: "http://116.62.176.59:8080/xqlgq/user/follow/event",
        method: "GET",
        header: { "token": userData.token },
        success: (res) => {
          if (res.data.code == 0) {
            formatAppLog("log", "at pages/indexMap/friendCricle/friendCricle.vue:17", res.data.data);
            uni.setStorageSync("dataFriend", res.data.data);
          }
        },
        fail: (err) => {
          formatAppLog("log", "at pages/indexMap/friendCricle/friendCricle.vue:22", err);
        }
      });
      var wv;
      let abc = JSON.stringify(uni.getStorageSync("dataFriend"));
      formatAppLog("log", "at pages/indexMap/friendCricle/friendCricle.vue:28", abc);
      const { ctx } = vue.getCurrentInstance();
      const webjs = (js) => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          formatAppLog("log", "at pages/indexMap/friendCricle/friendCricle.vue:33", currentWebview.children());
          wv = currentWebview.children()[0];
          wv.evalJS("dataMap.property =" + js);
        }, 2e3);
      };
      const Back = () => {
        uni.navigateBack();
      };
      vue.onMounted(() => {
        webjs(abc);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "web-view",
              {
                src: "../../../hybrid/html/index/index(test).html",
                height: "1000rpx",
                onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.loadmarker && _ctx.loadmarker(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("cover-view", { class: "TopMargin" }, [
              vue.createElementVNode("cover-image", {
                src: "/static/buttomSrc/return.png",
                class: "return",
                onClick: Back
              }),
              vue.createElementVNode("cover-view", { class: "标题文本" }, "朋友圈")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexMapFriendCricleFriendCricle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/前端学习笔记/uniapp/City/pages/indexMap/friendCricle/friendCricle.vue"]]);
  const _sfc_main$2 = {
    __name: "relationship",
    setup(__props) {
      const Back = () => {
        uni.navigateBack();
      };
      var wv;
      const { ctx } = vue.getCurrentInstance();
      setTimeout(() => {
        var currentWebview = ctx.$scope.$getAppWebview();
        formatAppLog("log", "at pages/indexMap/relationship/relationship.vue:17", currentWebview.children());
        wv = currentWebview.children()[0];
        wv.setStyle({
          scalable: true
        });
      }, 1e3);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "web-view",
              {
                src: "../../hybrid/html/neo4j-d3-graph-master/user.html",
                height: "1000rpx",
                onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.loadmarker && _ctx.loadmarker(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("cover-view", { class: "TopMargin" }, [
              vue.createElementVNode("cover-image", {
                src: "/static/buttomSrc/return.png",
                class: "return",
                onClick: Back
              }),
              vue.createElementVNode("cover-view", { class: "标题文本" }, "我的关系图谱")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexMapRelationshipRelationship = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/前端学习笔记/uniapp/City/pages/indexMap/relationship/relationship.vue"]]);
  const _sfc_main$1 = {
    __name: "myMap",
    setup(__props) {
      JSON.parse(uni.getStorageSync("UserInformation"));
      var wv;
      let abc = uni.getStorageSync("dataMyMap");
      formatAppLog("log", "at pages/indexMap/myMap/myMap.vue:16", abc);
      const { ctx } = vue.getCurrentInstance();
      const webjs = (js) => {
        setTimeout(() => {
          var currentWebview = ctx.$scope.$getAppWebview();
          formatAppLog("log", "at pages/indexMap/myMap/myMap.vue:21", currentWebview.children());
          wv = currentWebview.children()[0];
          wv.evalJS("dataMap.property =" + js);
        }, 2e3);
      };
      const Back = () => {
        uni.navigateBack();
      };
      vue.onMounted(() => {
        webjs(abc);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "web-view",
              {
                src: "../../../hybrid/html/index/index(test).html",
                height: "1000rpx",
                onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.loadmarker && _ctx.loadmarker(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("cover-view", { class: "TopMargin" }, [
              vue.createElementVNode("cover-image", {
                src: "/static/buttomSrc/return.png",
                class: "return",
                onClick: Back
              }),
              vue.createElementVNode("cover-view", { class: "标题文本" }, "个人地图")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexMapMyMapMyMap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/前端学习笔记/uniapp/City/pages/indexMap/myMap/myMap.vue"]]);
  __definePage("pages/Login/Login", PagesLoginLogin);
  __definePage("pages/LoginAccount/LoginAccount", PagesLoginAccountLoginAccount);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/myFriends/myFriends", PagesMyFriendsMyFriends);
  __definePage("pages/chatToFriends/chatToFriends", PagesChatToFriendsChatToFriends);
  __definePage("pages/Myself/Myself", PagesMyselfMyself);
  __definePage("pages/titleContent/titleContent", PagesTitleContentTitleContent);
  __definePage("pages/Register/Register", PagesRegisterRegister);
  __definePage("pages/privacy/privacy", PagesPrivacyPrivacy);
  __definePage("pages/UserShow/UserShow", PagesUserShowUserShow);
  __definePage("pages/ChangeInformation/ChangeInformation", PagesChangeInformationChangeInformation);
  __definePage("pages/searchFriends/searchFriends", PagesSearchFriendsSearchFriends);
  __definePage("pages/ChangeInformation/ChangeUserImg", PagesChangeInformationChangeUserImg);
  __definePage("pages/ChangeInformation/ChangeBackImg/ChangeBackImg", PagesChangeInformationChangeBackImgChangeBackImg);
  __definePage("pages/ChangeInformation/ChangeCity/ChangeCity", PagesChangeInformationChangeCityChangeCity);
  __definePage("pages/PutEvent/PutEvent", PagesPutEventPutEvent);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/indexMap/indexMap", PagesIndexMapIndexMap);
  __definePage("pages/indexMap/Study", PagesIndexMapStudy);
  __definePage("pages/indexMap/Sport", PagesIndexMapSport);
  __definePage("pages/indexMap/Volunteer", PagesIndexMapVolunteer);
  __definePage("pages/indexMap/Game", PagesIndexMapGame);
  __definePage("pages/indexMap/Food", PagesIndexMapFood);
  __definePage("pages/ManyInformation/ManyInformation", PagesManyInformationManyInformation);
  __definePage("pages/Notice/Notice", PagesNoticeNotice);
  __definePage("pages/indexMap/friendCricle/friendCricle", PagesIndexMapFriendCricleFriendCricle);
  __definePage("pages/indexMap/relationship/relationship", PagesIndexMapRelationshipRelationship);
  __definePage("pages/indexMap/myMap/myMap", PagesIndexMapMyMapMyMap);
  function initPushNotification() {
    if (typeof plus !== "undefined" && plus.push) {
      plus.globalEvent.addEventListener("newPath", ({ path }) => {
        if (!path) {
          return;
        }
        const pages2 = getCurrentPages();
        const currentPage = pages2[pages2.length - 1];
        if (currentPage && currentPage.$page && currentPage.$page.fullPath === path) {
          return;
        }
        uni.navigateTo({
          url: path,
          fail(res) {
            if (res.errMsg.indexOf("tabbar") > -1) {
              uni.switchTab({
                url: path,
                fail(res2) {
                  console.error(res2.errMsg);
                }
              });
            } else {
              console.error(res.errMsg);
            }
          }
        });
      });
    }
  }
  uni.invokePushCallback({
    type: "enabled",
    offline: true
  });
  Promise.resolve().then(() => {
    initPushNotification();
  });
  const __default__ = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
    __name: "App",
    setup(__props) {
      JSON.parse(uni.getStorageSync("UserInformation"));
      uni.onTabBarMidButtonTap(() => {
        uni.navigateTo({
          url: "/pages/PutEvent/PutEvent",
          animationType: "slide-in-bottom"
        });
      });
      return () => {
      };
    }
  });
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/前端学习笔记/uniapp/City/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
