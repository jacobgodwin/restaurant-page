const buildInitial = () => {
  let content = document.getElementById('content');
  let header = document.createElement('header');
  let section = document.createElement('section');
  let nav = document.createElement('nav');
  let ul = document.createElement('ul');
  let footer = document.createElement('footer');
  let gitIcon = document.createElement('i');
  let span = document.createElement('span');
  span.innerHTML = 'Jacob Godwin';
  gitIcon.classList.add('bi', 'bi-github');
  footer.appendChild(gitIcon);
  footer.appendChild(span);
  const navOptions = ['Home', 'Menu', 'Contact'];

  content.appendChild(header);
  section.innerHTML = 'Slice Pizza';
  header.appendChild(section);
  header.append(nav);
  nav.appendChild(ul);
  for (const option of navOptions) {
    let li = document.createElement('li');
    li.innerHTML = option;
    ul.appendChild(li);
  }
  content.appendChild(footer);
};

export default buildInitial;
