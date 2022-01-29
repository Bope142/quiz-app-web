let levelQuiz=''
const ArrayQuiz=['easy','medium','hard','all']
const resetFcocusLevel= ()=>{
  document.querySelectorAll('.layout__level')
  .forEach(level => level.classList.remove('layout__level__show'))
}
const setFocusLevel=(level)=>{
  level.classList.add('layout__level__show')
}
const LevelAnnimation = ()=>{
  document.querySelectorAll('.layout__level')
  .forEach((level,index) => {
    level.addEventListener("click",(e)=>{
      resetFcocusLevel()
      setFocusLevel(e.target)
      levelQuiz =ArrayQuiz[index]
    })
  })

}

window.addEventListener('load',()=>{
  LevelAnnimation()
})
