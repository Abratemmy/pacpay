import React from 'react'
import { BsPersonSquare } from 'react-icons/bs';

function EditRsa({ assetData, setAssetData, loading, success, editedRsaForm }) {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='viewContent'>
                        <div className='label'>Pen Number</div>
                        <div className='inputBox'>
                            <span><BsPersonSquare className="icon" /> </span>
                            <input type="text" className='name' value={assetData?.rsa?.penNumber}
                                onChange={(e) => {
                                    setAssetData({ ...assetData, penNumber: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='viewContent'>
                        <div className='label'>Pfa Admin</div>
                        <div className='inputBox'>
                            <span><BsPersonSquare className="icon" /> </span>
                            <input type="text" className='name' value={assetData?.rsa?.pfaAdmin}
                                onChange={(e) => {
                                    setAssetData({ ...assetData, pfaAdmin: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                </div>

                {
                    loading ?
                        <span type="submit" className="general-btn" disabled style={{ border: "0", background: "var(--lightblue)" }} >
                            <div className='loader-spinner'>
                                <div className="spinner-border spinner-border-sm" role="status">
                                    <span className="sr-only"></span>
                                </div>
                                <span >Updating...</span>
                            </div>
                        </span>
                        :
                        <>  {success && (<div className='success'>Spouse list updated successfully</div>)}
                            <span onClick={editedRsaForm} className='general-btn'>Update</span>
                        </>
                }
            </div>
        </div>
    )
}

export default EditRsa