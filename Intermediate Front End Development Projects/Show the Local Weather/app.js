/**
 * Created by vherever on 31.03.2017.
 *
 * temp_in_Fahrenheit = temp_in_Celsius * 9/5 + 32
 *
 */

var localWeather = (function () {

    // $.ajaxSetup({cache: false});

    var instance;

    var $searchCity = $('#searchCity');
    var $searchButton = $('#searchButton');

    var $weatherContainer = $('#weatherContainer');
    var $errorMessage = $('#errorMessage');

    var options = {
        apiUrl : 'http://api.openweathermap.org/data/2.5/weather?q=',
        apiKey: 'd4cec04e7716cc23e89ddd7d77914104',
        imgUrl: 'http://openweathermap.org/img/w/',
        container: ''
    };

    var html_template = [
        '<div id="weatherContainer">',
            '<div id="city"></div>',
            '<div id="country"></div>',
            '<div id="description"></div>',
            '<div id="icon"></div>',
            '<div id="temp"></div>',
            '<div id="temp_min_max"></div>',
        '</div>'
    ].join('');

    var _weather = {
        name: '',
        country: '',
        description: '',
        icon: '',
        temp: undefined,
        temp_max: undefined,
        temp_min: undefined
    };


    function getTheWeather() {
        $searchButton.on('click', function () {
            if(validate()) {
                $errorMessage.html('');
                $.ajax({
                    url: options.apiUrl + $searchCity.val() + '&appid=' + options.apiKey + '&units=metric',
                    success: function (data) {
                        _weather = {
                            name: data.name,
                            country: data.sys.country,
                            description: data.weather[0].description,
                            icon: data.weather[0].icon,
                            temp: data.main.temp,
                            temp_min: data.main.temp_min,
                            temp_max: data.main.temp_max
                        };

                        console.log('_weather', _weather);
                        drawContent(_weather);

                    }
                });
            } else {
                $errorMessage.html('The city name cannot be empty!');
            }

        });
    }
    
    function drawContent(data) {
        $($weatherContainer).find('#city').html(data.name + ', ');
        $($weatherContainer).find('#country').html(data.country);
        $($weatherContainer).find('#description').html(data.description);
        $($weatherContainer).find('#icon').html('<img src="'+options.imgUrl + data.icon + '.png' +'">');
        $($weatherContainer).find('#temp').html('<a href="javascript:;">' + data.temp + ' °C' + '</a>');
        $($weatherContainer).find('#temp_min_max').html(
            [
                '<div class="temp_min">',
                    '<span class="">min: </span>',
                        data.temp_min,
                '</div>',
                '<div class="temp_max">',
                    '<span class="">max: </span>',
                        data.temp_max,
                '</div>'
            ].join('')
        );
    }

    function validate() {
        return !!$searchCity.val().length;
    }

    function init() {
        console.log('init!');
        getTheWeather();
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

var getWeather = new localWeather();
getWeather.getInstance();