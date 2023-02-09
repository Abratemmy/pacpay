import React, { useState } from 'react';
import "./MainModal.css";
import line from "../../assets/line.png"

function PaymentMainModal({ children, reference, amount, paystackModal, questionModal, setQuestionModal }) {

    return (
        <div>
            {
                paystackModal && (
                    <>
                        <div className='mainModal paymentModal'>
                            <div className='mainModal-inner payment-inner'>
                                <div className='image-line'><img src={line} alt="" /></div>
                                <div className='closeButton'><button className='closeBtn' onClick={() => setQuestionModal(!questionModal)}><span>X</span></button></div>
                                {children}

                            </div>


                        </div>


                    </>

                )
            }

        </div>
    );
}

export default PaymentMainModal