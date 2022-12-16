import React, { useState } from 'react';
import executorimg from "../../../assets/flex-executor.png";
import Popup from '../../../components/Popup/popup';



function Executor() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup1, setButtonPopup1] = useState(false);

    return (
        <div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className='popup-container'>
                    <div className="image-line"><img src={executorimg} alt="" /></div>

                    <div className='popup-content'>
                        <div className='text'>APPOINT YOUR EXECUTORS</div>
                        <div className='button'>
                            <button className='nav-link' onClick={() => setButtonPopup1(true)}><span>Get started</span></button>
                        </div>
                    </div>
                </div>
            </Popup>

            <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                <div className='popup-container'>
                    <div className="image-line"><img src={executorimg} alt="" /></div>

                    <div className='popup-content'>
                        <div className='text'>APPOINT YOUR EXECUTORS3456777888</div>
                        <div className='button'>
                            <button className='nav-link'><span>Get started</span></button>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default Executor