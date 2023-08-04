$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function() {
                window.location.hash = hash;
            });
        }
    });
});

var width = $(window).width();

window.onscroll = function() {
    if ((width >= 900)) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#middle").css("background-size", "150% auto");
        } else {
            $("#middle").css("background-size", "100% auto");
        }
    }
};

setTimeout(function() {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function() {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
    }, 800);
}, 1450);

function magnify(imglink) {
    $("#img_here").css("background", `url('${imglink}') center center`);
    $("#magnify").css("display", "flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function() {
        $("#magnify").removeClass("animated fadeIn");
    }, 800);
}

function linkedin() {
    window.location.href = "https://www.linkedin.com/in/ali-abu-abid-22a15820b/";
}



function Cinema() {
    window.location.href = "https://github.com/AliAbuAbid/Coffeeshop";
}

function ATAPlay() {
    window.location.href = "https://github.com/AliAbuAbid/doctor-page";
}

function FlyEasily() {
    window.location.href = "https://github.com/AliAbuAbid/FlyEasily";
}

function CV(){
    window.location.href="Ali-Abu-Abid-Resume.pdf";
}