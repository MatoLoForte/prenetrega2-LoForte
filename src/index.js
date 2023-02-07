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
let instrumentos = document.getElementById("instrumentos");


// const saxoAlto = 9; esto lo tengo que reemplazar con los datos del array vientos accediendo al instrumento y value del select
let label = document.getElementById("NotaTranspuestaResultado");

function tocarTecla(idTecla, nota) {
  const tecla = document.getElementById(idTecla);
  reproducirNota(nota);
  tecla.classList.add("active");
  setTimeout(() => tecla.classList.remove("active"), 100);
  notasUsuario.push(tecla.value);
  localStorage.setItem("notasUsuario", JSON.stringify(notasUsuario));
  console.log(notasUsuario);
};

function trasponer(){
  let notasSize = teclas.length;
  let notasTranspuestas = [];
  let selectedInterval = instrumentos.options[instrumentos.selectedIndex].value;
  let selectedInstrument = instrumentos.options[instrumentos.selectedIndex].text;

  console.log(selectedInstrument);
  console.log(selectedInterval);
  
  notasUsuario.forEach(element => { 
      let indexNotaTranspuesta = teclas.findIndex(object => {
        return object.id === element;
      });
      console.log("indexNotaTranspuesta" + indexNotaTranspuesta);
      let indexNotaResult = 0;
      if (indexNotaTranspuesta >= selectedInterval){
       indexNotaResult = (notasSize - selectedInterval + indexNotaTranspuesta) - notasSize; 
      }else{
        indexNotaResult = notasSize - selectedInterval + indexNotaTranspuesta;
      }
      console.log("indexNotaResult " + indexNotaResult);
      notasTranspuestas.push(teclas[indexNotaResult]);
  });
  let resultado = [];
  notasTranspuestas.forEach(element => {
   resultado.push(element.id);
  });
  console.log("resultado " + resultado);
 
  label.innerHTML = "Las notas transpuestas para " + selectedInstrument +   " son " + resultado;

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

function continuar(){
  notasUsuario = JSON.parse(localStorage.getItem("notasUsuario"));
}
