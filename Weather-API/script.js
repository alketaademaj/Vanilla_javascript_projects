//Because of jquery qe can use something like get json, that is going to get API's data because it 
//is a json file

const data = "";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&appid=81edd230d41b142107dbd7724792cae2", data,
    function (data, textStatus, jqXHR) {
        console.log(data);

        var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
        //getting the picture by writing the address and then specifying it in the json file
        //plus adding it on the png format

        console.log(icon);
    }
);