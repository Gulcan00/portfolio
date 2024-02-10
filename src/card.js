export default function Card({
  screenshotUrl,
  title,
  description,
  repoLink,
  liveLink,
}) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = screenshotUrl;
  cardImg.width = 300;
  cardImg.height = 'auto';

  cardContainer.appendChild(cardImg);

  const cardBody = document.createElement('div');
  const titleH2 = document.createElement('h2');
  titleH2.textContent = title;
  cardBody.appendChild(titleH2);

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
