let slides = [
    {
        url:
            `/img/image1.png`,
        city: "Rostov-on-Don<br>LCD admiral",
        area: "81 m2",
        reptime: "3.5 months",
        cost: "Upon request",
    },
    {
        url:
            `/img/image2.png`,
        city: "Sochi<br>Thieves",
        area: "105 m2",
        reptime: "4 months",
        cost: "Upon request",
    },
    {
        url:
            `/img/image3.png`,
        city: "Rostov-on-Don<br>Patriotic",
        area: "93 m2",
        reptime: "3 months",
        cost: "Upon request",
    },
];

function initSlider() {
    if (!slides || !slides.length) return;

    let sliderArrows = document.querySelector(".slider__nav");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderMenuItems = document.querySelector(".slider-menu__items")

    initMenus();
    initDots();
    initArrows();

    function initDots() {
        sliderDots.querySelectorAll(".slider__dots-item").forEach((item) => {
            item.addEventListener("click", function () {
                moveSlider(this.dataset.index)
            })
        })
    }

    function initMenus() {
        sliderMenuItems.querySelectorAll(".slider-menu__item").forEach((item) => {
            item.addEventListener("click", function () {
                moveSlider(this.dataset.index)
            })
        })
    };

    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach((arrow) => {
            arrow.addEventListener("click", function () {
                let curNumber = +sliderDots.querySelector(".active").dataset.index;
                console.log(curNumber);
                let nextNumber;
                if (arrow.classList.contains("left-arrow")) {
                    nextNumber = curNumber === 1 ? slides.length  : curNumber - 1;
                } else {
                    nextNumber = curNumber === slides.length  ? 1 : curNumber + 1;
                }
                console.log(nextNumber);
                moveSlider(nextNumber);
            });
        });
    }

    function moveSlider(num) {
        document.getElementsByClassName("slider__image")[0].style.backgroundImage = "url(" + slides[num - 1].url + ")";
        document.querySelector(".slider__info-city_text").innerHTML = slides[num - 1].city;
        document.querySelector(".slider__info-area_text").innerHTML = slides[num - 1].area;
        document.querySelector(".slider__info-reptime_text").innerHTML = slides[num - 1].reptime;
        document.querySelector(".slider__info-cost_text").innerHTML = slides[num - 1].cost;
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        sliderMenuItems.querySelector(".active").classList.remove("active");
        sliderMenuItems.querySelector(".n" + num).classList.add("active");
    };
}


document.addEventListener("DOMContentLoaded", function () {
    initSlider();
});