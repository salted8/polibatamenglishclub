function harusHuruf(evt) {
    let charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode < 48 || charCode > 57) && charCode > 32) {
        return true;
    } else {
        return false;
    }
}
// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    myProgress()
};

function myProgress() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

const loader = document.querySelector(".loader");

function myLoading() {
    loader.className += " hidden";
};

window.addEventListener("scroll", function () {
    let totop = document.querySelector(".to-top");

    if (window.pageYOffset > 100) {
        totop.classList.remove("hidden");
    } else {
        totop.classList.add("hidden");
    }
})