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

$("#resetDataStreamBox").on("click", function() {
    localStorage.removeItem('indexMusic');
    localStorage.removeItem('indexTheme');
    localStorage.removeItem('indexUser');
    localStorage.removeItem('themeSet');
    systemInformation('重置成功！');
});
$("#resetDataMusic").on("click", function() {
    localStorage.removeItem('indexMusic');
    systemInformation('重置成功！');
});
$("#resetDataUser").on("click", function() {
    localStorage.removeItem('indexUser');
    systemInformation('重置成功！');
});
$("#resetDataTheme").on("click", function() {

    localStorage.removeItem('indexTheme');
    localStorage.removeItem('themeSet');
    systemInformation('重置成功！');
});

//歌曲列表加载
document.addEventListener("DOMContentLoaded", function() {
    // 获取本地存储中的音乐数据
    var musicData = JSON.parse(localStorage.getItem('indexMusic'));
    var themesData = JSON.parse(localStorage.getItem('indexTheme'));

    // 渲染音乐列表
    renderMusicList(musicData);
    //渲染主题列表
    renderThemeList(themesData);
    // 监听表单提交事件
    document.getElementById('musicForm').addEventListener('submit', function(event) {
        event.preventDefault();
        addMusic();
    });
});




function renderMusicList(musicData) {
    var musicList = document.getElementById('musicList');
    musicList.innerHTML = '';

    if (!musicData || musicData.length === 0) {
        musicList.innerHTML = '<li>暂无音乐</li>';
    } else {
        musicData.forEach(function(music, index) {
            var li = document.createElement('li');
            li.innerHTML = `<div class="horizontalBox">
                <p class ="smallP">Title: ${music.title}</p>
                <p class ="smallP">Artist: ${music.artist}</p>
                </div>
                <div class="horizontalBox">
                <div onclick="deleteMusic(${index})" class="button1">删除</div>
                <div onclick="moveMusicToTop(${index})" class="button1">置顶</div>
                </div>
            `;
            musicList.appendChild(li);
        });
    }
}
function addMusic() {
    // 获取输入框的值
    var title = document.getElementById('titleInput').value;
    var artist = document.getElementById('artistInput').value;
    var url = document.getElementById('urlInput').value;
    var lrc = document.getElementById('lrcInput').value;

    // 创建新的音乐对象
    var newMusic = {
        "title": title,
        "artist": artist,
        "url": url,
        "lrc": lrc
    };

    // 从本地存储中获取当前音乐列表
    var musicData = JSON.parse(localStorage.getItem('indexMusic')) || [];

    // 将新的音乐对象添加到列表中
    musicData.push(newMusic);

    // 将更新后的音乐列表保存到本地存储中
    localStorage.setItem('indexMusic', JSON.stringify(musicData));

    // 重新渲染音乐列表
    renderMusicList(musicData);

    // 清空输入框
    document.getElementById('titleInput').value = '';
    document.getElementById('artistInput').value = '';
    document.getElementById('urlInput').value = '';
    document.getElementById('lrcInput').value = '';

    systemInformation('添加成功');
}
function deleteMusic(index) {
    // 从本地存储中获取当前音乐列表
    var musicData = JSON.parse(localStorage.getItem('indexMusic'));

    // 删除指定索引的音乐对象
    musicData.splice(index, 1);

    // 将更新后的音乐列表保存到本地存储中
    localStorage.setItem('indexMusic', JSON.stringify(musicData));

    // 重新渲染音乐列表
    renderMusicList(musicData);
    systemInformation('删除成功');
}
function moveMusicToTop(index) {
    // 从本地存储中获取当前音乐列表
    var musicData = JSON.parse(localStorage.getItem('indexMusic'));

    // 将指定索引的音乐对象移动到列表顶部
    var musicToMove = musicData.splice(index, 1)[0];
    musicData.unshift(musicToMove);

    // 将更新后的音乐列表保存到本地存储中
    localStorage.setItem('indexMusic', JSON.stringify(musicData));

    // 重新渲染音乐列表
    renderMusicList(musicData);
    systemInformation('已置顶');
}















//主题列表渲染

function renderThemeList(themesData) {
    var themeList = document.getElementById('themeList');
    themeList.innerHTML = '';

    if (!themesData || themesData.length === 0) {
        themeList.innerHTML = '<li>暂无主题</li>';
    } else {
        themesData.forEach(function(theme, index) {
            var li = document.createElement('li');
            li.innerHTML = `
                <p class ="smallP">背景图链接: ${theme.background}</p>
                <p class ="smallP">颜色: ${theme.color}</p>
                <div class = "horizontalBox">
                <button onclick="setThisTheme(${index})" class = "button1">设置该主题</button>
                </div>
            `;
            themeList.appendChild(li);
        });
    }
}

function setThisTheme(index) {
    localStorage.setItem('themeSet', index);
    systemInformation('已设置该主题');
}

$("#setRandomTheme").on("click", function() {
    localStorage.setItem('themeSet', -1);
    systemInformation('已设置该主题');
});