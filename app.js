var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

function combinacionPalabras(pronombre,adjetivo,sustantivo){
    let resultado =[];
    for(let i=0; i<pronombre.length;i++){
        for(let j=0; j<adjetivo.length;j++){
            for(let k=0; k<sustantivo.length;k++){
                resultado.push(pronombre[i] + adjetivo[j] + sustantivo[k] + ".com")
            }
        }
    }
    return resultado
}
console.log(combinacionPalabras(pronoun,adj,noun))