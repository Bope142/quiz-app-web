import { removeSelectionCategory, SelectCategory } from './categorie.js';
import { removeSelectionLevel, SelectLevel } from './level.js';
let categoryQuiz = [ 'linux', 'DevOps', 'Networking', 'Programming', 'Cloud', 'Docker', 'Kubernetes', 'And lots more' ]

window.addEventListener( 'load', ( ) => {
    document.querySelectorAll( '.click-category' )
        .forEach( ( element, index ) => {
            element.addEventListener( 'click', ( e ) => {
                removeSelectionCategory( )
                SelectCategory( e.target.parentNode )
            } )
        } );
    document.querySelectorAll( '.click-level' )
        .forEach( ( element, index ) => {
            element.addEventListener( 'click', ( e ) => {
                removeSelectionLevel( )
                SelectLevel( e.target.parentNode )

            } )
        } );
    let config = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
		allowTouchMove:false
    }
    var swiper = new Swiper( '.swiper-container', config );
    const swiperContainer = document.querySelector( '.swiper-container' ).swiper;
    let btnprev =document.getElementById("left"),
        btnnext =document.getElementById("right")
        btnprev.addEventListener('click',()=>{
          swiperContainer.slidePrev();
        })
        btnnext.addEventListener('click',()=>{
          swiperContainer.slideNext();
        })
} )
