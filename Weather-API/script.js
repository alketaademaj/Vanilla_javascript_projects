//Because of jquery qe can use something like get json, that is going to get API's data because it 
//is a json file

$.getJSON("http://openweathermap.org/data/2.5/weather?q=Orlando&appid=81edd230d41b142107dbd7724792cae2",
    function (data) {
        console.log(data);
    }
);