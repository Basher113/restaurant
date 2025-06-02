import "./styles.css";
import imagePath from "./assets/pexels-kristina-nikolskaya-396769113-31150174.jpg";

function HomePage() {
    const homeDiv = document.createElement("div");
    const homeTextDiv = document.createElement("div");
    const homeH2Text = document.createElement("h2");
    const homeDescriptionDiv = document.createElement("div");
    const homeDescriptionh3 = document.createElement("h3");
    const homeDescriptionPara = document.createElement("p");

    homeH2Text.textContent = "Fresh and delicious";
    homeDescriptionPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum mollitia ratione quisquam ea aut quaerat repudiandae at enim, quidem perspiciatis magnam repellat! Quidem ex repellendus, non ratione molestias voluptatibus?"; 
    homeDescriptionh3.textContent = "Description";
    
    const homeImage = document.createElement("img");
    homeImage.src = imagePath;
    homeImage.alt = "Food Background Image";

    homeTextDiv.classList.add("text")
    homeDescriptionDiv.classList.add("description");
    homeDiv.classList.add("home");

    homeDescriptionDiv.appendChild(homeDescriptionh3);
    homeDescriptionDiv.appendChild(homeDescriptionPara);

    homeTextDiv.appendChild(homeH2Text);
    homeTextDiv.appendChild(homeDescriptionDiv);

    homeDiv.appendChild(homeTextDiv);
    homeDiv.appendChild(homeImage);
    console.log(homeDiv)
    return homeDiv;
}


export default HomePage;
        
