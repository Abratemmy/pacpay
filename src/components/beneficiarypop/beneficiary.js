import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Beneficiary({ submitFormLink }) {

    // handle events 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // handle submit ;
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(JSON.stringify(data));
        navigate(`/${submitFormLink}`)
    };


    return (
        <div>
            <form className='beneficiary-modal' onSubmit={handleSubmit(onSubmit)}>
                <div className='input-content'>
                    <div className="form-group">
                        <input type="checkbox" id="compactRSA1" name="compactrsa" value="compactrsa1"
                            {...register("compactrsa", {
                                required: {
                                    value: true,
                                    message: 'Please assign a beneficiary'
                                }
                            }
                            )}
                        />
                        <div className='name'>
                            <label for="compactRSA1">Taofeeqah Bello</label>
                            <div className='identity'><span>Female</span><span>Wife</span></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="checkbox" id="compactRSA2" name="compactrsa" value="compactrsa2"
                            {...register("compactrsa", {
                                required: {
                                    value: true,
                                    message: 'Please assign a beneficiary'
                                }
                            }
                            )}
                        />
                        <div className='name'>
                            <label for="compactRSA2">Taofeeqah Bello</label>
                            <div className='identity'><span>Female</span><span>Wife</span></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="checkbox" id="compactRSA3" name="compactrsa" value="compactrsa3"
                            {...register("compactrsa", {
                                required: {
                                    value: true,
                                    message: 'Please assign a beneficiary'
                                }
                            }
                            )}
                        />
                        <div className='name'>
                            <label for="compactRSA3">Taofeeqah Bello</label>
                            <div className='identity'><span>Female</span><span>Wife</span></div>
                        </div>
                    </div>
                    {errors.compactrsa && <span className='beneficiary-error'>{errors.compactrsa.message}</span>}

                </div>
                <div className='' style={{ margin: "15px 0px 30px 0px" }}>
                    <NavLink to=" " className="beneficiary-nav">Add Beneficiary <IoMdAddCircleOutline className='icon' /></NavLink>
                </div>
                <div className='' style={{ marginBottom: "30px" }}>
                    <button type='submit' value="submit" >Proceed</button>
                </div>
            </form>

        </div>
    )
}

export default Beneficiary