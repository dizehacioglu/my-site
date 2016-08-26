var app = angular.module('dize', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html'
    })
    .when('/work', {
      templateUrl: 'partials/work.html'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html'
    })
})
