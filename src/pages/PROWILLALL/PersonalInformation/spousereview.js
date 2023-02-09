import React, {useEffect} from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";

function ProSpouseReview({setToggleState, reviewNext, addAnotherSpouse, spouselist, setCurrentId}) {
 
    return (
        <div>
            
            <div className='Personal-container container'>
                <div className="top">
                    <span><button onClick={setToggleState} className="personal-nav">
                        <MdArrowBackIosNew className='icon' />
                        <MdArrowBackIosNew className='icon icon2' /></button>
                        <span className='top-title'>Spouses' Lists</span>
                    </span> 

                    <div className='tiny-text'>You have access to add multiple witnesses by just clicking the plus button</div>
                </div>

                <div className="">
                    <div className='container'>
                        {spouselist?.spouse?.map((spouse, index)=>{
                            return(
                                <div key={index} style={{position:"relative"}} className="Personal-list-content">
                                    <div className='list-content-top'>
                                        <div className={(index % 2) ? 'even image': 'image'}>{spouse.fullName.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}</div>
                                        <div className='name'>{spouse.fullName}</div>
                                    </div>

                                    <button onClick={() => setCurrentId(spouse.fullName)} className={(index % 2) ?"even nav-btn" : "nav-btn"} style={{border: "none"}}>Edit</button>
                                    
                                    <div className='row list-content-row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Date Of Birth</label>
                                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span className='textdisplay'>{spouse.dateOfBirth}</span></div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className='list-input'>
                                                <label>Phone number</label>
                                                <div className="details"><div className='icon1'><BsPersonSquare className='icon' /> </div> <span className='textdisplay'>{spouse.mobile}</span></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                        
                    </div>
                </div>


                <div className='Personal-list-button'>
                    <button onClick={addAnotherSpouse} className="general-btn">Add another spouse</button>
                    <button onClick={reviewNext} className="general-btn general-btn1">Save and Proceed</button>
                </div>
            </div>
        </div>
    )
}

export default ProSpouseReview