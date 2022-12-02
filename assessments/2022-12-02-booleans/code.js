const needHeavyCoat = (goingoutside, somewherecold) => {
  return goingoutside && somewherecold
}
const needSunScreen = (goingtothebeach, goingskiing) => { 
  return goingtothebeach &&  goingskiing 
} 
const needMittens = (goingoutside, somewherewarm) => {
  return goingoutside && ! somewherewarm 
} 
const isVenomous = ( stripedsnake, bluehead) => {
  return stripedsnake && ! bluehead 
} 
const okaySpeed (speedlimit10MPH, carspeedMPH) => {
  return speedlimit10MPH && carspeedMPH ; 10
}
const 