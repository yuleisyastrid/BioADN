angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('adnCtrl', function($scope) {
   const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = 480;
  const { width, height } = canvas;
  const xCenter = width / 2; // centre de l'écran en x
  const yStart = 50; // positionde la première hélice en y
  const xMax = 80; // largeur des helices
  const yMax = 50; // espace entre les helices
  let angle = 0;
  const speed = 0.02; // vitesse de rotation
  const tAnglePI = [
  0,
  Math.PI / 6,
  Math.PI / 3,
  Math.PI / 2,
  2 * Math.PI / 3,
  5 * Math.PI / 6,
  Math.PI,
  7 * Math.PI / 6,
  4 * Math.PI / 3,
  -Math.PI / 2,
  5 * Math.PI / 3,
  11 * Math.PI / 6,
  ];
  const tPI = [...tAnglePI, ...tAnglePI];
  function render() {
    ctx.clearRect(0, 0, width, height);
    const tPositions = [];
    for (let i = 0; i < tPI.length; i++) {
      const positions = adn(tPI[i], (i * yMax));
      tPositions.push(positions);
    }
    angle += speed;
    requestAnimationFrame(render);
  }
  /**
  *
  * @param {*} startPhase phase de début en x
  * @param {*} yPos position de l'helice en y
  */
  function adn(startPhase, yPos, colorLink = '#FFFFFF') {
    const angleSin = Math.sin(angle + startPhase);
    const angleCos = Math.cos(angle + startPhase);
    const xPos1 = angleSin * xMax;
    const xPos2 = -angleSin * xMax;
    const yPos1 = angleCos * 10 + yPos;
    const yPos2 = -angleCos * 10 + yPos;
    // Création des liens entre les cercles
    ctx.beginPath();
    ctx.strokeStyle = colorLink;
    ctx.lineWidth = 3;
    ctx.moveTo(xPos1 + xCenter, yPos1 + yStart);
    ctx.lineTo(xPos2 + xCenter, yPos2 + yStart);
    ctx.stroke();
    // On fait passer le cercle le plus loin derrière
    if (angleCos < 0) {
      drawADN(xPos1, yPos1, angleCos, 11342935);
      drawADN(xPos2, yPos2, -angleCos, 1668818);
    } else {
      drawADN(xPos2, yPos2, -angleCos, 1668818);
      drawADN(xPos1, yPos1, angleCos, 11342935);
    }
    return {
      xPos1, yPos1, xPos2, yPos2,
    };
  }
  /**
  * @param {*} xAngle position en x du cercle
  * @param {*} yAngle position en y du cercle
  * @param {*} radius largeur du cercle
  * @param {*} color couleur du cercle
  */
  function drawADN(xPos, yPos, radius, color) {
    ctx.fillStyle = `#${(color).toString(16)}`;
    ctx.beginPath();
    ctx.arc(
      xPos + xCenter,
      yPos + yStart,
      10 + (radius * 3),
      0,  
      2 * Math.PI,
    );
    ctx.closePath();
    ctx.fill();
    }
    render();
})

.controller("juegoCtrl",function($scope) {
  
    $(document).ready(function(){
  
var checkArray = []; // para verificar si las dos cartas con click son el mismo personaje
var idArray = []; //array para guardar los ids de las cartas que tienen click 
var contador = 0;
var fin = 0; 
var fields = document.querySelectorAll(".atras");


var images = [
"https://mejorconsalud.com/wp-content/uploads/2018/02/Qu%C3%A9-alimentos-tienen-mayor-porcentaje-de-vitaminas.jpg",
"https://agrega.juntadeandalucia.es/repositorio/27012016/42/es-an_2016012714_9125937/cuerpo_humano/nuevima/vitaa2.gif",
"https://medlineplus.gov/spanish/ency/images/ency/fullsize/19691.jpg",
"http://team.redolat.com/wp-content/uploads/vitamina-b2-deportistas.jpg",
"https://ssl.adam.com/graphics/images/es/18112.jpg",
"https://cdn.laguiadelasvitaminas.com/wp-content/uploads/2013/10/buen_comer.jpg",
"https://nutricioni.com/wp-content/uploads/2018/08/Tratamiento-para-la-cara-03.jpg",
"https://1.bp.blogspot.com/-Q_Fys_oiVQk/VwFHeb4tfQI/AAAAAAAAAGI/4PKtOSDRQKUVuehM0Kq2L7Ex7v9P-piUw/w1200-h630-p-k-no-nu/vitaminasalimenticias.jpg",
"https://i.pinimg.com/originals/73/05/3b/73053b8e77d33c17ee2f2a0e83b50b39.jpg",
"https://mejorconsalud.com/wp-content/uploads/2018/02/Qu%C3%A9-alimentos-tienen-mayor-porcentaje-de-vitaminas.jpg",
"https://agrega.juntadeandalucia.es/repositorio/27012016/42/es-an_2016012714_9125937/cuerpo_humano/nuevima/vitaa2.gif",
"https://medlineplus.gov/spanish/ency/images/ency/fullsize/19691.jpg",
"http://team.redolat.com/wp-content/uploads/vitamina-b2-deportistas.jpg",
"https://ssl.adam.com/graphics/images/es/18112.jpg",
"https://cdn.laguiadelasvitaminas.com/wp-content/uploads/2013/10/buen_comer.jpg",
"https://nutricioni.com/wp-content/uploads/2018/08/Tratamiento-para-la-cara-03.jpg",
"https://1.bp.blogspot.com/-Q_Fys_oiVQk/VwFHeb4tfQI/AAAAAAAAAGI/4PKtOSDRQKUVuehM0Kq2L7Ex7v9P-piUw/w1200-h630-p-k-no-nu/vitaminasalimenticias.jpg",
"https://i.pinimg.com/originals/73/05/3b/73053b8e77d33c17ee2f2a0e83b50b39.jpg"
];
// verificacion de los clicks
function clicked() { 
  if ($(this).find(".inner-wrap").hasClass("flipped")) {
    return;
  }
  $(this).find(".inner-wrap").toggleClass("flipped");
  checkArray.push($(this).find("img").attr("src"));
  idArray.push($(this).attr("id"));
  check();
}

$(".carta").on("click", clicked);
  
//reiniciar el juego
function reiniciar() {
  $(".atras").find("img").remove(); //quitar todas las imagenes actuales
  $(".carta .inner-wrap").removeClass("flipped"); // quitar la classe flipped para volver a su estado inicial
  checkArray = []; 
  idArray = [];
  contador = 0; 
  fin = 0;
  iniciarJuego();
}
//para verificar el fin del juego
function verificarFin() {
  if (fin === 18) { //si todas las cartas estan volteadas
    alert("Juego finalizado, lo has logrado en " + contador + " intentos");
    reiniciar();
  }
}
//para random de las imagenes 
function shuffleArray(array) { 
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function iniciarJuego() {

  

  var arr = shuffleArray(images); //array con las imagenes de forma aleatoria
 // append de las imagenes a la clase para la parte de atras de las cartas
  for (var i = 0; i < fields.length; i++) {
    var img = document.createElement("img");
    img.src = arr[i];
    fields[i].appendChild(img);
  }


}

function check() {
  //si los fields se  han hecho dos clicks 
  if (checkArray.length === 2) {
    $(".carta").off("click", clicked); 
    setTimeout(function(){
      //si no hay match
      if (checkArray[0] !== checkArray[1]) { 
        //voltear las dos cartas seleccionadas
        $("#" + idArray[0]).find(".inner-wrap").removeClass("flipped"); 
        $("#" + idArray[1]).find(".inner-wrap").removeClass("flipped"); 
        contador++;
        //vaciar los arrays para la siguiente eleccion
        checkArray = []; 
        idArray = []; 
        //habilitar el click de nuevo
        $(".carta").on("click", clicked);
      } else {

        contador++;
        
        fin += 2; // contador para el final del juego, se agregan dos para el contador de fin
        //vaciar los dos arrays
        checkArray = []; 
        idArray = []; 
        verificarFin(); 
        $(".carta").on("click", clicked); 
      }
      document.querySelector(".counter").innerHTML = contador;
    }, 800);  
  }
}



iniciarJuego();

});


})

.controller("subCategoriaCtrl",function($scope,$state) {
    $scope.redireccionar = function() {
    $state.go("tab.dash")
    }
});