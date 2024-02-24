import Card from './card';
import './style.css';

function myWorks() {
  const works = [
    {
      title: 'Weather App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo nunc, malesuada vitae congue a, lacinia id mi. Quisque tempor nibh libero, sed aliquet est sollicitudin vel. ',
    },
    {
      title: 'Weather App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo nunc, malesuada vitae congue a, lacinia id mi. Quisque tempor nibh libero, sed aliquet est sollicitudin vel. ',
    },
    {
      title: 'Weather App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo nunc, malesuada vitae congue a, lacinia id mi. Quisque tempor nibh libero, sed aliquet est sollicitudin vel. ',
    },
    {
      title: 'Weather App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo nunc, malesuada vitae congue a, lacinia id mi. Quisque tempor nibh libero, sed aliquet est sollicitudin vel. ',
    },
    {
      title: 'Weather App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo nunc, malesuada vitae congue a, lacinia id mi. Quisque tempor nibh libero, sed aliquet est sollicitudin vel. ',
    },
    {
      title: 'Weather App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo nunc, malesuada vitae congue a, lacinia id mi. Quisque tempor nibh libero, sed aliquet est sollicitudin vel. ',
    },
  ];
  const cardsDiv = document.querySelector('.cards-container');
  works.forEach((work) => {
    cardsDiv.appendChild(Card(work));
  });
}

myWorks();
