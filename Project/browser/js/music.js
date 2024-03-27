var audio = document.getElementById("myAudio");

fetch('../information/music.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // 输出 JSON 数据
  })
  .catch(error => {
    console.error('Error fetching JSON: ', error);
  });


$('#playMusic').click(function() {

    if ($('#mySelfImg').hasClass('musicRoll')) {
        audio.pause(); // 暂停音乐
        $('#mySelfImg').removeClass('musicRoll'); 
    } else {
        audio.play(); // 播放音乐
        $('#mySelfImg').addClass('musicRoll'); 
    }
});

