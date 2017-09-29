
//Drop Down Menu
(function() {
	const toggle = document.getElementById("c-hamburger");
	const hide = document.getElementById("nav-bar");

	toggle.addEventListener( "click", function(e) {
	e.preventDefault();
	(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	(hide.classList.contains("hidden") === true) ? hide.classList.remove("hidden") : hide.classList.add("hidden");
	});
})();





//// Global Variables
//const headerbarHeight = document.getElementById('headerbar').clientHeight;
//const homepage = 'file:///C:/Users/Curtis/Documents/Git%20Repos/Splash/index.html'
//
//// Remove header color on home page
//window.onload = () => {
//	
//	console.log(document.documentElement.clientWidth);
//
//    const headerBar = document.getElementById("headerbar");
//
//    if (scrollY > 750 && window.location.href == homepage) {
//        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
//    } else if (scrollY < headerbarHeight * 1.3 && window.location.href != homepage) {
//        headerBar.style.backgroundColor = 'rgb(0, 0, 0)';
//    } else if (scrollY > headerbarHeight * 1.3 && window.location.href != homepage) {
//        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
//    } else {
//        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
//    }
//
//}
//// window.onload = () => {
////     const add_class = document.getElementById("what_we_do_text").children;
////     for (let i = 0; i < add_class.length; i++) {
////             add_class[i].classList += (' what_we_do_text_scroll_in');
////     }
////     window.scrollBy(0,1);
//// };
//
//// Onscroll Functions
//window.onscroll = () => {
//
//    // Creates header backgroundcolor
//	
//    const headerBar = document.getElementById("headerbar");
//
//    if (scrollY > 750 && window.location.href == homepage) {
//        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
//    } else if (scrollY < headerbarHeight * 1.3 && window.location.href != homepage) {
//        headerBar.style.backgroundColor = 'rgb(0, 0, 0)';
//    } else if (scrollY > headerbarHeight * 1.3 && window.location.href != homepage) {
//        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
//    } else {
//        headerBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
//    }
//
//
//    // Makes "billboard" and "What We Do" text scroll out/in on home page
//    if (window.location.href === 'file:///C:/Users/Curtis/Documents/Git%20Repos/Splash/index.html') {
//
//        const screenHeight = document.documentElement.clientHeight - headerbarHeight;
//        const billboard = document.getElementById("billboard_text");
//        let billboard_pos = 0;
//        const what_we_do = document.getElementById("what_we_do_text");
//        let what_we_do_pos = screenHeight * 2;
//
//        document.getElementById("what_we_do_text").style.position = "absolute";
//
//        // Makes "billboard" text scroll out/in
//        if (scrollY >= screenHeight) {
//            billboard.style.left = 0;
//            console.log(billboard.style.left);
//        } else {
//            billboard_pos = -scrollY;
//            billboard.style.left = billboard_pos + 'px';
//            console.log(billboard.style.left);
//        }
//
//
//        // Makes "What We Do" text scroll out/in
//        if (scrollY * 2 >= screenHeight * 2) {
//            what_we_do.style.left = 0;
//        } else {
//            what_we_do_pos += -scrollY * 2;
//            what_we_do.style.left = what_we_do_pos + 'px';
//        }
//
//    }
//
//};
