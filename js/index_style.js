const mainDiv = document.querySelector('main div')
const NUM_OF_VIDEOS = 20;
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
    mainDiv.appendChild(videoFleetTmp);
}

ListVideo(NUM_OF_VIDEOS);





