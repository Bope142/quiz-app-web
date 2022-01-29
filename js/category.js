let CategoryQuiz =0
const ArrayCategory =[9,15,17,18,19,20,21,22,23,31]
const resetFcocusCategory= ()=>{
  document.querySelectorAll('.category')
  .forEach(cat => cat.classList.remove('category__select'))
}
const setFocusCategory=(cat)=>{
  cat.classList.add('category__select')
}
const CategoryAnnimation = ()=>{
  document.querySelectorAll('.category__layout')
  .forEach((cat,index) => {
    cat.addEventListener("click",(e)=>{
      resetFcocusCategory()
      setFocusCategory(e.target.parentNode)
      CategoryQuiz =ArrayCategory[index]
    })
  })

}


window.addEventListener('load',()=>{
  CategoryAnnimation()
})
