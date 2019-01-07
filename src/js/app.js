
const input = $('#inputLGEx');
const thisDay=$('#this-day');
const thisDayImg = $('#this-day__img');
const tommorow = $('#tommorow-day');
const tommorowImg=$('#tommorow-day__img')
const afterTommorowDay = $('#after-tommorow-day');
const afterTommorowDayImg = $('#after-tommorow-day__img');
const cityName=$('#city-name');
const char = '<sup>o</sup>';
input.keypress(function (e) {
    if (e.which == 13) {

        //today
        let weatherbit = `https://api.weatherbit.io/v2.0/current?city=${input.val()}&key=7e5cfb6fc82247268e54b66455f03017`;
        $.ajax({
            url: weatherbit,
            method: 'GET'

        }).done((resp) => {
        
            thisDay.html(`  ${resp.data[0].temp} C${char}`);
            thisDayImg.attr('src', `./images/${resp.data[0].weather.icon}.svg`)
            cityName.addClass('fadeOut');
            setTimeout(function () {
                input.val("");
                
                setTimeout(function () {
                    cityName.text(`${resp.data[0].city_name}`);
                    cityName.addClass('slideInUp');
                }, 400);
                
            }, 1000);
            setTimeout(function() {
                cityName.removeClass('slideInUp');
                cityName.removeClass('fadeOut');
            }, 2000);
            
            }).fail((err) => {
                console.log('error')
            });

            //tommorow weather

        let weatherNextDay = `https://api.weatherbit.io/v2.0/forecast/daily?city=${input.val()}&key=7e5cfb6fc82247268e54b66455f03017&days=1`;
        $.ajax({
            url: weatherNextDay
            ,
            method: 'GET'

        }).done((resp) => {
            tommorow.html(` ${resp.data[0].temp} C${char}`);
            tommorowImg.attr('src', `./images/${resp.data[0].weather.icon}.svg`)
        }).fail((err)=>{
            console.log('next day forecast error');
        })
        //day after tommorow weather

        let afterTommorow = `https://api.weatherbit.io/v2.0/forecast/daily?city=${input.val()}&key=7e5cfb6fc82247268e54b66455f03017&days=2`;
        $.ajax({
            url: afterTommorow
            ,
            method: 'GET'

        }).done((resp) => {
            console.log(resp)
            afterTommorowDay.html(` ${resp.data[1].temp} C${char}`);
            afterTommorowDayImg.attr('src', `./images/${resp.data[1].weather.icon}.svg`)
        }).fail((err) => {
            console.log('after next day forecast error');
        })

    }
    
});