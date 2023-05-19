// Slider
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: ".arrows",
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

//Scroll to top
window.onscroll = function () {
    scrollFunction();
};
  
function scrollFunction() {
    let btn = document.getElementById("btn");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
  
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Text animacija
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hidden = document.querySelectorAll('.hidden')
hidden.forEach((el) => observer.observe(el))