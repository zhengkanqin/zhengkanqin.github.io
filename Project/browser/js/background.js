// 加载控件和数据
const backgroundData = localStorage.getItem('indexTheme');
const themeSet = localStorage.getItem('themeSet');
const background = document.getElementById('background');

if (backgroundData) {
    jsonData = JSON.parse(backgroundData); // 将数据解析为 JSON 格式并保存到 jsonData 变量中
    maxThemeIndex = jsonData.length - 1; // 获取 JSON 数据的最大索引值
    themeUrl = jsonData[currentIndex].background;
    themeColor = jsonData[currentIndex].color;
} else {
    console.error('Error: indexMusic data not found in local storage');
}
//主题选择判断
if (themeSet == -1) 
{
    var randomNumber = Math.floor(Math.random() * jsonData.length);
    while (randomNumber === 17) {
        randomNumber = Math.floor(Math.random() * jsonData.length);
    }
    indexTheme = randomNumber;
}
else
{
    indexTheme = themeSet;
}
setBackgroundAndColor(indexTheme);
function switchTheme(newIndex) {
    setBackgroundAndColor(newIndex);
}
function setBackgroundAndColor(index) {
    background.src = jsonData[index].background;
var elements = document.getElementsByClassName('shortCutBoxColor');
console.log(jsonData[index].color); 
for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = jsonData[index].color; 
}
}


