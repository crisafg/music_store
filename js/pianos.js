export let pianos= [
    {
        name: 'Casio Privia PX-160',
        imagen: '../imgs/casio px.png',
        price: '850'
    },
]


// // for (let i of tituloProducto){
// //     console.log('funciona');
//     let card= document.createElement('div');
//     card.classList.add('card');
    
//     let name= document.createElement('h1');
//     name.innerHTML= i.name;
//     name.classList.add('nombreInstr');
//     card.appendChild(name)

//     let image= document.createElement('img');
//     image.classList.add('imagen')
//     image.setAttribute('src', i.imagen);
//     card.appendChild(image);

//     let pr_container= document.createElement('div');
//     pr_container.classList.add('carrito');
//     card.appendChild(pr_container);
//     let price= document.createElement('p');
//     pr_container.appendChild(price);
//     price.innerText='USD '+ i.price;
//     price.classList.add('precio');

//     let btn= document.createElement('button');
//     btn.classList.add('btnCarrito');
//     pr_container.appendChild(btn);
//     btn.innerText= 'Agregar al Carrito'
    

//     document.querySelector('#products_list').appendChild(card);
// }
