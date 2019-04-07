(function(){
var app = angular.module('store',['userServices']);

																																																  

app.config(function($httpProvider){



	console.log("Angular.js loaded")

	



});
app.controller('mainCtrl', ['$http','$scope','$timeout','User','$interval', function($http,$scope,$timeout,User,$interval) {

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
    $scope.homePageOpen = true;
    $scope.nightMode = true;
    $scope.loading = false;
    $scope.fadeOutLoading = false;
    $scope.finishedLoadingSuccess = false;
    $scope.picture="../images/moon.png"
    $scope.progress = 0
    $scope.userObject = {
        userName : "",
        name : "",
        email : "",
        password : ""
    }
    $scope.checkProgress = function(){
        $scope.progress = 0;
        $interval(function(){
            if($scope.progress<86){
                $scope.progress =$scope.progress +1;
                console.log("og")
            }else{
                $timeout(function(){
                   
                },3000)
            }
           },50)
    }
   
    $scope.submitUser = function(){
   
        if(($scope.userObject.email !== null || "") &&
            ($scope.userObject.password !== null || "")){
                $scope.loading= true;
                $timeout(function(){
                    $scope.finishedLoadingSuccess= true;
                    
                },3000)
                $timeout(function(){
                    $scope.loading = false;
                    $scope.finishedLoadingSuccess = false;

                    $scope.fadeOutHomePage = true;
                },5000)
               
                    
               
                
                console.log($scope.userObject)
               // User.create($scope.userObject).then(function(data){
               //     console.log(data)
               // })
                
            }else{
                
            }
    }
    $scope.nightModeToggle = function(){
        console.log("nightModeToggled")
        if(!$scope.nightMode){
            $scope.nightMode = true;
        }else{
            $scope.nightMode = false;
        }
    }
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
            $scope.homePageOpen = false;
           $scope.fadeInContact = true;
        },2000)

    }
}]);


}());


    