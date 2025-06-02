import Menu1ImagePath  from "./assets/menu1.jpg"
import Menu2ImagePath  from "./assets/menu2.jpg"
function MenuPage() {
    const menu = document.createElement('div');
    menu.className = 'menu';

    const heading = document.createElement('h3');
    heading.textContent = 'Menu';
    menu.appendChild(heading);

    const menuCards = document.createElement('div');
    menuCards.className = 'menu-cards';

    const cardsData = [
        { src: Menu1ImagePath, extraClass: "menu-1", alt: "menu1 food image"},
        { src: Menu2ImagePath, alt: "menu2 food image"},
        { src: Menu1ImagePath, alt: "menu3 food image" },
        { src: Menu2ImagePath, alt: "menu4 food image"}
    ];

    cardsData.forEach(data => {
        const card = document.createElement('div');
        card.className = `menu-card ${data.extraClass}`.trim();

        const img = document.createElement('img');
        img.src = data.src;
        img.alt = 'menu';

        const cardText = document.createElement('div');
        cardText.className = 'menu-card-text';

        const name = document.createElement('h4');
        name.className = 'menu-name';
        name.textContent = 'Menu6';

        const para = document.createElement('p');
        para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quia distinctio repudiandae, commodi reiciendis inventore laborum autem dicta. Delectus nostrum quo a, odio quis molestias voluptas culpa et omnis perspiciatis. consectetur adipisicing elit. Eum quia distinctio repudiandae, commodi reiciendis inventore laborum autem dicta. Delectus nostrum quo a, odio quis molestias voluptas culpa et omnis perspiciatis.';
      
        cardText.appendChild(name);
        cardText.appendChild(para);

        card.appendChild(img);
        card.appendChild(cardText);

        menuCards.appendChild(card);
    });

    // Append all to main menu
    menu.appendChild(menuCards);
    return menu;
}

export default MenuPage