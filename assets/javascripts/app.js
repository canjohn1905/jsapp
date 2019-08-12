$("#searchbtn").on("click", function () {

    var search = $("#searchTerm").val();

    function weatherSearch(search) {
        // New York Times API URL
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&units=imperial" + "&APPID=1cec49349feb875e92ba5a0f825e326f";

        // console.log(queryURL)

        // AJAX call to NYT API
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                //  console.log(response.weather[0].main);
                $('#article-con').empty()
                for (var i = 0; i < response.weather.length; i++) {
                    // console.log(response[i]);
                    $('#article-con').append("<h1> Tempurature: " + response.main.temp + "F</h1>");
                    $('#article-con').append("<h1> Humidity: " + response.main.humidity + "</h1>");
                    $('#article-con').append("<h1> Description: " + response.weather[0].description + "</h1>");
                    $('#article-con').append("<h1> Wind Speed: " + response.wind.speed + "</h1>");
                }
            });
    }

    weatherSearch(search);

    function putImage(search) {
        // New York Times API URL
        var queryURL = "https://api.unsplash.com/search/photos?page=1&query=" + search + "&client_id=7a3d0d2fb3ccdbbdb16a3e5fccbb06d70262fa6f6a532bc60fab8147aea076c9";

        // console.log(queryURL)

        // AJAX call to NYT API
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response.results[0]);
                $('#article-con').empty()
                for (var i = 0; i < response.results.length; i++) {
                    console.log(response);
                    // var newimg = $('#header');
                    // $('#article-con').append("<h1> Tempurature: "+response.main.temp +"F</h1>"); 
                    // $("body").css("backgroundImage", "url(" + response.results[0].urls + ")");
                    $('body').css("background-image", "url(" + response.results[0].urls.regular + ")");
                    // newimg.css({ 'background-image': 'url(' + response.results[0].urls + ')', 'position': 'absolute', 'height': '70px', 'width': '200px', 'top': '68px', 'right': '2px' });
                    // newimg.show();
                    

                }
            });
    }
    putImage(search)
});

