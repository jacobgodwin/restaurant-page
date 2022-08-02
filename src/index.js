import './style.css';
import buildInitial from './buildInitial';
import buildHome from './buildHome';
import buildMenu from './buildMenu';
import buildContact from './buildContact';

buildInitial();

buildHome();

let navBar = document.getElementsByTagName('li');

for (const item of navBar) {
  if (item.innerHTML === 'Home') {
    item.addEventListener('click', buildHome);
  } else if (item.innerHTML === 'Menu') {
    item.addEventListener('click', buildMenu);
  } else if (item.innerHTML === 'Contact') {
    item.addEventListener('click', buildContact);
  }
}
