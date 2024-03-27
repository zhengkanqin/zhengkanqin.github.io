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
