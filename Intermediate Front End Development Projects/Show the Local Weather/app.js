/**
 * Created by vherever on 31.03.2017.
 */

var localWeather = (function () {

    $.ajaxSetup({cache: false});

    var instance;
    var options = {
        apiUrl : '',
        apiKey: '',
        container: ''
    };

    var html_template = [
        '<div id="weatherContainer">',
        '</div>'
    ].join('');

    var _weather = {

    };

    function getLocalWeather() {
        
    }
    
    function drawContent() {
        
    }
    
    function clearContent() {
        
    }

    function init() {
        console.log('init!');
    }

    return {
        getInstance: function () {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }

});

var local = new localWeather();
local.getInstance();