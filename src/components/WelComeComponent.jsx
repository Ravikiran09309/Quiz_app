import React from 'react'

const WelComeComponent = ({showScreen,setShowScreen}) => {
    

    return (
        <>
            <div className="card py-4 px-3">
            <h1 className="text-center">WelCome to Quiz  </h1>
            <div className="d-felx align-items-center justify-content-center">
                <center>
                <button onClick={()=>setShowScreen('quiz')} className='btn btn-danger px-5'>Start</button>
                </center>
                
            </div>
            </div>
        </>
    )
}

export default WelComeComponent