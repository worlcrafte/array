const dupontd = [
    {name : "Dupont", sexe: "m"},
    {name : "DuPONT", sexe: "m"},
    {name : "duPont", sexe: "f"},
    {name : "Dupond", sexe: "f"},
  
];
//----------------A compléter----------------\
function forEach(t, fx){
  for(let i=0; i<t.length; i++){
    fx(t[i]);
  }
}
function trans(t, fx){
    const newT=[];
    for(let i in t){
        newT.push(fx(t[i]));
    } 
    return newT;
}
  
function filter(t, fx){
  const newT = [];
  for (let i=0; i<t.length; i++){
    if (fx(t[i])){
      newT.push(t[i]);
    }
  }
  return(newT);
}
  
//---------------- Les callbacks ----------------\

function upperCase(pers){ //
  pers.name = pers.name.toUpperCase();
}
  
function isDupont(pers){
  return pers.name == "DUPONT"
}
  
function civilite({name, sexe}){
  sexe== "m" ? name= `Monsieur ${name}` : name = `Madame ${name}`;
  return {name}
}
  
//---------------- APPELS ----------------\
 
forEach(dupontd, upperCase);
const dupontFamily = filter(dupontd, isDupont);
const tid = trans (dupontFamily, civilite);
console.log(tid);