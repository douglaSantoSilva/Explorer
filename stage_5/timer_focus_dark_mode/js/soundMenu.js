export default function soundsMenuTracks({
  soundTrackCoffeeShop,
  soundTrackForest,
  soundTrackRain,
  soundTrackFireplace,
})
{
  const musicForest = new Audio('https://github.com/lfoalves/material-stage-05/blob/master/sounds/Floresta.mp3?raw=true')
  const musicRain = new Audio('https://github.com/lfoalves/material-stage-05/blob/master/sounds/Chuva.mp3?raw=true')
  const musicCoffee = new Audio('https://github.com/lfoalves/material-stage-05/blob/master/sounds/Cafeteria.mp3?raw=true')
  const musicFireplace = new Audio('https://github.com/lfoalves/material-stage-05/blob/master/sounds/Lareira.mp3?raw=true')
  const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  musicForest.loop = true
  musicRain.loop = true
  musicCoffee.loop = true
  musicFireplace.loop = true

  function timeEnd(){
    kitchenTimer.play()
  }

//Sounds Play/Pause
  function forest(){
    if(soundTrackForest.classList.contains('soundMenuSelected')){
      soundTrackForest.classList.remove('soundMenuSelected')
      musicForest.pause()
    }
  
    else {
    musicForest.play()
    musicCoffee.pause()
    musicFireplace.pause()
    musicRain.pause()
    soundTrackForest.classList.add('soundMenuSelected')
    soundTrackCoffeeShop.classList.remove('soundMenuSelected')
    soundTrackFireplace.classList.remove('soundMenuSelected')
    soundTrackRain.classList.remove('soundMenuSelected')
    }

    buttonPressAudio.play()
  }

  function rain(){

    if(soundTrackRain.classList.contains('soundMenuSelected')){
      soundTrackRain.classList.remove('soundMenuSelected')
      musicRain.pause()
    }
  
    else{
      musicRain.play()
      musicForest.pause()
      musicCoffee.pause()
      musicFireplace.pause()
      soundTrackCoffeeShop.classList.remove('soundMenuSelected')
      soundTrackForest.classList.remove('soundMenuSelected')
      soundTrackFireplace.classList.remove('soundMenuSelected')
     soundTrackRain.classList.add('soundMenuSelected')
    }

    buttonPressAudio.play()
  }

  function coffeeShop(){
      
      if(soundTrackCoffeeShop.classList.contains('soundMenuSelected')){
        soundTrackCoffeeShop.classList.remove('soundMenuSelected')
        musicCoffee.pause()
      }
    
      else {
        musicCoffee.play()
        musicForest.pause()
        musicFireplace.pause()
        musicRain.pause()
      soundTrackCoffeeShop.classList.add('soundMenuSelected')
      soundTrackForest.classList.remove('soundMenuSelected')
      soundTrackFireplace.classList.remove('soundMenuSelected')
      soundTrackRain.classList.remove('soundMenuSelected')
      }

      buttonPressAudio.play()
  }

  function fireplace(){
    
    if(soundTrackFireplace.classList.contains('soundMenuSelected')){
      soundTrackFireplace.classList.remove('soundMenuSelected')
      musicFireplace.pause()
    }

    else{
      musicFireplace.play()
      musicForest.pause()
      musicCoffee.pause()
      musicRain.pause()
      soundTrackCoffeeShop.classList.remove('soundMenuSelected')
      soundTrackForest.classList.remove('soundMenuSelected')
      soundTrackFireplace.classList.add('soundMenuSelected')
      soundTrackRain.classList.remove('soundMenuSelected')
    }

    buttonPressAudio.play()

  }

// Sounds Volume
  function volumeCoffee(volume){
    musicCoffee.volume = volume / 100;
  }
  function volumeForest(volume){
    musicForest.volume = volume / 100;
  }
  function volumeRain(volume){
    musicRain.volume =  volume / 100;
  }
  function volumeFire(volume){
    musicFireplace.volume = volume / 100
  }

return {
  forest,
  rain,
  coffeeShop,
  fireplace,
  timeEnd,
  volumeCoffee,
  volumeForest,
  volumeRain,
  volumeFire,
  buttonPressAudio
}
}