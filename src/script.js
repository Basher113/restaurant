import "./styles.css";

import HomeModule from "./home";

function ContentController() {
    const tabsList = document.querySelectorAll(".tab");
    const contentDiv = document.querySelector("#content")
    const home = HomeModule();

    const renderPage = () => {
        contentDiv.appendChild(home);
    }

    tabsList.forEach(tab => {
        tab.addEventListener("click", () => {
            console.log(tab.textContent)
        })
    })
    renderPage()
}

ContentController()