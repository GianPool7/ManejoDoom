const producto=document.getElementById("producto");
const productoImagen=producto.querySelector(".producto__imagen");
const thumbs=producto.querySelector(".producto__thumbs")
// color
const propiedadColor = producto.querySelector("#propiedad-color");
// cantidad
const btnDisminuirCantidad = producto.querySelector("#disminuir-cantidad");
const btnIncrementarCantidad = producto.querySelector("#incrementar-cantidad");
const inputCantidad=producto.querySelector("#cantidad")


thumbs.addEventListener("click",(e)=>{
    if (e.target.tagName==="IMG") {
        const imagenSrc=e.target.src;
        //console.log(imagenSrc);

        // Obtenemos la ultima posicion
        const lastIndex=imagenSrc.lastIndexOf('/');
        //
        const nombreImagen=imagenSrc.substring(lastIndex+1);
        
        productoImagen.src = `./img/tennis/${nombreImagen}`;
        
    }
    
})

// para cambiar el color
propiedadColor.addEventListener("click",(e)=>{

    if (e.target.tagName==="INPUT") {
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;


        //console.log(e.target.value);        
    }


})

// para disminuir la cantidad con los botones
btnDisminuirCantidad.addEventListener("click", (e) => {
    if (parseInt(inputCantidad.value)>1) {
        inputCantidad.value = parseInt(inputCantidad.value) - 1;      
    }
});

// para aumentar la cantidad con los botones
btnIncrementarCantidad.addEventListener("click",(e)=>{
    inputCantidad.value=parseInt(inputCantidad.value)+1;
})


