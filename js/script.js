// sidebar
let btn= document.querySelector('#btn_dash');
let dash= document.querySelector('#dash');
let logo= document.querySelector('.logo');
let catalogo= document.querySelector('.catalogo');

btn.addEventListener('click', ()=>{
    if(dash.style.width==''&&catalogo.style.right==''){
        dash.style.width='8.5rem';
        logo.style.right='0.5rem';
        catalogo.style.right='2rem';
    }else{
        dash.style.width='';
        catalogo.style.right='';
        logo.style.right='';
    }
});




// buscar articulos

let articulos=[
  { id: 0, title: 'Casio Privia PX-S1000', price: 1000, src: '/src/articulos', img: '/imgs/pianos/privia_px_s.png'},
  { id: 1, title: 'Casio Privia PX-160', price: 850, src: '/src/articulos', img: '/imgs/pianos/casio_px160.png' },
  { id: 2, title: 'AKG 52', price: 59, src: '/src/articulos', img: '/imgs/akg.png' },
  { id: 3, title: 'Behringer Deepmind 12', price: 1300, src: '/src/articulos', img: '/imgs/sintes/deepmind_.png' },
  { id: 4, title: 'Yamaha MODX7', price: 1300, src: '/src/articulos', img: '/imgs/sintes/modx7.png' },
  { id: 5, title: 'Roland Jupiter X', price: 4500, src: '/src/articulos', img: '/imgs/sintes/jupiter-x.png' },
  { id: 6, title: 'Bateria Tama Imperialstar Fusion', price: 1200, src: '/src/articulos', img: '/imgs/bateria/bateria_tama.png' },
  { id: 7, title: 'Fender Telecaster', price: 3500, src: '/src/articulos', img: '/imgs/guitarras/telecaster.png' },
  
  

      ];
      //se colocan las etiquetas de html en variables
      const inputBuscador = document.getElementById('search');
      const listaSugerencias = document.getElementById('sugerencias');
      //se coloca un escuchador de eventos para el input y por cada evento -digitar letras o numeros en un campo de texto- se hace todo lo que esta en la funcion
inputBuscador.addEventListener('input', () => {
        //se guarda el valor del input en minuscula
        const textoBusqueda = inputBuscador.value.toLowerCase();
        //si el input esta vacio se esconden las sugerencias
        if (textoBusqueda === '') {
          listaSugerencias.innerHTML = '';
          return;
        };
        //se filtra y se guarda los resultados de las coincidencias en una variable (prodCoincidentes), se convierten a minuscula y se toman los primeros caracteres
        const productosCoincidentes = articulos.filter(producto =>
          producto.title.toLowerCase().includes(textoBusqueda));
        //borra todos los resultados para no repetir los anteriores
        listaSugerencias.innerHTML = '';
        //itera todos los resultados de prodCoincidentes y se crea una lista con ellos
        productosCoincidentes.forEach(producto => {
        //crea un li por cada resultado
        const itemLista = document.createElement('li');
        //le agrega el texto a cada li
        itemLista.textContent = producto.title;
        //a la lista le agrega los items con cada resultado
          listaSugerencias.appendChild(itemLista);
          //se agregan la clase "sugerencia-item'"
          itemLista.classList.add('sugerencia-item');
          console.log(itemLista);
          //se agrega el src de cada li
          itemLista.addEventListener('click', () => {
            console.log(producto.src) 
            location.href = `${producto.src}.html?title= ${encodeURIComponent(producto.title)}&price=${encodeURIComponent(producto.price)}&img=${encodeURIComponent(producto.img)}`;
        })});

const elementosLista = document.querySelectorAll('.sugerencia-item');
});

let posicionActual = -1;
inputBuscador.addEventListener('keydown', (evento) => {
  const elementosLista = document.querySelectorAll('.sugerencia-item');
  if (elementosLista.length> posicionActual) {
    if (evento.key === 'ArrowDown') {
      evento.preventDefault();
      
      if(posicionActual=== elementosLista.length-1){
        elementosLista[posicionActual].classList.remove('seleccionado');
        posicionActual= -1;
      }
      posicionActual++;
      let productoAutocompletar= elementosLista[posicionActual].textContent
      inputBuscador.value=productoAutocompletar;
      if(inputBuscador.value===productoAutocompletar){
        let srch=document.querySelector('.btnS');
        srch.addEventListener('click',()=>{
          console.log('hola');
          const elementoSeleccionado = elementosLista[posicionActual];
          if (elementoSeleccionado) {
              const textoSeleccionado = elementoSeleccionado.textContent;
              const productoSeleccionado = articulos.find(producto => producto.title === textoSeleccionado);
              const { price, img } = productoSeleccionado;
              location.href = `${productoSeleccionado.src}.html?title=${encodeURIComponent(productoSeleccionado.title)}&price=${encodeURIComponent(productoSeleccionado.price)}&img=${encodeURIComponent(productoSeleccionado.img)}`
        }
      })
      }
      elementosLista[posicionActual].classList.add('seleccionado');
      if (posicionActual > 0 ) {
        elementosLista[posicionActual - 1].classList.remove('seleccionado');
      }  
      
    }  else if(evento.key==='ArrowUp'){
      evento.preventDefault();
      if(posicionActual> 0){
        posicionActual--;
        elementosLista[posicionActual + 1].classList.remove('seleccionado');
        elementosLista[posicionActual].classList.add('seleccionado');
        console.log(posicionActual);
      }
      else if(posicionActual === 0) {
        elementosLista[posicionActual].classList.remove('seleccionado');
        posicionActual = elementosLista.length - 1;
        elementosLista[posicionActual].classList.add('seleccionado');
      }
      else if(posicionActual === elementosLista.length - 1) {
        elementosLista[posicionActual].classList.remove('seleccionado');
        posicionActual = 1;
        elementosLista[posicionActual].classList.add('seleccionado');
      }
      
    }else if (evento.key === 'Enter') { 
      const elementoSeleccionado = elementosLista[posicionActual];
      if (elementoSeleccionado) {
          const textoSeleccionado = elementoSeleccionado.textContent;
          const productoSeleccionado = articulos.find(producto => producto.title === textoSeleccionado);
          const { price, img } = productoSeleccionado;
          location.href = `${productoSeleccionado.src}.html?title=${encodeURIComponent(productoSeleccionado.title)}&price=${encodeURIComponent(productoSeleccionado.price)}&img=${encodeURIComponent(productoSeleccionado.img)}`
        
      }
      }
    }
  }

);
//resetear el buscador
inputBuscador.addEventListener('input', () => {
  if (inputBuscador.value === '') {
    posicionActual = -1;
  }
});


// carrito de compras

let carrito= document.querySelectorAll('.btnCarrito');
let cartCounter= document.querySelector('.counter');    
let cartBtn= document.querySelector('.s_cart');

let counter= 0;
for(let i=0; i<carrito.length; i++){
  carrito[i].addEventListener('click', ()=>{
    counter++;
    cartCounter.innerHTML=counter;
  })
}
  
const cartItems= [];