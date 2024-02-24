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
  cardImg.width = 300;

  cardContainer.appendChild(cardImg);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const titleH3 = document.createElement('h3');
  titleH3.classList.add('title');
  titleH3.textContent = title;
  cardBody.appendChild(titleH3);

  const repoIcon = document.createElement('a');
  repoIcon.innerHTML = '<i class="devicon-github-original colored"></i>';
  repoIcon.href = repoLink;
  cardBody.appendChild(repoIcon);

  const liveIcon = document.createElement('a');
  liveIcon.innerHTML =
    '<span class="material-symbols-outlined">open_in_new</span>';
  liveIcon.href = liveLink;
  cardBody.appendChild(liveIcon);

  const descriptionP = document.createElement('p');
  descriptionP.textContent = description;
  cardBody.appendChild(descriptionP);

  cardContainer.appendChild(cardBody);

  return cardContainer;
}
