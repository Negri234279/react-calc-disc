import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Switch from 'react-switch';
import AdvanOpt from '../../../components/AdvanOpt';
import SimpleOpt from '../../../components/SimpleOpt';
import { generatePlates } from '../../../hooks/generatePlates';
import '../scss/discContainer.scss';
import '../../../scss/formDisc.scss';
import Button from '../../../components/Button/Button';

/**
 * Formulario de la calculadora de discos
 */
const FormDisc = () => {
	const methods = useForm();

	/**
	 * Formulario de lectura de valores de los select
	 */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = methods;

	/**
	 * Componete switch
	 */
	const [checked, setChecked] = useState(false);
	const handleChange = nextChecked => setChecked(nextChecked);

	/**
	 * Formulario de los discos
	 * @param {string} data Valores del formulario
	 */
	const onSubmit = (data) => {
		
		const weightTotal = data.weightTotal;

		document.querySelector('#container-0').textContent = '';

		generatePlates(data, weightTotal, 0);

	};

	return (
		<div className='formDisc'>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* Bar weight */}
					<div>
						<label> Bar weight </label>
						<input
							type='number'
							defaultValue='20'
							{...register('weightBar', { required: true })}
						/>
						{errors.weightBar && <p> This field is required </p>}
					</div>

					{/* Total weight */}
					<div>
						<label> Total weight </label>
						<input
							type='number'
							{...register('weightTotal', { required: true })}
						/>
						{errors.weightTotal && <p> This field is required </p>}
					</div>

					{/* Switch */}
					<div className='switch'>
						<div>
							<label> Advanced option: </label>
						</div>
						<div>
							<Switch
								onChange={handleChange}
								checked={checked}
								onColor='#BF1650'
							/>
						</div>
					</div>

					{checked ? <AdvanOpt /> : <SimpleOpt />}

					{/* Submit */}
					<Button type='submit' value='Calculate' />
				</form>
			</FormProvider>

			<div id='container'>
				<div id='container-0'></div>
			</div>
		</div>
	);
};

export default FormDisc;