import React from 'react'

function PwdRequisite({
    capsLetterFlag,
    numberFlag,
    pwdLengthFlag,
    specialCharFlag,
}) {

    return (
        <div className="pwdRequisite">
            <span className={capsLetterFlag }>Password must contain 1 Capital Letter, </span>
            <span className={numberFlag}> contain number,</span>
            <span className={pwdLengthFlag}> Must be 8 Chars long and </span>
            <span className={specialCharFlag}> must contain special character</span>
        </div>
    )
}

export default PwdRequisite