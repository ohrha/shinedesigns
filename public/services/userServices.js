angular.module('userServices', []).config(function () {



    console.log("UserService")



}).factory('User', function($http){


    userFactory = {}
    userFactory.create = function (userObject) {

        return $http.post("/api/users/create", userObject)





    }
    return userFactory

})