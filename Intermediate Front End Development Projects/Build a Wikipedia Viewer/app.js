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
        api: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=',
        cb: '&callback=JSON_CALLBACK',
        pageId: 'https://en.wikipedia.org/?curid='
    };

    $scope.search = function () {
        $scope.results = [];
        var searchWord = o.selectors.search.val();

        // $http.get(o.api + searchWord + o.cb)
        //     .then(function (res) {
        //         console.log('res', res);
        //     }, function () {
        //
        //     })

        $http.jsonp(o.api + searchWord + o.cb)
            .success(function(res) {
                angular.forEach(res.pages, function (i) {
                    $scope.results.push({
                        title: i.title,
                        content: i.extract,
                        pageId: i.pageid,
                        thumbnail: i.thumbnail.source
                    });
                });
            })


    };


});