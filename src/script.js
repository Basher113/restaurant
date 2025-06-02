import "./styles.css";

import HomePage from "./home";
import MenuPage from "./menu"

function ContentController() {
    const tabsList = document.querySelectorAll(".tab");
    const contentDiv = document.querySelector("#content")
    const homePage = HomePage();
    const menuPage = MenuPage();

    const renderPage = (content=homePage) => {
        contentDiv.textContent = "";
        contentDiv.appendChild(content);
    }

    tabsList.forEach(tab => {
        tab.addEventListener("click", () => {
            if (tab.textContent === "Menu") {
                renderPage(menuPage)
            } else if (tab.textContent === "Home") {
                renderPage()
            }
        })
    })
    renderPage()
}

ContentController()