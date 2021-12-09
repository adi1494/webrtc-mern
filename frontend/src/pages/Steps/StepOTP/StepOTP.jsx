import React from 'react'

const StepOTP = ({onNext}) => {
    return (
        <div>
            Enter OTP
            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default StepOTP
