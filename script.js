const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]


function multiplicarP3(arr) {
  const novoArr = []
  for (elem of arr) {
    novoArr.push(elem * 3)
  }
  return novoArr
  
}


const retornarPar = (arr) => {
  const novoArr = []
  for (num of arr) {
    if (num %2 === 0) {
      novoArr.push(num)
    }
  }
  return novoArr
}

const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
const arrayNumeros2 = [7,3,6,8,4,2,5]

console.log("Multiplica arr1", multiplicarP3(arrayNumeros))
console.log("Retorna Par", retornarPar(arrayNumeros2))


function imprimir(arr, callback){
  const novoArr = callback(arr)
  console.log("Dentro da funcao imprimir", novoArr)
}


imprimir(arrayNumeros, multiplicarP3)
imprimir(arrayNumeros2, retornarPar)
