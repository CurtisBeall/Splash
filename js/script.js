// Remove header color on home page
window.onload = () => {
    
    const headerBar = document.getElementById("headerbar");
    if (scrollY > 750 && window.location.href == 'file:///C:/Users/Curtis/Documents/Git%20Repos/Splash/index.html') {
        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else if (window.location.href != 'file:///C:/Users/Curtis/Documents/Git%20Repos/Splash/index.html') {
        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }

}
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
    const headerBar = document.getElementById("headerbar");
    if (scrollY > 750 && window.location.href == 'file:///C:/Users/Curtis/Documents/Git%20Repos/Splash/index.html') {
        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else if (window.location.href != 'file:///C:/Users/Curtis/Documents/Git%20Repos/Splash/index.html') {
        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }

// Makes "billboard" text scroll in
    const billboard = document.getElementById("billboard_text");
    let billboard_pos = 0;


    if (scrollY > document.documentElement.clientHeight) {
        // return false;
    } else if (scrollY < document.documentElement.clientHeight) {
        billboard_pos += -scrollY;
        billboard.style.left = billboard_pos + 'px';

    }

// Makes "What We Do" text scroll in
    const elem = document.getElementById("what_we_do_text");
    let pos = document.documentElement.clientHeight * 2;

    document.getElementById("what_we_do_text").style.position = "absolute";

    if (scrollY * 2 >= document.documentElement.clientHeight * 2) {
        elem.style.left = 0;
    } else {
        pos += -scrollY * 2;
        elem.style.left = pos + 'px';

    }

};
