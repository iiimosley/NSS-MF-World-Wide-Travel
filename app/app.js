'use strict';

let main = angular.module("worldWide", ['ngRoute'])
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl: "../partials/guide-list.html",
                controller: "BookCtrl"
            })
            .when("/books/:book", {
                templateUrl: "../partials/guide-book.html",
                controller: "BookDetailCtrl"
            })
            .otherwise("/");
    });