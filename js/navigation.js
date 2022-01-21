export const removeView =(v)=>{
  v.forEach(e => e.classList.remove('content-show'))
}
export const showView =(v)=>{
 v.classList.add('content-show')
}
