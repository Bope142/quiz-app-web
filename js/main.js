import { removeSelectionCategory, SelectCategory } from './categorie.js';
import { removeSelectionLevel, SelectLevel } from './level.js';
import { removeView , showView } from './navigation.js';
let categoryQuiz = [ 'linux', 'DevOps', 'Networking', 'Programming', 'Cloud', 'Docker', 'Kubernetes', 'And lots more' ]
const navigation =()=>{
    document.querySelector('.next').addEventListener('click',()=>{
       if(document.querySelector('.app-category-quiz').classList.contains('content-show'))
       {
        removeView(document.querySelectorAll('.content-slide'))
        showView(document.querySelectorAll('.content-slide')[1])
         document.querySelector('.next').classList.add('nav-btn-active')
         document.querySelector('.back').classList.add('nav-btn-active')
       }
       else if(document.querySelector('.app-level-quiz').classList.contains('content-show')){
         removeView(document.querySelectorAll('.content-slide'))
         showView(document.querySelectorAll('.content-slide')[2])
          document.querySelector('.next').classList.remove('nav-btn-active')
           document.querySelector('.back').classList.add('nav-btn-active')
       }
    })

     document.querySelector('.back').addEventListener('click',()=>{
       if(document.querySelector('.app-level-quiz').classList.contains('content-show')){
         removeView(document.querySelectorAll('.content-slide'))
         showView(document.querySelectorAll('.content-slide')[0])
          document.querySelector('.back').classList.remove('nav-btn-active')
          document.querySelector('.next').classList.add('nav-btn-active')
       }
       else if(document.querySelector('.app-number-quiz').classList.contains('content-show')){
         removeView(document.querySelectorAll('.content-slide'))
         showView(document.querySelectorAll('.content-slide')[1])
          document.querySelector('.back').classList.add('nav-btn-active')
          document.querySelector('.next').classList.add('nav-btn-active')
       }
    })
}
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
    navigation()
    document.querySelector( '.btn-go').addEventListener('click',()=>{
        document.querySelector('.container').style.displey="none"
        document.querySelector('.container__quiz').classList.add('quiz_content_visible')
    })
    document.querySelector( '.quit').addEventListener('click',()=>{

        document.querySelector('.container__quiz').classList.remove('quiz_content_visible')
          document.querySelector('.container').style.displey="flex"
    })
} )
