'use strict';

angular.module("worldWide")
    .controller("BookCtrl", function ($scope, GuideFactory) {

        GuideFactory.getGuides()
            .then((bookData) => {
                $scope.books = bookData.data.guides;
            });

    });