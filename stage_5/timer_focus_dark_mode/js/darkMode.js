export function darkMode({
  buttonDarkMode,
  buttonWhiteMode,
  bodyModeClass,
  controlsButtons,
  tracksButtons
})
  {
  function changeDark(){
    buttonDarkMode.classList.add('hide')
    buttonWhiteMode.classList.remove('hide')
    bodyModeClass.classList.add('backgroundWhite')
    bodyModeClass.classList.remove('backgroundDark')
 
    controlsButtons.classList.add('whiteModeSounds')
    controlsButtons.classList.remove('darkModeSounds')
    tracksButtons.classList.add('whiteModeSounds')
    tracksButtons.classList.remove('darkModeSounds')
  }

  function changeLight(){
    buttonDarkMode.classList.remove('hide')
    buttonWhiteMode.classList.add('hide')
    bodyModeClass.classList.remove('backgroundWhite')
    bodyModeClass.classList.add('backgroundDark')

    controlsButtons.classList.add('darkModeSounds')
    controlsButtons.classList.remove('whiteModeSounds')
    tracksButtons.classList.add('darkModeSounds')
    tracksButtons.classList.remove('whiteModeSounds')
  }

return {
  changeDark,
  changeLight
  }
}