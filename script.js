window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var opacity = 1 - (scrollPosition / 500); 

    opacity = Math.min(Math.max(opacity, 0), 1);

    document.querySelector('.background-image').style.opacity = opacity;
});


document.addEventListener("DOMContentLoaded", function() {
    var attractions = document.querySelectorAll('.attraction');

    attractions.forEach(function(attraction) {
        attraction.addEventListener('click', function() {
            attraction.classList.toggle('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var attractions = document.querySelectorAll('.attraction');

    function updateAttractionOpacity() {
        attractions.forEach(function(attraction) {
            var distanceFromTop = attraction.getBoundingClientRect().top;

            var opacity = 1 - (distanceFromTop / 600);
            opacity = Math.min(Math.max(opacity, 0), 1); 

            attraction.style.opacity = opacity;
        });
    }

    updateAttractionOpacity();

    window.addEventListener('scroll', function() {
        updateAttractionOpacity();
    });
});
