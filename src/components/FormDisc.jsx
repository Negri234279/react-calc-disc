import { useState  } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Switch from "react-switch";
import '../styles/formDisc.scss';

const FormDisc = () => {

    const methods = useForm();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = methods;
    
    let [advanOpt, setAdvanOpt] = useState(0);

    const [checked, setChecked] = useState(0);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    const onSubmit = (data) => {

        let weightTotal = data.weightTotal - data.weightBar,
            generateDisc = document.querySelector("#container-disc"),
            numDisc25 = data.disc25,
            numDisc20 = data.disc20,
            numDisc15 = data.disc15,
            numDisc10 = data.disc10,
            numDisc5 = data.disc5,
            numBumper = parseInt(data.bumper);

            console.log(data.advanOpt);

        generateDisc.textContent = "";

        if (numBumper === 20) {
            weightTotal -= 20;
            generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-b10"></div>');
        } if (numBumper === 30) {
            weightTotal -= 30;
            generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-b15"></div>');
        }

        while (weightTotal > -1) {
            switch (true) {
                case (weightTotal >= 50 && numDisc25 > 0):
                    weightTotal -= 50;
                    numDisc25 -= 1;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-25"></div>');
                    break;
                case (weightTotal >= 40 && numDisc20 > 0):
                    weightTotal -= 40;
                    numDisc20 -= 1;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-20"></div>');
                    break;
                case (weightTotal >= 30 && numDisc15 > 0):
                    weightTotal -= 30;
                    numDisc15 -= 1;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-15"></div>');
                    break;
                case (weightTotal >= 20 && numDisc10 > 0):
                    weightTotal -= 20;
                    numDisc10 -= 1;
                    generateDisc.insertAdjacentHTML("beforeend", '<div id="container-disc-10"></div>');
                    break;
                case (weightTotal >= 10 && numDisc5 > 0):
                    weightTotal -= 10;
                    numDisc5 -= 1;
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
                    weightTotal = -1;
                    break;
            }
        }
    };

    const SimpleOpt = () => {

        const methods = useFormContext();

        return (
            <div className="ocult">
                {/* Bumper */}
                    <div>
                        <select {...methods.register("bumper")}>
                            <option value=""></option>
                        </select>
                    </div>
                
                    {/* Disc 25 */}
                    <div>
                        <select {...methods.register("disc25")}>
                            <option value="8"></option>
                        </select>
                    </div>

                    {/* Disc 20 */}
                    <div>
                        <select {...methods.register("disc20")}>
                            <option value="1"></option>
                        </select>
                    </div>

                    {/* Disc 15 */}
                    <div>
                        <select {...methods.register("disc15")}>
                            <option value="1"></option>
                        </select>
                    </div>

                    {/* Disc 10 */}
                    <div>
                        <select {...methods.register("disc10")}>
                            <option value="1"></option>
                        </select>
                    </div>

                    {/* Disc 5 */}
                    <div>
                        <select {...methods.register("disc5")}>
                            <option value="1"> Disc's 5 - 1 </option>
                        </select>
                    </div>
            </div>
        );
    }

    const AdvanOpt = () => {

        const methods = useFormContext();

        return (
            <div className="halfSelect">
                {/* Bumper */}
                    <div>
                        <select {...methods.register("bumper")}>
                            <option value="">Bumper - 0</option>
                            <option value="20"> Disc 10kg </option>
                            <option value="30"> Disc 15kg </option>
                        </select>
                    </div>
                
                    {/* Disc 25 */}
                    <div>
                        <select {...methods.register("disc25")}>
                            <option value="0"> Disc's 25 - 0 </option>
                            <option value="1"> Disc's 25 - 1 </option>
                            <option value="2"> Disc's 25 - 2 </option>
                            <option value="3"> Disc's 25 - 3 </option>
                            <option value="4"> Disc's 25 - 4 </option>
                            <option value="5"> Disc's 25 - 5 </option>
                            <option value="6"> Disc's 25 - 6 </option>
                            <option value="7"> Disc's 25 - 7 </option>
                            <option value="8"> Disc's 25 - 8 </option>
                        </select>
                    </div>

                    {/* Disc 20 */}
                    <div>
                        <select {...methods.register("disc20")}>
                            <option value="2"> Disc's 20 - 2 </option>
                            <option value="0"> Disc's 20 - 0 </option>
                            <option value="1"> Disc's 20 - 1 </option>
                            <option value="3"> Disc's 20 - 3 </option>
                            <option value="4"> Disc's 20 - 4 </option>
                            <option value="5"> Disc's 20 - 5 </option>
                            <option value="6"> Disc's 20 - 6 </option>
                        </select>
                    </div>

                    {/* Disc 15 */}
                    <div>
                        <select {...methods.register("disc15")}>
                            <option value="2"> Disc's 15 - 2 </option>
                            <option value="0"> Disc's 15 - 0 </option>
                            <option value="1"> Disc's 15 - 1 </option>
                            <option value="3"> Disc's 15 - 3 </option>
                            <option value="4"> Disc's 15 - 4 </option>
                        </select>
                    </div>

                    {/* Disc 10 */}
                    <div>
                        <select {...methods.register("disc10")}>
                            <option value="2"> Disc's 10 - 2 </option>
                            <option value="0"> Disc's 10 - 0 </option>
                            <option value="1"> Disc's 10 - 1 </option>
                            <option value="3"> Disc's 10 - 3 </option>
                            <option value="4"> Disc's 10 - 4 </option>
                        </select>
                    </div>

                    {/* Disc 5 */}
                    <div>
                        <select {...methods.register("disc5")}>
                            <option value="2"> Disc's 5 - 2 </option>
                            <option value="0"> Disc's 5 - 0 </option>
                            <option value="1"> Disc's 5 - 1 </option>
                            <option value="3"> Disc's 5 - 3 </option>
                            <option value="4"> Disc's 5 - 4 </option>
                        </select>
                    </div>
            </div>
        );
    };

    checked ? advanOpt = 1 : advanOpt = 0

    return (
    
        <div className="formDisc">
            <FormProvider {...methods} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Bar weight */}
                    <div>            
                        <label> Bar weight </label>
                        <input
                            type="number"
                            defaultValue="20"
                            {...register("weightBar", { required: true })}
                        />
                        {errors.weightBar && <p> This field is required </p>}
                    </div>

                    {/* Total weight */}
                    <div>
                        <label> Total weight </label>
                        <input type="number" {...register("weightTotal", { required: true })} />
                        {errors.weightTotal && <p> This field is required </p>}
                    </div>

                    <Switch
                        onChange={handleChange}
                        checked={checked}
                        className="react-switch"
                    />

                    {advanOpt === 0 && <SimpleOpt /> }
                    {advanOpt === 1 && <AdvanOpt /> }

                    {/* Submit */}
                    <div>
                        <input
                            type="submit"
                            value="Calculate"
                        />
                    </div>
                </form>
            </FormProvider>
        </div>

    );
};

export default FormDisc;