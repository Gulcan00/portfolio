import './card.css';

export default function Card({
  screenshotUrl,
  title,
  description,
  repoLink = '#',
  liveLink = '#',
}) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = screenshotUrl;

  cardContainer.appendChild(cardImg);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card__body');
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card__body__header');
  const titleH3 = document.createElement('h3');
  titleH3.classList.add('title');
  titleH3.textContent = title;
  cardHeader.appendChild(titleH3);

  const iconsDiv = document.createElement('div');
  iconsDiv.classList.add('links');
  const repoIcon = document.createElement('a');
  repoIcon.innerHTML = '<i class="devicon-github-original colored"></i>';
  repoIcon.href = repoLink;
  iconsDiv.appendChild(repoIcon);

  const liveIcon = document.createElement('a');
  liveIcon.innerHTML =
    '<span class="material-symbols-outlined">open_in_new</span>';
  liveIcon.href = liveLink;
  iconsDiv.appendChild(liveIcon);

  cardHeader.appendChild(iconsDiv);
  cardBody.appendChild(cardHeader);

  const descriptionP = document.createElement('p');
  descriptionP.textContent = description;
  cardBody.appendChild(descriptionP);

  cardContainer.appendChild(cardBody);

  return cardContainer;
}
