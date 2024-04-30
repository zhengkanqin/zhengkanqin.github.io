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
window.addEventListener('load', function() {


if (!localStorage.getItem('indexMusic')) {
    iziToast.show({title: '系统',message: '没有歌曲目录,已经写入默认目录，建议重启',});
    const musicData = [
        {
            "title": "长安忆",
            "artist": "双笙",
            "url": "./song/长安忆.mp3",
            "lrc": "https://zhengkanqin.github.io/Project/browser/song/长安忆.lrc"
        },
        {
            "title": "流光记",
            "artist": "银临",
            "url": "./song/流光记.flac",
            "lrc": "https://zhengkanqin.github.io/Project/browser/song/流光记.lrc"
        },
        {
            "title": "别赋",
            "artist": "双笙",
            "url": "./song/别赋.flac",
            "lrc": "https://zhengkanqin.github.io/Project/browser/song/别赋.lrc"
        }
    ];
    localStorage.setItem('indexMusic', JSON.stringify(musicData));
}


if (!localStorage.getItem('indexUser')) {
    iziToast.show({title: '系统',message: '用户信息不存在，已经创建默认信息，建议重启',});
    const userData = {
        "name": "汲渊",
        "word": "苍山负雪，明烛天南",
        "img": "./img/icon/jiyuan.jpg"
    };
    localStorage.setItem('indexUser', JSON.stringify(userData));
}


if (!localStorage.getItem('indexShortCut')) {
    iziToast.show({title: '系统',message: '收藏夹不存在，已经创建默认信息，建议重启',});
    const shortCutData = [
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Folder",
            "name": "Student",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": [
                {
                    "type": "Link",
                    "name": "Google",
                    "content": "https://www.google.com/"
                },
                {
                    "type": "Link",
                    "name": "GitHub",
                    "content": "https://github.com/"
                },
                {
                    "type": "Link",
                    "name": "bilibili",
                    "content": "https://bilibili.com/"
                }
            ]
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        },
        {
            "type": "Link",
            "name": "bilibili",
            "icon": "https://www.bilibili.com/favicon.ico",
            "content": "https://bilibili.com/"
        }
    ];
    localStorage.setItem('indexShortCut', JSON.stringify(shortCutData));
}

if (!localStorage.getItem('themeSet')) {
    const userData1 = 0;
    localStorage.setItem('themeSet', JSON.stringify(userData1));
}


if (!localStorage.getItem('indexTheme')) {
    iziToast.show({title: '系统',message: '用户主题信息不存在，已经创建主题列表，建议重启',});
    const userTheme = [
        {
            "background": "./img/background1.webp",
            "color": "rgb(62, 155, 112)"
        },
        {
            "background": "./img/background2.webp",
            "color": "rgb(190, 195, 220)"
        },
        {
            "background": "./img/background3.webp",
            "color": "rgb(183, 86, 81)"
        },
        {
            "background": "./img/background4.webp",
            "color": "rgb(55, 175, 164)"
        },
        {
            "background": "./img/background5.webp",
            "color": "rgb(198, 136, 116)"
        },
        {
            "background": "./img/background6.webp",
            "color": "rgb(81, 159, 157)"
        },
        {
            "background": "./img/background7.webp",
            "color": "rgb(145, 169, 177)"
        },
        {
            "background": "./img/background8.webp",
            "color": "rgb(248, 178, 174)"
        },
        {
            "background": "./img/background9.webp",
            "color": "rgb(199, 167, 235)"
        },
        {
            "background": "./img/background10.webp",
            "color": "rgb(348, 120, 154)"
        }
    ];
    localStorage.setItem('indexTheme', JSON.stringify(userTheme));
}



});



// 检查本地存储中是否存在名为 indexUser 的数据
let userDataString = localStorage.getItem('indexUser');
let userName, userWord, userImg;

// 如果存在，则将其解析为 JSON 格式并写入三个变量
if (userDataString) {
    const userData = JSON.parse(userDataString);
    userName = userData.name;
    userWord = userData.word;
    userImg = userData.img;
    // 在这里可以使用这三个变量进行后续操作
} else {
    console.error('Error: indexUser data not found in local storage');
    // 显示提示通知
    iziToast.show({title: '系统',message: '个人信息错误，请联系管理员',});
}

// 在页面加载完成后执行以下操作
window.addEventListener('load', function () {
    // 获取元素并设置相应的内容
    document.getElementById('mySelfImg').src = userImg;
    document.getElementById('mySelfName').textContent = userName;
    document.getElementById('mySelfWord').textContent = userWord;
});



window.addEventListener('load', function() {
    
    setTimeout(function() {
        iziToast.show({title: userName+'，',message: 'Wellcome to home',});
    }, 800); //


});
