var app = angular.module('regionsApp', []);

app.controller('regionsCtrl', function($scope, regionsService){
    $scope.regions =  regionsService.getRegions();
    $scope.setCurrentRegion = function(region){
        $scope.currentRegion = region;
    }
});

app.factory('regionsService', function($http){
    var regions = [];

    $http.get('regions.json').success(function(data){
        data.forEach(function(elem){
            regions.push(elem);
        })
    })

    return {
        getRegions: function(){
            return regions;
        }
    }
});

app.filter('capitalize', function(){
    return function(text){
        if (text)
            return text.charAt(0).toUpperCase() + text.slice(1);
    }
})

app.directive('detail', function(){
    return {
        restrict: 'E',
        templateUrl: 'detail.html',
        scope: {
            region: '='
        }
    }
})































