$('.our-designers').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:7,
            nav:true,
            loop:false
        }
    }
})
$('.featured-products-items').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('.featured-products-items-2').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
})

$('.dress-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    }
})

$('.womens-shirt-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

let navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    // If the current scroll position is greater than 65px
    if (window.scrollY > 65) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.right = '0'; // Ensures the navbar stretches across the full viewport width
    } else {
        navbar.style.top = '40px';
        navbar.style.position = 'fixed'; // Reset to its original position
    }
});

