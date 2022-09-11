let uvIndex = document.getElementById('uvIndex')
let locationInput = document.getElementById('input').value


function getWeather() {
    let locationInput = document.getElementById('input').value
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + locationInput + '&units=imperial&APPID=00cc8e4996e11fc0839f1509ee13059a') 
  
   .then(function (response) {
       return response.json();
   })
   .then(function (data) {
       console.log(data);
       console.log(data.city.name)
       console.log(data.list[0].dt)
       console.log(data.list[0].weather[0].icon)
       console.log(data.list[0].main.temp)
       console.log(data.list[0].wind.speed)
       console.log(data.list[0].main.humidity)

       let pDate = dayjs.unix(data.list[0].dt).format('M/DD/YYYY')
       document.getElementById('city').innerHTML = data.city.name + " " + "(" + pDate + ")"
       document.getElementById('temp').innerHTML = 'Temp: ' + data.list[1].main.temp + '°F'
       document.getElementById('wind').innerHTML = 'Wind: ' + data.list[1].wind.speed + ' MPH'
       document.getElementById('humidity').innerHTML = 'Humidity: ' + data.list[1].main.humidity + '%'

       let pDate1 = dayjs.unix(data.list[8].dt).format('M/DD/YYYY')
       document.getElementById('date1').innerHTML = pDate1
       document.getElementById('symbol1').src = './assets/images/' + data.list[8].weather[0].icon + '.png';
       document.getElementById('temp1').innerHTML = 'Temp: ' + data.list[8].main.temp + '°F';
       document.getElementById('wind1').innerHTML = 'Wind: ' + data.list[8].wind.speed + ' MPH';
       document.getElementById('humidity1').innerHTML = 'Humidity: ' + data.list[8].main.humidity + '%';
       
       let pDate2 = dayjs.unix(data.list[16].dt).format('M/DD/YYYY')
       document.getElementById('date2').innerHTML = pDate2
       document.getElementById('symbol2').src = './assets/images/' + data.list[16].weather[0].icon + '.png';
       document.getElementById('temp2').innerHTML = 'Temp: ' + data.list[16].main.temp + '°F';
       document.getElementById('wind2').innerHTML = 'Wind: ' + data.list[16].wind.speed + ' MPH';
       document.getElementById('humidity2').innerHTML = 'Humidity: ' + data.list[16].main.humidity + '%';

       let pDate3 = dayjs.unix(data.list[24].dt).format('M/DD/YYYY')
       document.getElementById('date3').innerHTML = pDate3
       document.getElementById('symbol3').src = './assets/images/' + data.list[24].weather[0].icon + '.png';
       document.getElementById('temp3').innerHTML = 'Temp: ' + data.list[24].main.temp + '°F';
       document.getElementById('wind3').innerHTML = 'Wind: ' + data.list[24].wind.speed + ' MPH';
       document.getElementById('humidity').innerHTML = 'Humidity: ' + data.list[24].main.humidity + '%';

       let pDate4 = dayjs.unix(data.list[32].dt).format('M/DD/YYYY')
       document.getElementById('date4').innerHTML = pDate4
       document.getElementById('symbol4').src = './assets/images/' + data.list[32].weather[0].icon + '.png';
       document.getElementById('temp4').innerHTML = 'Temp: ' + data.list[32].main.temp + '°F';
       document.getElementById('wind4').innerHTML = 'Wind: ' + data.list[32].wind.speed + ' MPH';
       document.getElementById('humidity4').innerHTML = 'Humidity: ' + data.list[32].main.humidity + '%';

       let pDate5 = dayjs.unix(data.list[39].dt).format('M/DD/YYYY')
       document.getElementById('date5').innerHTML = pDate5
       document.getElementById('symbol5').src = './assets/images/' + data.list[39].weather[0].icon + '.png';
       document.getElementById('temp5').innerHTML = 'Temp: ' + data.list[39].main.temp + '°F';
       document.getElementById('wind5').innerHTML = 'Wind: ' + data.list[39].wind.speed + ' MPH';
       document.getElementById('humidity5').innerHTML = 'Humidity: ' + data.list[39].main.humidity + '%';
   });

}





