# Weather Finder - REST API Integration

## 📋 Project Overview

A dynamic weather application that integrates with the OpenWeatherMap REST API to fetch and display real-time weather data. Built as part of the Codveda Technology Level 2 Internship program, this project demonstrates API integration, debounced search, error handling, and responsive design.

## ✨ Features

- **Real-Time Weather Data**: Fetches current weather information from OpenWeatherMap API
- **Debounced Search**: Optimized search with 800ms delay to reduce API calls
- **Dynamic Content**: Weather data updates based on user input
- **Error Handling**: Graceful error messages for invalid cities or API failures
- **Loading States**: Visual feedback during data fetching
- **Comprehensive Weather Info**: Temperature, humidity, wind speed, pressure, visibility
- **Sunrise/Sunset Times**: Formatted local time display
- **Weather Icons**: Dynamic icons based on weather conditions
- **Responsive Design**: Beautiful UI that works on all devices

## 🛠️ Technologies Used

- **React 18**: Modern React with Hooks
- **OpenWeatherMap API**: REST API for weather data
- **Fetch API**: For making HTTP requests
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for UI elements
- **Debouncing**: Search optimization technique

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd weather-api-app
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install lucide-react
```

4. Get your API key:
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

5. Create a `.env` file in the root directory:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

6. Start the development server:
```bash
npm start
```

## 🔑 API Configuration

### OpenWeatherMap API

The application uses the OpenWeatherMap Current Weather Data API:

**Endpoint**: `https://api.openweathermap.org/data/2.5/weather`

**Parameters**:
- `q`: City name
- `appid`: Your API key
- `units`: metric (for Celsius)

**Example Request**:
```javascript
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`
);
```

### Rate Limiting

- Free tier: 60 calls/minute
- Debouncing prevents excessive API calls
- Search delay: 800ms

## 🎯 Key Features Explained

### 1. Debounced Search
```javascript
const handleSearch = (searchCity) => {
  if (searchTimeout) clearTimeout(searchTimeout);
  
  const timeout = setTimeout(() => {
    fetchWeather(searchCity);
  }, 800);
  
  setSearchTimeout(timeout);
};
```

### 2. Error Handling
- Network errors
- Invalid city names
- API failures
- User-friendly error messages

### 3. Loading States
- Displays loading spinner during API calls
- Prevents multiple simultaneous requests
- Smooth user experience

### 4. Dynamic Weather Icons
```javascript
const getWeatherIcon = (weatherMain) => {
  const iconMap = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    // ... more conditions
  };
  return iconMap[weatherMain] || '🌤️';
};
```

## 📁 Project Structure

```
src/
├── App.js              # Main weather application component
├── components/
│   ├── WeatherCard.js  # Weather display component
│   ├── SearchBar.js    # Search input component
│   └── Loading.js      # Loading state component
├── utils/
│   └── api.js          # API configuration and calls
└── index.js           # Application entry point
```

## 🚀 Deployment

### Deploy on Vercel

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - Key: `REACT_APP_WEATHER_API_KEY`
   - Value: Your OpenWeatherMap API key
5. Deploy!

### Deploy on Netlify

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import repository
4. Add environment variables in Site Settings
5. Deploy!

## 📊 Weather Data Displayed

- **Temperature**: Current and "feels like"
- **Weather Condition**: Clear, Cloudy, Rainy, etc.
- **Wind Speed**: In meters per second
- **Humidity**: Percentage
- **Pressure**: In hectopascals
- **Visibility**: In kilometers
- **Sunrise Time**: Local time
- **Sunset Time**: Local time

## 🎨 UI Components

### Search Bar
- Real-time search with debouncing
- Clear placeholder text
- Icon indicator

### Weather Cards
- Main temperature display
- Weather condition icon
- "Feels like" temperature
- Grid layout for metrics

### Info Cards
- Wind speed
- Humidity
- Pressure
- Visibility
- Sunrise/Sunset times

## 🔧 Customization

### Change Temperature Units
```javascript
// In API call, change units parameter:
units: 'imperial' // for Fahrenheit
units: 'metric'   // for Celsius
```

### Adjust Debounce Delay
```javascript
const timeout = setTimeout(() => {
  fetchWeather(searchCity);
}, 800); // Change this value (in milliseconds)
```

## 🐛 Common Issues & Solutions

### Issue: API Key Not Working
**Solution**: Make sure your API key is active (can take a few hours after registration)

### Issue: No Weather Data Displayed
**Solution**: Check browser console for errors, verify API key in `.env` file

### Issue: Slow Search Response
**Solution**: Check your internet connection and API rate limits

## 📝 License

This project is created for educational purposes as part of the Codveda Technology internship program.

## 🙏 Acknowledgments

- **Codveda Technology** - For the internship opportunity
- **OpenWeatherMap** - For providing weather data API
- **React Team** - For the React framework

## 📧 Contact

For questions or feedback:
- **LinkedIn:** [My LinkedIn Profile](https://linkedin.com/in/theodore-abbey)
- **GitHub:** [My GitHub Profile](https://github.com/theodoreabbey173)
- **Email:** theodoreabbey174@gmail.com
- **Portfolio:** [My Portfolio Website](https://your-portfolio.com)

## 🏷️ Tags

#CodvedaJourney #CodvedaExperience #FutureWithCodveda #ReactJS #APIIntegration #WeatherApp #WebDevelopment

---

**Note**: This project was completed as part of Level 2, Task 2 of the Codveda Technology Front-End Development Internship Program.