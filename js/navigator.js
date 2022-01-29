const tabitem = document.querySelectorAll( '.tab__item' )
const removeTabItem = ( tab ) => {
    tab.forEach( t => t.classList.replace( 'tab__active', 'tab__inactive' ) )
}
const activeTabItem = ( item ) => {
    item.classList.replace( 'tab__inactive', 'tab__active' )
}
const categoryTab = ( ) => {
    document.getElementById( 'play' ).addEventListener( 'click', ( ) => {
        removeTabItem( tabitem )
        resetFcocusCategory( )
        activeTabItem( tabitem[ 1 ] )
    } )
}
const aboutTab=()=>{
    document.getElementById( 'about' ).addEventListener( 'click', ( ) => {
        removeTabItem( tabitem )
        resetFcocusCategory( )
        activeTabItem( tabitem[ 6 ] )
    } )
}
const NextTab = ( ) => {
    document.querySelectorAll( '.Next' ).
    forEach( btn => {
        btn.addEventListener( 'click', ( ) => {
            if ( tabitem[ 1 ].classList.contains( 'tab__active' ) ) {
                if ( CategoryQuiz !== 0 ) {
                    removeTabItem( tabitem )
                    resetFcocusLevel( )
                    activeTabItem( tabitem[ 2 ] )
                }

            } else {
                if ( levelQuiz !== '' ) {
                    removeTabItem( tabitem )
                    resetFocus( )
                    activeTabItem( tabitem[ 3 ] )
                }

            }
        } )
    } )
}
const prevTab = ( ) => {
    document.querySelectorAll( '.Previous' ).
    forEach( btn => {
        btn.addEventListener( 'click', ( ) => {
            if ( tabitem[ 2 ].classList.contains( 'tab__active' ) ) {
                removeTabItem( tabitem )
                activeTabItem( tabitem[ 1 ] )
                levelQuiz = ''
            } else {
                NumberQuiz = 0;
                removeTabItem( tabitem )
                activeTabItem( tabitem[ 2 ] )
            }

        } )
    } )
}
const backHomescreen = ( ) => {
    document.querySelectorAll( '.back__tab' )
        .forEach( btn => {
            btn.addEventListener( 'click', ( ) => {
                removeTabItem( tabitem )
                activeTabItem( tabitem[ 0 ] )
            } )
        } )
}


window.addEventListener( 'load', ( ) => {
    categoryTab( )
    NextTab( )
    prevTab( )
    backHomescreen( )
    aboutTab()

} )
