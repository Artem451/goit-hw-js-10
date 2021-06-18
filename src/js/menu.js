import menuCards from '../templates/menu-cards.hbs';
import menu from '../menu.json';

const menuList = document.querySelector('.js-menu')
const menuCardMurkup = createMenuCard(menu)

menuList.insertAdjacentHTML('afterbegin', menuCardMurkup)

function createMenuCard(menu) {
    return menuCards(menu)
}

