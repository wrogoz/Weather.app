
const input = $('#inputLGEx');
const thisDay=$('#this-day');
const cityName=$('#city-name')
input.keypress(function (e) {
    if (e.which == 13) {
        let weatherbit = `https://api.weatherbit.io/v2.0/current?city=${input.val()}&key=7e5cfb6fc82247268e54b66455f03017`;
        $.ajax({
            url: weatherbit
            ,
            method: 'GET'

        }).done((resp) => {
            thisDay.text(` temp: ${resp.data[0].temp} C`);
            cityName.addClass('fadeOutUp');
            setTimeout(function () {
                cityName.text(`${resp.data[0].city_name}`);
                cityName.addClass('fadeInUpBig');
                setTimeout(function () {
                    input.val("");
                }, 500);
                
            }, 1000);
            setTimeout(function() {
                cityName.removeClass('fadeInUpBig');
                cityName.removeClass('fadeOutUp');
            }, 2000);
            
            }).fail((err) => {
                console.log('error')
            });

    }
    
});