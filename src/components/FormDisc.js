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
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-20"></div>');
                    break;
                case (weightTotal >= 30):
                    weightTotal -= 30;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-15"></div>');
                    break;
                case (weightTotal >= 20):
                    weightTotal -= 20;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-10"></div>');
                    break;
                case (weightTotal >= 10):
                    weightTotal -= 10;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-5"></div>');
                    break;
                case (weightTotal >= 5):
                    weightTotal -= 5;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-2"></div>');
                    break;
                case (weightTotal >= 2.5 || weightTotal >= 2):
                    weightTotal -= 2.5;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-1"></div>');
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
                        type="number"
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
                    <input type="number" {...register("weightTotal", { required: true })} />
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