$("#cities").change(function() {
    let coords = $(this).val().split(",");
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&current=temperature_2m,is_day,rain&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=auto`;

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

// .value .val()
// .value = "test"  .val("test")

// .parentElement .parent()
// .nextElementSibling .next() .nextAll()
// .previousElementSibling .prev()  .prevAll()

// .innerHTML   .html()
// .innerHTML = "Test"  .html("Test")
// .textContent .text()
// .textContent = "Test"  .text("Test")

