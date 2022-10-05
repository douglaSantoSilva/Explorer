const soundTrackCoffeeShop = document.querySelector('.coffeeShop')
const soundTrackForest = document.querySelector('.forest')
const soundTrackRain = document.querySelector('.rain')
const soundTrackFireplace = document.querySelector('.fireplace')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.add')
const buttonDecrease = document.querySelector('.decrease')
const minutesScreen = document.querySelector('.minutes')
const secondsScreen = document.querySelector('.seconds')

const buttonDarkMode = document.querySelector('#darkModeButton')
const buttonWhiteMode = document.querySelector('#lightModeButton')
const bodyModeClass = document.querySelector('body')
const controlsButtons = document.querySelector('.controls')
const tracksButtons = document.querySelector('.soundsMenu')

const inputRangeForest = document.querySelector('.soundsMenu button:nth-child(1) input');
const inputRangeRain = document.querySelector('.soundsMenu button:nth-child(2) input');
const inputRangeCoffee = document.querySelector('.soundsMenu button:nth-child(3) input');
const inputRangeFire = document.querySelector('.soundsMenu button:nth-child(4) input');

export {
  soundTrackCoffeeShop,
  soundTrackFireplace,
  secondsScreen,
  soundTrackForest,
  soundTrackRain,
  buttonAdd,
  buttonDecrease,
  buttonPlay,
  buttonStop,
  minutesScreen,
  tracksButtons,
  controlsButtons,
  bodyModeClass,
  buttonWhiteMode,
  buttonDarkMode,
  inputRangeCoffee,
  inputRangeFire,
  inputRangeForest,
  inputRangeRain
}