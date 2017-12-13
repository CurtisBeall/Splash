//On Orientation Change
window.addEventListener("orientationchange", function() {
    location.reload(true);
});

// Drop Down Menu Function
(function () {
    const toggle = document.getElementById("c-hamburger");
    const hide = document.getElementById("nav-bar");

    toggle.addEventListener("click", function (e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
        (hide.classList.contains("hidden") === true) ? hide.classList.remove("hidden"): hide.classList.add("hidden");
    });
})();

//Setup About Page Before Load Function
window.onbeforeunload = () => {

    const about = '/C:/Users/Temp/Documents/Git%20Repos/Splash/about.html';
    if (window.location.pathname === about) {
        window.scrollTo(0, 0);
    }
};

//Setup About Page Onload Function
window.onload = () => {

    const about = '/C:/Users/Temp/Documents/Git%20Repos/Splash/about.html';
    if (window.location.pathname === about) {
        const staff_text = document.getElementsByClassName("staff_textbg");

        for (var i = 0; i < staff_text.length; i++) {
            if (i % 2 === 0) { // index is even
                staff_text[i].style.transform = "translateY(-50%) translateX(" + -52 + "%)";
            } else if ((i % 2 === 1)) {
                staff_text[i].style.transform = "translateY(-50%) translateX(" + -104 + "%)";
            }
        }
    }
};

//About Page Text Scroll Var

let scrollToggle = 1;
let currentSpan = 0;
let lastScrollY = 0;

//About Page Text Scroll Function
window.onscroll = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    let staffPos = document.getElementById("staff").offsetTop;
    let scrollPos = window.scrollY;
    let scrollSpan = document.getElementById('staffMember').offsetHeight;

    if (window.innerWidth > 626) {
        const staff_text = document.getElementsByClassName("staff_textbg");

        let newScroll = (scrollY);
        let lastScroll = (lastScrollY);
        let span = 0;

        if (lastScroll === 0) {
            lastScroll = newScroll;
        }

        //        if (currentSpan > scrollSpan) {
        //            console.log("change currentSpan = 0")
        //            currentSpan = currentSpan - scrollSpan;
        //        }

        currentSpan += (newScroll - lastScroll) * scrollToggle;
        span = ((currentSpan * 100) / scrollSpan)*.6 - 52;
        spanL = ((currentSpan * 100) / scrollSpan)*.6 + 2;

        lastScrollY = scrollY


        for (var i = 0; i < staff_text.length; i++) {
            if (i % 2 === 0) { // index is even
                if(currentSpan > scrollSpan) {
                    span = 3;
                    currentSpan = scrollSpan;
                   } else if (currentSpan < 0 || span === 53) {
                    span = -53;  
                   currentSpan = 0;
                  }
                staff_text[i].style.transform = "translateY(-50%) translateX(" + span + "%)";
            } else {
                staff_text[i].style.transform = "translateY(-50%) translateX(" + spanL + "%)";
            }
        }

        if (span === 3 || span === -53) {
            if (scrollToggle === 1) {
                scrollToggle = -1;
                console.log(currentSpan)
            } else {
                scrollToggle = 1;
//                currentSpan = 0;
                console.log(currentSpan)

            }
        }
    }
};