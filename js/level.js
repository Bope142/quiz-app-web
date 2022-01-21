export const removeSelectionLevel = ( ) => {
    document.querySelectorAll( '.level' )
        .forEach( ( element, index ) => {
            element.classList.remove( 'level-select' )
        } );
}
export const SelectLevel = ( c ) => {
    c.classList.add( 'level-select' )
}
