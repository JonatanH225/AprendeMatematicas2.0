//recargar pagina para cambiar ejercicios1
function cambio(){
  location.reload()
}

//ejercicios1
function comprobar(){
  nume=document.getElementById('num2').value;
  console.log(num1);
  console.log(nume);
  if(num1==nume){

    Swal.fire({
  title: 'CORRECTO!! Muy bien',
  width: 350,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/nyan-cat.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",3000);
  }else{

    Swal.fire({
  title: 'INCORRECTO :(',
  width: 370,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/loading-error.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",5000);
  }
}

//funcion random para numero en ejercicios

function randomNum(min,max){

  var num = Math.round(Math.random() * (max - min));
  return num + min;

}

//funcion resultado para quiz
function resultado() {
var p1, p2, p3, p4, nota;

if (document.getElementById('p11').checked==true) {p1=1}
else {p1=0}

if (document.getElementById('p22').checked==true) {p2=1}
else {p2=0}

if (document.getElementById('p33').checked==true) {p3=1}
else {p3=0}

if (document.getElementById('p44').checked==true) {p4=1}
else {p4=0}

nota=p1+p2+p3+p4;
alert(" Aciertos: " + nota);
location.reload();
}


//funciones para ejercicios sumas
function sumar(){

  nume=document.getElementById('num111').value;
  console.log(num1);
  console.log(num11);
  console.log(nume);
  suma=num1+num11;

  if(suma==nume){

    Swal.fire({
  title: 'CORRECTO!! Muy bien',
  width: 350,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/nyan-cat.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",3000);
  }else{

    Swal.fire({
  title: 'INCORRECTO :(',
  width: 370,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/loading-error.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",5000);
  }

}

//funciones resta0

function restar(){

  nume=document.getElementById('num111').value;
  console.log(num1);
  console.log(num11);
  console.log(nume);
  resta=num1-num11;

  if(resta==nume){

    Swal.fire({
  title: 'CORRECTO!! Muy bien',
  width: 350,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/nyan-cat.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",3000);
  }else{

    Swal.fire({
  title: 'INCORRECTO :(',
  width: 370,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/loading-error.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",5000);
  }
}

//funciones mitad y doble

function mitad(){

  nume=document.getElementById('num111').value;
  console.log(num1);
  console.log(nume);
  mitad=num1/2;
  console.log(mitad);

  if(mitad==nume){

    Swal.fire({
  title: 'CORRECTO!! Muy bien',
  width: 350,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/nyan-cat.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",3000);
  }else{

    Swal.fire({
  title: 'INCORRECTO :(',
  width: 370,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/loading-error.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",5000);

  }
}

function doble(){

  nume=document.getElementById('num222').value;
  console.log(num2);
  console.log(nume);
  doble=num2*2;
  console.log(doble);

  if(doble==nume){

    Swal.fire({
  title: 'CORRECTO!! Muy bien',
  width: 350,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/nyan-cat.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",3000);
  }else{

    Swal.fire({
  title: 'INCORRECTO :(',
  width: 370,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/loading-error.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",5000);
  }
}

function triple(){

  nume=document.getElementById('num222').value;
  console.log(num2);
  console.log(nume);
  triple=num2*3;
  console.log(triple);

  if(triple==nume){

    Swal.fire({
  title: 'CORRECTO!! Muy bien',
  width: 350,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/nyan-cat.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",3000);
  }else{

    Swal.fire({
  title: 'INCORRECTO :(',
  width: 370,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/loading-error.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",5000);
  }
}


//funcion mayor menor o igual

function mayorMenor(){

  nume=document.getElementById('seleccionmmi').value;
  console.log(num2);
  console.log(num22);
  console.log(nume);

  if(num2==num22 && nume=="Igual a"){

    Swal.fire({
  title: 'CORRECTO!! Muy bien',
  width: 350,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/nyan-cat.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",3000);
  }

  if(num2<num22 && nume=="Menor que"){

    Swal.fire({
  title: 'CORRECTO!! Muy bien',
  width: 350,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/nyan-cat.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",3000);
  }
  if(num2>num22 && nume=="Menor que"){

    Swal.fire({
  title: 'CORRECTO!! Muy bien',
  width: 350,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/nyan-cat.gif")
    left top
    no-repeat
  `
  })
  setInterval("location.reload(true)",3000);
  }else{

    Swal.fire({
  title: 'INCORRECTO :(',
  width: 370,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("imagenes/loading-error.gif")
    left top
    no-repeat
  `
})
setInterval("location.reload(true)",5000);
  }
}
