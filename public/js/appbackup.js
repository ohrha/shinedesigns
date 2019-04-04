(function(){
var app = angular.module('store',[]);

																																																  

app.config(function($httpProvider){



	console.log("Angular.js loaded")

	



});
app.controller('mainCtrl', ['$http','$scope','$timeout', function($http,$scope,$timeout) {

    $scope.contactSlideInLeft = false;
    $scope.contactSlideUpDown = false;
    $scope.contactSlideInRight = false;
    $scope.contactSlideDownUp = false;
    $scope.homePressed = false;
    $scope.contactPressed = false;
    $scope.fadeInSmallMenu= false;
    $scope.removeLargeMenu = false;
    $scope.initialLoad = true;
    $scope.menuPressed = false;
    $scope.fadeOutHome = false;
    $scope.fadeOutHomePage = false;
    $scope.fadeInContact = false;
    $scope.menuPressedContact = false;
    $scope.openHome = function(){
       // console.log("Home opened")
        //$scope.contactSlideInLeft = false;
        $scope.homePressed = true;
        setTimeout(function(){
            $scope.homePressed = false;
            console.log("homePressed = falseo")
        },1000)

    }
    $scope.openContact = function(){
        console.log("Home opened")
        //$scope.contactSlideInLeft = false;
        //$scope.removeLargeMenu = true;
        //$scope.contactPressed = true;
        $scope.menuPressedContact=true
        //$scope.fadeInSmallMenu = true;
        //$scope.fadeOutHome = true;
        $scope.fadeOutHomePage = true;
        $timeout(function(){
            //$scope.removeLargeMenu = true;
            //$scope.fadeInSmallMenu = true;
            
            $scope.fadeOutHome = true;
            console.log("homePressed = false",$scope.fadeOutHome)
        },1000)
        $timeout(function(){
           // $scope.fadeInContact = true;
        },2000)

    }
}]);


}());


    