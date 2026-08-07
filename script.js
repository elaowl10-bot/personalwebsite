// Find the about button (if it exists) and add a click action
const aboutPage = document.getElementById('aboutPage');
if (aboutPage) {
    aboutPage.addEventListener('click', () => {
        window.location.href = 'page2.html';
    });
}

// Find the home button and add a click action (guarded)
const homePage = document.getElementById('homePage');
if (homePage) {
    homePage.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

const elaArt = document.getElementById('elaArt');
if (elaArt) {
    elaArt.addEventListener('click', () => {
        window.location.href = 'artpage.html';
    });
}
const lessons = document.getElementById('lessons');
if (lessons) {
    lessons.addEventListener('click', () => {
        window.location.href = 'artlessons.html';
    });
}

const storePage = document.getElementById('storePage');
if (storePage) {
    storePage.addEventListener('click', () => {
        window.location.href = 'store.html';
    });
}

const artGallery = document.getElementById('artGallery');
if (artGallery) {
    artGallery.addEventListener('click', () => {
        window.location.href = 'artgallery.html';
    });
}

const comissions = document.getElementById('comissions');
if (comissions) {
    comissions.addEventListener('click', () => {
        window.location.href = 'comissions.html';
    });
}


const projects = document.getElementById('projects');
if (projects) {
    projects.addEventListener('click', () => {
        window.location.href = 'projects.html';
    });
}



document.querySelectorAll('.swing').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    element.classList.remove('is-wobbling');
    void element.offsetWidth;
    element.classList.add('is-wobbling');
  });

  element.addEventListener('animationend', () => {
    element.classList.remove('is-wobbling');
  });
});

document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = e.pageX + "px";
  star.style.top = e.pageY + "px";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1000);
});

const popUp = document.querySelectorAll(".popUp");

window.addEventListener("scroll", () => {
  popUp.forEach(popup => {
    const rect = popup.getBoundingClientRect();

    if(rect.top < window.innerHeight * 0.8){
      popup.classList.add("visible");
    }
  });
});

const currentPage = window.location.pathname.split("/").pop();



    const gallery = document.querySelector(".gallery-grid");

    if (gallery) {
        const cards = Array.from(gallery.querySelectorAll(".flip-card"));
        const buttons = Array.from(gallery.querySelectorAll(".view-full"));
        const buttonsByImage = new Map(
            buttons.map(button => [button.dataset.image, button])
        );

        cards.forEach((card, index) => {
            const wrapper = document.createElement("div");
            wrapper.className = "art-gallery-item";
            gallery.insertBefore(wrapper, card);
            wrapper.appendChild(card);

            const image = card.querySelector(".flip-card-front img");
            const matchingButton = image ? buttonsByImage.get(image.getAttribute("src")) : buttons[index];

            if (matchingButton) {
                wrapper.appendChild(matchingButton);
            }
        });

        gallery.querySelectorAll(".galbtn-container").forEach(container => container.remove());
    }

if (currentPage === "projects.html") {
    document.getElementById("projects")?.classList.add("active-page-anchor");
}


if (currentPage === "index.html" || currentPage === "") {
    document.getElementById("homePage")?.classList.add("active-page");
}

if (currentPage === "page2.html") {
    document.getElementById("aboutPage")?.classList.add("active-page");
}

if (currentPage === "artpage.html") {
    document.getElementById("elaArt")?.classList.add("active-page");
}

if (currentPage === "comissions.html") {
    document.getElementById("comissions")?.classList.add("active-page-anchor");
}
if (currentPage === "artgallery.html") {
    document.getElementById("artGallery")?.classList.add("active-page-anchor");
}

if (currentPage === "artlessons.html") {
    document.getElementById("lessons")?.classList.add("active-page-anchor");
}

document.querySelectorAll(".slideshow-container").forEach(slideshow => {

    let slides = slideshow.querySelectorAll(".mySlides");
    let dots = slideshow.querySelectorAll(".dot");
    let prev = slideshow.querySelector(".prev");
    let next = slideshow.querySelector(".next");

    let current = 0;

    function showSlide(index) {

        if (index >= slides.length) current = 0;
        else if (index < 0) current = slides.length - 1;
        else current = index;

        slides.forEach(slide => {
            slide.style.display = "none";
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        slides[current].style.display = "block";
        dots[current].classList.add("active");
    }

    next.addEventListener("click", () => {
        showSlide(current + 1);
    });

    prev.addEventListener("click", () => {
        showSlide(current - 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    showSlide(0);

});

function toggleOtherInput() {
    const selectMenu = document.getElementById('selectMenu');
    const otherText = document.getElementById('otherText');
    const otherContainer = document.getElementById('otherContainer');

    if (!selectMenu || !otherText || !otherContainer) return;

    if (selectMenu.value === 'other') {
        otherContainer.style.display = 'block';
        otherText.style.display = 'block';
        otherText.required = true;
        otherText.focus();
    } else {
        otherContainer.style.display = 'none';
        otherText.style.display = 'none';
        otherText.required = false;
        otherText.value = '';
    }
}

const selectMenu = document.getElementById('selectMenu');
if (selectMenu) {
    selectMenu.addEventListener('change', toggleOtherInput);
    toggleOtherInput();
}

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (rect.height/2-y)/15;
        const rotateY = (x-rect.width/2)/15;

        card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";

    });

});



const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item=>{

const header = item.querySelector(".accordion-header");

header.addEventListener("click",()=>{

item.classList.toggle("active");

});

});


let complexity = 3;
const optionMed= document.querySelectorAll(".optionMed");
const optionSub= document.querySelectorAll(".optionSub");
const optionDet= document.querySelectorAll(".optionDet");
const optionSize= document.querySelectorAll(".optionSize");
optionMed.forEach(button=>{

button.addEventListener("click",()=>{

const group1 = button.parentElement.querySelectorAll(".optionMed");

group1.forEach(b=>b.classList.remove("selected"));

button.classList.add("selected");
const text = button.textContent;

if(button.dataset.type=="medium"){

canvasMedium.textContent=text;

}


});
});


optionSub.forEach(button=>{

button.addEventListener("click",()=>{

const group2 = button.parentElement.querySelectorAll(".optionSub");

group2.forEach(b=>b.classList.remove("selected"));

button.classList.add("selected");
const text = button.textContent;
if(button.dataset.type=="subject"){

canvasSubject.textContent=text;

}



});

});

optionSize.forEach(button=>{

button.addEventListener("click",()=>{

const group3 = button.parentElement.querySelectorAll(".optionSize");

group3.forEach(b=>b.classList.remove("selected"));

button.classList.add("selected");
const text = button.textContent;

if(button.dataset.type=="size"){

canvasSize.textContent=text;

}



});

});

optionDet.forEach(button=>{

button.addEventListener("click",()=>{

const group4 = button.parentElement.querySelectorAll(".optionDet");

group4.forEach(b=>b.classList.remove("selected"));

button.classList.add("selected");
const text = button.textContent;

if(button.dataset.price) {

canvasDetail.textContent=text;
complexity=parseInt(button.dataset.price);
updatePrice();
}




});

});


function updatePrice(){
    let highPrice= 0;
let lowPrice=0;
if (canvasSize.textContent=="Small")
     {
    highPrice=395;
    lowPrice=120;
    if (complexity===1)  {
highPrice=highPrice-195;
lowPrice=lowPrice-20;
    }
if (complexity===2)  {
highPrice=highPrice-75;
lowPrice=lowPrice-10;
}
if (complexity===4)  {
highPrice=highPrice+75;
lowPrice=lowPrice+10;
}
if (complexity===5)  {
highPrice=highPrice+195;
lowPrice=lowPrice+20;
}
}

else if (canvasSize.textContent=="Medium")
 {
highPrice=800;
lowPrice=400;
if (complexity===1)  {
highPrice=highPrice-300;
lowPrice=lowPrice-200;
}
if (complexity===2)  {
highPrice=highPrice-150;
lowPrice=lowPrice-50;
}

if (complexity===4)  {
highPrice=highPrice+150;
lowPrice=lowPrice+50;
}
if (complexity===5)  {
highPrice=highPrice+300;
lowPrice=lowPrice+200;
}
} else if (canvasSize.textContent=="Large") {
lowPrice=1000;
if (complexity===1)  {
lowPrice=lowPrice-500;
}
if (complexity===2)  {
lowPrice=lowPrice-225;
}
if (complexity===4)  {
lowPrice=lowPrice+225;
}
if (complexity===5)  {
lowPrice=lowPrice+500;
}
}


if ((canvasSize.textContent==="Medium") || (canvasSize.textContent==="Small")) {
price.textContent="$"+lowPrice + "- $"+ highPrice;
} else {
    price.textContent="$"+lowPrice + "+"
}
}

const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImg");

let modalContent = document.getElementById("modalContent");

const closeModal = document.getElementById("closeModal");

if (modal && modal.parentElement !== document.body) {
    document.body.appendChild(modal);
}

if (modal && !modalContent) {
    modalContent = document.createElement("div");
    modalContent.id = "modalContent";
    modalContent.style.display = "none";
    modal.appendChild(modalContent);
}

const inlineFlipContainer = document.querySelector(".flip-container");
const flipbookEl = inlineFlipContainer ? inlineFlipContainer.querySelector(".flipbook") : null;

// Set up flip-container as its own modal overlay
if (inlineFlipContainer) {
    inlineFlipContainer.style.display = "none";

    const flipClose = document.createElement("span");
    flipClose.textContent = "\u00d7";
    flipClose.style.cssText = "position:absolute;top:30px;right:50px;font-size:70px;color:white;cursor:pointer;z-index:10001;font-family:sans-serif;line-height:1;user-select:none;";
    inlineFlipContainer.appendChild(flipClose);

    flipClose.addEventListener("click", closeFlipbookModal);
    inlineFlipContainer.addEventListener("click", e => {
        if (e.target === inlineFlipContainer) closeFlipbookModal();
    });
}

function clearModalContent() {
    if (modalContent) {
        modalContent.innerHTML = "";
        modalContent.style.cssText = "display:none;";
    }
    if (modalImg) {
        modalImg.removeAttribute("src");
        modalImg.style.display = "none";
    }
}

function openImageModal(imageSrc) {
    if (!modal || !modalImg || !imageSrc) return;
    clearModalContent();
    modalImg.src = imageSrc;
    modalImg.style.display = "block";
    modal.classList.add("show");
}

function closeFlipbookModal() {
    if (inlineFlipContainer) {
        inlineFlipContainer.style.cssText = "display:none;";
    }
}

function openFlipbookModal() {
    if (!inlineFlipContainer || !flipbookEl) return;

    // Each page = fbW/2 wide. Landscape ratio ~0.7 tall per page width.
    const fbW = Math.floor(Math.min(window.innerWidth * 0.92, 1200));
    const fbH = Math.floor(Math.min(fbW / 2 * 0.67, window.innerHeight * 0.85));

    // Resize the already-initialized turn.js flipbook to fit the viewport
    if (window.jQuery) {
        try {
            window.jQuery(flipbookEl).turn("size", fbW, fbH);
        } catch(e) {
            flipbookEl.style.width = fbW + "px";
            flipbookEl.style.height = fbH + "px";
        }
    } else {
        flipbookEl.style.width = fbW + "px";
        flipbookEl.style.height = fbH + "px";
    }

    // Show flip-container as a centered full-screen overlay
    inlineFlipContainer.style.cssText = "display:flex;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);";
}

document.querySelectorAll(".view-full").forEach(button=>{

button.addEventListener("click",()=>{

const imageSrc = button.dataset.image;

if (imageSrc) {
openImageModal(imageSrc);
} else {
openFlipbookModal();
}

});

});

if (closeModal && modal) {
closeModal.addEventListener("click",()=>{

modal.classList.remove("show");
clearModalContent();

});

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("show");
clearModalContent();

}

});
}
document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

if(modal) { modal.classList.remove("show"); clearModalContent(); }
closeFlipbookModal();

}

});


window.addEventListener("mousemove",e=>{

const x=(e.clientX/window.innerWidth-.5)*20;
const y=(e.clientY/window.innerHeight-.5)*20;

const followElement = document.querySelector(".follow");
if (followElement) {
document.querySelector(".follow").style.transform=
`translate(${x}px,${y}px) rotate(5deg)`;
}

});

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

if (hamMenu && offScreenMenu) {
hamMenu.addEventListener("click",()=>{
    hamMenu.classList.toggle("open");
    offScreenMenu.classList.toggle("open");
});
}

// Toggle the dropdown menu visibility
function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('show');
}

// Update the button text based on selected items
function updateSelection() {
  const checkboxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');
  const btnText = document.querySelector('.btn-text');
  let selected = [];

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      // Find the text next to the checkbox
      selected.push(checkbox.nextElementSibling.textContent);
    }
  });

  // Update button text or revert to default
  if (selected.length > 0) {
    btnText.textContent = selected.join(', ');
  } else {
    btnText.textContent = 'select mediums)';
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.closest('.custom-multiselect')) {
    const menu = document.getElementById('dropdownMenu');
    if (menu && menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  }
};