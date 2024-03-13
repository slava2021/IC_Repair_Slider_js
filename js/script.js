let images = [{
    url: "images/slider_1.jpg",
    title: ["Rostov-on-Don<br> LCD admiral", "81 m2", "3.5 months", "Upon request"],
    button: "Rostov-on-Don, Admiral"
}, {
    url: "images/slider_2.jpg",
    title: ["Sochi<br> Thieves", "105 m2", "4 months", "Upon request"],
    button: "Sochi Thieves"
}, {
    url: "images/slider_3.jpg",
    title: ["Rostov-on-Don<br> Patriotic", "93 m2", "3 months", "Upon request"],
    button: "Rostov-on-Don Patriotic"
}];

function initSlider(options) {
    if (!images || !images.length) return;

    options = options || {
        dots: true,
        title: false
    }

    let sliderImages = document.querySelector(".main-projects-slider__images");
    let sliderArrows = document.querySelector(".main-projects__slider-nav");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderText = document.querySelector(".main-projects__container");
    let sliderButtons = document.querySelector(".main-projects__nav");

    initImages();
    initArrows();

    //Настройки слайжера
    if (options.buttons) {
        initButtons();
    }

    if (options.dots) {
        initDots();
    }

    if (options.titles) {
        initTitles();
    }

    // Добавляем елемент div с классом и dataset в документ
    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index == 0 ? "active" : ""}" data-index="${index}" style="background-image: url(${images[index].url});"></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }

    //Вешаем обработчик собыйтий на стрелки слайдера
    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrows").forEach(arrow => {
            arrow.addEventListener("click", function () {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;

                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    //Добавляем точки и вешаем обработчик событий на точки к слайдеру
    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="dots n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });

        sliderDots.querySelectorAll(".dots").forEach(dot => {
            dot.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            });
        });


    }

    //Добавляем кнопки и вешаем обработчик
    function initButtons() {
        images.forEach((image, index) => {
            let button = `<button class="main-projects__link n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${image.button}</button>`;
            sliderButtons.innerHTML += button;
        });


        sliderButtons.querySelectorAll(".main-projects__link").forEach(button => {
            button.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            })
        });
    }

    //Удалаяем класс Active в кортинке и удаляем его, затем добавляем класс для активной картинки
    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");

        if (options.dots) {
            sliderDots.querySelector(".active").classList.remove("active");
            sliderDots.querySelector(".n" + num).classList.add("active");
        }

        if (options.buttons) {
            sliderButtons.querySelector(".active").classList.remove("active");
            sliderButtons.querySelector(".n" + num).classList.add("active");
        }

        if (options.titles) chageTitle(num);
    };

    //Добавляем подписи к картинкам
    function initTitles() {
        let sliderTitle = sliderText.querySelectorAll(".main-projects__block");
        sliderTitle.forEach((value, index) => {
            value.innerHTML += `<span class="main-projects__text">${images[0].title[index]}</span>`;
        });
    }

    function chageTitle(num) {
        if (!images[num].title) return;
        let sliderTitle = sliderText.querySelectorAll(".main-projects__text");
        sliderTitle.forEach((value, index) => {
            value.innerHTML = `${images[num].title[index]}`;
        });
    }
}

let sliderOptions = {
    dots: true,
    titles: true,
    buttons: true
};

document.addEventListener("DOMContentLoaded", function () {
    initSlider(sliderOptions);
});