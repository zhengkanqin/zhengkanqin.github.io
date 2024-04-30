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
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$9 = {
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
            "image": "",
            "sex": "",
            "brithday": "",
            "locationx": "",
            "locationy": "",
            "friends": ""
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
            vue.toDisplayString(vue.unref(userLoginStatus)),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view")
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "D:/前端学习笔记/uniapp/InCity/pages/Login/Login.vue"]]);
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
  const _sfc_main$8 = {
    __name: "LoginAccount",
    setup(__props) {
      let LoginStatus = vue.ref("");
      let LoginInformation = vue.ref("");
      let Account = vue.ref("");
      let Password = vue.ref("");
      let Information = vue.ref("");
      LoginStatus = uni.getStorageSync("UserLoginStatus");
      LoginInformation = JSON.parse(uni.getStorageSync("UserInformation"));
      const LoginIn = () => {
        uni.request({
          url: "http://192.168.43.231:8080/xqlgq/user/login",
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
              uni.setStorageSync("LoginInformation", LoginInformation);
              uni.setStorageSync("UserLoginStatus", "true");
              uni.navigateTo({
                url: "/pages/Login/Login"
              });
            } else {
              formatAppLog("log", "at pages/LoginAccount/LoginAccount.vue:53", res.data.msg);
            }
          },
          fail: (err) => {
            formatAppLog("log", "at pages/LoginAccount/LoginAccount.vue:61", 请求错误, err);
            Information.value = err;
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "view",
              { class: "log" },
              vue.toDisplayString(vue.unref(LoginStatus)) + vue.toDisplayString(JSON.stringify(vue.unref(LoginInformation))) + vue.toDisplayString(vue.unref(Information)),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "contentBox" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "inputArea",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(Account) ? Account.value = $event : Account = $event),
                  placeholder: "Account"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(Account)]
              ]),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "inputArea",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(Password) ? Password.value = $event : Password = $event),
                  placeholder: "Password"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(Password)]
              ]),
              vue.createElementVNode(
                "view",
                {
                  class: "inputArea",
                  onClick: LoginIn
                },
                vue.toDisplayString(vue.unref(Account)) + "登录" + vue.toDisplayString(vue.unref(Password)),
                1
                /* TEXT */
              )
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesLoginAccountLoginAccount = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "D:/前端学习笔记/uniapp/InCity/pages/LoginAccount/LoginAccount.vue"]]);
  const _sfc_main$7 = {};
  function _sfc_render$5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "searchBox" }, [
      vue.createElementVNode("view", { class: "SearchContentBox" }, [
        vue.createElementVNode("view", { class: "searchTab" }, [
          vue.createElementVNode("view", { class: "searchTypeName" }, "全部"),
          vue.createElementVNode("image", {
            src: "/static/buttomSrc/BottomMore.png",
            class: "bottomMore"
          })
        ]),
        vue.createElementVNode("view", { class: "boundaryLine" }),
        vue.createElementVNode("view", { class: "SearchInputBox" }, "附近音乐节..."),
        vue.createElementVNode("view", { class: "rightSet" }, [
          vue.createElementVNode("image", {
            src: "/static/buttomSrc/RightSet.png",
            class: "rightSetImg",
            mode: "scaleToFill"
          })
        ])
      ])
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__scopeId", "data-v-e97c1bf5"], ["__file", "D:/前端学习笔记/uniapp/InCity/components/index-searcher/index-searcher.vue"]]);
  const _sfc_main$6 = {};
  function _sfc_render$4(_ctx, _cache) {
    const _component_index_searcher = resolveEasycom(vue.resolveDynamicComponent("index-searcher"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content-background index-background" }, [
      vue.createVNode(_component_index_searcher, { class: "TopMargin" }),
      vue.createCommentVNode(' <index-map class = "indexMapBox"></index-map> ')
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4], ["__file", "D:/前端学习笔记/uniapp/InCity/pages/index/index.vue"]]);
  const _sfc_main$5 = {
    __name: "phone-status",
    setup(__props) {
      let PHONE_INFORMATION = uni.getSystemInfoSync();
      let PHONE_STATUS_HEIGHT = vue.ref(PHONE_INFORMATION.statusBarHeight);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "phone-status",
            style: vue.normalizeStyle({ height: vue.unref(PHONE_STATUS_HEIGHT) })
          },
          null,
          4
          /* STYLE */
        );
      };
    }
  };
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-195201a6"], ["__file", "D:/前端学习笔记/uniapp/InCity/components/phone-status/phone-status.vue"]]);
  const _sfc_main$4 = {};
  function _sfc_render$3(_ctx, _cache) {
    const _component_phone_status = resolveEasycom(vue.resolveDynamicComponent("phone-status"), __easycom_0);
    const _component_wd_button = vue.resolveComponent("wd-button");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_phone_status),
        vue.createElementVNode("view", { class: "content-background index-background" }, [
          vue.createVNode(_component_wd_button, null, {
            default: vue.withCtx(() => [
              vue.createTextVNode("1231")
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesMyFriendsMyFriends = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/前端学习笔记/uniapp/InCity/pages/myFriends/myFriends.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    const _component_phone_status = resolveEasycom(vue.resolveDynamicComponent("phone-status"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_phone_status),
        vue.createElementVNode("view", { class: "content-background index-background" }, " 1223 ")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesChatToFriendsChatToFriends = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/前端学习笔记/uniapp/InCity/pages/chatToFriends/chatToFriends.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    const _component_phone_status = resolveEasycom(vue.resolveDynamicComponent("phone-status"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_phone_status),
        vue.createElementVNode("view", { class: "content-background index-background" }, " 123 ")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesMySelfMySelf = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/前端学习笔记/uniapp/InCity/pages/mySelf/mySelf.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesTitleContentTitleContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/前端学习笔记/uniapp/InCity/pages/titleContent/titleContent.vue"]]);
  __definePage("pages/Login/Login", PagesLoginLogin);
  __definePage("pages/LoginAccount/LoginAccount", PagesLoginAccountLoginAccount);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/myFriends/myFriends", PagesMyFriendsMyFriends);
  __definePage("pages/chatToFriends/chatToFriends", PagesChatToFriendsChatToFriends);
  __definePage("pages/mySelf/mySelf", PagesMySelfMySelf);
  __definePage("pages/titleContent/titleContent", PagesTitleContentTitleContent);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/前端学习笔记/uniapp/InCity/App.vue"]]);
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
