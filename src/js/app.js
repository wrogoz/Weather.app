
const input = $('#inputLGEx');
const thisDay=$('#this-day');
const thisDayImg = $('#this-day__img');
const tommorow = $('#tommorow-day');
const tommorowImg=$('#tommorow-day__img')
const cityName=$('#city-name');

input.keypress(function (e) {
    if (e.which == 13) {

        //today


        let weatherbit = `https://api.weatherbit.io/v2.0/current?city=${input.val()}&key=7e5cfb6fc82247268e54b66455f03017`;
        $.ajax({
            url: weatherbit
            ,
            method: 'GET'

        }).done((resp) => {
            thisDay.text(` Dziś: ${resp.data[0].temp} C`);
            thisDayImg.attr('src', `src/images/${resp.data[0].weather.icon}.png`)
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

            //tommorow wheather

        let weatherNextDay = `https://api.weatherbit.io/v2.0/forecast/daily?city=${input.val()}&key=7e5cfb6fc82247268e54b66455f03017&days=2`;
        $.ajax({
            url: weatherNextDay
            ,
            method: 'GET'

        }).done((resp) => {
            tommorow.text(` Jutro: ${resp.data[0].temp} C`);
            tommorowImg.attr('src', `src/images/${resp.data[0].weather.icon}.png`)
        }).fail((err)=>{
            console.log('next day forecast error');
        })

    }
    
});