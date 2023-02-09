import React, { useEffect, useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getUserWill } from '../../pages/actions/auth';
import MainModal from '../mainModal/MainModal';
import emoji from "../../assets/emoji.png"

function Beneficiary({ addBeneficiary, onBeneficiariesChanged, isEdit }) {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUserWill())
        console.log("useEffect1")
    }, [dispatch])

    const will = useSelector((state) => state.willReducer);
    const willPersonal = will?.data?.personalInformation;
    console.log("get products", will);

    useEffect(() => {
        let getChildrenData = willPersonal?.children;
        let getSpouseData = willPersonal?.spouse
        let getData = getChildrenData?.concat(getSpouseData)
        console.log("useEffect22", getData)
        if (getData) {
            setAssignben(getData);
            console.log("item", getData)
        }
    }, [willPersonal]);

    // handle events 

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [assignben, setAssignben] = useState([])

    const onSubmit = (data, ev) => {
        ev.preventDefault()
        const list = assignben.filter((beneficiary) => data.beneficiaries.includes(beneficiary.fullName));
        console.log("listitem", list)
        // const payload = [{
        //     fullName: list.map((name) => name.fullName),
        //     state: "lagos"
        // }]
        localStorage.setItem('BeneficiaryList', JSON.stringify(list))
        console.log("Benelist", list)

        if (isEdit) {
            onBeneficiariesChanged?.(list);
        } else {
            addBeneficiary();
        }

    };

    const handleOnChange = (event, option, index) => {
        const values = [...assignben];
        values[index].isAdded = event.target.checked;
        setAssignben(values);
    };

    const [addMore, setAddMore] = useState(false)
    const addMoreBeneficiciary = () => {
        setAddMore(!addMore)
    }

    return (
        <>
            {
                assignben.length < 1 ? <div>loading</div>
                    :
                    <>
                        <form className='beneficiary-modal' onSubmit={handleSubmit(onSubmit)}>
                            <div className='input-content'>
                                {assignben.map((Beneficiary, index) => {
                                    return (
                                        <div className='form-group'>
                                            <span>
                                                <input type="checkbox" value={Beneficiary.fullName} onChange={(e) => handleOnChange(e, Beneficiary, index)}
                                                    {...register("beneficiaries", {
                                                        required: {
                                                            value: true,
                                                            message: 'Please assign a beneficiary'
                                                        }
                                                    }
                                                    )}
                                                />
                                            </span>

                                            <div className='name'>
                                                <label htmlFor={Beneficiary.fullName}>
                                                    {Beneficiary.fullName}
                                                </label>
                                                <div className='identity'><span>{Beneficiary.gender}</span>
                                                    {(assignben.includes(Beneficiary.isDisabled)) ? <span>Child</span> : <span>Spouse</span>}
                                                </div>
                                            </div>


                                        </div>
                                    )
                                })}
                                {errors.beneficiaries && <span className='beneficiary-error'>{errors.beneficiaries.message}</span>}
                            </div>
                            <div className='add_asset'>
                                <span to=" " onClick={addMoreBeneficiciary}>Add Beneficiary <IoMdAddCircleOutline className='icon' /></span>
                            </div>

                            <div className='' style={{ marginBottom: "30px" }}>
                                <button type='submit' value="submit" >Proceed</button>
                            </div>
                        </form>

                        <MainModal trigger={addMore} setTrigger={setAddMore}>
                            <div className='addMoreAsset'>
                                <div className='subtitle'>Add Beneficiary</div>
                                <div className='image'><img src={emoji} alt="emoji" /> </div>
                                <div className='assetText'>Kindly click on the button below to fill a form for a beneficiary</div>
                                <div className=''>
                                    <button className='deep-button'>Add a Child</button>
                                    <button>Add a Spouse</button>
                                </div>
                                <div className='last'>
                                    <span>Not sure how to proceed</span>
                                    <NavLink to=" " className="addmoreasset-nav">OPEN FAQs</NavLink>
                                </div>
                            </div>
                        </MainModal>
                    </>


            }
        </>
    )
}

export default Beneficiary