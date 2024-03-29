document.getElementById('search').addEventListener('click', function() {
    var content = document.getElementById('searchInput').value;
    window.location.href = 'https://cn.bing.com/search?q=' + encodeURIComponent(content);
});
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var content = this.value;
        window.location.href = 'https://cn.bing.com/search?q=' + encodeURIComponent(content);
    }
});
//搜索功能实现

window.addEventListener('load', function() {
    document.getElementById('searchInput').focus();});


//time

function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    document.getElementById('hour').textContent = formatTime(hours);
    document.getElementById('minute').textContent = formatTime(minutes);
}

function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}

updateTime(); // 初始加载时更新一次

// 每秒更新一次时间
setInterval(updateTime, 1000);



    
document.addEventListener("click", function(event) {
    var footer = document.getElementById("footer");
    var target = event.target;

    // 检查是否包含 footerUp 类名
    var isFooterUp = footer.classList.contains("footerUp");

    // 如果当前是 footerUp 状态且点击非 footer 区域，则切换类名
    if (isFooterUp && !target.closest('.footer')) {
        footer.classList.toggle("footerUp");
        footer.classList.toggle("footerDown");
    }

    // 如果当前是 footerDown 状态且点击 footer 区域，则切换类名
    if (!isFooterUp && (target.closest('.footer') || target === footer)) {
        footer.classList.toggle("footerUp");
        footer.classList.toggle("footerDown");
    }
});



