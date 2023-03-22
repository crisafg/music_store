let mostrar= document.querySelectorAll('#show');
let contenido= document.querySelectorAll('#texto');
let btnPlus= document.querySelectorAll('#plus')
let cont= document.querySelector('.container');

for(let i=0; i<mostrar.length; i++){
  mostrar[i].addEventListener('click',()=>{
    if(contenido[i].style.height===''){
      contenido[i].style.height=contenido[i].scrollHeight+'px';
      btnPlus[i].innerHTML= '-';
      cont.style.height='auto';
    }else{
      contenido[i].style.height='';
      btnPlus[i].innerHTML= '+';
    }
  })
}