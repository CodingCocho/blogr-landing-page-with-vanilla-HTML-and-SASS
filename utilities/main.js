const accordionTitles = document.querySelectorAll(".accordion-tab");
const accordionContent = document.querySelectorAll(".accordion-content");

function toggle(selected)
{
    let selectedId = selected.id;
    let index = parseInt(selectedId.charAt(selectedId.length-1))  - 1;
    accordionContent[index].classList.remove("closed");
    if(accordionContent[index].classList.contains("open"))
    {
        accordionContent[index].classList.remove("open");
        accordionTitles[index].classList.remove("selected-title");
        accordionTitles[index].childNodes[3].classList.remove("rotate-up");
        accordionContent[index].classList .add("closed");
        return;
    }
    accordionContent[index].classList.add("open");
    accordionTitles[index].classList.add("selected-title");
    accordionTitles[index].childNodes[3].classList.add("rotate-up");
    for(let i = 0; i < accordionContent.length; i++)
    {
        if(i === index)
        {
            continue;
        }
        else
        {
            accordionTitles[i].classList.remove("selected-title")
            accordionContent[i].classList.remove("open");
            accordionTitles[i].childNodes[3].classList.remove("rotate-up");
            accordionContent[i].classList.add("closed");
        }
    }
}


const mobileMenu = document.getElementById("mobile-menu");
const mobileNavbar = document.getElementById("navbar");
const text1= document.getElementById("text-1");
const text2 = document.getElementById("text-1-2");
const text3 = document.getElementById("text-2");
const buttons = document.getElementById("buttons-1")
const hamburgerIcon = document.getElementById("mobile-hamburger")
const closeIcon = document.getElementById("mobile-close")

const openMenu = () =>
{
    mobileMenu.style.display = "block";
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    buttons.style.display = "none";
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "inline";
}

const closeMenu = () =>
{
    mobileMenu.style.display = "none";
    text1.style.display = "block";
    text2.style.display = "block";
    text3.style.display = "block";
    buttons.style.display = "block";
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
}

const accordionTitles2 = document.querySelectorAll(".desktop-accordion-tab");
const accordionContent2 = document.querySelectorAll(".desktop-accordion-content");
const desktopItems = document.querySelectorAll(".desktop-accordion-item")

const toggle2 = (selected) =>
{
    let selectedId = selected.id;
    let index = parseInt(selectedId.charAt(selectedId.length-1))  - 1;
    if(index === 0)
    {
        desktopItems[index].style.marginTop = "130px";
    }
    if(index === 1)
    {
        desktopItems[index].style.marginTop = "110px";
    }
    if(index === 2)
    {
        desktopItems[index].style.marginTop = "95px";
    }

    accordionContent2[index].classList.remove("closed");
    if(accordionContent2[index].classList.contains("open"))
    {
        accordionContent2[index].classList.remove("open");
        accordionTitles2[index].classList.remove("selected-title");
        accordionTitles2[index].childNodes[3].classList.remove("rotate-up");
        accordionContent2[index].classList .add("closed");
        desktopItems[index].style.marginTop = "0px";
        return;
    }
    accordionContent2[index].classList.add("open");
    accordionTitles2[index].classList.add("selected-title");
    accordionTitles2[index].childNodes[3].classList.add("rotate-up");
    for(let i = 0; i < accordionContent2.length; i++)
    {
        if(i === index)
        {
            continue;
        }
        else
        {
            accordionTitles2[i].classList.remove("selected-title")
            accordionContent2[i].classList.remove("open");
            accordionTitles2[i].childNodes[3].classList.remove("rotate-up");
            accordionContent2[i].classList.add("closed");
            desktopItems[i].style.marginTop = "0px";
        }
    }
}

function load()
{
    for(let i = 0; i < accordionContent.length; i++)
    {
        accordionContent[i].classList.add("closed");
    }
    for(let i = 0; i < accordionContent2.length; i++)
    {
        accordionContent2[i].classList.add("closed");
    }
    for(let i = 0; i < desktopItems.length; i++)
    {
        desktopItems[i].style.marginTop = "0px";
    }
}

closeMenu();
load();