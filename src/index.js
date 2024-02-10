import Card from './card';
import './style.css';

function myWorks() {
  const works = [{ title: 'Weather App' }];
  const workSection = document.querySelector('.my-work');

  works.forEach((work) => {
    workSection.appendChild(Card(work));
  });
}

myWorks();
