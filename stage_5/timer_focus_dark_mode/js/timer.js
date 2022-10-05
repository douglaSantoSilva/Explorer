import sound from "./soundMenu.js"
export default function Timer({
  minutesScreen,
  secondsScreen,
  timeEnd
})
{
  let timerTimeOut
  let minutes = Number(minutesScreen.textContent)

  function countdown(){

    timerTimeOut = setTimeout(function(){

      let minutes = minutesScreen.textContent
      let seconds = secondsScreen.textContent
      
      if(minutes <= 0 && seconds <= 0){
        timeEnd()
        upDateDisplay(minutes, 0)
        return
      }

      if(seconds <= 0){
        seconds = 60
       --minutes
      }
      
      upDateDisplay(minutes, --seconds)
      countdown()
    }, 1000)
  }
  
  function upDateDisplay(newMinutes, seconds){
    minutesScreen.textContent = String(newMinutes).padStart(2, "0")
    secondsScreen.textContent = String(seconds).padStart(2, "0")
  }

  function stop(){
    clearTimeout(timerTimeOut)
  }

  function addMinutes(){
    let newMinutes = Number(minutesScreen.textContent) + 5
    upDateDisplay(newMinutes, 0)
    stop()
  }

  function decreaseMinutes(){

      if(minutesScreen.textContent <= 9){
        stop()
        let newMinutes = 5
        upDateDisplay(newMinutes, 0)
      }

      else{
      let newMinutes = Number(minutesScreen.textContent) - 5
      stop()
      upDateDisplay(newMinutes, 0)
      }

  }
  
  return {
    countdown,
    stop,
    upDateDisplay,
    addMinutes,
    decreaseMinutes,
  }


}
