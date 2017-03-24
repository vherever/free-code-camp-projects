/**
 * Created by vherever on 3/23/17.
 *
 * Build a Random Quote Machine
 */

var randomQuote = (function () {

    $.ajaxSetup({cache: false});

    // Instance stores a reference to the Singleton
    var instance;
    var options = {
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand',
        container: '#quoteContainer'
    };
    var html_template = [
        '<div id="quoteContainer">',
            '<div id="quote">Loading...</div>',
            '<div id="author"></div>',
            '<input id="getQuote" type="button" value="Get Quote" />',
        '</div>'
    ].join("");




    function init() {

        function getQuote () {
            return $.getJSON(options.url, function (res) {
                var data = res[0];
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

        return {
            drawContainer: function () {
                return drawContainer();
            },
            getQuote: function () {
                return getQuote();
            },
            clearContainer: function () {
                return clearContainer();
            }
        };

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


