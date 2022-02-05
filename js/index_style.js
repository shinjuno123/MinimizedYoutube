const mainDiv = document.querySelector('main div');
let createButton = document.getElementById('upload-menu');
let createButtonBubbleWrapper = document.querySelector('.wrapper');
let createButtonFlag = false;
const NUM_OF_VIDEOS = 10;
const videoFleet = () =>{
    let videoFleet = document.createElement('div');
    if(videoFleet){
        videoFleet.className = "video-fleet";
        return videoFleet;
    }
} 
const videoBox = () => {return`
    <div class="video-box">
        <img src="./image/video_thumbnail_tmp.png" alt="video-thumbnail">
        안녕하세요
    </div>
    `;
}

function ListVideo(count){
    let videoArr = [];
    for(let i=0;i<count;i++){
        if(videoArr.length % 4 === 0){
            let videoFleetTmp = videoFleet();
            videoArr.map((value)=>{
                videoFleetTmp.innerHTML += value
            })
            mainDiv.appendChild(videoFleetTmp);
            videoArr = [];
        }
        videoArr.push(videoBox());
        
    }
    let videoFleetTmp = videoFleet();
    videoArr.map((value)=>{
        videoFleetTmp.innerHTML += value;
    })
    if(mainDiv){
        mainDiv.appendChild(videoFleetTmp);
    }
}

function MouseOverCreateButton(event){
    createButtonBubbleWrapper.style.display = "flex";
}


function MouseOutCreateButton(event){
    createButtonBubbleWrapper.style.display = "none";
}

function mouseClickCreateButton(){
    let ButtonSvgPath = document.querySelector('#upload-menu yt-icon path');
    if(ButtonSvgPath && createButtonFlag === false){
        ButtonSvgPath.setAttribute('d','M18,8.83V5H2v14h16v-5.83L22,15V7L18,8.83z M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z');
        createButtonFlag = true;
    }
    else{
        ButtonSvgPath.setAttribute('d','M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z');
        createButtonFlag = false;
    }
}


ListVideo(NUM_OF_VIDEOS);
if(createButton){
    createButton.addEventListener('mouseover',MouseOverCreateButton);
    createButton.addEventListener('mouseout',MouseOutCreateButton);
    createButton.addEventListener('click',mouseClickCreateButton);
}




