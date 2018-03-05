var app = angular.module('app', []);

app.controller('mainCtrl', function($http, $scope) {
	$scope.virtualPlus = true;
	$scope.IaaSPlus = true;
	$scope.networkingPlus = true;
	$scope.hardwarePlus = true;
	$scope.scriptPlus=true;
	$scope.osPlus=true;
	$scope.databasePlus = true;
	$scope.langPlus = true;
	$scope.projectShow = "tracketz";

	$scope.changeLangPlus = function(){
		if($scope.langPlus){
			$scope.langPlus = false;
		} else {
			$scope.langPlus = true;
		}
	}

	$scope.changeDatabasePlus = function(){
		if($scope.databasePlus){
			$scope.databasePlus = false;
		} else {
			$scope.databasePlus = true;
		}
	}

	$scope.changeIaasPlus = function(){
		if($scope.IaaSPlus){
			$scope.IaaSPlus = false;
		} else {
			$scope.IaaSPlus = true;
		}
	}
	$scope.changeOsPlus = function(){
		if($scope.osPlus){
			$scope.osPlus = false;
		} else {
			$scope.osPlus = true;
		}
	}

	$scope.changeHardwarePlus = function(){
		if($scope.hardwarePlus){
			$scope.hardwarePlus = false;
		} else {
			$scope.hardwarePlus = true;
		}
	}

	$scope.changeScriptingPlus = function(){
		if($scope.scriptPlus){
			$scope.scriptPlus = false;
		} else {
			$scope.scriptPlus = true;
		}
	}



	$scope.changeVirtualPlus = function(){
		if($scope.virtualPlus){
			$scope.virtualPlus = false;
			console.log($scope.virtualPlus);
		} else {
			$scope.virtualPlus = true;
			console.log($scope.virtualPlus);
		}

	}


	$scope.changeNetworkingPlus = function(){
		if($scope.networkingPlus){
			$scope.networkingPlus = false;

		} else {
			$scope.networkingPlus = true;
		}

	}

	$scope.changeProject = function(direction){
		console.log("FIRE!");
		if (direction === 'left') {
			if ($scope.projectShow === 'tracketz') {
				$scope.projectShow = 'licensebro';
			} else {
				$scope.projectShow = 'tracketz';
			}
		} else if(direction === 'right'){
			if ($scope.projectShow === 'tracketz') {
				$scope.projectShow = 'licensebro';
			} else {
				$scope.projectShow = 'tracketz';
			}
		}
	}

});