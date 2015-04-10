angular.module('VCdir',[])

.directive('graficoBarras', [function () {
	return {
		restrict: 'E',
		templateUrl:'html/grafico.html',
		controller: function(){

			var data = {
				labels: ['A,B,C', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				series: [
				[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
				
				[1, 5, 7, 3, 8, 4, 2, 10, 10, 12, 3, 8]
				]
			};

			var options = {
				seriesBarDistance: 15
			};

			var responsiveOptions = [

			['screen and (min-width: 641px) and (max-width: 1024px)', {
				seriesBarDistance: 10,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value;
					}
				}
			}],

			['screen and (max-width: 640px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
			];

			new Chartist.Bar('.ct-chart', data, options, responsiveOptions);

		}
	};
}])
.directive('graficoPie',function(){
	return{
		restrict:'E',
		templateUrl:'html/grafico.html',
		controller:function(){
			var data = {
				series: [5, 3, 4]
			};

			var sum = function(a, b) { return a + b };

			new Chartist.Pie('.ct-chart', data, {
				labelInterpolationFnc: function(value) {
					return Math.round(value / data.series.reduce(sum) * 100) + '%';
				}
			});
		}
	};
})
.directive('iGrafico', function(){

	return{
		restrict:'E',
		templateUrl:'html/grafico.html',
		controller: function () {

			var chart = new Chartist.Line('.ct-chart', {
				labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				series: [
				[5, 9, 7, 8, 5, 3, 5, 4, 9, 23],
				[10, 14, 12, 13, 20, 8, 10, 9, 31, 28],
				]
			}, {
				low: 0,
				showArea: true,
				fullWidth: true,
				lineSmooth: Chartist.Interpolation.simple({
					divisor: 2
				}),
			});
		}
	};

})
.directive('modalDetalle', [function () {
	return {
		restrict: 'E',
		templateUrl:'html/modalestudiante.html'
	};
}])
.directive('detalleEstudiante', [function () {
	return {
		restrict: 'E',
		templateUrl:'html/detalle.html'
	};
}])