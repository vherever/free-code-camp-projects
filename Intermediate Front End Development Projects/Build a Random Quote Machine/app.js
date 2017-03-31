/**
 * Created by vherever on 3/23/17.
 *
 * Build a Random Quote Machine
 */

var randomQuote = (function () {

    $.ajaxSetup({cache: false});

    var instance;
    var options = {
        apiUrl: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand',
        container: '#quoteContainer'
    };
    var html_template = [
        '<div id="quoteContainer" class="quoteContainer">',
            '<div class="content">',
                '<div id="quote" class="quote"><span class="loading">Loading...</span></div>',
                '<div id="author" class="author"></div>',
            '</div>',
            '<input id="getQuote" class="getQuote" type="button" value="Get Quote" />',
            '<input id="makeTweet" class="makeTweet" type="button" value="Tweet this" />',
        '</div>'
    ].join("");

    var _quote = {
        content: '',
        title: ''
    };

    function init() {

        return {
            drawContainer: function () {
                return drawContainer();
            },
            getQuote: function () {
                return getQuote();
            },
            clearContainer: function () {
                return clearContainer();
            },
            makeTweet: function () {
                return makeTweet();
            }
        };

    }

    function getQuote () {
        return $.getJSON(options.apiUrl, function (res) {
            var data = res[0];
            fillColor();
            _quote.content = data.content;
            _quote.title = data.title;
            drawContent(data);
        })
    }

    function drawContainer() {
        return $('body').append(html_template);
    }

    function drawContent(data) {
        $(options.container).find('#quote').html(data.content);
        $(options.container).find('#author').html(data.title);
    }

    function clearContainer() {
        $(options.container).remove();
    }

    function getRandomColor() {
        var palette = [
            '#1abc9c', '#16a085', '#f1c40f', '#f39c12',
            '#2ecc71', '#27ae60', '#e67e22', '#d35400',
            '#3498db', '#2980b9', '#e74c3c', '#c0392b',
            '#9b59b6', '#8e44ad', '#bdc3c7',
            '#34495e', '#2c3e50', '#95a5a6', '#7f8c8d'
        ];

        return palette[Math.floor(Math.random() * (palette.length))];
    }

    function fillColor() {
        console.log(getRandomColor());
        var randomColor = getRandomColor();
        $(options.container).css('background', randomColor);
        $(options.container).find('.getQuote').css('color', randomColor);
    }

    function makeTweet() {
        var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
            + encodeURIComponent(_quote.content + _quote.title);
        window.open(url, '_blank');
    }

    return {
        getInstance: function () {
            if ( !instance ) {
                instance = init();
            }
            return instance;
        }
    };

})();

var randQuote = randomQuote.getInstance();
randQuote.drawContainer();
randQuote.getQuote();
$(document).on('click', '#getQuote', function() {
    randQuote.clearContainer();
    randQuote.drawContainer();
    randQuote.getQuote();
});
$(document).on('click', '#makeTweet',function () {
    randQuote.makeTweet();
});

