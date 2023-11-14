// Escribe tu código aquí:
const miPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resuelta')
    }, 3000)
})

miPromise.then((resultado) => {
    console.log(resultado)
})