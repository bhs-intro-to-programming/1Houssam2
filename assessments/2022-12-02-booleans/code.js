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
const 