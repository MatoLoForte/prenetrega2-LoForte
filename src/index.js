const DO4 = new Audio("src/sounds/DO4.mp3");
const REb4 = new Audio("src/sounds/REb4.mp3");
const RE4 = new Audio("src/sounds/RE4.mp3");
const MIb4 = new Audio("src/sounds/MIb4.mp3");
const MI4 = new Audio("src/sounds/MI4.mp3");
const FA4 = new Audio("src/sounds/FA4.mp3");
const SOLb4 = new Audio("src/sounds/SOLb4.mp3");
const SOL4 = new Audio("src/sounds/SOL4.mp3");
const LAb4 = new Audio("src/sounds/LAb4.mp3");
const LA4 = new Audio("src/sounds/LA4.mp3");
const SIb4 = new Audio("src/sounds/SIb4.mp3");
const SI4 = new Audio("src/sounds/SI4.mp3");


const reproducirNota = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0), 2000);
};

let notasUsuario = [];
let vientos = [
  { viento: "Flauta en Sol", intervalo: 5 },
  { viento: "Corno Inglés", intervalo: 7 },
  { viento: "Clarinete en si bemol", intervalo: 2 },
  { viento: "Clarinete en la", intervalo: 3 },
  { viento: "Clarinete bajo", intervalo: 2 },
  { viento: "Saxo Soprano", intervalo: 2 },
  { viento: "Saxo Alto", intervalo: 9 },
  { viento: "Saxo Tenor", intervalo: 2 },
  { viento: "Saxo Baritono", intervalo: 9 },
  { viento: "Trompeta en si bemol", intervalo: 2 },
  { viento: "Trompeta en fa", intervalo: 7 }
]

// const saxoAlto = 9; esto lo tengo que reemplazar con los datos del array vientos accediendo al instrumento y value del select
let label = document.getElementById("NotaTranspuestaResultado");

function tocarTecla(idTecla, nota) {
  const tecla = document.getElementById(idTecla);
  reproducirNota(nota);
  tecla.classList.add("active");
  setTimeout(() => tecla.classList.remove("active"), 100);
  notasUsuario.push(tecla.value);
  console.log(notasUsuario);
};

function trasponer(){
  let notasSize = teclas.length;
  let notasTranspuestas = [];
  console.log("notasSize "+ notasSize);
  console.log(saxoAlto);
  
  notasUsuario.forEach(element => { 
      let indexNotaTranspuesta = teclas.findIndex(object => {
        return object.id === element;
      });
      console.log("indexNotaTranspuesta" + indexNotaTranspuesta);
      let indexNotaResult = 0;
      if (indexNotaTranspuesta >= 9){
       indexNotaResult = (notasSize - saxoAlto + indexNotaTranspuesta) - notasSize; 
      }else{
        indexNotaResult = notasSize - saxoAlto + indexNotaTranspuesta;
      }
      console.log("indexNotaResult " + indexNotaResult);
      notasTranspuestas.push(teclas[indexNotaResult]);
  });
  let resultado = [];
  notasTranspuestas.forEach(element => {
   resultado.push(element.id);
  });
  console.log("resultado " + resultado);
 
  label.innerHTML = "Las notas transpuestas para saxo alto son " + resultado;
};

function reset(){
  notasUsuario = [];
  label.innerHTML = "";

}

const teclas = [
  { id: "DO4", nota: DO4 },
  { id: "REb4", nota: REb4},
  { id: "RE4", nota: RE4},
  { id: "MIb4", nota: MIb4},
  { id: "MI4", nota: MI4},
  { id: "FA4", nota: FA4},
  { id: "SOLb4", nota: SOLb4},
  { id: "SOL4", nota: SOL4},
  { id: "LAb4", nota: LAb4},
  { id: "LA4", nota: LA4},
  { id: "SIb4", nota: SIb4},
  { id: "SI4", nota: SI4}
];

teclas.forEach(({ id, nota }) => {
  const tecla = document.getElementById(id);
  tecla.addEventListener("click", () => tocarTecla(id, nota));
});

