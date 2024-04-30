document.addEventListener('DOMContentLoaded', function() {
    var shortCutData = JSON.parse(localStorage.getItem('indexShortCut'));
    getShortCutList(shortCutData);







});




function getShortCutList(shortCutData) {
    console.log(shortCutData);
    var shortCutList = document.getElementById('shortCutContainer');

        shortCutData.forEach(function(shortCutContent, index) {

            var li = document.createElement('li');
            li.innerHTML = `
            <div class = "shortCutBox" data-hide-if-not-fully-visible>
            <div class = "shortCutBoxBackground" onclick="openShortCut(${index})">
                <div class = "shortCutBoxContent">
                    <div class = "shortCutBoxContentIcon"><img class = "shortCutBoxContentIconImg" src ="${shortCutContent.icon}"></img></div>
                    <div class = "shortCutBoxContentName">${shortCutContent.name}</div>
                </div>
                <div class = "shortCutBoxColor" id ="shortCutBoxColor"></div>
            </div>
        </div>

            `;
            shortCutList.appendChild(li);
        });
}

function openShortCut(index)
{
    var shortCutData = JSON.parse(localStorage.getItem('indexShortCut'));
    if(shortCutData[index].type == "Link")
    {   
        window.open(shortCutData[index].content, '_blank');
    }
    }







