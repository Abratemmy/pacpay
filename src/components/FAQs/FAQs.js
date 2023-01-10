import React, { useState } from 'react';
import "./FAQs.css";

function FAQs() {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className='faq'>
            <div className='header'>Frequently Asked Questions</div>
            <p>If you can’t find an answer, please mail <a href="mailto: support@pacidd.ai" target="_blank" rel="noopener noreferrer" className='link' > support@pacidd.ai</a></p>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <div className='question'>{item.question}</div> <span>{selected === i ? "-" : "+"}</span></div>
                        <div className={selected === i ? "content show" : "content"}> <div className='answer'>Answer: {item.answer} </div></div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const data = [
    {
        question: "What is a Will?",
        answer:
            "A Will is a legal document through which you can direct what should happen to your property, possessions and money when you pass on."

    },

    {
        question: "What happens if a person dies without a will? ",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        question: "How do I change my Will?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        question: "Can my Will be changed?",
        answer: "LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        question: "How often should my Will be revised/updated?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        question: "Does a person have to have a minimum amount of assets to create a will?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        question: "Where should I store my Will?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        question: "what happens after someone who has a Will passes away?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        question: "Can I change or revoke my Will after I make it?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
]
export default FAQs

