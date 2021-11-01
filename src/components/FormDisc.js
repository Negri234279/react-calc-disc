import React from "react";
import { useForm } from "react-hook-form";
import '../scss/formDisc.scss';

const FormDisc = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
    
        <div className="formDisc">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Peso Barra */}
                <div>            
                    <label
                        className="form-label">
                        Peso barra
                    </label>
                    <input
                        defaultValue="20"
                        {...register("weightBar", { required: true })}
                    />
                    {errors.weightBar && <p> Campo requerido </p>}
                </div>
                {/* Peso Total */}
                <div>
                    <label
                        className="form-label">
                        Peso Total
                    </label>
                    <input {...register("weightTotal", { required: true })} />
                    {errors.weightTotal && <p> Campo requerido </p>}
                </div>

                <div>
                    <input
                        type="submit"
                        value="Calcular"
                    />
                </div>
            </form>            
        </div>

    );
};

export default FormDisc;

/*
<div>
                <h2>Values of the form</h2>
                <p>{JSON.stringify(values)}</p>
            </div>
*/