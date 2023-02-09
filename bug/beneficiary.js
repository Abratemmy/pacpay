import React, {useEffect, useState} from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getUserWill } from '../../pages/actions/auth';

function Beneficiary({setToggle}) {
    // handle events 
    const { register, handleSubmit,  watch, formState: { errors }} = useForm();

    const [assignben, setAssignben] = useState([])
 
    const onSubmit = (data, ev) => {
        ev.preventDefault()
        const list = assignben.filter((beneficiary)=> data.beneficiaries.includes(beneficiary.mobile))
        // console.log("data123", data);  
        localStorage.setItem('BeneficiayList', JSON.stringify(list))
        // console.log("list", list)
        setToggle()
   
    };

    const handleOnChange = (event, option, index) => {
        const values = [...assignben];
        values[index].isAdded = event.target.checked;
        setAssignben(values);
    }; 
    
    const dispatch = useDispatch();
    const will= useSelector((state)=> state.willReducer);
    const willPersonal= will?.data?.personalInformation

    useEffect(() => {
        let getData = willPersonal;
        getData =  getData?.children
        if (getData) {
         setAssignben(getData);
         console.log("item", getData)
        }
    }, []); 


   


    console.log("get products", will)

    useEffect(() => {
        dispatch(getUserWill())
    }, [ dispatch])




    return (
        <>
            <form className='beneficiary-modal' onSubmit={handleSubmit( onSubmit)}>
                <div className='input-content'>
                    {assignben.map((Beneficiary, index)=>{
                        return(
                            <div className='form-group'>
                                <span>
                                <input type ="checkbox" value={Beneficiary.mobile} onChange={(e) => handleOnChange(e, Beneficiary, index)}
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
                                    <label  htmlFor={Beneficiary.mobile}>
                                        {Beneficiary.mobile}
                                    </label>
                                    <div className='identity'><span>{Beneficiary.gender}</span><span>Child</span></div>
                                </div>

                                
                            </div>
                        )
                    })}
                    {errors.beneficiaries && <span className='beneficiary-error'>{errors.beneficiaries.message}</span>}
            </div>
            <div className='' style={{ margin: "15px 0px 30px 0px" }}>
                    <NavLink to=" " className="beneficiary-nav">Add Beneficiary <IoMdAddCircleOutline className='icon' /></NavLink>
                </div>
                <div className='' style={{ marginBottom: "30px" }}>
                    <button type='submit' value="submit" >Proceed</button>
                </div>
            </form>
        </>
    )
}

export default Beneficiary