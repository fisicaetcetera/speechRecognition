console.log('ml5 version: ', ml5.version)

let soundClassifier;
let resultP;

function preload() {
  let prob = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', prob);

}

function setup() {
  noCanvas();
  createP('Diga, em Inglês, números de 0 a 9 ou as palavras up, down, left, right, yes, no, stop, com um intervalo entre elas de 1 a dois segundos...Ao lado da palavra reconhecida, aparece o grau de confiança no reconhecimento da máquina.');
  soundClassifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.log('erro : ', error);
  }
  console.log(results[0].label, results[0].confidence);  
  createP(results[0].label);
  createP('confiança: ' + results[0].confidence);
  if (results[0].label == 'stop'){
    console.log('Vocè pediu pra parar...desligando');
    stop();
 }   
}

function draw() {
  background(220);
}