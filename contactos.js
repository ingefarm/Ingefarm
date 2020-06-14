const menu=document.querySelector('.menu');
console.log(menu);
const boton=document.querySelector('#burger');
console.log(boton);

function recibir(){
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    swal('IngeFarm E.U. ',`hola tu nombre es ${nombre} ${apellido} tu numero de contacto es ${telefono} y tu correo es ${correo} nos estaremos comunicando en la mayor brevedad posible.`,'success')
}


function mandalo(){
    return recibir()
}

//menu vurgesa



boton.addEventListener('click', hideShow);

function hideShow(){
    if(menu.classList.contains('menu_aparece')){
        menu.classList.remove('menu_aparece');
    }else{
        menu.classList.add('menu_aparece');
    }

}