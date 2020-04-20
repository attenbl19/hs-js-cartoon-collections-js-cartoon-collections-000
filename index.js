//Dwarf Roll Call

function dwarfRollCall(dwarves) {
  
  const numberedDwarf = [] //this array will store the new elements number and name
   
  for (let i=0; i < dwarves.length/2; i++) {
    
    numberedDwarf
   return numberedDwarf.join(" ") + " "; //should return string of number and name
  
} 


function summonCaptainPlanet(planeteerCalls){
  
  const newPlaneteerCalls = [];
  
  for (let i=0; i<planeteerCalls.length; i++) {
    
    newPlaneteerCalls.push(`${planeteerCalls[i].toUpperCase()}!`);
}
  
  return newPlaneteerCalls; 

}

function longPlaneteerCalls(words) {
  
  for (let i=0; i<words.length; i++) {
    
    if (words[i].length > 4) {
      return true;
    }else{
      return false;
    }
  }
  
}

function findTheCheese (foods) {
  
  const cheeseArray = ["cheddar", "gouda", "camembert"]
  
  for(let i=0; i<foods.length; i++) {
    
    for(let j=0; j<cheeseArray.length; j++) {
      
      if (foods[i] === cheeseArray[j]) {
        
        return foods[i];
      }
    }
}
return "no cheese!";
}



function wordsWithB (words) {
  const bFirstWords = []
  for (let i=0; i<words.lenght; i++) {
    if (words[i].startWith("b") === true) {
       bFirstWords.push(words[i]); 
      }
  }
   return bFirstWords 
}