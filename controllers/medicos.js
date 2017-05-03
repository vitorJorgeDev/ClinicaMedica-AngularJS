app.controller("medicos",  function ($http, $scope) {

    $scope.items = [];

    $http.get('medicos.txt').then(function (response) {
        $scope.items = response.data;

    }, function (error) {
        alert('Erro reportado: ' + error);
    });

});
