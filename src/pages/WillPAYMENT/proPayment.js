import React, { useState } from 'react';
import Interface from '../../components/flexwillinterface/interface';
import PaymentContainer from './paymentContainer/payContainer';
import { useNavigate } from 'react-router-dom';
import "./propayment.css";

function ProPayment() {
    const [values, setValues] = useState({
        checked: ""
    });
    const [errors, setErrors] = useState({});

    // get input values
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value,
        });
    };
    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.checked) errorsValue.checked = "Checked the box";

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const navigate = useNavigate()
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
        }
        //submit form here if no error availble
        else {
            console.log("submitted", values);
            navigate("/pro_review_success")
        }
    }
    return (
        <div className='payment' >
            <Interface>
                <div className='willproduct-page'>
                    <PaymentContainer name="PAC Pro Will" backlink="pro_review_details" amount="NGN31, 125">
                        <div className='subtitle'>Features Of Fund:</div>

                        <div className='content-container'>
                            <div className='card'>
                                <div className='first-content'>
                                    <div className='text text1'>Cost: <span className='span1'>NGN15,000</span></div>
                                    <div className='text'>Probate fee: <span >NGN10,000</span></div>
                                </div>

                                <div className='second-content' style={{ marginTop: "15px" }}>
                                    <div className='text text1'>Administrative fee: <span>NGN5,000</span></div>
                                    <div className='text'>VAT: <span>NGN1, 125</span></div>
                                </div>


                            </div>

                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group payment-form">
                                <input type="checkbox" id="proPayment" name="checked" onChange={handleChange} />
                                <label for="proPayment" className='asset-check'> I hereby affirm that I am of full age, sound mind and memory and consent to the use of the information provided herein for the draft of my Will</label>
                            </div>
                            {errors ? <p className='error'> {errors.checked}</p> : ""}

                            <div className='payment-button'>
                                <button className="will-container-nav">
                                    proceed
                                </button>
                            </div>
                        </form>

                    </PaymentContainer>
                </div>
            </Interface>
        </div>
    )
}

export default ProPayment