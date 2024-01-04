window.addEventListener("load",() => {
    let videoId = "25T8Bj_WQbY";
    if(YT){
        new YT.Player("video-container", { //here YT is a class in Player is a function in it which takes id and object.
            height : 550,
            width : 1100,
            videoId : videoId
        });
    }
});