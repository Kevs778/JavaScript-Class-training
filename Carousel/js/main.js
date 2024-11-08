document.addEventListener( 'DOMContentLoaded', function() {
	var splide = new Splide( '.splide', { 
        lazyLoad: 'nearby',
        perPage: 3, 
        gap: 20, 
        rewind: true,
        breakpoints: {
            850: {
                perPage: 2
            },
            600: {
                perPage: 1
            }
        }
    
    } );
	splide.mount();
} );