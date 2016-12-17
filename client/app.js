'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('myApp', ['ngRoute']);

require('./controllers');

app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'views/main.html',
    controller: 'MainController'
  }).when('/create',{
    templateUrl: 'views/create.html',
    controller: 'MainController'
  }).when('/delete',{
    templateUrl: 'views/delete.html',
    controller: 'MainController'
  }).when('/edit',{
    templateUrl: 'views/edit.html',
    controller: 'MainController'
    }).when('/city',{
    templateUrl: 'views/city.html',
    controller: 'CityController'
    }).when('/oder',{
    templateUrl: 'views/oder.html',
    controller: 'MainController'
  })
  .when('/theater',{
    templateUrl: 'views/theater.html',
    controller: 'theaterController'
  })

  .when('/time',{
    templateUrl: 'views/time.html',
    controller: 'timeController'
  });

});
