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
   .state('Lista', {
    url: "/ListaEstudiantes",
    templateUrl: "html/listaEstudiantes.html",
    controller:'EstuCtrl'
  })
  .state('Lista.Personal', {
  	url: "/InfoPersonal",
  	templateUrl: "html/infoPersonal.html"
  	
  })
  .state('Lista.Academico', {
  	url: "/InfoAcademica",
  	templateUrl: "html/infoAcademica.html",
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

  $scope.cursos =[
  {curso:'10A', jornada:'',state:'10A'},
  {curso:'8B', jornada:'',state:'8B'},
  {curso:'7E', jornada:'',state:'7E'},
  {curso:'8F', jornada:'',state:'8F'},
  {curso:'11A', jornada:'',state:'10A'},
  {curso:'9B', jornada:'',state:'8B'},
  {curso:'6E', jornada:'',state:'7E'},
  {curso:'8D', jornada:'',state:'8F'},
  {curso:'1A', jornada:'',state:'10A'},
  {curso:'3B', jornada:'',state:'8B'},
  {curso:'5E', jornada:'',state:'7E'},
  {curso:'3F', jornada:'',state:'8F'},
  {curso:'4A', jornada:'',state:'10A'},
  {curso:'2B', jornada:'',state:'8B'},
  {curso:'8E', jornada:'',state:'7E'},
  {curso:'10D', jornada:'',state:'8F'}
  ];

  $scope.selectCurso = function(cur){
    $scope.Actual = cur.curso;
  };


}])

.controller('EstuCtrl', ['$scope','$http', function ($scope,$http) {
	$http.get('js/json/estudiantes.json').success(function (data){
		$scope.estudiante = data[0];
		$scope.estudiantes = data;
	});
  $scope.actEstudiante = function(est){
    $scope.estudiante= est;
  };

}])

