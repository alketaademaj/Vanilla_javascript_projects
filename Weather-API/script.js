//Because of jquery qe can use something like get json, that is going to get API's data because it 
//is a json file

var city = "Washington DC";

const data = "";
//http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&appid=81edd230d41b142107dbd7724792cae2 is the other option

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=81edd230d41b142107dbd7724792cae2", data, 
    function (data, textStatus, jqXHR) {
        console.log(data);

        var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
        //getting the picture by writing the address and then specifying it in the json file
        //plus adding it on the png format

        var temperature = Math.floor(data.main.temp);
        var weather = data.weather[0].main;

        console.log(icon);

        $('.icon').attr('src', icon); //the index html file has these class names so it shows them on the page
        $('.temperature').append(temperature);
        $('.weather').append(weather);
    }
);