const dataDoAniversario = new Date ("Sep 04, 2024 05:15:00");
const timeStampDataDoAniversario = dataDoAniversario.getTime();

console.log ("Hora em TimeStamp: "+ timeStampDataDoAniversario);

const calculaTempoEmTimeStamp = setInterval(function(){
    const horaAtual = new Date();
    const timeStampHoraAtual = horaAtual.getTime();

    const conversaoMilissegundosParaMinutos = 1000 * 60;
    const conversaoMilissegundosParaHoras = 1000 * 60 * 60;
    const conversaoMilissegundosParaDias = 1000 * 60 * 60 * 24;

    const calculaDiferencaEntreDataAtualDataEvento = timeStampDataDoAniversario - timeStampHoraAtual;
},1000)