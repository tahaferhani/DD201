const cities = [
    {
        id: 1,
        name: "Paris",
        latitude: 48.856613,
        longitude: 2.352222,
        image: "/images/paris.jpg"
    },
    {
        id: 2,
        name: "Shanghai",
        latitude: 31.230391,
        longitude: 121.473701,
        image: "/images/shanghai.jpg"
    },
    {
        id: 3,
        name: "London",
        latitude: 40.741895,
        longitude: -73.989308,
        image: "/images/london.jpg"
    },
    {
        id: 4,
        name: "Casablanca",
        latitude: 33.5945144,
        longitude: -7.6200284,
        image: "/images/casablanca.jpg"
    }
];

$("#cities").change(function() {
    const id = $(this).val();
    const city = cities.find(item => item.id == id);
    $("#body-bg, #card-bg").css("background-image", `url(${city.image})`);

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,is_day,rain&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=auto`;

    $.get(url, function(data) {
        $("#temp").html(data.current.temperature_2m + " C°");

        if (data.current.rain != 0) {
            $("#icon").attr("src", "/icons/rain.svg");
        }
        else if (data.current.is_day) {
            $("#icon").attr("src", "/icons/sun.svg");
        }
        else {
            $("#icon").attr("src", "/icons/moon.svg");
        }
    })
})

