const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backw = document.querySelector('#backw')
const $fordw = document.querySelector('#fordw')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backw.addEventListener('click', handleBackw)
$fordw.addEventListener('click', handleFordw)

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('le diste click a play')
}

function handlePause() {
  $video.pause()
  $play.hidden = false
  $pause.hidden = true
  console.log('le diste click a pause')
}

function handleBackw() {
  $video.currentTime -= 10
  console.log('le diste click a -10 seg', $video.currentTime)
}

function handleFordw() {
  $video.currentTime += 10
  console.log('le diste click a +10 seg', $video.currentTime)
}

const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata', handleMetadata)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleMetadata() {
  $progress.max = $video.duration
  console.log('El video ya cargo', $video.duration)
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
  console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
  console.log($progress.value)
}