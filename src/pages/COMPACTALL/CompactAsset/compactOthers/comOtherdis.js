import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface'
import line from "../../../../assets/line.png"
import happy from "../../../../assets/happy.png"
import { NavLink } from 'react-router-dom'
import MainModal from '../../../../components/mainModal/MainModal'

function ComOtherAssets() {
    const [assetmodal, setassetmodal] = useState(true);

    const [goToShowAllAsset, setGoToShowAllAsset] = useState(false);

    const showAllToggle = () => {
        setGoToShowAllAsset(true);
        // setassetmodal(false)
    }
    return (
        <div style={{ background: "rgba(102, 149, 170, 0.336)", height: "100vh", width: "100%" }}>
            <Interface>
                <AssetInterface name="Other Assets" link="compact_other_form" />

                {assetmodal && (
                    <div className='new-assetmodal'>
                        <div className="personal-modal">
                            <div className="personal-modalContainer">
                                <div className="line"><img src={line} alt="" /></div>

                                {/* <div className="close"><button onClick={() => setassetmodal(false)}>X</button></div> */}

                                <div className="emoji" style={{ paddingTop: "40px" }}><img src={happy} alt="" /></div>

                                <div className="title">WAIT!</div>
                                <div className="text">Do you want to upload another Other Asset details? </div>

                                <div className="personalmodal-btn">
                                    <NavLink to="/compact_other_form" className="first assetModal-nav"
                                    >Yes</NavLink>
                                    <button onClick={showAllToggle} className="second assetModal-nav" style={{ width: "180px" }}

                                    >No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                <MainModal trigger={goToShowAllAsset} setTrigger={setGoToShowAllAsset}>
                    <div className='modalContent'>
                        <div className='title'>WAIT</div>

                        <div className='text'>I declare that I am not indebted to any person or company with respect to any of my real estate property listed in Clause 7(a) of this my Will and title documents to
                            these properties are currently in my custody at the time of writing this Will.</div>

                        <div className='navButtton' style={{ marginBottom: "30px" }}>
                            <NavLink to="/compact_showall_assets" className="modal-nav" >I agree</NavLink>
                        </div>

                    </div>
                </MainModal>
            </Interface>
        </div>
    )
}

export default ComOtherAssets