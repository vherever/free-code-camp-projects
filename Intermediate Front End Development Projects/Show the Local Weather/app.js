/**
 * Created by vherever on 31.03.2017.
 *
 * temp_in_Fahrenheit = temp_in_Celsius * 9/5 + 32
 *
 */

var LocalWeather = (function () {

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
        container: '',
        _metric: 'cels', // option here - fahr, cels
        _units: 'C' // options here - C, F
    };

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
                        drawContent(_weather);
                    },
                    error: function (error) {
                        $('#errorMessage').html('Cannot find the city. Please try another');
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
        $($weatherContainer).find('#temp').html('<a href="javascript:;">' + drawTemp(data.temp) + ' °' + options._units + '</a>');
        $($weatherContainer).find('#temp_min_max').html(
            [
                '<div class="temp_min">',
                    '<span class="">min: </span>',
                    drawTemp(data.temp_min),
                '</div>',
                '<div class="temp_max">',
                    '<span class="">max: </span>',
                    drawTemp(data.temp_max),
                '</div>'
            ].join('')
        );
    }

    function drawTemp(temp) {
        if(options._metric == 'cels') {
            return Math.round(temp);
        } else if(options._metric == 'fahr') {
            return Math.round(temp * 9/5 + 32);
        }
    }

    $(document).on('click', '#temp a', function () {
        if(options._metric == 'cels') {
            options._metric = 'fahr';
            options._units = 'F';
        } else if(options._metric == 'fahr') {
            options._metric = 'cels';
            options._units = 'C';
        }
        drawContent(_weather);
    });

    function validate() {
        return !!$searchCity.val().length;
    }

    function init() {
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

var weather = new LocalWeather();
weather.getInstance();