$(".header .close-btn").click(function() {
    $(".header .nav").animate({
            right: "-85%",
        },
        300
    );
});
$(".header .menu-btn").click(function() {
    $(".header .nav").animate({
            right: 0,
        },
        300
    );
});
$(window).resize(function() {
    if ($(window).width() >= 1200) {
        $(".package-comp.monthly").show();
        $(".package-comp.Qua").show();
        $(".package-comp.Anu").show();
    } else {
        $(".mobile-toggle-buttons .btn").each(function() {
            if ($(this).attr("class") === "btn btn-secondary" || $(this).attr("class") === "btn btn-secondary ") {
                $(".package-comp.Qua").hide();
                $(".package-comp.Anu").hide();
                $(".package-comp.monthly").show();
            } else if ($(this).attr("class") === "btn btn-warning" || $(this).attr("class") === "btn btn-warning ") {
                $(".package-comp.monthly").hide();
                $(".package-comp.Anu").hide();
                $(".package-comp.Qua").show();
            } else if ($(this).attr("class") === "btn btn-primary" || $(this).attr("class") === "btn btn-primary ") {
                $(".package-comp.monthly").hide();
                $(".package-comp.Qua").hide();
                $(".package-comp.Anu").show();
            }
        })
    }

})

$(".nav-item").click(function(){
    $(".nav-item").removeClass("active");
    $(this).addClass("active")
})
$(".counter").each(function() {
    var $this = $(this),
        countTo = $this.attr("data-count");

    $({ countNum: $this.text() }).animate({
            countNum: countTo,
        },

        {
            duration: 3000,
            easing: "linear",
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            },
        }
    );
});
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});


function resetpackagesMon() {
    $(".package-comp.monthly").hide();
    $(".package-comp.Qua").hide();
    $(".package-comp.Anu").hide();
    $(".mobile-toggle-buttons .btn").addClass("inactive")
}
$(".mobile-toggle-buttons .btn-secondary").click(function() {
    resetpackagesMon();
    $(this).removeClass("inactive");
    $(".package-comp.monthly").show();
})
$(".mobile-toggle-buttons .btn-warning").click(function() {
    resetpackagesMon();
    $(this).removeClass("inactive");
    $(".package-comp.Qua").show();
})
$(".mobile-toggle-buttons .btn-primary").click(function() {
    resetpackagesMon();
    $(this).removeClass("inactive");
    $(".package-comp.Anu").show();
})
$(".wrapper-programs").click(function() {
    if (window.innerWidth >= 750) {
        $(".wrapper-programs").removeClass("expanded");
        $(".wrapper-programs").each(function() {
            if ($(this).attr("data-clicked") === "true ") {
                $(this).addClass("rightpos")
                index1 = $(this).index();
                setTimeout(function() {
                    $(".wrapper-programs:nth-child(" + (index1 + 1) + ")").removeClass("rightpos")
                }, 1000)
            }
        })
        $(".wrapper-programs").attr("data-clicked", "false ");
        $(this).addClass("expanded")
        $(this).attr("data-clicked", "true ");
        clearTimeout(timer01);
        clearTimeout(timer02);
        clearTimeout(timer03);
        clearTimeout(timer04);
        loop.check_index = $(this).index();
        loop();

    }
})
let timer01;
let timer02;
let timer03;
let timer04

function loop() {
    if (window.innerWidth >= 750) {
        $(".wrapper-programs").each(function() {
            if ($(this).attr("data-clicked") === "true ") {
                check_index = $(this).index();
            }
        })

        $(".wrapper-programs").each(function() {

            if ($(this).attr("data-clicked") === "true " && check_index != 8) {
                let ind = $(this).index() + 2
                const runTimer02 = () => {
                    timer02 = window.setTimeout(function() {

                        $(".wrapper-programs").removeClass("expanded")
                        $(".wrapper-programs:nth-child(" + (ind - 1) + ")").addClass("rightpos")
                        setTimeout(function() {
                            $(".wrapper-programs:nth-child(" + (ind - 1) + ")").removeClass("rightpos")
                        }, 1000)
                        $(".wrapper-programs:nth-child(" + ind + ")").addClass("expanded")
                        $(".wrapper-programs:nth-child(" + (ind - 1) + ")").attr("data-clicked", "false ")
                        $(".wrapper-programs:nth-child(" + ind + ")").attr("data-clicked", "true ")

                        timer04 = setTimeout(loop, 5000)

                    }, 5000);
                }
                runTimer02()

            } else if ($(this).attr("data-clicked") === "true " && check_index === 8) {


                const runTimer01 = () => {
                    timer01 = window.setTimeout(function() {
                        $(".wrapper-programs").removeClass("expanded")
                        $(".wrapper-programs:nth-child(9)").addClass("rightpos")
                        setTimeout(function() {
                            $(".wrapper-programs:nth-child(9)").removeClass("rightpos")
                        }, 1000)
                        $(".wrapper-programs:nth-child(1)").addClass("expanded")
                        $(".wrapper-programs:nth-child(9)").attr("data-clicked", "false ")
                        $(".wrapper-programs:nth-child(1)").attr("data-clicked", "true ")

                        timer03 = setTimeout(loop, 5000)
                    }, 5000);
                }
                runTimer01()
            }
        })
    }
}
loop()
var Tswiper = new Swiper(".testmonials-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20
        },
        "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40
        },
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});
var Cswiper = new Swiper(".community-swipe", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
        },
        "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40
        },
        "@1.45": {
            slidesPerView: 3,
            spaceBetween: 20
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});
var Mswiper = new Swiper(".projects-swipe", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
        },
        "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40
        },
        "@1.45": {
            slidesPerView: 3,
            spaceBetween: 20
        },
        "@1.9": {
            slidesPerView: 4,
            spaceBetween: 20
        },
        "@2.00": {
            slidesPerView: 5,
            spaceBetween: 20
        },
        "@2.25": {
            slidesPerView: 6,
            spaceBetween: 20
        }

    }
});
var Pswiper = new Swiper(".media-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {

        "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40
        },
        "@2.00": {
            slidesPerView: 2,
            spaceBetween: 20
        }

    }
});
$('.faq-ques').click(function(){
    $(this).toggleClass("min")
})

$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.header').addClass('blue');
    }
    else{
        $('.header').removeClass('blue');
        $(".nav-item").removeClass("active");
        $(".main-nav .nav-item:first-child").addClass("active")
    }
})

$(window).on('scroll',function(){
  if($(window).scrollTop() >= $("#programs").offset().top){

        $(".nav-item").removeClass("active");
        $(".main-nav .nav-item:nth-child(2)").addClass("active")
  }
  else{
    $(".nav-item").removeClass("active");
    $(".main-nav .nav-item:first-child").addClass("active")
  }
})