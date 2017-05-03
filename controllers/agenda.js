app.controller("agenda", function ($http, $scope) {

    $scope.nomes = [
        { codigo: '1', descricao: 'Tratamento de pneumonia', duracao: '3 ano' },
        { codigo: '2', descricao: 'Tratamento de Ansiedade ', duracao: '5 ano' },
        { codigo: '3', descricao: 'Tratamento de Crise do Panico ', duracao: '2 ano' },
        { codigo: '4', descricao: 'Tratamento de para parar de fumar ', duracao: '20 anos' },
        { codigo: '5', descricao: 'Tratamento para emagrecer ', duracao: ' 1 anos' },
        { codigo: '6', descricao: 'Tratamento para os olhos ', duracao: ' 2 anos' },
        { codigo: '7', descricao: 'Tratamento de cancer ', duracao: ' 1 anos' },
        { codigo: '8', descricao: 'Tratamento de queda de cabelo ', duracao: ' 6 meses' },
        { codigo: '9', descricao: 'Tratamento para alcoolico ', duracao: ' 6 meses' },
        { codigo: '10', descricao: 'Tratamento de colica  ', duracao: ' 1  meses' },
        { codigo: '11', descricao: 'Tratamento de colica Renal  ', duracao: ' 4  meses' },

        { codigo: '12', descricao: 'Tratamento de Gastria', duracao: '3 ano' },
        { codigo: '13', descricao: 'Tratamento para medo de altura ', duracao: '5 ano' },
        { codigo: '14', descricao: 'Tratamento de Depressão ', duracao: '2 ano' },
        { codigo: '15', descricao: 'Tratamento para parar de usar substancia quimica ', duracao: '20 anos' },
        { codigo: '16', descricao: 'Tratamento para crise de loucura ', duracao: ' 1 anos' },
        { codigo: '17', descricao: 'Tratamento para mal olhado ', duracao: ' 2 anos' },
        { codigo: '18', descricao: 'Tratamento de quebra de braço ', duracao: ' 1 anos' },
        { codigo: '19', descricao: 'Tratamento de queda de unha ', duracao: ' 6 meses' },
        { codigo: '20', descricao: 'Tratamento de canal dentario ', duracao: ' 6 meses' },
        { codigo: '21', descricao: 'Tratamento de pé inchado  ', duracao: ' 1  meses' },
        { codigo: '22', descricao: 'Tratamento de coluna  ', duracao: ' 4  meses' },

        { codigo: '23', descricao: 'Tratamento para pele seca', duracao: '3 ano' },
        { codigo: '24', descricao: 'Tratamento de pele ', duracao: '5 ano' },
        { codigo: '25', descricao: 'Tratamento de estria na pernas ', duracao: '2 ano' },
        { codigo: '26', descricao: 'Tratamento de estria para gravidas ', duracao: '20 anos' },
        { codigo: '27', descricao: 'Tratamento de agua no joelho ', duracao: ' 1 anos' },
        { codigo: '28', descricao: 'Tratamento de rugas ', duracao: ' 2 anos' },
        { codigo: '29', descricao: 'Tratamento para gestantes ', duracao: ' 1 anos' },
        { codigo: '30', descricao: 'Tratamento para idosos ', duracao: ' 6 meses' },
        { codigo: '31', descricao: 'Tratamento de fisioterapia ', duracao: ' 6 meses' },
        { codigo: '32', descricao: 'Tratamento pisada torta  ', duracao: ' 1  meses' },
        { codigo: '33', descricao: 'Tratamento para surdos e mudos  ', duracao: ' 4  meses' }

    ];

    $scope.items = [];

    $http.get('medicos.txt').then(function (response) {
        $scope.items = response.data;

    }, function (error) {
        alert('Erro reportado: ' + error);
    });

});

function mensagem() {
   
    var data = parseDate(document.getElementById("data").value);
   
    var dataBR = dataAtualFormatada(data);
    alert("Sua Consulta foi agendada com Sucesso \n"
        + "Data do Agendamento: " + dataBR  + "\n"
        + "Hora do Agendamento: " + document.getElementById("hora").value);

}

function dataAtualFormatada(data) {
    
    var dia = data.getDate();
    if (dia.toString().length == 1)
        dia = "0" + dia;
    var mes = data.getMonth() + 1;
   if (mes.toString().length == 1)
        mes = "0" + mes;
    var ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
}

function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    
    return new Date(parts[0], parts[1] - 1, parts[2]); 
}
