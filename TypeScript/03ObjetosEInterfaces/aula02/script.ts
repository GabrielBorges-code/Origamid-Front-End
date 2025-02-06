const video = document.querySelector("#video-principal");
const video2 = document.querySelector("video");

if (video instanceof HTMLVideoElement) {
  console.log(video.volume);
}
