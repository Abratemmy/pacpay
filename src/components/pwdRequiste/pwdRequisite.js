import React from 'react'

function PwdRequisite({
    capsLetterFlag,
    numberFlag,
    pwdLengthFlag,
    specialCharFlag,
}) {

    return (
        <div className="pwdRequisite">
            <span className={capsLetterFlag}>Must contain 1 Capital Letter</span>
            <span className={numberFlag}>Must contain number</span>
            <span className={pwdLengthFlag}>Must be 8 Chars long</span>
            <span className={specialCharFlag}> Must contain special character</span>
        </div>
    )
}

export default PwdRequisite