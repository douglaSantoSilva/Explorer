export function backgroundChange({
  bodyPage,
}){

  function home(){
    bodyPage.classList.add('imgBackgroundHome')
    bodyPage.classList.remove('imgBackgroundTheUniverse')
    bodyPage.classList.remove('imgBackgroundExploration')
  }

  function universe(){
    bodyPage.classList.remove('imgBackgroundHome')
    bodyPage.classList.add('imgBackgroundTheUniverse')
    bodyPage.classList.remove('imgBackgroundExploration')
  }

  function exploration(){
    bodyPage.classList.remove('imgBackgroundHome')
    bodyPage.classList.remove('imgBackgroundTheUniverse')
    bodyPage.classList.add('imgBackgroundExploration')
  }

  return({
    home,
    exploration,
    universe
  })
}