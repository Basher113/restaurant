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
            setActiveTab(tab);
            if (tab.textContent === "Menu") {
                const menuPage = MenuPage();
                renderPage(menuPage);
            } else if (tab.textContent === "Contact") {
                const contactPage = ContactPage();
                renderPage(contactPage)
            } else {
                renderPage()
            }
        })
    })

    const setActiveTab = (tab) => {
        tabsList.forEach(tabEl => {
            tab === tabEl ? tabEl.classList.add("active") : tabEl.classList.remove("active");
        })
    }

    // Initialize the active tab for home
    setActiveTab(tabsList[0]);
    
    renderPage();
}

ContentController()