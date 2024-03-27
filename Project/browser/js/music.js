var audio = document.getElementById("myAudio");

let jsonData; // 保存 JSON 数据的变量
let currentIndex = 0; // 当前索引变量
let musicName, musicArtist, musicUrl;
let maxIndex;  // 最大索引值

// 使用 fetch API 读取 JSON 数据
fetch('./information/music.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data; // 将数据保存到 jsonData 变量中
    maxIndex = jsonData.length - 1; // 获取 JSON 数据的最大索引值
    musicName = jsonData[currentIndex].title;
    musicArtist = jsonData[currentIndex].artist;
    musicUrl = jsonData[currentIndex].url;
    $('#musicName').text(musicName); // 初始化音乐名字
    audio.src = musicUrl;//初始化url
  })
  .catch(error => {
    console.error('Error fetching JSON: ', error);
  });

$('#playMusic').click(function(event) {
    event.preventDefault(); // 阻止默认行为

    if ($('#mySelfImg').hasClass('musicRoll')) {
        audio.pause(); // 暂停音乐
        $('#mySelfImg').removeClass('musicRoll'); 
    } else {
        if (audio.src !== musicUrl) {
            audio.src = musicUrl;
        }
        audio.play(); // 播放音乐
        $('#mySelfImg').addClass('musicRoll'); 
    }
});

$('#nextMusic').click(function(event) {
    event.preventDefault(); // 阻止默认行为

    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateMusicInfo();
});

$('#lastMusic').click(function(event) {
    event.preventDefault(); // 阻止默认行为

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex;
    }
    updateMusicInfo();
});

function updateMusicInfo() {
    musicName = jsonData[currentIndex].title;
    musicArtist = jsonData[currentIndex].artist;
    musicUrl = jsonData[currentIndex].url;
    $('#musicName').text(musicName);
}


