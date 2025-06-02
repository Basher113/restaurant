import "./styles.css";

import HomePage from "./home";
import MenuPage from "./menu";
import ContactPage from "./contact"

function ContentController() {
    const tabsList = document.querySelectorAll(".tab");
    const contentDiv = document.querySelector("#content")
    const homePage = HomePage();
    

    const renderPage = (content=homePage) => {
        contentDiv.textContent = "";
        contentDiv.appendChild(content);
    }

    tabsList.forEach(tab => {
        tab.addEventListener("click", () => {
            if (tab.textContent === "Menu") {
                const menuPage = MenuPage();
                renderPage(menuPage)
            } else if (tab.textContent === "Home") {
                renderPage()
            } else {
                const contactPage = ContactPage();
                renderPage(contactPage)
            }
        })
    })
    renderPage()
}

ContentController()