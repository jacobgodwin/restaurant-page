const buildMenu = () => {
  const menuItems = [
    {
      Title: 'Classico',
      Ingredients: 'San Marzano tomato sauce, bufala mozzarella, fresh basil',
    },
    {
      Title: 'Pepperoni',
      Ingredients: 'San Marzano tomato sauce, fresh mozzarella, pepperoni',
    },
    {
      Title: 'Carnivora',
      Ingredients:
        'San Marzano tomato sauce, fresh mozzarella, pancetta, soppressata, sausage, red onions, garlic, fresh basil',
    },
    {
      Title: 'Vegetarian',
      Ingredients:
        'San Marzano tomato sauce, fresh mozzarella, mushrooms, artichoke, fresh garlic, fresh spinach, grape tomato',
    },
  ];

  function createMenuItem(title, ingredients, id) {
    const menuItem = document.createElement('div');
    menuItem.dataset.menu = id + 1;
    menuItem.classList.add('menu-item');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('menu-title');
    titleDiv.innerHTML = title;
    menuItem.appendChild(titleDiv);

    const ingredientsDiv = document.createElement('div');
    ingredientsDiv.classList.add('menu-ingredients');
    ingredientsDiv.innerHTML = ingredients;
    menuItem.appendChild(ingredientsDiv);

    return menuItem;
  }

  let main = document.getElementsByTagName('main')[0];
  main.replaceChildren();
  let section = document.createElement('section');
  section.classList.add('menu-container');
  for (const item of menuItems) {
    section.appendChild(
      createMenuItem(item.Title, item.Ingredients, menuItems.indexOf(item))
    );
  }
  main.appendChild(section);
};

export default buildMenu;
