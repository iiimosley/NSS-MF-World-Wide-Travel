'use strict';

angular.module("worldWide").factory("GuideFactory", function ($q, $http) {

    let getGuides = () => {
        return $q((resolve, reject) => {
            $http
                .get("../../data/guides.json")
                .then(bookData => {
                    let allBooks = bookData.data.guides;
                    for (let i = 0; i < allBooks.length; i++) {
                        allBooks[i].id = i;
                        allBooks[i].type = allBooks[i].type.charAt(0).toUpperCase() + allBooks[i].type.slice(1);
                        allBooks[i].price = allBooks[i].price.toFixed(2);
                    }
                    resolve(bookData);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    return { getGuides };

});