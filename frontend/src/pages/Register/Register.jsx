import React, { useState } from 'react'
import styles from './Register.module.css'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOTP from '../Steps/StepOTP/StepOTP'
import StepName from '../Steps/StepName/StepName'
import StepPicture from '../Steps/StepPicture/StepPicture'
import StepUsername from '../Steps/StepUsername/StepUsername'

const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
    3: StepName,
    4: StepPicture,
    5: StepUsername,
}

const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step]

    function onNext() {
        setStep(step+1);
    }

    return (
        <div>
            <Step onNext={onNext}/>
        </div>
    )
}

export default Register
