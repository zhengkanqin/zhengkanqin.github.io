//弹窗样式
iziToast.settings({
    timeout: 2000,
    progressBar: true,
    close: false,
    closeOnEscape: true,
    position: 'topCenter',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
    displayMode: 'replace',
    layout: '1',
    backgroundColor: '#00000099',
    titleColor: '#efefef',
    messageColor: '#efefef',
    iconColor: '#efefef',
});

function systemInformation(texta){
    iziToast.show({title: '系统',message: texta,});
}

document.addEventListener("DOMContentLoaded", function() {
    // 获取输入框和按钮
    var userNameInput = document.getElementById("userNameInput");
    var userWordInput = document.getElementById("userWordInput");
    var userImgInput = document.getElementById("userImgInput");
    var updateButton = document.getElementById("editUserInformation");

    // 在按钮点击时执行更新操作
    updateButton.addEventListener("click", function() {
        // 获取输入框中的值
        var userName = userNameInput.value;
        var userWord = userWordInput.value;
        var userImg = userImgInput.value;

        // 检查输入框数据合法性
        if (userName.length > 5 || userName.length =="") {
            systemInformation('用户名非法');
            return; // 结束函数执行
        }
        if (userWord.length > 10 || userWord.length =="") {
            systemInformation('用户描述非法');
            return; // 结束函数执行
        }
        if(userImg.length =="")
        {
            systemInformation('户头像链接非法');
            return; // 结束函数执行
        }
        // 构造包含新数据的对象
        var newData = {
            name: userName,
            word: userWord,
            img: userImg
        };

        // 将新数据转换为 JSON 字符串
        var newDataString = JSON.stringify(newData);

        // 更新本地存储中的 indexUser 数据
        localStorage.setItem('indexUser', newDataString);

        // 提示用户更新成功
        systemInformation('更新成功！');
    });
});

