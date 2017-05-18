
var app = angular.module('app', []);

app.controller('AlumnosController', function ($scope) {

    $scope.alumnos = [
        {nombre:"Juan Blanco", telefono: "1234567890", curso:"Segundo ESO"},
        {nombre:"Rosa Luxemburgo", telefono: "1234567890", curso:"Primero ESO"},
        {nombre:"Alberto Herrera", telefono: "1234567890", curso:"Segundo ESO"},
        {nombre:"Ana Moarino", telefono: "1234567890", curso:"Tercero ESO"}
    ];
});




