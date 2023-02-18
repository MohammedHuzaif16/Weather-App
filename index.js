const container=document.querySelector('.container')
const search=document.querySelector('.searchbox button')
const weather_box=document.querySelector('.weather-box')
const err=document.querySelector('.not-found')
const weather=document.querySelector('.weather')


search.addEventListener('click',()=>{

    const apikey='' //enter your own api key which will be available on the website OpenWeather
   const city=document.querySelector('.searchbox input' ).value
   
   if(city=== ' ')
        return ;
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
   .then(res=>res.json())
   .then(data=>{ console.log(data)

    if(data.cod==='404'){
        container.style.height='400px';
        weather_box.style.display='none';
        weather.style.display='none';
        err.style.display='block';
        err.classList.add('fadeIn');
        return;
    }

    err.style.display='none';
    err.classList.remove('fadeIn')

    const sky=document.querySelector('.weather-box img')
    const tempe=document.querySelector('.temperature')
    const condition=document.querySelector('.condition')
    const wind=document.querySelector('.wind span')
    const humid=document.querySelector(' .humidity span')

    const wea_sky=data.weather[0].main;
    switch(wea_sky){
        case 'Rainy':
            sky.src='images/rainy.jpg'
            break;
        case 'Clouds':
            sky.src='images/cloudy.jpg'
            break;
        case 'Sunny':
            sky.src='images/sunny.jpg'
            break;
        case 'Snowy':
            sky.src='images/snowy.jpg'
        default:
            sky.src='images/clear.jpg'
            break;
    }
   
    tempe.innerHTML=`${data.main.temp}<span> &deg C</span>`;
    condition.innerHTML=`${data.weather[0].description}`;
    wind.innerHTML=`${parseInt(data.wind.speed)}Km/h`;
    humid.innerHTML=`${data.main.humidity}%`;
    err.style.display='none';
    weather_box.style.display='';
    weather.style.display='';
    weather_box.classList.add('fadeIn');
    weather.classList.add('fadeIn');
    sky.classList.add('fadeIn')
    container.style.height='560px';
    
  
        
   })
})
