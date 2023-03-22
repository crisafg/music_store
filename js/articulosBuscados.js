const params = new URLSearchParams(window.location.search);
const tituloProducto = params.get('title');
const precioProducto= params.get('price');
const imgProducto = params.get('img');

let card= document.createElement('div');
    card.classList.add('card');
    
    let nombre= document.createElement('h1');
    nombre.innerHTML= tituloProducto;
    nombre.classList.add('nombreInstr');
    card.appendChild(nombre)

    let imagen= document.createElement('img');
    imagen.src= imgProducto;
    imagen.classList.add('imagen');
    card.appendChild(imagen);

    let pr_container= document.createElement('div');
    pr_container.classList.add('carrito');
    card.appendChild(pr_container);
    let price= document.createElement('p');
    pr_container.appendChild(price);
    price.innerText='USD '+ precioProducto;
    price.classList.add('precio');


    btn= document.createElement('button');
    btn.classList.add('btnCarrito');
    pr_container.appendChild(btn);
    btn.innerText= 'Agregar al Carrito'
    

document.getElementById('products_list').innerHTML=`
    ${card.outerHTML}
    ` 



