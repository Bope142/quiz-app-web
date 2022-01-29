let indexQuizProgress
let AnswerCorrect
let QuizAnswers = [ ]
let usersProgress = {
    ToTalQuestions: 0,
    SuccessfulQuestions: 0,
    FailedQuestions: 0
}
let RemaingQuestion
let correct_answerPos

const showScore = ( ) => {
    document.querySelector( '.total__result' ).textContent = `${usersProgress.SuccessfulQuestions} out of ${usersProgress.ToTalQuestions} Questions`
    // if ( usersProgress.ToTalQuestions < 10 ) {
    //     usersProgress.ToTalQuestions = usersProgress.ToTalQuestions * 10;
    // }
    let score = ( usersProgress.SuccessfulQuestions * 100)/(usersProgress.ToTalQuestions )
    if(usersProgress.SuccessfulQuestions === NumberQuiz){
  document.querySelector( '.score' ).textContent = '100'
    }else{
          document.querySelector( '.score' ).textContent = Math.round(score)
    }

}
const answersNext = ( ) => {

    if ( RemaingQuestion == 1 ) {
        document.querySelector( '.NextQuiz' ).textContent = 'Finish'
    }
    if ( indexQuizProgress < QuizAnswers.length ) {
        indexQuizProgress++
        console.log( 'index :' + indexQuizProgress )
        progressQuiz( indexQuizProgress + 1, NumberQuiz )
        if ( indexQuizProgress < QuizAnswers.length ) {
            showQuiz( indexQuizProgress )
            quizClick( )
        }

    }
}

const showValideAnswers = ( ) => {
    document.querySelectorAll( '.answers' )[ correct_answerPos - 1 ]
        .classList.add( 'correct_answer' )
}
const removeQuizClick = ( ) => {
    document.querySelectorAll( '.quiz__layout' ).
    forEach( lay => lay.style.display = "none" )
}
const quizClick = ( ) => {
    document.querySelectorAll( '.quiz__layout' ).
    forEach( qst => {

        qst.addEventListener( 'click', ( e ) => {
            removeQuizClick( )
            if ( e.path[ 1 ].children[ 2 ].outerText === AnswerCorrect ) {
                e.path[ 1 ].classList.add( 'correct_answer' )
                usersProgress.SuccessfulQuestions++

            } else {
                 e.path[ 1 ].classList.add( 'incorrect_answers' )
                showValideAnswers( )
                usersProgress.FailedQuestions++
            }
            if ( NumberQuiz === 1 ) {
                document.querySelector( '.NextQuiz' ).textContent = 'Finish';
            }
            document.querySelector( '.NextQuiz' ).classList.replace( 'no-answers', 'as-a-answers' )
            RemaingQuestion = QuizAnswers.length - 1 - indexQuizProgress

            console.log( 'succ :' + usersProgress.SuccessfulQuestions + ' f: ' + usersProgress.FailedQuestions )

        } )
    } )
}
const getRandomPosCorrectAnswers = ( min, max ) => {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random( ) * ( max - min + 1 ) ) + min;
}
const progressQuiz = ( indexQuiz, QuizTotal ) => {
    console.log( 'hh' )
    document.querySelector( '.progresse__quiz' ).textContent = `${indexQuiz}/${QuizTotal}`
}

const numerAnswer = ( countAnswer ) => {
    // return document.querySelector( '.answers__content').childElementCount++
    let num = document.querySelector( '.answers__content' ).childNodes.length
    num++
    return num++
}




const showQuiz = ( indexQz ) => {
    document.querySelector( '.answers__content' ).innerHTML = ''
    correct_answerPos = getRandomPosCorrectAnswers( 1, QuizAnswers[ indexQz ].incorrect_answers.length + 1 )
    AnswerCorrect = QuizAnswers[ indexQz ].correct_answer
    let posIncorrectAnswer = 1
    let i = 0
    let lastIndex = 0
    document.querySelector( '.quiz__title' ).innerHTML = QuizAnswers[ indexQz ].question;

    if ( QuizAnswers[ indexQz ].type === "boolean" ) {
        if ( correct_answerPos === 1 ) {
            //correct answers
            document.querySelector( '.answers__content' ).innerHTML +=
                `<div class="answers ">
                    <div class="quiz__layout"></div>
                    <span class="number__answer">${numerAnswer(QuizAnswers[indexQz].correct_answer.length+1)}</span>
                    <span class="answer__value" data="${QuizAnswers[indexQz].correct_answer}">${QuizAnswers[indexQz].correct_answer}</span>
                </div>`
            //incorrect
            document.querySelector( '.answers__content' ).innerHTML +=
                `<div class="answers ">
                    <div class="quiz__layout"></div>
                    <span class="number__answer">${numerAnswer(QuizAnswers[indexQz].correct_answer.length+1)}</span>
                    <span class="answer__value" data="${QuizAnswers[ indexQz ].incorrect_answers[0]}">${QuizAnswers[ indexQz ].incorrect_answers[0]}</span>
               </div>`
        } else {
            //incorrect
            document.querySelector( '.answers__content' ).innerHTML +=
                `<div class="answers ">
                    <div class="quiz__layout"></div>
                    <span class="number__answer">${numerAnswer(QuizAnswers[indexQz].correct_answer.length+1)}</span>
                    <span class="answer__value" data="${QuizAnswers[ indexQz ].incorrect_answers[0]}">${QuizAnswers[ indexQz ].incorrect_answers[0]}</span>
               </div>`

            //correct answers
            document.querySelector( '.answers__content' ).innerHTML +=
                `<div class="answers ">
                    <div class="quiz__layout"></div>
                    <span class="number__answer">${numerAnswer(QuizAnswers[indexQz].correct_answer.length+1)}</span>
                    <span class="answer__value" data="${QuizAnswers[indexQz].correct_answer}">${QuizAnswers[indexQz].correct_answer}</span>
                </div>`
        }
    } else {

        while ( posIncorrectAnswer < correct_answerPos ) {
            // statement

            document.querySelector( '.answers__content' ).innerHTML +=
                `<div class="answers ">
                    <div class="quiz__layout"></div>
                    <span class="number__answer">${numerAnswer(QuizAnswers[indexQz].correct_answer.length+1)}</span>
                    <span class="answer__value" data="${QuizAnswers[ indexQz ].incorrect_answers[i]}">${QuizAnswers[ indexQz ].incorrect_answers[i]}</span>
               </div>`
            posIncorrectAnswer++
            i++
        }
        //correct answer
        document.querySelector( '.answers__content' ).innerHTML +=
            `<div class="answers ">
                <div class="quiz__layout"></div>
                <span class="number__answer">${numerAnswer(QuizAnswers[indexQz].correct_answer.length+1)}</span>
                <span class="answer__value" data="${QuizAnswers[indexQz].correct_answer}">${QuizAnswers[indexQz].correct_answer}</span>
            </div>`
        //last
        lastIndex = i
        if ( lastIndex < QuizAnswers[ indexQz ].incorrect_answers.length ) {
            while ( lastIndex < QuizAnswers[ indexQz ].incorrect_answers.length ) {



                document.querySelector( '.answers__content' ).innerHTML +=
                    `<div class="answers ">
                    <div class="quiz__layout"></div>
                    <span class="number__answer">${numerAnswer(QuizAnswers[indexQz].correct_answer.length+1)}</span>
                    <span class="answer__value" data="${QuizAnswers[ indexQz ].incorrect_answers[lastIndex]}">${QuizAnswers[ indexQz ].incorrect_answers[lastIndex]}</span>
               </div>`
                lastIndex++

            }
        }
    }
    // console.log( 'pos correct ' + correct_answerPos )
    // PosCorrectAnswers(correct_answerPos)
}
async function playQuiz( count, category, level ) {
    let apiLink = ''
    if ( level === 'all' ) {
        apiLink = `https://opentdb.com/api.php?amount=${count}&category=${category}`
    } else {
        apiLink = `https://opentdb.com/api.php?amount=${count}&category=${category}&difficulty=${level}`
    }
    let response = await fetch( apiLink )
    if ( response.status === 200 ) {
        let data = await response.json( );
        return data;
    } else {
        return false
    }
}
async function renderUsers( ) {
    let datas = await playQuiz( NumberQuiz, CategoryQuiz, levelQuiz );
    // console.log( datas )
    if ( datas === false ) {
        alert( "error" )
    } else {
        if ( NumberQuiz === 10 ) {
            progressQuiz( '01', NumberQuiz )
            removeTabItem( tabitem )
            resetFcocusCategory( )
            activeTabItem( tabitem[ 4 ] )
        } else {
            progressQuiz( '1', NumberQuiz )
            removeTabItem( tabitem )
            resetFcocusCategory( )
            activeTabItem( tabitem[ 4 ] )
        }
        QuizAnswers = datas.results;
        showQuiz( 0 )
        indexQuizProgress = 0
        quizClick( )
        usersProgress.ToTalQuestions = NumberQuiz
        console.log( QuizAnswers )
    }


    // QuizAnswer = users.results;
    // progressQuiz.QuizLength =users.results.length
    // AddFirstQuiz( QuizAnswer[ 0 ] )
    document.querySelector( '.loading-quiz' ).style.display = "none"
    document.querySelector( '.container' ).style.height = "auto";
     document.querySelector( '.container' ).style.overflow = "visible";
}


window.addEventListener( 'load', ( ) => {
    document.querySelector( '.start' ).addEventListener( 'click', ( ) => {
        if ( NumberQuiz > 0 ) {
            indexQuizProgress = 0
            AnswerCorrect = 0
            QuizAnswers = [ ]
            usersProgress.ToTalQuestions = 0
            usersProgress.SuccessfulQuestions = 0
            usersProgress.FailedQuestions = 0

            RemaingQuestion = 0
            correct_answerPos = 0
            document.querySelector( '.loading-quiz' ).style.display = "flex";
            document.querySelector( '.container' ).style.height = "100%";
            document.querySelector( '.container' ).style.overflow = "hidden";
            renderUsers( )
        }
    } )
    document.querySelector( '.NextQuiz' ).addEventListener( 'click', ( e ) => {
        if ( ( e.target.classList.contains( 'as-a-answers' ) ) && ( e.target.innerText !== "Finish" ) ) {
            answersNext( )
            e.target.classList.replace( 'as-a-answers', 'no-answers' )
        } else {
            if ( e.target.innerText === "Finish" ) {

                showScore( )
                removeTabItem( tabitem )
                activeTabItem( tabitem[ 5 ] )
            }
        }
    } )
    document.querySelector('.result__view .header__tab .back__tab').addEventListener('click',()=>{
        indexQuizProgress = 0
            AnswerCorrect = 0
            QuizAnswers = [ ]
            usersProgress.ToTalQuestions = 0
            usersProgress.SuccessfulQuestions = 0
            usersProgress.FailedQuestions = 0

            RemaingQuestion = 0
            correct_answerPos = 0
            document.querySelector( '.NextQuiz' ).textContent = 'Next'
            document.querySelector( '.NextQuiz' ).classList.replace( 'as-a-answers', 'no-answers' )
    })
     document.querySelector('.Exit').addEventListener('click',()=>{
        indexQuizProgress = 0
            AnswerCorrect = 0
            QuizAnswers = [ ]
            usersProgress.ToTalQuestions = 0
            usersProgress.SuccessfulQuestions = 0
            usersProgress.FailedQuestions = 0

            RemaingQuestion = 0
            correct_answerPos = 0
            document.querySelector( '.NextQuiz' ).textContent = 'Next'
            document.querySelector( '.NextQuiz' ).classList.replace( 'as-a-answers', 'no-answers' )
            removeTabItem( tabitem )
            activeTabItem( tabitem[ 0 ] )
    })
    document.querySelector( '#try_btn' ).addEventListener( 'click', ( ) => {
        if ( NumberQuiz > 0 ) {
            indexQuizProgress = 0
            AnswerCorrect = 0
            QuizAnswers = [ ]
            usersProgress.ToTalQuestions = 0
            usersProgress.SuccessfulQuestions = 0
            usersProgress.FailedQuestions = 0

            RemaingQuestion = 0
            correct_answerPos = 0
            document.querySelector( '.NextQuiz' ).textContent = 'Next'
            document.querySelector( '.loading-quiz' ).style.display = "flex";
            document.querySelector( '.container' ).style.height = "100%";
            document.querySelector( '.container' ).style.overflow = "hidden";
            renderUsers( )
        }
    } )
} )
