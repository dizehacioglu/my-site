var app = angular.module('dize', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html'
    })
})
