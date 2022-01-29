let NumberQuiz=0;
const resetFocus= ()=>{
  document.querySelectorAll('.div_number')
  .forEach(layout => layout.classList.remove('layout-number'))
}
const setFocus=(layout)=>{
  layout.classList.add('layout-number')
}
const CountAnnimation = ()=>{
  document.querySelectorAll('.div_number')
  .forEach((layout,index) => {
    layout.addEventListener("click",(e)=>{
      resetFocus()
      setFocus(e.target)
      NumberQuiz =index+1;
    })
  })

}

window.addEventListener('load',()=>{
  CountAnnimation()
})
