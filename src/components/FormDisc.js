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
        console.clear();
        //console.log(data);
        //console.log(data.weightBar);
        //console.log(data.weightTotal);
        let weightTotal = data.weightTotal - data.weightBar;
        console.log(weightTotal);

        let generateDisc = document.querySelector("#container-disc");
        generateDisc.textContent = "";

        while (weightTotal > -1) {
            switch (true) {
                case (weightTotal >= 50):
                    weightTotal -= 50;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-25"></div>');
                    break;
                case (weightTotal >= 40):
                    weightTotal -= 40;
                    console.log("Disc 20");
                    break;
                case (weightTotal >= 30):
                    weightTotal -= 30;
                    console.log("Disc 15");
                    break;
                case (weightTotal >= 20):
                    weightTotal -= 20;
                    console.log("Disc 10");
                    break;
                case (weightTotal >= 10):
                    weightTotal -= 10;
                    console.log("Disc 5");
                    break;
                case (weightTotal >= 5):
                    weightTotal -= 5;
                    console.log("Disc 2");
                    break;
                case (weightTotal >= 2.5 || weightTotal >= 2):
                    weightTotal -= 2.5;
                    console.log("Disc 1");
                    break;
                default:
                    console.log("Break");
                    weightTotal = -1;
                    break;
            }
        }
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