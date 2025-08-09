import React, {useState} from 'react'
import WelComeComponent from './components/WelComeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'
function App() {
  const [showScreen,setShowScreen] = useState('welcome')
  const [answers,setAnswers] = useState([])
  return (
    <>
      <div className="container py-5 ">
        {showScreen =='welcome' && <WelComeComponent {...{showScreen,setShowScreen}} />}
        {showScreen =='quiz' &&<QuizComponent showScreen={showScreen} setShowScreen={setShowScreen} answers={answers} setAnswers={setAnswers} />}
        {showScreen =='result' &&<ResultComponent />}
      </div>
    </>
  )
}

export default App
