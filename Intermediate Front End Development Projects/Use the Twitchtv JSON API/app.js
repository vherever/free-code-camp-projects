/**
 * Created by vherever on 07.04.2017.
 *
 * Use the Twitchtv JSON API
 */

var Twitch = function () {

    var instance;
    var channels = ["freecodecamp", "kaypealol", "brofresco", "Starladder5", "sonycast_"];

    var o = {
        apiUrl: 'https://wind-bow.glitch.me/twitch-api/',
        cb: '?callback=?'
    };

    var _channel = {
        display_name: '',
        followers: undefined,
        game: '',
        logo: ''
    };

    var _stream = {
        channel: {
            game: '',
            status: '',
            url: ''
        }
    };

    var _channels = [];
    var _streams = [];

    function makeUrl(type, name) {
        return o.apiUrl + type + '/' + name;
    }

    function getChannelData() {
        $.each(channels, function (i) {
            $.getJSON(makeUrl("channels", channels[i]), function (res) {
                _channels.push(res);
                console.log('_channels', _channels);
                drawContainer();

            });

            $.getJSON(makeUrl("streams", channels[i]), function (res) {
                if (res.stream) {
                    _streams.push(res);
                    console.log('_stream', _stream);
                }
            });
        });
    }

    function tpl(selector) {
        return _.template($(selector).html());
    }

    function drawContainer() {
        $("#twitchContainer").html(tpl('#twitchAppTemplate')({
            _channels: _channels
        }));
    }

    function init() {
        console.log('init..');
        getChannelData();
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }

};

var twitch = new Twitch();
twitch.getInstance();