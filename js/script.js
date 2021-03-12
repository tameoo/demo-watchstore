const menu = document.querySelector(".header__burger"),
    nav = document.querySelector(".menu");

let isOpen = false;

menu.addEventListener("click", () => {
    if (isOpen) {
        menu.innerHTML = '<i class="fas fa-bars"></i>'
        nav.classList.remove("menu__open");

        isOpen = false;
    } else {
        menu.innerHTML = '<i class="far fa-times"></i>'
        nav.classList.add("menu__open");

        isOpen = true;
    }
});

$('.watches__slider').slick({
    infinite: false,
    speed: 300,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: '<button class="action action_left" id="left"><svg aria-labelledby="" viewBox="0 0 15 15"xmlns="http://www.w3.org/2000/svg" role="img"><path d="m15 5.41-7.5 7.91-7.5-7.91 1.95-1.95 5.55 5.83 5.55-5.83z"></path></svg></button>',
    nextArrow: '<button class="action action_right" id="right"><svg aria-labelledby="" viewBox="0 0 15 15"xmlns="http://www.w3.org/2000/svg" role="img"><path d="m15 5.41-7.5 7.91-7.5-7.91 1.95-1.95 5.55 5.83 5.55-5.83z"></path></svg></button>',
    responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: true
            }
        },
    ]
});