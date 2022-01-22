let CategoryQuizID,QuizLevel,QuizCount;
export const setCategoryQuiz =(id)=>{
  CategoryQuizID=id;
}
export const GetCategoryQuiz =()=>{
 return CategoryQuizID
}
export const setQuizLevel =(level)=>{
  QuizLevel=level;
}
export const GetQuizLevel =()=>{
 return QuizLevel
}
export const setQuizCount =(Count)=>{
  QuizCount=Count;
}
export const GetQuizCount =()=>{
 return QuizCount
}

export async function GetQuiz (count,category,level){
  let response = await fetch(`https://opentdb.com/api.php?amount=${QuizCount}&category=${CategoryQuizID}&difficulty=${QuizLevel}`)
    if(response.status === 200){
       let data = await response.json();
       return data;
    }
    else{
      return false
    }

}

