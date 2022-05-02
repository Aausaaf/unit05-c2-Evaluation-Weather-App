var city = document.getElementById("city")


function datas()
{
    console.log(city.value)
    getData(city.value)
}
let API_KEY = "c19cffc7bbbb27c225547931a0740f80";

async function getData(dat) {
 
  let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dat}&appid=${API_KEY}&units=metric`);
  /* 
*/
  let data = await res.json();
  console.log(data)
  displaydata(data)
  
 
}

function displaydata(data)
{
   

  // console.log(data.Poster) 
  var main = document.getElementById("main")
   main.innerText=""
  main.setAttribute('class','main')
  var row1 = document.createElement('div');
  var row2 = document.createElement('div');
  let iframe = document.createElement("iframe");
  iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  iframe.width = 350;
  iframe.height = 330;
  iframe.setAttribute("class","ifram")
  row1.append( iframe);
   
  var title= document.createElement('h2')
  title.setAttribute('class','tit')
  title.innerText= "City Name" + " : " + data.name
  row2.appendChild(title)
 
  main.appendChild(row2);
var lang= document.createElement('h4')
  lang.setAttribute('class','lang')
  lang.innerText= "Temperatur" + " : " + data.main.temp + " °C"
  row2.appendChild(lang)
  var Country= document.createElement('h4')
  Country.setAttribute('class','lang')
  Country.innerText= "Pressure" + " : " + data.main.pressure
  row2.appendChild(Country)
  var Released= document.createElement('h4')
  Released.setAttribute('class','lang')
  Released.innerText= "Humidity" + " : " + data.main.humidity
  row2.appendChild(Released)
  var Writer= document.createElement('h4')
  Writer.setAttribute('class','lang')
  Writer.innerText= "Clouds" + " : " + data.clouds.all
  row2.appendChild(Writer)
  var Plot= document.createElement('h4')
  Plot.setAttribute('class','lang')
  Plot.innerText= "Sun raise" + " : " + data.sys.sunrise
  row2.appendChild(Plot)
  var Plot= document.createElement('h4')
  Plot.setAttribute('class','lang')
  Plot.innerText= "Sun set" + " : " + data.sys.sunset
  row2.appendChild(Plot)
  var Plot= document.createElement('h4')
  Plot.setAttribute('class','lang')
  Plot.innerText= "Wind speed" + " : " + data.wind.speed
  row2.appendChild(Plot)
  var Plot= document.createElement('h4')
  Plot.setAttribute('class','lang')
  Plot.innerText= "Desription " + " : " + data.weather[0].description
  row2.appendChild(Plot)
  
 
  main.appendChild(row1);

  row1.setAttribute('class','row1')
  row2.setAttribute('class','row2')
  
  
 
 
  
  

}
