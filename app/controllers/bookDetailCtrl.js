"use strict";

angular.module("worldWide")
    .controller("BookDetailCtrl", function ($scope, $routeParams, GuideFactory) {

        GuideFactory.getGuides()
        .then(bookData => {
            $scope.bookDetail = bookData.data.guides.find(
                guide => guide.id === +$routeParams.book
            );

        });
    });
