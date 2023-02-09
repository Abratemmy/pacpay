import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md';
import FAQs from '../../components/FAQs/FAQs'
import Interface from '../../components/flexwillinterface/interface';
import { NavLink, useNavigate } from 'react-router-dom';

function RegFaq() {

    const navigate = useNavigate();

    const goBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <Interface>
                <span><button onClick={goBack} className="faq-nav">
                    <MdArrowBackIosNew className='icon' />
                    <MdArrowBackIosNew className='icon icon2' /></button>
                </span>

                <FAQs />
            </Interface>
        </div>
    )
}

export default RegFaq