import React from "react";
import '../scss/formDisc.scss';

const FormDisc = () => {
    return (
        <div className="test">
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <p> hola </p>
        </div>
    );
};

export default FormDisc;