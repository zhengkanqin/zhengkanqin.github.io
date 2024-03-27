案例一中cursor的两件套可以用于改变鼠标的动态样式，其实也就是cursor属性。


这是一对引号
.icon-yinhao-copy:before {
    content: "\e608";
}

.icon-yinhao-copy-copy:before {
    content: "\e62e";
}


这一行实现了好看的顶部提示  iziToast.min.css

https://imsyy.gitee.io/posts/17857/

<link rel="stylesheet" href="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/izitoast/1.4.0/css/iziToast.min.css">

获取其他网站的信息
fetch('https://www.yiketianqi.com/free/day?appid=43986679&appsecret=TksqGZT7&unescape=1')
    .then(response => response.json())
    .then(data => {
        $('#wea_text').html(data.wea)
        $('#city_text').html(data.city)
        $('#tem_night').html(data.tem_night)
        $('#tem_day').html(data.tem_day)
        // $('#win_text').html(data.win)
        // $('#win_speed').html(data.win_speed)
    })


自动调整图片大小
 object-fit: cover;








     
    参考动效
    
    .find .links .item .bg{
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:1.8%;
        z-index:0;
        transition:all .15s
    }
    .find .links .item:hover .bg{
        height:100%;
        width:100%;
        border-radius:5px;
        box-shadow:0 3px 20px rgba(0,0,0,.28)
    }


    让底部的绿线后加载


换行
    flex-wrap: wrap;