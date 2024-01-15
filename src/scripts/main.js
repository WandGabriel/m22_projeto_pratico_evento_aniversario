const dataDoAniversario = new Date ("Sep 04, 2024 05:15:00");
const timeStampDataDoAniversario = dataDoAniversario.getTime();
let nomeDoAniversariante = "Wanderson Gabriel";

document.getElementById("nomeAniversariante").innerHTML = `<p>${nomeDoAniversariante}</p>`;

const calculaTempoEmTimeStamp = setInterval(function(){
    const horaAtual = new Date();
    const timeStampHoraAtual = horaAtual.getTime();

    const quantidadeDeDiasAteOEvento = timeStampDataDoAniversario - timeStampHoraAtual;

    const conversaoMilissegundosParaMinutos = 1000 * 60;
    const conversaoMilissegundosParaHoras = 1000 * 60 * 60;
    const conversaoMilissegundosParaDias = 1000 * 60 * 60 * 24;

    const diasParaOEvento = Math.floor(quantidadeDeDiasAteOEvento / conversaoMilissegundosParaDias);
    const horasParaOEvento = Math.floor((quantidadeDeDiasAteOEvento % conversaoMilissegundosParaDias) / conversaoMilissegundosParaHoras);
    const minutosParaOEvento = Math.floor((quantidadeDeDiasAteOEvento % conversaoMilissegundosParaHoras) / conversaoMilissegundosParaMinutos);
    const segundosParaOEvento = Math.floor((quantidadeDeDiasAteOEvento % conversaoMilissegundosParaMinutos) / 1000);

    document.getElementById("contador_evento").innerHTML = `${diasParaOEvento}d ${horasParaOEvento}h ${minutosParaOEvento}m ${segundosParaOEvento}s`;

    if(diasParaOEvento < 0) {
        clearInterval(calculaTempoEmTimeStamp);
        document.getElementById('contador_evento').innerHTML = 'Evento expirado.';
    }
},1000);