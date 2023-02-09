import React, { useState, useEffect, useCallback } from 'react'
import Distributeasset1 from './distributeasset1';
import FlexRsa from './flexRsa';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import Interface from '../../../../components/flexwillinterface/interface';
import { MdArrowBackIosNew } from "react-icons/md";
import { BsArrowUpRight, BsPersonSquare } from "react-icons/bs"
import rsavalidation from "./flexRsavalidation";
import MainModal from '../../../../components/mainModal/MainModal';
import Beneficiary from '../../../../components/beneficiarypop/beneficiary';
import { AiFillStar } from "react-icons/ai";
import Distributeasset2 from './distributeasset2';
import Flexcashlanding from './cashinnabkLanding';
import Cashinbank from './cashinbank';
import cashinBankValidation from '../../../../components/assetvalidation/cashinbankval';
import { useDispatch, useSelector } from 'react-redux';
import { updateAsset } from "../../../actions/auth"
import Distributeassetcash from './distributeassetcash';
import Distributeassetmain from "./distributeassetmain"
import CashBeneficiary from '../../../../components/beneficiarypop/cashBeneficiary';
import happy from "../../../../assets/happy.png"
import line from "../../../../assets/line.png"
import EditRsa from './editRsa';

function FlexAssets() {
  const dispatch = useDispatch();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  const [errors, setErrors] = useState({});


  const [assetData, setAssetData] = useState({
    cashInBank: []
  });

  useEffect(() => {
    setAssetData(assetData)
    localStorage.setItem('AllAsset', JSON.stringify(assetData));

  }, [assetData])


  const rsaInital = {
    pfaAdmin: "",
    penNumber: "",
    description: "",
    beneficiaries: []
  }

  const [rsaData, setRsaData] = useState(rsaInital)

  const [allBeneficiaries, setAllBeneficiaries] = useState([]);

  const reloadBeneficiaries = () => {
    const selectedBeneficiaries = JSON.parse(localStorage.getItem("BeneficiaryList"));
    setAllBeneficiaries(selectedBeneficiaries)
    console.log("SelectedBene", selectedBeneficiaries)
  }

  const reloadCashBeneficiaries = () => {
    const selectedBeneficiaries = JSON.parse(localStorage.getItem("CashList"));
    setAllBeneficiaries(selectedBeneficiaries)
    console.log("Selecash", selectedBeneficiaries)
  }

  const handleFormChange = useCallback((index, event, selected) => {
    let updatedSelected = selected
    console.log("raSelected", selected)
    updatedSelected.percentage = event.target.value;
    let updatedRsaBeneficiary = allBeneficiaries
    updatedRsaBeneficiary[index] = updatedSelected
    setAllBeneficiaries(updatedRsaBeneficiary);
    setRsaData({
      ...rsaData,
      beneficiaries: updatedRsaBeneficiary
    })
  }, [allBeneficiaries]);


  const handleCashChange = useCallback((index, event, selectedCash) => {
    let updatedSelected = selectedCash
    console.log("cashSelectedCash", selectedCash)
    updatedSelected.percentage = event.target.value;
    let updatedRsaBeneficiary = allBeneficiaries
    updatedRsaBeneficiary[index] = updatedSelected
    setAllBeneficiaries(updatedRsaBeneficiary);
    setCashData({
      ...cashData,
      beneficiaries: updatedRsaBeneficiary
    })
  }, [allBeneficiaries])

  const addRsaResult = rsaData?.beneficiaries?.reduce((total, currentValue) => total = total + parseInt(currentValue.percentage), 0)



  const [page, setPage] = useState(0);
  const PageDisplay = () => {
    if (page === 0) {
      return <FlexRsa rsaData={rsaData} setRsaData={setRsaData} errors={errors} />;
    }
    else if (page === 1) {
      return <Distributeasset1 rsaData={rsaData} setRsaData={setRsaData} errors={errors} toggleBeneficiaryModal={toggleBeneficiaryModal}>
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

                {/* <div>{selected.percentage}</div> */}
              </div>
            </div>
          )
          )}

          <div className="totalValue">
            <div className='total'>Total: {addRsaResult}</div>
            <div className='checkError'>{addRsaResult === 100 ? "" : <span className='error'>Total percentage cannot be greater or less than 100% </span>}</div>
          </div>
        </div>
      </Distributeasset1>;
    }
    else if (page === 2) {
      return <Flexcashlanding addcashInBank={() => setToggleState(4)} addForeignBank={() => setToggleState(6)} />
    }
    else {
      return null
    }

  };

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

      console.log("submitted123", rsaData);
      setToggleState(2)
    } else if (addRsaResult > 100 || addRsaResult < 100) {
      setErrorPercentage(true)
    }
    else {
      console.log("error123")
    }
  }
  const editRsa = () => {
    setToggleState(3)
  }
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false)

  const editedRsaForm = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const value = assetData;
      setLoading(false);
      setToggleState(2)

    }, 2000);

    // console.log("popupcontent", popupcontent)
  }


  const { page: page_id = 1 } = useParams();

  useEffect(() => {
    console.log("pageId", page_id - 1);
    setPage(page_id - 1)
  }, [page_id])

  const [assignBeneficiary, setAssignBeneficiary] = useState(false);

  const addBeneficiary = () => {
    setAssignBeneficiary(false);
    reloadBeneficiaries()
    setPage((currPage) => currPage + 1);
    // setToggleState(6)
  }

  const addCashBeneficiary = () => {
    setCashAssign(false);
    reloadCashBeneficiaries()
    setToggleState(6)
  }

  const onBeneficiariesChanged = (beneficiaries) => {
    setisEdit(false);
    setAssignBeneficiary(false);
    reloadBeneficiaries()
  }

  const onCashBeneficiariesChanged = (beneficiaries) => {
    // setisEdit(false);
    // setAssignBeneficiary(false);
    // reloadBeneficiaries()
  }

  const [isEdit, setisEdit] = useState(false)


  // const [editToggle, setEditToggle] = useState(false)
  const toggleBeneficiaryModal = () => {
    setisEdit(true)
    setAssignBeneficiary(prev => !prev)
  }

  const AddCashInBank = () => {
    setPage((currPage) => currPage + 1);
    setToggleState(1)
  }

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

  const [cashAssign, setCashAssign] = useState(false);
  const clearCashData = () => setCashData(cashInitial)

  const addCashResult = cashData?.beneficiaries?.reduce((total, currentValue) => total = total + parseInt(currentValue.percentage), 0)
  console.log("cashResult", addCashResult)

  const cashInBankSubmit = () => {
    const cashError = cashinBankValidation(cashData);
    setErrors(cashError);
    if (Object.keys(cashError).length > 0) {
      console.log("error")
    } else {

      setCashAssign(!cashAssign)
    }
  }

  console.log("cash", cashData)

  const navigate = useNavigate()

  const [openCashModal, setOpenCashModal] = useState(false)

  const cashDistribute = () => {
    // assetData.cashInBank.push(cashData)
    let assetDataCopy = JSON.parse(JSON.stringify(assetData))
    assetDataCopy.cashInBank[assetData.cashInBank.length] = cashData
    setAssignBeneficiary(false)
    setAssetData(assetDataCopy)
    console.log("assetDataCopy", assetData);
    setOpenCashModal(true)

  }


  const submitAllAsset = (e) => {
    e.preventDefault()
    const rsaBeneficiariesValue = assetData.rsa.beneficiaries.map((beneficiary, index) => {
      return {
        fullName: beneficiary.fullName,
        percentage: beneficiary.percentage,
        address: beneficiary.contactAddress,
        title: beneficiary.title
      }
    })

    const cashBeneficiariesValue = assetData.cashInBank.map(cashValue => {
      return {
        ...cashValue,
        beneficiaries: cashValue.beneficiaries.map((beneficiary, index) => {
          return {
            fullName: beneficiary.fullName,
            percentage: beneficiary.percentage,
            address: beneficiary.contactAddress,
            title: beneficiary.title
          }
        })
      }
    })

    console.log("assetDatannew", assetData)
    assetData.rsa.beneficiaries = rsaBeneficiariesValue
    assetData.cashInBank = cashBeneficiariesValue

    console.log("assetDatannewValue", assetData)
    const payload = {
      asset: assetData
    }
    dispatch(updateAsset(payload, navigate));
  }

  const addCash = () => {
    setOpenCashModal(false)
    clearCashData()
    setPage((currPage) => currPage + 1);
    setToggleState(1)
  }


  const editCashDetail = (value, getindex) => {
    console.log("value1234456", value, "index", getindex);
    let oldData = JSON.parse(JSON.stringify(assetData));
    oldData.cashInBank[getindex] = value
    setAssetData(oldData)

  }

  console.log("assetData", assetData)

  const [cashlist, setcashlist] = useState([]);
  const res = JSON.parse(localStorage.getItem('AllAsset'));
  console.log("res890", res)
  const fecthCash = () => {
    if (res !== null) {
      setcashlist(res)
    }
  }

  return (
    <div className='mainAsset'>
      <Interface>
        <div className=''>
          <div className='distributeAssets'>
            <form onSubmit={submitAllAsset}>
              <div className="assetcontent-tabs" >
                <div className={toggleState === 1 ? "content active-content" : "content"}>

                  <div className='top'>
                    {page === 0 ? (
                      <span><NavLink to="/flex_will_assets" className="personal-nav">
                        <MdArrowBackIosNew className='icon' />
                        <MdArrowBackIosNew className='icon icon2' /></NavLink>
                      </span>
                    ) : (
                      <span
                        disabled={page === 0}
                        onClick={() => {
                          setPage((currPage) => currPage - 1);
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
                        const rsaError = rsavalidation(rsaData);
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
                        : ""
                    }
                  </div>

                  {page === 1 ? <>  {errorPercentage && (
                    <div className='errorMessage'>
                      {(addRsaResult > 100 || addRsaResult < 100) ? <div className='error'>Percentage cannot be greater or less than 100</div> :
                        <div className='error'>Percentage cannot be empty</div>
                      }

                    </div>)}
                  </> : ""}
                </div>


                <div className={toggleState === 2 ? "content active-content" : "content"}>
                  <Distributeasset2 setToggleState={() => setToggleState(1)} editRsa={editRsa} />

                  <div className='button' style={{ textAlign: "right", paddingTop: "60px", marginTop: "30px" }}>
                    <span onClick={AddCashInBank} className="asset-nav1" style={{ border: "none" }}>
                      Add Cash in Bank
                    </span>
                  </div>
                </div>

                <div className={toggleState === 3 ? "content active-content" : "content"}>
                  <EditRsa assetData={assetData} setAssetData={setAssetData} loading={loading} success={success} editedRsaForm={editedRsaForm}
                  />
                </div>

                <div className={toggleState === 4 ? "content active-content" : "content"}>
                  <Cashinbank cashInBank={cashData} setCashInBank={setCashData} errors={errors} setToggle={() => setToggleState(2)} />

                  <div className="button">
                    <span onClick={cashInBankSubmit} className="general-btn"> Assign Beneficiary</span>
                  </div>
                </div>
                <div className={toggleState === 5 ? "content active-content" : "content"}>
                  <Flexcashlanding />
                </div>
                <div className={toggleState === 6 ? "content active-content" : "content"}>
                  <Distributeassetcash cashData={cashData} setCashData={setCashData} toggleBeneficiaryModal={toggleBeneficiaryModal} toggleState={() => setToggleState(4)}>
                    <div className='sharingPercentagelist'>
                      {allBeneficiaries?.map((selectedCash, index) => (
                        <div className='totalPercentage' key={index}>
                          <div >
                            <AiFillStar className="icon" />
                            <span className='text'>{selectedCash.fullName}</span>
                          </div>
                          <div className='vertical-line'></div>
                          <div className='input'>
                            <input type="number" className='input' name="cash" required
                              value={selectedCash.percentage1}
                              onChange={event => handleCashChange(index, event, selectedCash)}
                            />
                          </div>
                          {/* <div>{selectedCash.percentage}</div> */}
                        </div>
                      )
                      )}
                      <div className="totalValue">
                        <div className='total'>Total: {addCashResult}</div>
                        <div className='checkError'>{addCashResult === 100 ? "" : <span className='error'>Total percentage cannot be greater or less than 100% </span>}</div>
                      </div>
                    </div>


                  </Distributeassetcash>


                  <div className='button'>
                    <div className='newAssetBtn'>

                      <div className='ps'>PS: You don’t want to share your asset now? you can <NavLink to="/flex_will_distribute_asset2" style={{ background: "transparent", textDecoration: "none" }}><span>Skip <BsArrowUpRight className="icon" /> </span></NavLink> </div>
                      <span onClick={cashDistribute} className="general-btn">
                        Submit
                      </span>
                    </div>
                  </div>
                </div>

                <div className={toggleState === 7 ? "content active-content" : "content"}>
                  <Distributeassetmain cashlist={assetData} submitAllAsset={submitAllAsset} editCashDetail={editCashDetail} />
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

            <MainModal trigger={cashAssign} setTrigger={setCashAssign} >
              <div className='modalContent'>
                cash in bank
                <CashBeneficiary addBeneficiary={addCashBeneficiary} onBeneficiariesChanged={onCashBeneficiariesChanged} isEdit={isEdit} />
              </div>
            </MainModal>

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
                      onClick={addCash}
                    >Yes</button>
                    <button className="second"
                      onClick={() => {
                        fecthCash()
                        setOpenCashModal(false)
                        setToggleState(7)
                      }}
                    >No</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Interface>
    </div>
  )
}

export default FlexAssets