/**
 * Created by vherever on 06.04.2017.
 */

var app = angular.module('WikipediaSearch', []);

app.controller('MainController', function ($scope, $http) {

    var o = {
        selectors: {
            form: $('form'),
            search: $('#search'),
            result: $('#results')
        },
        apiUrl: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=',
        cb: '&callback=JSON_CALLBACK',
        pageUrl: 'https://en.wikipedia.org/?curid='
    };

    function cropImage(imgUrl) {
        if (imgUrl.indexOf("50px-") >= 0) {
            return imgUrl.replace('50px-', '100px-');
        } else {
            return imgUrl.replace('36px-', '75px-');
        }
    }

    $scope.search = function () {
        $scope.results = [];
        var searchWord = o.selectors.search.val();

        $http.jsonp(o.apiUrl + searchWord + o.cb)
            .success(function (res) {
                angular.forEach(res.query.pages, function (i) {
                    $scope.results.push({
                        title: i.title,
                        content: i.extract,
                        pageUrl: o.pageUrl + i.pageid,
                        imageUrl: i.thumbnail ? cropImage(i.thumbnail.source) : ''
                    })
                });
            })
    };


});