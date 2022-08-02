const buildContact = () => {
  console.log('This is the Contact button!');
  let main = document.getElementsByTagName('main')[0];
  main.replaceChildren();
  //Section container
  let section = document.createElement('section');
  section.classList.add('contact-info');
  section.classList.add('flex-center');

  //Contact Us line
  let contactIntro = document.createElement('div');
  contactIntro.classList.add('content-heading');
  contactIntro.innerHTML = 'Contact Us';
  section.appendChild(contactIntro);

  //Main contact content
  let contactMain = document.createElement('div');
  contactMain.classList.add('contact-content');
  section.appendChild(contactMain);

  //Phone Number and Icon
  let phone = document.createElement('div');
  phone.classList.add('contact-phone');
  phone.classList.add('flex-align');
  let phoneIcon = document.createElement('i');
  phoneIcon.classList.add('bi', 'bi-telephone-fill');
  phone.appendChild(phoneIcon);
  let phoneNumber = document.createElement('span');
  phoneNumber.innerHTML = '(444)-444-4444';
  phone.appendChild(phoneNumber);

  //Email address and Icon
  let email = document.createElement('div');
  email.classList.add('contact-email');
  email.classList.add('flex-align');
  let emailIcon = document.createElement('i');
  emailIcon.classList.add('bi', 'bi-envelope-fill');
  email.appendChild(emailIcon);
  let emailAddr = document.createElement('span');
  emailAddr.innerHTML = 'slicepizza@pizza.com';
  email.appendChild(emailAddr);

  //Store Hours

  const days = [
    {
      Days: 'Tues - Thurs',
      Hours: '11am - 9pm',
    },
    {
      Days: 'Fri & Sat',
      Hours: '11am - 9:30pm',
    },
    {
      Days: 'Sun',
      Hours: '4pm - 9pm',
    },
    {
      Days: 'Mon',
      Hours: 'Closed',
    },
  ];

  //Store hours div container
  let storeHours = document.createElement('div');
  storeHours.classList.add('hours-container');

  //Header div for store hours
  let hoursHeader = document.createElement('div');
  hoursHeader.classList.add('hours-header');
  hoursHeader.classList.add('flex-align');
  let hoursIcon = document.createElement('i');
  hoursIcon.classList.add('bi', 'bi-clock-fill');
  hoursHeader.appendChild(hoursIcon);
  let hoursHeadText = document.createElement('span');
  hoursHeadText.innerHTML = 'Store Hours';
  hoursHeader.appendChild(hoursHeadText);
  storeHours.appendChild(hoursHeader);

  //Days open
  let hoursList = document.createElement('ul');
  hoursList.classList.add('hours-list');
  for (const day of days) {
    let li = document.createElement('li');
    li.innerHTML = day.Days + ': ' + day.Hours;
    hoursList.appendChild(li);
  }
  storeHours.appendChild(hoursList);

  contactMain.appendChild(storeHours);
  contactMain.appendChild(phone);
  contactMain.appendChild(email);
  contactMain.appendChild(storeHours);
  main.appendChild(section);
};

export default buildContact;
