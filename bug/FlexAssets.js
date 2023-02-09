import React,{useState, useEffect, useCallback} from 'react'
import Distributeasset1 from './distributeasset1';
import FlexRsa from './flexRsa';
import { useParams, NavLink,  useNavigate } from 'react-router-dom';
import Interface from '../../../../components/flexwillinterface/interface';
import {MdArrowBackIosNew} from "react-icons/md";
import {BsArrowUpRight} from "react-icons/bs"
import rsavalidation from "./flexRsavalidation";
import MainModal from '../../../../components/mainModal/MainModal';
import Beneficiary from '../../../../components/beneficiarypop/beneficiary';
import { AiFillStar } from "react-icons/ai";
import Distributeasset2 from './distributeasset2';
import Flexcashlanding from './cashinnabkLanding';
import Cashinbank from './cashinbank';
import cashinBankValidation from '../../../../components/assetvalidation/cashinbankval';
import { useDispatch } from 'react-redux';
import {updateAsset} from "../../../actions/auth"
import Distributeassetcash from './distributeassetcash';
import assetrsa from "../../../../assets/assetrsa.png";
import assetcash from "../../../../assets/assetcash.png";
import Distributeassetmain from './distributeassetmain';

function FlexAssets() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
      setToggleState(index);
  }

  const [errors, setErrors] = useState({});


  const [assetData, setAssetData] = useState({
    cashInBank: []
  });

  console.log("assetData", assetData)

  const rsaInital = {
    pfaAdmin:"",
    penNumber:"",
    beneficiaries:[]
  }

  const [rsaData, setRsaData] = useState(rsaInital)
  const selectedBeneficiaries = JSON.parse(localStorage.getItem("BeneficiayList"));

  const [percentage, setPercentage] = useState(0)
  let pushPercentage = selectedBeneficiaries
  console.log("pushPercentage", pushPercentage)

  const [rsaBeneficiaries, setRsaBeneficiaries] = useState(selectedBeneficiaries);

  // const onClick = useCallback(event => {
  //   console.log('Clicked Item : ', event.currentTarget);
  // }, [item]);
 

  const handleFormChange  = useCallback((index, event, selected) => {
    let updatedSelected = selected
    console.log("raSelected", selected)
    updatedSelected.percentage = event.target.value;
    let updatedRsaBeneficiary = rsaBeneficiaries
    updatedRsaBeneficiary[index] = updatedSelected 
    setRsaBeneficiaries(updatedRsaBeneficiary);
    setRsaData({
      ...rsaData,
      beneficiaries: updatedRsaBeneficiary
    })    
  }, [rsaBeneficiaries]);

  
  const handleCashChange = useCallback((index, event, selected) => {
    let updatedSelected = selected
    console.log("cashSelected", selected)
    updatedSelected.cash = event.target.value;
    let updatedRsaBeneficiary = cashBeneficiaries
    updatedRsaBeneficiary[index] = updatedSelected 
    setCashBeneficiaries(updatedRsaBeneficiary);
    setCashData({
      ...cashData,
      beneficiaries: updatedRsaBeneficiary
    })    
  }, rsaBeneficiaries)

  

  const addResult= rsaData?.beneficiaries?.reduce((total, currentValue) =>total = total + parseInt(currentValue.percentage), 1)
  console.log("addTResult", addResult)

 

  const [page, setPage] = useState(0);
  const PageDisplay = () => {
      if (page === 0) {
          return <FlexRsa rsaData={rsaData} setRsaData={setRsaData} errors={errors} />;
      }
       else if(page === 1){
          return <Distributeasset1 rsaData={rsaData} setRsaData={setRsaData} errors={errors}>
            <div className='asset1'>
              {rsaBeneficiaries?.map((selected, index) => (
                  <div className='totalPercentage'>
                    <div className='benContent' key={index}>
                        <div className='text'><AiFillStar className="icon" />
                          <span>{selected.mobile}</span></div>
                        <div className='input'>
                          <input type="number" className='input'name="rsa" required 
                            value={selected.percentage} 
                            onChange={event => handleFormChange(index, event, selected)} 
                          />
                        </div>
                    </div>
                  </div>
                )
              )}
              

              <div className="">total: {addResult}</div>
              {(addResult === 0) ?"gtgg":
              (addResult === NaN) ? <div className="no-show">fdfff</div> 
                      
              : (addResult < 100) ? <div className="red-show">less</div> :
             ""
              }
            </div>
          </Distributeasset1>;
      }
       else if(page === 2){
        return <Flexcashlanding addcashInBank={()=>setToggleState(4)} addForeignBank={()=>setToggleState(6)}/> 
      }
      else {
        return ""
      }
    
  };

  const [describe, setDescribe] = useState({
    description:""
  })
  const handleDesError = (targets) => {
    let errorsValue = {};
    if (!targets.description) errorsValue.description = "description  is required";
    if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
    else setErrors({});
    return Object.keys(errorsValue).length;

  };
  console.log("rsa", rsaData)

  const rsaDistribute = () => {
    let v = handleDesError(rsaData);
    if (v > 0) {
        console.log("error");
    }     
    else {
      setRsaData({
        ...rsaData,
        description: rsaData.description
      })
      let rsa = {}
      rsa = rsaData
      setAssetData({
        ...assetData,
        rsa
      }) 
   
      console.log("submitted123", rsaData);
      setToggleState(2)
    }
  }

  const { page: page_id = 1 } = useParams();

  useEffect(() => {
      console.log("pageId", page_id - 1);
      setPage(page_id - 1)
  }, [page_id])

  const [assignBeneficiary, setAssignBeneficiary] = useState(false);

  const addBeneficiary = ()=>{
    setAssignBeneficiary(false)
    // setToggleState(6)
    setPage((currPage) => currPage + 1);
  }

  const AddCashInBank = () => {
    setPage((currPage) => currPage + 1);
    setToggleState(1)
  }

  const [cashData, setCashData] = useState({
    bankName: "",
    bvn: "",
    accountType: "",
    branch: "",
    accountNumber: "",
    ownershipStatus: "",
    beneficiaries: []
  });

  const [cashAssign, setCashAssign] = useState(false);

  const cashInBankSubmit = () => {
    const cashError = cashinBankValidation(cashData);
    setErrors(cashError);
    if (Object.keys(cashError).length > 0) {
        console.log("error")
    } else{
      
      setCashAssign(!cashAssign)
    }
  }

  const addCashBeneficiary = () => {
    setCashAssign(false)
    setToggleState(6)
  }

  const [cashBeneficiaries, setCashBeneficiaries] = useState(selectedBeneficiaries);
  // const handleCashChange = (index, event, selected) => {
  //   let updatedSelected = selected
  //   updatedSelected.percentage = event.target.value;
  //   let updatedRsaBeneficiary = cashBeneficiaries
  //   updatedRsaBeneficiary[index] = updatedSelected 
  //   setCashBeneficiaries(updatedRsaBeneficiary);
  //   setCashData({
  //     ...cashData,
  //     beneficiaries: updatedRsaBeneficiary
  //   })    
  // }
  console.log("cask", cashData)

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const cashDistribute = ()=>{
      let assetDataCopy = JSON.parse(JSON.stringify(assetData))
      assetDataCopy.cashInBank[assetData.cashInBank.length] = cashData
      setAssignBeneficiary(false)  
      setAssetData(assetDataCopy)
      console.log("assetDataCopy", assetDataCopy);

      const payload = {
        asset: assetData
      }

      console.log("payload", payload);
      localStorage.setItem('AssetData', JSON.stringify(payload));

      dispatch(updateAsset(payload, navigate));
  
      // navigate('/flex_will_distribute_main_asset')
  }

  useEffect(() => {
    setRsaBeneficiaries(selectedBeneficiaries)
    setCashBeneficiaries(selectedBeneficiaries)
  }, [ addResult])

  return (
    <div className=''>
      <Interface>
        <div className='flexwillpage'>
        <div className='distribute-2'>
          <div className='distributeAssets'>
            <div className='top'>
            {page === 0 ? (
                <span><NavLink to="/flex_will_assets" className="personal-nav">
                    <MdArrowBackIosNew className='icon' />
                    <MdArrowBackIosNew className='icon icon2' /></NavLink>
                </span>
            ) : (
                <button
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                    style={{ color: "var(--blueColor)", border: "none", background: "none" }}
                >
                    <MdArrowBackIosNew className='icon' />
                    <MdArrowBackIosNew className='icon icon2' />
                </button>
            )}

            {page === 1 ? <div className='toptext'>"Distribite Assets" </div>: <div className='toptext'></div>}
            </div>
            <form>
              <div className="assetcontent-tabs" >
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                  <div className='body'>{PageDisplay()}</div> 
                  
                  <div className='button'>
                      {page=== 0 ? 
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
                        <div className='newAssetBtn'>
                        
                          <div className='ps'>PS: You don’t want to share your asset now? you can <NavLink to="/flex_will_distribute_asset2" style={{ background: "transparent", textDecoration: "none" }}><span>Skip <BsArrowUpRight className="icon" /> </span></NavLink> </div>
                          <span onClick={rsaDistribute} className="general-btn">
                              Submit
                          </span>
                        </div>
                        : ""
                      }
                  </div>                
                </div>


                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <Distributeasset2/>

                    <div className='button' style={{ textAlign: "right", paddingTop: "60px", marginTop: "30px" }}>
                        <span onClick={AddCashInBank} className="asset-nav1" style={{ border: "none" }}>
                            Add Cash in Bank
                        </span>
                    </div>
                </div>

                <div className={toggleState === 3 ? "content active-content" : "content"}>
                  
                </div>

                <div className={toggleState === 4 ? "content active-content" : "content"}>
                  <Cashinbank cashInBank={cashData} setCashInBank={setCashData} errors={errors}/>

                  <div className="button">
                      <span onClick={cashInBankSubmit} className="general-btn"> Assign Beneficiary</span>
                  </div>
                </div>
                <div className={toggleState === 5 ? "content active-content" : "content"}>
                  <Flexcashlanding />
                </div>
                <div className={toggleState === 6 ? "content active-content" : "content"}>
                  <Distributeassetcash cashData={cashData} setCashData={setCashData}>
                  <div className='asset1'>
                      {rsaBeneficiaries?.map((selected, index) => (
                          <div className='totalPercentage'>
                            <div className='benContent' key={index}>
                                <div className='text'><AiFillStar className="icon" /><span>{selected.mobile}</span></div>
                                <div className='input'>
                                  <input type="number" className='input' name="cash" required value={selected.percentage} onChange={event => handleCashChange(index, event, selected)} />
                                </div>
                            </div>
                          </div>
                        )
                      )}
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

              </div>
            </form>

            <MainModal trigger={assignBeneficiary} setTrigger={setAssignBeneficiary}>
                <div className='modalContent'>
                  <Beneficiary  setToggle={addBeneficiary}  />
  
                </div>
            </MainModal>

            <MainModal trigger={cashAssign} setTrigger={setCashAssign}>
                <div className='modalContent'>
                  hello
                  <Beneficiary  setToggle={addCashBeneficiary}  />
  
                </div>
            </MainModal>
          </div>
        </div> 
        </div>
      </Interface>
    </div>
  )
}

export default FlexAssets