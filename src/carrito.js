import data from './data/producto'
const botonesAbrirCarrito=document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito=document.getElementById("carrito");
// el boton de agregar al carrito
const btnAgregarCarrito = document.getElementById("agregar-al-carrito");
const producto=document.getElementById("producto")

const carrito=[];

//
const formatearMoneda=new Intl.NumberFormat('es-PE',{style:'currency',currency:'PEN'})

const renderCarrito=()=>{

    ventanaCarrito.classList.add('carrito--active');
    // Eliminamos todos los productos anteriores para construir  el carrito desde cero
    const productosAnteriores=ventanaCarrito.querySelectorAll(".carrito__producto");
    productosAnteriores.forEach((producto)=>producto.remove())

    // iteramos sobre cada prodcuto del carrito y lo mostramos
    carrito.forEach((productoCarrito)=>{
        //console.log(carrito);
        // para obtener los datos de la data
        // cuando el id del item del carrito sea el mismo que alguno de la lista
        data.productos.forEach((productoBaseDatos) => {
          if (productoBaseDatos.id === productoCarrito.id) {
            //console.log(productoBaseDatos.precio);
            productoCarrito.precio=productoBaseDatos.precio
          }
        });

        console.log(productoCarrito);
            


        // para la ruta de la imagen
        let thumbSrc = producto.querySelectorAll(".producto__thumb-img")[0].src;

        // if (productoCarrito.color==="rojo") {
        //     thumbSrc = "./img/thumbs/rojo.jpg";
        // }else if (productoCarrito.color === "amarillo") {
        //     thumbSrc = "./img/thumbs/amarillo.jpg";
        // }

        switch (productoCarrito.color) {
          case "rojo":
            thumbSrc = "./img/thumbs/rojo.jpg";
            break;
          case "amarillo":
            thumbSrc = "./img/thumbs/amarillo.jpg";
            break;

          default:
            break;
        }

        //console.log(thumbSrc);
        
        const plantillaProducto = `
                         <div class="carrito__producto">
							<div class="carrito__producto-info">
								<img src=${thumbSrc} alt="" class="carrito__thumb" />
								<div>
									<p class="carrito__producto-nombre">
										<span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
									</p>
									<p class="carrito__producto-propiedades">
										Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${productoCarrito.color}</span>
									</p>
								</div>
							</div>
							<div class="carrito__producto-contenedor-precio">
								<button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path
											d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
										/>
									</svg>
								</button>
								<p class="carrito__producto-precio">${
                                    formatearMoneda.format(productoCarrito.precio*productoCarrito.cantidad)}</p>
							</div>
						</div>
        `;
        // crea,ps im dov
        const itemCarrito=document.createElement('div');
        // le agregamos clase a una caja
        itemCarrito.classList.add('carrito__producto')
        // agregando nuestro html a item carrito
        itemCarrito.innerHTML=plantillaProducto;
        // agremos a la ventana del carrito
        ventanaCarrito.querySelector(".carrito__body").appendChild(itemCarrito);
    })


    //console.log(carrito);
}

// abrir carrito
botonesAbrirCarrito.forEach(boton=>{
    //console.log(boton);
    boton.addEventListener("click",(e)=>{
        renderCarrito();
    })
})

// cerrar carrito
botonesCerrarCarrito.forEach((boton) => {
  //console.log(boton);
  boton.addEventListener("click", (e) => {
    ventanaCarrito.classList.remove("carrito--active");
  });
});

btnAgregarCarrito.addEventListener('click',(e)=>{
    const id=producto.dataset.productoId;
    const nombre = producto.querySelector(".producto__nombre").innerText;
    const cantidad=parseInt(producto.querySelector("#cantidad").value);
    const color = producto.querySelector("#propiedad-color input:checked").value;
    const tamaño = producto.querySelector("#propiedad-tamaño input:checked").value;

    //console.log(id, nombre, cantidad, color, tamaño);

    carrito.push({
        id,
        nombre,
        cantidad,
        color,
        tamaño,
    })

    
    
})
