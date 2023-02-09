import React, { useState, useEffect } from 'react';
import Interface from '../../../components/flexwillinterface/interface';
import { useDispatch } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import RsaForm from '../../../components/AssetData/rsa/rsaForm';
import { MdArrowBackIosNew } from "react-icons/md";
import rsavalidation2 from "../../../components/AssetData/rsa/rsaValidation"
import MainModal from '../../../components/mainModal/MainModal';
import Beneficiary from '../../../components/beneficiarypop/beneficiary';
import RsaDistributeasset from '../../../components/AssetData/rsa/rsaDistribute';
import { AiFillStar } from "react-icons/ai";
import { BsArrowUpRight, BsPersonSquare } from "react-icons/bs"
import RsaDetails from '../../../components/AssetData/rsa/rsaDetails';
import CashLanding from '../../../components/AssetData/cashInbank/cashLanding';
import CashForm from '../../../components/AssetData/cashInbank/cashForm';
import CashDistributeasset from '../../../components/AssetData/cashInbank/cashDistribute';
import cashinBankValidation from "../../../components/AssetData/cashInbank/cashValidation"
import CashDetails from '../../../components/AssetData/cashInbank/cashDetails';
import happy from "../../../assets/happy.png"
import line from "../../../assets/line.png"

function MainProForm() {
    const dispatch = useDispatch();
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const [errors, setErrors] = useState({});

    const [assetData, setAssetData] = useState({
        cashInBank: [],
        realEstate: [],
        shares: [],
        insurance: [],
        investment: [],
        personal: [],
        others: []
    })

    const [allBeneficiaries, setAllBeneficiaries] = useState([]);
    const reloadBeneficiaries = () => {
        const selectedBeneficiaries = JSON.parse(localStorage.getItem("BeneficiaryList"));
        setAllBeneficiaries(selectedBeneficiaries)
        console.log("SelectedBene", selectedBeneficiaries)
    }
    // code for rsa start here
    const rsaInital = {
        pfaAdmin: "",
        penNumber: "",
        description: "",
        beneficiaries: []
    }
    const [rsaData, setRsaData] = useState(rsaInital)
    const [assignBeneficiary, setAssignBeneficiary] = useState(false);
    const addBeneficiary = () => {
        setAssignBeneficiary(false);
        reloadBeneficiaries()
        setPage((currPage) => currPage + 1);
    }

    const [isEdit, setisEdit] = useState(false)
    const onBeneficiariesChanged = (beneficiaries) => {
        setisEdit(false);
        setAssignBeneficiary(false);
        reloadBeneficiaries()
    }

    const handleFormChange = (index, event, selected) => {
        let updatedSelected = selected
        updatedSelected.percentage = event.target.value;
        let updatedRsaBeneficiary = allBeneficiaries
        updatedRsaBeneficiary[index] = updatedSelected
        setAllBeneficiaries(updatedRsaBeneficiary);
        setRsaData({
            ...rsaData,
            beneficiaries: updatedRsaBeneficiary
        })
    };
    const addRsaResult = rsaData?.beneficiaries?.reduce((total, currentValue) => total = total + parseInt(currentValue.percentage), 0)

    const toggleBeneficiaryModal = () => {
        setisEdit(true)
        setAssignBeneficiary(prev => !prev)
    }

    const handleDesError = (targets) => {
        let errorsValue = {};
        if (!targets.description) errorsValue.description = "Description  is required";
        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});
        return Object.keys(errorsValue).length;

    };
    console.log("rsa", rsaData)
    const [errorPercentage, setErrorPercentage] = useState(false)
    const rsaDistribute = () => {
        let v = handleDesError(rsaData);
        if (!v > 0 && addRsaResult == 100) {
            let rsa = {}
            rsa = rsaData
            setAssetData({
                ...assetData,
                rsa
            })
            setPage((currPage) => currPage + 1);
        } else if (addRsaResult > 100 || addRsaResult < 100) {
            setErrorPercentage(true)
        }
        else {
            console.log("error123")
        }
    }
    const [editRsa, setEditRsa] = useState(false)
    const editRsaFunction = () => {
        setEditRsa(!editRsa)
        console.log("editing page")
    }

    // code for cashInBank starts here
    const cashInitial = {
        bankName: "",
        bvn: "",
        accountType: "",
        branch: "",
        accountNumber: "",
        ownershipStatus: "",
        beneficiaries: []
    }
    const [cashData, setCashData] = useState(cashInitial);
    const clearCashData = () => setCashData(cashInitial)

    const [goBack, setGoBack] = useState(false)
    const backArrowCashLanding = () => {
        setToggleState(1)
        // if (goBack) {
        //     setPage((currPage) => currPage - 1);
        // } else {
        //     setPage((currPage) => currPage + 1);
        // }
    }
    const goToNigeriaBank = () => {
        setPage(3);
        setToggleState(1)
    }
    const reloadCashBeneficiaries = () => {
        const selectedBeneficiaries = JSON.parse(localStorage.getItem("BeneficiaryList"));
        setAllBeneficiaries(selectedBeneficiaries)
        console.log("SelectedBene", selectedBeneficiaries)
    }
    // button to assign cash beneficiary below
    const [cashAssign, setCashAssign] = useState(false)
    const assignCashBeneficiary = () => {
        const cashError = cashinBankValidation(cashData);
        setErrors(cashError);
        if (Object.keys(cashError).length > 0) {
            console.log("errorcash")
        } else {
            setCashAssign(!cashAssign)
            setErrorPercentage(false)
        }

    }
    const addCashBeneficiary = () => {
        setCashAssign(false);
        reloadCashBeneficiaries()
        setPage((currPage) => currPage + 1);
    }
    const editBeneficiaryToggle = () => {
        setisEdit(true);
        setCashAssign(true)
    }

    const handleCashChange = (index, event, selected) => {
        let updatedSelected = selected
        updatedSelected.percentage = event.target.value;
        let updatedRsaBeneficiary = allBeneficiaries
        updatedRsaBeneficiary[index] = updatedSelected
        setAllBeneficiaries(updatedRsaBeneficiary);
        setCashData({
            ...cashData,
            beneficiaries: updatedRsaBeneficiary
        })
    };
    const addCashResult = cashData?.beneficiaries?.reduce((total, currentValue) => total = total + parseInt(currentValue.percentage), 0)

    const [openCashModal, setOpenCashModal] = useState(false)
    const cashDistribute = () => {
        if (addCashResult == 100) {
            let assetDataCopy = JSON.parse(JSON.stringify(assetData))
            assetDataCopy.cashInBank[assetData.cashInBank.length] = cashData
            setAssignBeneficiary(false)
            setAssetData(assetDataCopy)
            console.log("assetDataCopy", assetData);
            setOpenCashModal(true)
        } else if (addCashResult > 100 || addCashResult < 100) {
            setErrorPercentage(true)
        }
        else {
            console.log("error123")
        }
    }
    const addMoreCash = () => {
        setOpenCashModal(false)
        clearCashData()
        setToggleState(2)
    }
    const [page, setPage] = useState(0);
    const PageDisplay = () => {
        if (page === 0) {
            return <RsaForm rsaData={rsaData} setRsaData={setRsaData} errors={errors} />;
        } else if (page === 1) {
            return <RsaDistributeasset rsaData={rsaData} setRsaData={setRsaData} errors={errors} toggleBeneficiaryModal={toggleBeneficiaryModal}>
                <div className='sharingPercentagelist'>
                    {allBeneficiaries?.map((selected, index) => (
                        <div className='totalPercentage' key={index}>
                            <div ><AiFillStar className="icon" />
                                <span className='text'>{selected.fullName}</span>
                            </div>
                            <div className='vertical-line'></div>
                            <div className='input'>
                                <input type="number" className='input' name="rsa" required
                                    value={selected.percentage}
                                    onChange={event => handleFormChange(index, event, selected)}
                                />
                            </div>
                        </div>
                    )
                    )}

                    <div className="totalValue">
                        <div className='total'>Total: {addRsaResult}</div>
                        <div className='checkError'>{addRsaResult === 100 ? "" : <span className='error'>Total percentage cannot be greater or less than 100% </span>}</div>
                    </div>
                </div>
            </RsaDistributeasset>
        }
        else if (page === 2) {
            return <RsaDetails editRsa={editRsa} editRsaFunction={editRsaFunction} assetData={assetData} />
        }
        else if (page === 3) {
            return <CashForm errors={errors} cashData={cashData} setCashData={setCashData} />
        }
        else if (page === 4) {
            return <CashDistributeasset editBeneficiaryToggle={editBeneficiaryToggle} >
                <div className='sharingPercentagelist'>
                    {allBeneficiaries?.map((selected, index) => (
                        <div className='totalPercentage' key={index}>
                            <div ><AiFillStar className="icon" />
                                <span className='text'>{selected.fullName}</span>
                            </div>
                            <div className='vertical-line'></div>
                            <div className='input'>
                                <input type="number" className='input' name="rsa" required
                                    value={selected.percentage}
                                    onChange={event => handleCashChange(index, event, selected)}
                                />
                            </div>
                        </div>
                    )
                    )}

                    <div className="totalValue">
                        <div className='total'>Total: {addCashResult}</div>
                        <div className='checkError'>{addCashResult === 100 ? "" : <span className='error'>Total percentage cannot be greater or less than 100% </span>}</div>
                    </div>
                </div>
            </CashDistributeasset>
        } else if (page === 5) {
            return <CashDetails />
        }
        else {
            return null
        }
    }

    console.log("assetData", assetData)
    const { page: page_id = 1 } = useParams();

    useEffect(() => {
        console.log("pageId", page_id - 1);
        setPage(page_id - 1)
    }, [page_id])

    const submitAllAsset = () => {

    }
    return (
        <div className='mainAsset'>
            <Interface>
                <div className='distributeAssets'>
                    <form onSubmit={submitAllAsset}>
                        <div className="assetcontent-tabs" >
                            <div className={toggleState === 1 ? "content active-content" : "content"}>
                                <div className='top'>
                                    {page === 0 ? (
                                        <span><NavLink to="/pro_assets" className="personal-nav">
                                            <MdArrowBackIosNew className='icon' />
                                            <MdArrowBackIosNew className='icon icon2' /></NavLink>
                                        </span>
                                    )
                                        :
                                        (
                                            <span
                                                disabled={page === 0}
                                                onClick={() => {
                                                    setPage((currPage) => currPage - 1)
                                                    setGoBack(false)
                                                }}
                                                className="personal-nav"
                                                style={{ color: "var(--blueColor)", border: "none", background: "none" }}
                                            >
                                                <MdArrowBackIosNew className='icon' />
                                                <MdArrowBackIosNew className='icon icon2' />
                                            </span>
                                        )}

                                    <div className='toptext'>
                                        {page === 0 ? <div className=''> RSA(Retirement Saving Account) </div> :
                                            page === 1 ? <div className=''>"Distribite Assets" </div> : <div className='toptext'></div>
                                        }
                                    </div>
                                </div>


                                <div className='body'>{PageDisplay()}</div>

                                <div className='button'>
                                    {page === 0 ?
                                        <span onClick={() => {
                                            const rsaError = rsavalidation2(rsaData);
                                            setErrors(rsaError);
                                            if (Object.keys(rsaError).length > 0) {
                                                console.log("error")
                                            } else {
                                                let rsa = {}
                                                rsa = rsaData
                                                setAssetData(asset => ({
                                                    ...asset,
                                                    rsa
                                                }))
                                                setAssignBeneficiary(!assignBeneficiary)
                                            }
                                        }} className="general-btn">
                                            Assign Beneficiary
                                        </span>
                                        : (page === 1) ?
                                            <>
                                                <div className='newAssetBtn'>
                                                    <div className='ps'>PS: You don’t want to share your asset now? you can <NavLink to="/flex_will_distribute_asset2" style={{ background: "transparent", textDecoration: "none" }}><span>Skip <BsArrowUpRight className="icon" /> </span></NavLink> </div>

                                                    <span onClick={rsaDistribute} className="general-btn">
                                                        Submit
                                                    </span>
                                                </div>
                                            </>
                                            : (page === 2) ? <>
                                                <span onClick={() => setToggleState(2)} className="general-btn">Add Cash In Bank</span>
                                            </> : (page === 3) ? <>
                                                <span onClick={assignCashBeneficiary} className="general-btn">Assign Beneficiary</span>
                                            </> : (page === 4) ? <>
                                                <span onClick={cashDistribute} className="general-btn">Submit</span>
                                            </> :

                                                ""
                                    }
                                </div>

                                {page === 1 ? <>  {errorPercentage && (
                                    <div className='errorMessage'>
                                        {(addRsaResult > 100 || addRsaResult < 100) ? <div className='error'>Percentage cannot be greater or less than 100</div> :
                                            <div className='error'>Percentage cannot be empty</div>
                                        }

                                    </div>)}
                                </> :
                                    (page === 4) ? <>{errorPercentage && (
                                        <div className='errorMessage'>
                                            {(addCashResult > 100 || addCashResult < 100) ? <div className='error'>Percentage cannot be greater or less than 100</div> :
                                                <div className='error'>Percentage cannot be empty</div>
                                            }

                                        </div>)}
                                    </>
                                        :
                                        ""}
                            </div>

                            <div className={toggleState === 2 ? "content active-content" : "content"}>
                                <CashLanding backArrow={backArrowCashLanding} goToNigeriaBank={goToNigeriaBank} />
                            </div>

                        </div>
                    </form>

                    {assignBeneficiary && (
                        <MainModal trigger={assignBeneficiary} setTrigger={setAssignBeneficiary}>
                            <div className='modalContent'>
                                <Beneficiary addBeneficiary={addBeneficiary} onBeneficiariesChanged={onBeneficiariesChanged} isEdit={isEdit} />

                            </div>
                        </MainModal>
                    )}

                    {cashAssign && (
                        <MainModal trigger={cashAssign} setTrigger={setCashAssign}>
                            <div className='modalContent'>
                                <Beneficiary addBeneficiary={addCashBeneficiary} onBeneficiariesChanged={onBeneficiariesChanged} isEdit={isEdit} />

                            </div>
                        </MainModal>
                    )}

                    {openCashModal && (
                        <div className="personal-modal">
                            <div className="personal-modalContainer">
                                <div className="line"><img src={line} alt="" /></div>

                                <div className="close"><button onClick={() => setOpenCashModal(false)}>X</button></div>

                                <div className="emoji"><img src={happy} alt="" /></div>

                                <div className="title">WAIT!</div>
                                <div className="text">Do you want to upload another bank details? </div>

                                <div className="personalmodal-btn">
                                    <button className="first"
                                        onClick={addMoreCash}
                                    >Yes</button>
                                    <button className="second"
                                        onClick={() => {
                                            setOpenCashModal(false)
                                            setPage((currPage) => currPage + 1);
                                        }}
                                    >No</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Interface>
        </div>
    )
}

export default MainProForm