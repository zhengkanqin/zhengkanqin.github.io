const audio = document.getElementById("myAudio");
const displayer = document.getElementById('displayer');
let musicJsonData; // 保存 JSON 数据的变量
let currentIndex = 0; // 当前索引变量
let musicName, musicArtist, musicUrl,musicLrc;;
let maxIndex;  // 最大索引值
let lyricsText = ''; // 声明歌词文本变量
// 从本地存储中获取名为 indexMusic 的数据
const storedData = localStorage.getItem('indexMusic');

// 如果本地存储中存在名为 indexMusic 的数据，则使用该数据
if (storedData) {
    musicJsonData = JSON.parse(storedData); // 将数据解析为 JSON 格式并保存到 musicJsonData 变量中
    maxIndex = musicJsonData.length - 1; // 获取 JSON 数据的最大索引值
    musicName = musicJsonData[currentIndex].title;
    musicArtist = musicJsonData[currentIndex].artist;
    musicUrl = musicJsonData[currentIndex].url;
    musicLrc = musicJsonData[currentIndex].lrc;

    $('#musicName').text(musicName); // 初始化音乐名字
    audio.src = musicUrl; // 初始化音乐 URL
} else {
    console.error('Error: indexMusic data not found in local storage');
}

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
      syncLyrics(musicLrc, "myAudio", "displayer");
      
    }
});



//歌词

function syncLyrics(lrcURL, audioID, lyricsContainerID) {
  var lyricsContainer = document.getElementById(lyricsContainerID);
  var lyrics = [];

  fetch(lrcURL)
    .then(response => response.text())
    .then(data => {
      var lines = data.split('\n');
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        var timeMatch = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/);
        var text = line.replace(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/, '').trim();

        if (timeMatch && text !== '') {
          var minutes = parseInt(timeMatch[1]);
          var seconds = parseInt(timeMatch[2]);
          var milliseconds = parseInt(timeMatch[3]);
          var time = minutes * 60 + seconds + milliseconds / 1000;

          lyrics.push({ time: time, text: text });
        }

      }
      console.log(lyrics);
      var audio = document.getElementById(audioID); // 确保在这里获取audio元素

      audio.addEventListener("timeupdate", function() {
        var currentTime = audio.currentTime;
        //--------------------------------------------确认已经进入监听
        // Find the current lyric index
        var currentIndex = 0;

        for (var i = 0; i < lyrics.length; i++) {
          if (lyrics[i].time <= currentTime && currentTime < lyrics[i + 1].time) {
            currentIndex = i;
            break;
          }
        }

        // Display current lyric
        if (currentIndex != -1) {
          
          lyricsContainer.innerText = lyrics[currentIndex].text;
        } else {
          lyricsContainer.innerText = musicName; 
         // Clear lyrics if no match found
        }
      });
    })
    .catch(error => {
      console.error('Error fetching lyrics:', error);
    });
}



















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
    musicName = musicJsonData[currentIndex].title;
    musicArtist = musicJsonData[currentIndex].artist;
    musicUrl = musicJsonData[currentIndex].url;
    musicLrc = musicJsonData[currentIndex].lrc;
    console.log(musicJsonData);
    $('#musicName').text(musicName);
}








