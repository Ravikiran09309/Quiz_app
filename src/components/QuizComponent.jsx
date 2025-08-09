import React,{useState} from 'react'
import QuizJSON from '../api/quizJSON.json'

const QuizComponent = ({showScreen,setShowScreen,answers,setAnswers}) => {

    const [index,setIndex] = useState(0)

    const quiz = QuizJSON[index]

    // const addAnswer=(id,answer)=>{
    //     setAnswers((id,answer))
    
    return (
        <>
            <div className="card py-5 px-3">
                {JSON.stringify(answers)}
                <h1>{quiz.id}. {quiz.title}</h1>
                <div className="d-flex flex-column py-4">
                    {
                        quiz.options.map((cur,i)=>{
                            return <label key={i} htmlFor={cur}>
                                <input type="radio" name="answer" id={cur} value={cur} />{cur}
                            </label>
                        })
                    }
                 </div>
                <div className="mb-3">
                    <button disabled={index==0}onClick={()=>setIndex(index-1)} className="btn mx-1 btn-danger">Prev</button>
                    <button disabled={index >= QuizJSON.length-1} onClick={()=>setIndex(index+1)} className="btn mx-1 btn-success">Next</button>
                    {QuizJSON.length - 1 === index &&
                     <button onClick={()=>setShowScreen('result')} 
                     className="btn mx-1 btn-success">Submit Answer</button>}
                </div>
            </div>
        </>
    )
}

export default QuizComponent