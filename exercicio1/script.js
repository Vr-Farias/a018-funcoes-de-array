const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//a

const meuObjeto = (objeto) =>{
    for(let propriedade in objeto){
        console.log(objeto[propriedade].toUpperCase())
    }
}
meuObjeto(objeto)

//b

const func2 = (teste) => {
        const arrayDoObjeto = []
        for(let propriedade in objeto){
            arrayDoObjeto.push(objeto[propriedade])
        }
      return arrayDoObjeto.join(" ")
    }

console.log(func2(objeto))

//c

const func2 = (teste) => {
        const arrayDoObjeto = []
        for(let propriedade in objeto){
            arrayDoObjeto.push(objeto[propriedade])
        }
      return arrayDoObjeto.join(" ")
    }

function objectToCallback(obj, func) {
    console.log(func(obj));
  }
  objectToCallback(objeto,func2);