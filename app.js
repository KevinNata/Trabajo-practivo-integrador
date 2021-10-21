const cantidad = document.getElementById("formCantidad")
const categoria = document.getElementById("formCategoria")
const botonResumen = document.getElementById("botonResumen");

const totalApagar = document.getElementById("totalApagar");



botonResumen.addEventListener('click', (e) => {
    e.preventDefault();
    let total;

    if (categoria.value ==="estudiante"){
        total =  cantidad.value* ( 200 - ((200*80)/100) )
        totalApagar.innerHTML = `El total a pagar es: <b>$${total}</b>`
    } else if (categoria.value ==="trainee"){
        total =  cantidad.value* ( 200 - ((200*50)/100) )
        totalApagar.innerHTML = `El total a pagar es: <b>$${total}</b>`
    }
    else {
        total =  cantidad.value * ( 200 - ((200*15)/100) )
        totalApagar.innerHTML = `El total a pagar es: <b>$${total}</b>`
        };
    
    

});