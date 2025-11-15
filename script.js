const nick = document.getElementById('name');
const place = document.getElementById('place');
const day = document.getElementById('date_day');
const hour = document.getElementById('date_hour');
const confirm = document.getElementById('confirm');
const whynot = document.getElementById('whynot');
const comments = document.getElementById('comments');


function testVar () {
    const name_var = nick.value;
    const place_var = place.value;
    const day_var = day.value;
    const hour_var = hour.value;
    const confirm_var = confirm.value 

    console.log(`Nome:${name_var} Place:${place_var} Day:${day_var} Hours:${hour_var } Confirmação:${confirm_var} `);
}

