import React, { useState, useEffect } from 'react';
import Interface from '../../components/flexwillinterface/interface';
import PaymentContainer from './paymentContainer/payContainer';
import { useNavigate } from 'react-router-dom';
import "./propayment.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getLoggedInUser } from '../actions/auth';
import { chargeCard, store } from "../actions/payment"
import PaymentMainModal from '../../components/mainModal/paymentModal';

function FlexPayment() {
    const dispatch = useDispatch();
    const loggedinUser = useSelector((state) => state.loggedInUserReducer);
    const products = useSelector((state) => state.getProductReducer);
    const result = useSelector((state) => state.paymentReducer);
    console.log("result", result)

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getLoggedInUser())
    }, [dispatch]);


    const [values, setValues] = useState({
        checked: "",
        amount: products?.data?.[3]?.fund.totalFee,
        email: loggedinUser?.data?.email,
        transType: "fund",
        transMethod: "card",
        saveCard: true
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
    const payment = useSelector((state) => state.paymentReducer);
    console.log("payment", payment)
    const [paystackModal, setPaytackModal] = useState(false);

    const navigate = useNavigate()
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        if (v > 0) {
            console.log("error");
        }
        else {
            const payload = {
                amount: products?.data[3]?.fund.totalFee,
                email: loggedinUser?.data?.email,
                transType: "fund",
                transMethod: "card",
                saveCard: true,
            }
            dispatch(chargeCard(payload, setPaytackModal));
        }
    }

    // parameter for the second payment endpoint. store
    const reference = result?.data?.data?.reference
    const money = products?.data?.[3]?.fund.totalFee
    console.log("reference", reference)

    const [questionModal, setQuestionModal] = useState(false);

    const cancelPaystack = () => {
        setPaytackModal(false);
        setQuestionModal(false)
    }
    const successRoute = () => {
        const payload = {
            transId: reference,
            amount: money
        }
        dispatch(store(payload, navigate));
    }


    return (
        <div className='payment' >
            <Interface>
                {!products?.data?.length ? (
                    <div className="will-loading" style={{ paddingBottom: "30px", textAlign: "center", margin: "40px 0px", color: "green" }}>
                        <div className="spinner-grow spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                        <div className="spinner-grow spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                        <div className="spinner-grow spinner" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>

                ) : (
                    <div className='willproduct-page'>
                        <PaymentContainer name="PAC Flex Will" backlink="flex_review_details" amount={`NGN${products?.data[3]?.fund.totalFee}`}>
                            <div className='subtitle'>Features Of Fund:</div>

                            <div className='content-container'>
                                <div className='card'>
                                    <div className='first-content'>
                                        <div className='text text1'>Cost: <span className='span1'>NGN{products?.data[3]?.fund.cost}</span></div>
                                        <div className='text'>Probate fee: <span >NGN{products?.data[3]?.fund.probateFee}</span></div>
                                    </div>

                                    <div className='second-content' style={{ marginTop: "15px" }}>
                                        <div className='text text1'>Administrative fee: <span>NGN{products?.data[3]?.fund.adminFee}</span></div>
                                        <div className='text'>VAT: <span>NGN{products?.data[3]?.fund.vat}</span></div>
                                    </div>


                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group payment-form">
                                    <input type="checkbox" id="flexPayment" name="checked" onChange={handleChange} />
                                    <label for="flexPayment" className='asset-check'> I hereby affirm that I am of full age, sound mind and memory and consent to the use of the information provided herein for the draft of my Will</label>
                                </div>
                                {errors ? <p className='error'> {errors.checked}</p> : ""}

                                <div className='payment-button'>
                                    <button className="general-btn">
                                        Proceed
                                    </button>
                                </div>
                            </form>

                        </PaymentContainer>
                    </div>
                )
                }


                <PaymentMainModal paystackModal={paystackModal} setPaytackModal={setPaytackModal} reference={reference}
                    questionModal={questionModal} setQuestionModal={setQuestionModal}
                >
                    <div className='modalContent paymentModalContent'>
                        <iframe src={payment?.data?.data?.authorization_url}

                            className='display-paystack'
                        />

                        {questionModal ? (
                            <div className='question-pop'>
                                <div className='question-modal'>

                                    <div className=''>
                                        <p>Are you sure you want to close the modalContent</p>
                                        <div className='button'>
                                            <button onClick={cancelPaystack}>No</button>
                                            <button onClick={successRoute}>Yes</button>
                                        </div>
                                        <p>{reference}</p>
                                    </div>

                                </div>
                            </div>
                        ) : ""}

                    </div>
                </PaymentMainModal>

            </Interface>
        </div>
    )
}

export default FlexPayment