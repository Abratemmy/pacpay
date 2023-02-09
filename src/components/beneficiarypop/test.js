import React, {useEffect, useState} from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Beneficiary({ submitFormLink, beneficiaries, setBeneficiary}) {

    // handle events 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const getbene = JSON.parse(localStorage.getItem('PersonalInfo'));
    // console.log("ben", getbene)
    

    const [assignben, setAssignben] = useState([])
     
    const [beneficiaryData, setBeneficiaryData] = useState({

    })
    useEffect(() => {
      let assignben = JSON.parse(localStorage.getItem('PersonalInfo'));
      assignben =  assignben.children
      if (assignben) {
       setAssignben(assignben);
      }
      console.log("item", assignben)
    }, [])
  
    // handle submit ;
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log((data));
        console.log("assign")
        // navigate(`/${submitFormLink}`)
    };

    const handleOnChange = (event, option, index) => {
        const values = [...assignben];
        values[index].isAdded = event.target.checked;
        setAssignben(values);
    };

    return (
        <form className='beneficiary-modal' onSubmit={handleSubmit(onSubmit)}>
            <div className='input-content'>
                {assignben.map((Beneficiary, index)=>{
                    return(
                        <div className='form-group'>
                            <input type ="checkbox" value={Beneficiary.fullName} onChange={(e) => handleOnChange(e, Beneficiary, index)}
                            {...register("compactrsa", {
                                required: {
                                    value: true,
                                    message: 'Please assign a beneficiary'
                                }
                            }
                            )}
                            />

                            <label className="{classes.label1}" htmlFor={Beneficiary.fullName}>
                                {Beneficiary.fullName}
                            </label>
                            <p>{Beneficiary.title}</p>
                        </div>
                    )
                })}
                {errors.compactrsa && <span className='beneficiary-error'>{errors.compactrsa.message}</span>}
          </div>
          <div className='' style={{ margin: "15px 0px 30px 0px" }}>
                    <NavLink to=" " className="beneficiary-nav">Add Beneficiary <IoMdAddCircleOutline className='icon' /></NavLink>
                </div>
                <div className='' style={{ marginBottom: "30px" }}>
                    <button type='submit' value="submit" >Proceed</button>
                </div>
        </form>
    )
}

export default Beneficiary