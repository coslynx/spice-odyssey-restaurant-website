import axios from 'axios';

const openWeatherMapApiKey = process.env.OPENWEATHERMAP_API_KEY;

export const getWeather = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}&units=metric`
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};