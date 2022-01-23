div = document.querySelector('main div')

const videoFleet = () =>{
    let videoFleet = document.createElement('div');
    if(videoFleet){
        videoFleet.className = "video-fleet";
        return videoFleet;
    }
} 
const videoBox = () => {return`
    <div class="video-box">)
        <img src="./image/video_thumbnail_tmp.png" alt="video-thumbnail">
    </div>
    `;
}

console.log(videoFleet());





