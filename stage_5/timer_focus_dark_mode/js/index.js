import soundsMenuTracks from "./soundMenu.js"
import {soundTrackCoffeeShop,
  soundTrackFireplace,
  secondsScreen,
  soundTrackForest,
  soundTrackRain,
  buttonAdd,
  buttonDecrease,
  buttonPlay,
  buttonStop,
  minutesScreen,
  buttonDarkMode,
  buttonWhiteMode,
  bodyModeClass,
  controlsButtons,
  tracksButtons,
  inputRangeCoffee,
  inputRangeFire,
  inputRangeForest,
  inputRangeRain,
} from "./elements.js"
import Timer from "./timer.js"
import { darkMode } from "./darkMode.js"
import { handleClickInput } from "./clickInput.js"

const darkModes = darkMode({
  buttonDarkMode,
  buttonWhiteMode,
  bodyModeClass,
  controlsButtons,
  tracksButtons })

  const selected = soundsMenuTracks({
  soundTrackCoffeeShop,
  soundTrackForest,
  soundTrackRain,
  soundTrackFireplace,
})

const timer = Timer({
  minutesScreen,
  secondsScreen,
  timeEnd: selected.timeEnd
})

const clickInput = handleClickInput({
  rain: selected.rain,
  fire: selected.fireplace,
  coffee: selected.coffeeShop,
  forest: selected.forest
})

let started = false

// Clock Menu
buttonPlay.addEventListener('click', function(){
  if(started){
    return
  }
  started = true
  timer.countdown()
  selected.buttonPressAudio.play()
})

buttonStop.addEventListener('click', function(){
  started = false
  timer.stop()
  selected.buttonPressAudio.play()
})

buttonAdd.addEventListener('click', function(){
  started = false
  timer.addMinutes()
})

buttonDecrease.addEventListener('click', function(){
  started = false
  timer.decreaseMinutes()
})

buttonWhiteMode.addEventListener('click', function(){
  darkModes.changeLight()
})

buttonDarkMode.addEventListener('click', function(){
  darkModes.changeDark()
})

// Sound Tracks
soundTrackForest.addEventListener('click', clickInput.inputForest)
inputRangeForest.addEventListener('input', function(){
  selected.volumeForest(inputRangeForest.value)
})

soundTrackCoffeeShop.addEventListener('click',  clickInput.inputCoffeeShop) 
inputRangeCoffee.addEventListener('input', function(){
  selected.volumeCoffee(inputRangeCoffee.value)
})

soundTrackRain.addEventListener('click', clickInput.inputRain)
inputRangeRain.addEventListener('input', function(){
  selected.volumeRain(inputRangeRain.value)
})

soundTrackFireplace.addEventListener('click', clickInput.inputFire)
inputRangeFire.addEventListener('input', function(){
  selected.volumeFire(inputRangeFire.value)
})





