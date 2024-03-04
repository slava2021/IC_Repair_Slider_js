let images = [{
    url: "imgaes/slider_1.jpg",
    city: "Rostov-on-Don LCD admiral",
    apartment_area: "81 m2",
    repair_time: "3.5 months",
    repair_cost: "Upon request"
}, {
    url: "../imgaes/slider_2.jpg",
    city: "Sochi Thieves",
    apartment_area: "105 m2",
    repair_time: "4 months",
    repair_cost: "Upon request"
}, {
    url: "../imgaes/slider_3.jpg",
    city: "Rostov-on-Don Patriotic",
    apartment_area: "93 m2",
    repair_time: "3 months",
    repair_cost: "Upon request"
}];

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".main-projects-slider__images");
    let sliderArrows = document.querySelector(".slider__arrows")

    initImages();
    initArrows();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index == 0 ? "active-img" : ""}" style="background-image: url("${images[index].url}");"></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }

}

document.addEventListener("DOMContentLoaded", initSlider);