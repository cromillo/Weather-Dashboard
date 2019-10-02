//Variables
let authKey = "166a433c57516f51dfab1f7edaed8413";
let queryTerm = "";

/////////////////////////////////////////////////////

let m = moment();
let startdate = moment().add(1, "days").format("MM-DD-YYYY");
console.log(startdate)

function queryWeatherApi() {
    let newURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + queryTerm + "&units=imperial&appid=" + authKey;
    console.log(newURL)

    //AJAX Function
    $.ajax({ url: newURL, method: "GET"})
    .then(function(response) {
        console.log(newURL)
        console.log(response)
        displayOnPage(response); // display response
    });
};

function displayOnPage(response) {
    console.log('INSIDE DISPLAY ON PAGE', response);
    // all code that displays response object on page
    //Transfer to HTML
    let iconCode = response.list[0].weather[0].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $(".currentCity").html("City: " +response.city.name +"  ("+ (m.format("MMMM D, YYYY"))+ ")  "+"<img src='" + iconUrl  + "'>");
        console.log(response.list[0].dt_txt)
    console.log(response.list[0].weather[0].icon)
    $(".temp").text("Temperature: " + response.list[0].main.temp +" °F" );
    $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%");
    $(".windSpeed").text("Wind Speed: " + response.list[0].wind.speed +" MPH");
    $(".uvIndex").text("UV Index: " + response);
    $(".dayOneDate").text(moment().add(1, "days").format("MM/DD/YYYY"));
    $(".dayOneTemp").text("Temperature: " + response.list[4].main.temp +"°F");
    $(".dayOneIcon").html("<img src='" + "http://openweathermap.org/img/w/"+ response.list[4].weather[0].icon+ ".png" +"'>")
    $(".dayOneHumid").text("Humidity: " + response.list[4].main.humidity + "%");
    $(".dayTwoDate").text(moment().add(2, "days").format("MM/DD/YYYY"));
    $(".dayTwoTemp").text("Temperature: " + response.list[12].main.temp +" °F");
    $(".dayTwoIcon").html("<img src='" + "http://openweathermap.org/img/w/"+ response.list[12].weather[0].icon+ ".png" +"'>")
    $(".dayTwoHumid").text("Humidity: " + response.list[12].main.humidity + "%");
    $(".dayThreeDate").text(moment().add(3, "days").format("MM/DD/YYYY"));
    $(".dayThreeTemp").text("Temperature: " + response.list[20].main.temp +" °F");
    $(".dayThreeIcon").html("<img src='" + "http://openweathermap.org/img/w/"+ response.list[20].weather[0].icon+ ".png" +"'>")
    $(".dayThreeHumid").text("Humidity: " + response.list[20].main.humidity + "%");
    $(".dayFourDate").text(moment().add(4, "days").format("MM/DD/YYYY"));
    $(".dayFourTemp").text("Temperature: " + response.list[28].main.temp +" °F");
    $(".dayFourIcon").html("<img src='" + "http://openweathermap.org/img/w/"+ response.list[28].weather[0].icon+ ".png" +"'>")
    $(".dayFourHumid").text("Humidity: " + response.list[28].main.humidity + "%");
    $(".dayFiveDate").text(moment().add(5, "days").format("MM/DD/YYYY"));
    $(".dayFiveTemp").text("Temperature: " + response.list[36].main.temp +" °F");
    $(".dayFiveIcon").html("<img src='" + "http://openweathermap.org/img/w/"+ response.list[36].weather[0].icon+ ".png" +"'>")
    $(".dayFiveHumid").text("Humidity: " + response.list[36].main.humidity + "%");
}; 

//function fiveDayForecast() { 
  //  let fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + queryTerm + "&units=imperial&appid=" + authKey;
//}


/////////////////////////////////////////////////////
//URL Base

//let newURL = queryURLBase + queryTerm + "&appid=" + authKey
//queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" + authKey;
//queryURLBase = "https://api.openweathermap.org/data/2.5/forecast?q="
// let newURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + queryTerm + "&appid=" + authKey;
// console.log(newURL)

// //AJAX Function
// $.ajax({ url: newURL, method: "GET"})
// .then(function(response) {
//     console.log(newURL)
//     console.log(response)
// });

//Main Processes
//Button click
$('.btn').on('click', function() {
        
    queryTerm = $('#search').val().trim();
    console.log(queryTerm);
    queryWeatherApi();

    
    

});