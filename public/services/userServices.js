angular.module('userServices', []).config(function () {



    console.log("UserService")



}).factory('User', function($http){


    userFactory = {}
    userFactory.create = function (userObject) {

        return $http.post("/api/users/create", userObject)

    }
    userFactory.getProfileImage = function(id){
        return $http.get('/api/users/getprofileimage/'+id)
    }
    userFactory.uploadProfileImage = function(){
        return $http.post('/api/users/uploadprofileimage')
    }
    return userFactory

})