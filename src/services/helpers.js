export const getWeatherIcon = description => {
  let weatherIcon = '';
  switch (description) {
    case 'clear sky':
      weatherIcon = 'wi-wu-clear';
      break;
    case 'few clouds':
      weatherIcon = 'wi-wu-partlycloudy';
      break;
    case 'scattered clouds':
      weatherIcon = 'wi-wu-partlycloudy';
      break;
    case 'broken clouds':
      weatherIcon = 'wi-day-cloudy';
      break;
    case 'shower rain':
      weatherIcon = 'wi-day-showers';
      break;
    case 'rain':
      weatherIcon = 'wi-day-rain';
      break;
    case 'thunderstorm':
      weatherIcon = 'wi-day-thunderstorm';
      break;
    case 'snow':
      weatherIcon = 'wi-day-snow';
      break;
    case 'mist':
      weatherIcon = 'wi-day-cloudy';
      break;
    default:
  }
  return weatherIcon;
};
