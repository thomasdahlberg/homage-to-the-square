function createRandomHomageElement() {
  const homageElement = document.createElement('homage-to-the-square');
  homageElement.setAttribute('random', '');
  return homageElement;
}

function addHomageElements() {
  const mainElement = document.body.querySelector('main');
  if (!!mainElement) {
    for(let i = 0; i < 10; i++) {
      const element = createRandomHomageElement();
      mainElement.appendChild(element);
    }
  }
}

const observer = new IntersectionObserver(addHomageElements);

const footer = document.body.querySelector('footer');

if(!!footer) observer.observe(footer);