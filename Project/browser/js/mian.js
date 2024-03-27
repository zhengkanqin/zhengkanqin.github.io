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

//加载完成后执行

//监听网页宽度
function stylechange() {
    if (window.innerWidth <= 720) {
        document.getElementById('toolPart2').style.display = "none";
        document.getElementById('setting').style.display = "none";
    } else {
        document.getElementById('toolPart2').style.display = "flex";
        document.getElementById('setting').style.display = "flex";
    }

    if (window.innerHeight <= 720) {
        document.getElementById('centerBoxHeader').style.display = "none";
    } else {
        document.getElementById('centerBoxHeader').style.display = "flex";
    }

    if (window.innerHeight <= 570) {
        document.getElementById('mySelfWord').style.display = "none";
    } else {
        document.getElementById('mySelfWord').style.display = "flex";
    }
}

// 添加单个事件监听器
window.addEventListener('resize', stylechange);

// 页面加载时也执行一次，确保初始状态正确
window.addEventListener('load', stylechange);

    

//获取一言
fetch('https://v1.hitokoto.cn?max_length=24')
    .then(response => response.json())
    .then(data => {
        document.getElementById('oneWord').textContent = data.hitokoto +"——"+data.from;
    })
    .catch(error => console.error(error));





    window.addEventListener('load', function() {
    
    setTimeout(function() {
        iziToast.show({title: 'ZKQ，',message: 'Wellcome to Home',});
    }, 800); //


});

    
document.getElementById('mySelfImg').addEventListener('dragstart', function(event) {
    event.preventDefault();
  }); 


