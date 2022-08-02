const buildHome = () => {
  let content = document.getElementById('content');
  let main = document.getElementsByTagName('main');
  let section = document.createElement('section');
  let div = document.createElement('div');
  let p = document.createElement('p');
  let footer = document.getElementsByTagName('footer')[0];
  div.classList.add('content-heading');
  div.innerHTML = 'About';

  p.innerHTML =
    'Slice Pizza serves up authentic, Italian style pizzas. <br><br>Made with our homemade pizza dough. Using Tipo 00 flour, the pizzas are topped with fresh, local ingredients and then cooked in our large brick ovens. Swing by and try a slice today!';

  if (main.length === 0) {
    main = document.createElement('main');

    section.classList.add('flex-center');

    p.classList.add('about-para');

    content.insertBefore(main, footer);

    main.appendChild(section);

    section.appendChild(div);

    section.appendChild(p);
  } else {
    let main = document.getElementsByTagName('main')[0];

    main.replaceChildren();

    section.classList.add('flex-center');

    p.classList.add('about-para');

    content.insertBefore(main, footer);

    main.appendChild(section);

    section.appendChild(div);

    section.appendChild(p);
  }
};

export default buildHome;
