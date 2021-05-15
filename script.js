const input = document.querySelector("input[type=checkbox]");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const theme = localStorage.getItem("theme");

if(theme){
    document.documentElement.setAttribute("data-theme", theme);
    mode(theme);
    if(theme === 'dark'){
        input.checked = true;
    }else{
        input.checked = false;
    }
}

input.addEventListener("change", switchTheme);


function switchTheme(e){
    const value = e.target.checked;
    if(value){
        document.documentElement.setAttribute("data-theme", "dark");
        mode("dark");
        localStorage.setItem("theme", "dark");
    }else{
        document.documentElement.setAttribute("data-theme", "light");
        mode("light");
        localStorage.setItem("theme", "light");
    }
}

// function darkMode(){
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].innerText = "Dark Mode";
//     toggleIcon.children[1].className = "fas fa-moon";
//     image1.src = "img/undraw_proud_coder_dark.svg";
//     image2.src = "img/undraw_feeling_proud_dark.svg";
//     image3.src = "img/undraw_conceptual_idea_dark.svg";
// }
// function lightMode(){
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].innerText = "Light Mode";
//     toggleIcon.children[1].className = "fas fa-sun";
//     image1.src = "img/undraw_proud_coder_light.svg";
//     image2.src = "img/undraw_feeling_proud_light.svg";
//     image3.src = "img/undraw_conceptual_idea_light.svg";
// }

function mode(mode){
    nav.style.backgroundColor = mode === 'light' ? 'rgb(255 255 255 / 50%)': 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = mode === 'light' ? 'rgb(0 0 0 / 50%)': 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].innerText = mode === 'light'? "Light Mode": "Dark Mode";
    toggleIcon.children[1].className = mode === 'light'? "fas fa-sun": "fas fa-moon";
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}