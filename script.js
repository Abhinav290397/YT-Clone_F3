const api =  "AIzaSyC-pqW05SfyGmMBqDedSUIXOTFovMlhT2I";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

async function fetchVideo(searchQuery,maxResults){
    const response = await fetch(`${BASE_URL}/search?key=${api}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`);//this is pre-defined api given by google.
    const data = await response.json();
    console.log(data.items);
}
//fetchVideo("js tutorials",50);

async function getVideoStats(videoId){
    const response = await fetch(`${BASE_URL}/videos?key=${api}&part=statistics&id=${videoId}`);
    const data = await response.json();
    console.log(data);
}

async function getChannelLogo(channelId){
    const response = await fetch(`${BASE_URL}/channels?key=${api}&part=snippet&id=${channelId}`);
    const data = await response.json();
    console.log(data);
}

getVideoStats("3YJvtBqhEJ0");

async function getComments(videoId){
    const response = await fetch(`${BASE_URL}/commentThreads?key=${api}&videoId=${videoId}&maxResults=25&part=snippet`);
    const data = await response.json();
    console.log(data);
}
getComments('Kwu1yIC-ssg');