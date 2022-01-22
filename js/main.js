import { removeSelectionCategory, SelectCategory } from './categorie.js';
import { removeSelectionLevel, SelectLevel } from './level.js';
import { removeView, showView } from './navigation.js';
import { setCategoryQuiz, GetCategoryQuiz, setQuizLevel, GetQuizLevel, setQuizCount, GetQuizCount, GetQuiz } from './app.js';
let categoryQuizID = [ 9, 17, 18, 19, 22, 23, 21 ];
let quizlevel = [ 'easy', 'medium', 'hard' ];
let quizText = document.querySelector( '.quiz__text' );
let QuizAnswer;
let progressQuiz={
    QuizzAnswers:0,
    QuizSuccess:0,
    QuizFailure:0,
    QuizIndex:0,
    QuizLength:0
}
let calcprogressQuiz
const navigation = ( ) => {
    document.querySelector( '.next' ).addEventListener( 'click', ( ) => {
        if ( document.querySelector( '.app-category-quiz' ).classList.contains( 'content-show' ) ) {
            removeView( document.querySelectorAll( '.content-slide' ) )
            showView( document.querySelectorAll( '.content-slide' )[ 1 ] )
            document.querySelector( '.next' ).classList.add( 'nav-btn-active' )
            document.querySelector( '.back' ).classList.add( 'nav-btn-active' )
        } else if ( document.querySelector( '.app-level-quiz' ).classList.contains( 'content-show' ) ) {
            removeView( document.querySelectorAll( '.content-slide' ) )
            showView( document.querySelectorAll( '.content-slide' )[ 2 ] )
            document.querySelector( '.next' ).classList.remove( 'nav-btn-active' )
            document.querySelector( '.back' ).classList.add( 'nav-btn-active' )
        }
    } )

    document.querySelector( '.back' ).addEventListener( 'click', ( ) => {
        if ( document.querySelector( '.app-level-quiz' ).classList.contains( 'content-show' ) ) {
            removeView( document.querySelectorAll( '.content-slide' ) )
            showView( document.querySelectorAll( '.content-slide' )[ 0 ] )
            document.querySelector( '.back' ).classList.remove( 'nav-btn-active' )
            document.querySelector( '.next' ).classList.add( 'nav-btn-active' )
        } else if ( document.querySelector( '.app-number-quiz' ).classList.contains( 'content-show' ) ) {
            removeView( document.querySelectorAll( '.content-slide' ) )
            showView( document.querySelectorAll( '.content-slide' )[ 1 ] )
            document.querySelector( '.back' ).classList.add( 'nav-btn-active' )
            document.querySelector( '.next' ).classList.add( 'nav-btn-active' )
        }
    } )
}


const AddNextQuiz=()=>{
    progressQuiz.QuizzAnswers +=1
    progressQuiz.QuizIndex +=1
    quizText.innerHTML = QuizAnswer[progressQuiz.QuizIndex].question;
     QuizAnswer[progressQuiz.QuizIndex].incorrect_answers.forEach( res => addAnswer( res, 'is-incorrect' ) )
    addAnswer( QuizAnswer[progressQuiz.QuizIndex].correct_answer, 'is-correct' )
    responseQuiz( )
}

function click__answer( v) {
  if(! document.querySelector('.quiz__answers').classList.contains('resolvde')){
    document.querySelector('.quiz__answers').classList.add('resolvde')
     if ( v.classList.contains( 'is-correct' ) ) {
        v.classList.add( 'answer-correct' )
        progressQuiz.QuizSuccess +=1
    } else {
        v.classList.add( 'answer-incorrect' )
        showValideAnswers( )
        progressQuiz.QuizFailure +=1
    }
  }
  document.querySelector('.next-quiz').classList.add('next-active')
}

const showValideAnswers = ( ) => {
    document.querySelectorAll( '.answers' ).
    forEach( a => {
        if ( a.classList.contains( 'is-correct' ) ) {
            a.classList.add( 'answer-correct' )
        }
    } )
}

const addAnswer = ( answers, classnam ) => {
    document.querySelector( '.quiz__answers' ).innerHTML += `
      <div class="answers ${classnam}">${answers}</div>
     `
}


const deletAnswer = ( ) => {
    document.querySelector( '.quiz__answers' ).innerHTML = ''
     quizText.innerHTML = ''
}


const AddFirstQuiz = ( qst ) => {
    deletAnswer( )
    progressQuiz.QuizzAnswers +=1
    progressQuiz.QuizIndex =0
    quizText.innerHTML = qst.question;
    qst.incorrect_answers.forEach( res => addAnswer( res, 'is-incorrect' ) )
    addAnswer( qst.correct_answer, 'is-correct' )
    responseQuiz( )
}



const responseQuiz = ( ) => {
     document.querySelector('.quiz__answers').classList.remove('resolvde')
    document.querySelectorAll( '.answers' ).
    forEach( r => {
        r.addEventListener( 'click',()=>click__answer(r),false)
    } )
}




async function renderUsers( ) {

    let users = await GetQuiz( GetQuizCount( ), GetCategoryQuiz( ), GetQuizLevel( ) );
    console.log( users )
    QuizAnswer = users.results;
    progressQuiz.QuizLength =users.results.length
    AddFirstQuiz( QuizAnswer[ 0 ] )
    document.querySelector( '.loading-quiz' ).style.display = "none"
    document.querySelector( '.container' ).style.display = "none"
    document.querySelector( '.container__quiz' ).classList.add( 'quiz_content_visible' )
    console.log( QuizAnswer )
}



window.addEventListener( 'load', ( ) => {
    document.querySelectorAll( '.click-category' )
        .forEach( ( element, index ) => {

            element.addEventListener( 'click', ( e ) => {
                setCategoryQuiz( categoryQuizID[ index ] )
                removeSelectionCategory( )
                SelectCategory( e.target.parentNode )
            } )
        } );
    document.querySelectorAll( '.click-level' )
        .forEach( ( element, index ) => {
            element.addEventListener( 'click', ( e ) => {
                removeSelectionLevel( )
                SelectLevel( e.target.parentNode )
                setQuizLevel( quizlevel[ index ] )

            } )
        } );
    navigation( )
    document.querySelector( '.btn-go' ).addEventListener( 'click', ( ) => {
        document.querySelector( '.loading-quiz' ).style.display = "flex"
        setQuizCount( document.getElementById( 'QuizCount' ).value );

        renderUsers( );

    } )
    document.querySelector( '.quit' ).addEventListener( 'click', ( ) => {
        document.querySelector( '.loading-quiz' ).style.display = "none"
        document.querySelector( '.container__quiz' ).classList.remove( 'quiz_content_visible' )
        document.querySelector( '.container' ).style.display = "flex"
    } )

      document.querySelector('.next-quiz').addEventListener('click',()=>{
        if(progressQuiz.QuizzAnswers < progressQuiz.QuizLength){
         deletAnswer()
          document.querySelector('.next-quiz').classList.remove('next-active')
       console.log('Q/R '+progressQuiz.QuizzAnswers+ ' Q/S'+progressQuiz.QuizSuccess+ ' Q/F'+progressQuiz.QuizFailure+ ' Q/I '+progressQuiz.QuizIndex)
         calcprogressQuiz =progressQuiz.QuizLength-progressQuiz.QuizzAnswers
        AddNextQuiz()

         if(calcprogressQuiz === 1){
            document.querySelector('.next-quiz').innerHTML ="Valider"
         }
        }
        else{
            console.log('Q/R '+progressQuiz.QuizzAnswers+ ' Q/S'+progressQuiz.QuizSuccess+ ' Q/F'+progressQuiz.QuizFailure+ ' Q/I '+progressQuiz.QuizIndex)
             document.querySelector( '.score__quiz' ).style.display = "flex"
        }

      })

} )
