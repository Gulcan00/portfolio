import Card from './components/card';
import './style.css';
import weatherApp from './images/weather_app.png';
import todoList from './images/todo_list.png';
import battleship from './images/battleship.png';
import cvApplication from './images/cv_application.png';
import memoryGame from './images/memory_game.png';
import connectFour from './images/connect_four.png';

function myWorks() {
  const works = [
    {
      screenshotUrl: memoryGame,
      title: 'Memory Card',
      description:
        'In MeowMory, players are presented with a grid of cards, each displaying a unique image of a cat fetched from an external API. The objective of the game is to click on each card only once.',
      repoLink: 'https://github.com/Gulcan00/memory-card',
      liveLink: 'https://meowmory-card-game.netlify.app/',
    },
    {
      screenshotUrl: cvApplication,
      title: 'CV Application',
      description:
        'This project is a React-based CV Builder Application created as part of the Odin Project. It allows users to easily input and manage their general information, educational experience, and practical experience for creating a professional CV.',
      repoLink: 'https://github.com/Gulcan00/cv-application',
      liveLink: 'https://gulcan-cv-application.netlify.app/',
    },
    {
      screenshotUrl: weatherApp,
      title: 'Weather App',
      description:
        'The app utilizes WeatherAPI to fetch real-time weather data. Users can search for weather forecasts in any location and toggle between Fahrenheit and Celsius units.',
      repoLink: 'https://github.com/Gulcan00/weather-app',
      liveLink: 'https://gulcan00.github.io/weather-app/',
    },
    {
      screenshotUrl: todoList,
      title: 'Todo List',
      description:
        'A simple, dynamic todo list application for managing daily tasks, with features like task prioritization, project organization, and persistent storage.',
      repoLink: 'https://github.com/Gulcan00/todo-list',
      liveLink: 'https://gulcan00.github.io/todo-list/',
    },
    {
      screenshotUrl: battleship,
      title: 'Battleship',
      description:
        'JavaScript implementation of the classic game "Battleship." Players strategically guess the location of their opponent\'s ships on a grid. The application features classes for ships, gameboards, and players, including a basic AI for computer-controlled opponents.',
      repoLink: 'https://github.com/Gulcan00/battleship',
      liveLink: 'https://gulcan00.github.io/battleship/',
    },
    {
      screenshotUrl: connectFour,
      title: 'Connect Four',
      description:
        'JavaScript implementation of the classic game "Connect Four."',
      repoLink: 'https://github.com/Gulcan00/connect-four',
      liveLink: 'https://gulcan00.github.io/connect-four/',
    },
  ];
  const cardsDiv = document.querySelector('.cards-container');
  works.forEach((work) => {
    cardsDiv.appendChild(Card(work));
  });
}

myWorks();
