import React from 'react'
import QuizJSON from '../api/quizJSON.json'

const ResultComponent = () => {
    // const totalQuestions = QuizJSON.length
    // const attempt_questions = answers.length
    // const total_correct = answer.length>0? answers.filter ((cur,i)=>{
    //     const quiz = QuizJSON.find((c=>c.id == cur.id))
    //     return quiz.correct_option === cur.answer
    // }) : 0

    return (
        <>
            <div className="card py-5 px-2">
                <h1 className="text-center ">
                    Quiz is Completed:
                </h1>
                {/* <div className="row gx-3 px-4 py-5">
                    <div className="col-sm-6 px-3">
                        <div className="card py-5 px-4">
                            <h2>Total Correct:</h2>
                        </div>
                    </div>
                    <div className="col-sm-6 px-3">
                        <div className="card py-5 px-4">
                            <h2>Total InCorrect:</h2>
                        </div>
                    </div>
                </div> */}
                {/* <div className="d-flex justify-content-center">
                    <button onClick={()=>window.location.reload} className="btn px-4 btn-success">
                        Restart
                    </button>
                </div> */}
            </div>
        </>
    )
}

export default ResultComponent