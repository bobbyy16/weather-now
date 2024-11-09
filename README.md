# Weather Dashboard App

A modern, responsive weather dashboard built with React that provides real-time weather information and activity suggestions based on current weather conditions.

![Weather Dashboard Preview](https://i.postimg.cc/1XB7fS8V/Screenshot-2024-11-09-110738.png)

## 🌟 Features

- **Real-time Weather Data**: Fetches current weather information from OpenWeatherMap API
- **Activity Suggestions**: Provides contextual activity recommendations based on weather conditions
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Sleek interface with animations and loading states
- **Error Handling**: Graceful error handling with user-friendly messages
- **Default Template**: Shows London weather data by default

## 🚀 Tech Stack

- React 18
- Tailwind CSS
- Framer Motion for animations
- Lucide React for icons
- OpenWeatherMap API

## 📋 Prerequisites

Before you begin, ensure you have:

- Reactjs
- npm or yarn package manager
- OpenWeatherMap API key

## 💻 Installation

1. Clone the repository:

```bash
git clone https://github.com/bobbyy16/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🔧 Configuration

The app uses environment variables for configuration. Create a `.env` file with the following variables:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

### Activity Suggestions

You can modify the activity suggestions in the `getSuggestedActivities` function within the `Weather` component.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for the styling system

## 📧 Contact

Your Name - [@bobsstwt](https://twitter.com/bobsstwt) - bobbyyyyy16@gmail.com

Project Link: [https://github.com/bobbyy16/weather-now](https://github.com/bobbyy16/weather-now)
