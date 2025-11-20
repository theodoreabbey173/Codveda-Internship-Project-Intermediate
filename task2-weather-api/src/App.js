import React, { useState, useEffect } from 'react';
import { Search, MapPin, Cloud, Wind, Droplets, Eye, Gauge, Sunrise, Sunset, Loader, AlertCircle, Navigation } from 'lucide-react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);

  // Debounced search function
  const handleSearch = (searchCity) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (!searchCity.trim()) {
      setWeatherData(null);
      setError('');
      return;
    }

    setLoading(true);
    setError('');

    const timeout = setTimeout(() => {
      fetchWeather(searchCity);
    }, 800);

    setSearchTimeout(timeout);
  };

  // Fetch by City Name
  const fetchWeather = async (searchCity) => {
    try {
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // Fixed: Now using .env variable
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found or API error');
      }

      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // NEW: Fetch by Coordinates (Location Button)
  const fetchWeatherByLocation = async (lat, lon) => {
    try {
      setLoading(true);
      setError('');
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error('Unable to fetch weather for your location');
      }

      const data = await response.json();
      setWeatherData(data);
      setCity(data.name); // Updates the search bar with the detected city name
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // NEW: Handle Location Button Click
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByLocation(latitude, longitude);
        },
        (err) => {
          setLoading(false);
          setError("Location access denied. Please enable permissions.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    handleSearch(value);
  };

  const getWeatherIcon = (weatherMain) => {
    const iconMap = {
      Clear: '☀️',
      Clouds: '☁️',
      Rain: '🌧️',
      Drizzle: '🌦️',
      Thunderstorm: '⛈️',
      Snow: '❄️',
      Mist: '🌫️',
      Fog: '🌫️',
      Haze: '🌫️'
    };
    return iconMap[weatherMain] || '🌤️';
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Weather Finder</h1>
          <p className="text-blue-100">Search for real-time weather information</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
          
          {/* Updated Search Bar with Location Button */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-blue-200" size={20} />
            </div>
            <input
              type="text"
              value={city}
              onChange={handleInputChange}
              placeholder="Enter city name (e.g., London)..."
              className="w-full pl-12 pr-12 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button
              onClick={handleLocationClick}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-200 hover:text-white transition-colors"
              title="Use my location"
            >
              <Navigation size={20} />
            </button>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader className="animate-spin text-white mb-4" size={48} />
              <p className="text-white text-lg">Loading weather data...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/20 border border-red-300/50 rounded-2xl p-6 flex items-center space-x-4">
              <AlertCircle className="text-red-200 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-white font-semibold mb-1">Error</h3>
                <p className="text-red-100">{error}</p>
              </div>
            </div>
          )}

          {weatherData && !loading && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <MapPin className="text-white" size={24} />
                  <h2 className="text-3xl font-bold text-white">
                    {weatherData.name}, {weatherData.sys.country}
                  </h2>
                </div>
                <p className="text-blue-100 capitalize">{weatherData.weather[0].description}</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-8 text-center border border-white/20">
                <div className="text-8xl mb-4">
                  {getWeatherIcon(weatherData.weather[0].main)}
                </div>
                <div className="text-6xl font-bold text-white mb-2">
                  {Math.round(weatherData.main.temp)}°C
                </div>
                <p className="text-blue-100 text-lg">
                  Feels like {Math.round(weatherData.main.feels_like)}°C
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Wind className="text-blue-200" size={20} />
                    <span className="text-blue-100 text-sm">Wind</span>
                  </div>
                  <p className="text-white text-xl font-semibold">
                    {weatherData.wind.speed} m/s
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Droplets className="text-blue-200" size={20} />
                    <span className="text-blue-100 text-sm">Humidity</span>
                  </div>
                  <p className="text-white text-xl font-semibold">
                    {weatherData.main.humidity}%
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Gauge className="text-blue-200" size={20} />
                    <span className="text-blue-100 text-sm">Pressure</span>
                  </div>
                  <p className="text-white text-xl font-semibold">
                    {weatherData.main.pressure} hPa
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="text-blue-200" size={20} />
                    <span className="text-blue-100 text-sm">Visibility</span>
                  </div>
                  <p className="text-white text-xl font-semibold">
                    {(weatherData.visibility / 1000).toFixed(1)} km
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sunrise className="text-yellow-200" size={20} />
                    <span className="text-blue-100 text-sm">Sunrise</span>
                  </div>
                  <p className="text-white text-xl font-semibold">
                    {formatTime(weatherData.sys.sunrise)}
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sunset className="text-orange-200" size={20} />
                    <span className="text-blue-100 text-sm">Sunset</span>
                  </div>
                  <p className="text-white text-xl font-semibold">
                    {formatTime(weatherData.sys.sunset)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {!weatherData && !loading && !error && (
            <div className="text-center py-12">
              <Cloud className="mx-auto text-white/50 mb-4" size={64} />
              <p className="text-white text-lg">Enter a city name or check your location</p>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/80 text-sm">
            Data provided by OpenWeatherMap API
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;