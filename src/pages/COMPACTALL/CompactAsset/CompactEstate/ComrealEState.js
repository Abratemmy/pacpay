import React, { useState } from 'react'
import AssetInterface from '../../../../components/assetsInterface/AssetInterface'
import Interface from '../../../../components/flexwillinterface/interface'
import line from "../../../../assets/line.png"
import happy from "../../../../assets/happy.png"
import { NavLink } from 'react-router-dom'

function ComrealEState() {
    const [assetmodal, setassetmodal] = useState(true);

    return (
        <div style={{ background: "rgba(102, 149, 170, 0.336)", height: "100vh", width: "100%" }}>
            <Interface>
                <AssetInterface name="Real Estate" link="compact_realestate_form" />

                {assetmodal && (
                    <div className='new-assetmodal'>
                        <div className="personal-modal">
                            <div className="personal-modalContainer">
                                <div className="line"><img src={line} alt="" /></div>

                                {/* <div className="close"><button onClick={() => setassetmodal(false)}>X</button></div> */}

                                <div className="emoji" style={{ marginTop: "40px" }}><img src={happy} alt="" /></div>

                                <div className="title">WAIT!</div>
                                <div className="text">Do you want to upload another Real Estate details? </div>

                                <div className="personalmodal-btn">
                                    <NavLink to="/compact_realestate_form" className="first assetModal-nav"
                                    >Yes</NavLink>
                                    <NavLink to="/compact_realestate_assets" className="second assetModal-nav"

                                    >No</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Interface>
        </div>
    )
}

export default ComrealEState