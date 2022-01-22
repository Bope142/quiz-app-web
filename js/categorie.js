
export const removeSelectionCategory = ( ) => {
    document.querySelectorAll( '.category' )
        .forEach( ( element, index ) => {
            element.classList.remove( 'category-select' )
        } );
}
export const SelectCategory = ( c ) => {
    c.classList.add( 'category-select' )
}
