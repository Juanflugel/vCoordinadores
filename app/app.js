angular.module('VCapp',[
	'ngMaterial',
	'ui.router',
	'VCdir'
	])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/ListaEstudiantes");
  //
  // Now set up the states
  $stateProvider

   .state('Detalle', {
  	url: "/Detalle",
  	templateUrl: "html/detalle.html",
  	controller:'EstuCtrl'
  })
  .state('Detalle.Personal', {
  	url: "/InfoPersonal",
  	templateUrl: "html/infoPersonal.html"
  	
  })
  .state('Detalle.Academico', {
  	url: "/InfoAcademica",
  	templateUrl: "html/infoAcademica.html",
  })
  .state('Lista', {
  	url: "/ListaEstudiantes",
  	templateUrl: "html/listaEstudiantes.html",
  	controller:'EstuCtrl'
  })
  .state('Estadisticas', {
  	url: "/Estadisticas/:curso",
  	templateUrl: "html/Estadisticas.html",
  })

  // estados anidados para estadisticas
  .state('Estadisticas.Notas', {
  	url: "/Notas",
  	template: "<i-grafico></i-grafico>",
  })
  .state('Estadisticas.Asistencias', {
  	url: "/Asistencias",
  	template: "<grafico-barras></grafico-barras>",
  })
  .state('Estadisticas.Contenido', {
  	url: "/Contenido",
  	template: "<grafico-pie></grafico-pie>",
  })

})


.controller('Datos',['$scope','$http', '$mdSidenav','$timeout',function ($scope,$http,$mdSidenav,$timeout){

	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	
}])

.controller('EstuCtrl', ['$scope','$http', function ($scope,$http) {
	$http.get('js/json/estudiantes.json').success(function (data){
		$scope.estudiante = data[0];
		$scope.estudiantes = data;
	});
}])
