export function handleClickInput({
  rain,
  fire,
  forest,
  coffee
})
{
  function inputCoffeeShop(event){

    if(event.target.tagName == 'INPUT'){
      return
    }
    
    else {
      coffee()
    }}

  function inputRain(event){
    
    if(event.target.tagName == 'INPUT'){
      return
    }
    else {
      rain()
    }}

  function inputFire(event){
    if(event.target.tagName == 'INPUT'){
      return
    }
    else {
        fire()
    }}

  function inputForest(event){
   
    if(event.target.tagName == 'INPUT'){
      return
    }
    else {
      forest()
    }}
    
  return {
    inputCoffeeShop,
    inputFire,
    inputForest,
    inputRain
  }
}