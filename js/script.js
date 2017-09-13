// window.onload = () => {
//     const add_class = document.getElementById("what_we_do_text").children;
//     for (let i = 0; i < add_class.length; i++) {
//             add_class[i].classList += (' what_we_do_text_scroll_in');
//     }
//     window.scrollBy(0,1);
// };

// Onscroll Functions
window.onscroll = () => {

// Creates header backgroundcolor
    const headerBar = document.getElementsByClassName("header-bar");
    if (scrollY > 1050 && window.location.href == 'file:///C:/Users/Curtis/Documents/Git%20Repos/Splash/index.html') {

        for (let i = 0; i < headerBar.length; i++) {
            headerBar[i].style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
        console.log(scrollY);


    } else if (scrollY > 50 && window.location.href != 'file:///C:/Users/Curtis/Documents/Git%20Repos/Splash/index.html') {

        for (let i = 0; i < headerBar.length; i++) {
            headerBar[i].style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
        console.log(scrollY);

    } else {

        for (let i = 0; i < headerBar.length; i++) {
            headerBar[i].style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
    }

// Makes "billboard" text scroll in
    const billboard = document.getElementById("billboard_text");
    let billboard_pos = 0;


    if (scrollY > 2000) {
        return false;
    } else if (scrollY < 2000) {
        billboard_pos += -scrollY;
        billboard.style.left = billboard_pos + 'px';

    }

// Makes "What We Do" text scroll in
    const elem = document.getElementById("what_we_do_text");
    let pos = screen.height * 2;

    document.getElementById("what_we_do_text").style.position = "absolute";

    if (scrollY >= screen.height) {
        elem.style.left = 0;
        return false;
    } else {
        pos += -scrollY * 2;
        elem.style.left = pos + 'px';
    }

};
