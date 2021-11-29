import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Switch from 'react-switch';
import AdvanOpt from '../../../components/AdvanOpt';
import SimpleOpt from '../../../components/SimpleOpt';
import Button from '../../../components/Button/Button';
import MovOpt from './MovOpt';
import { createDisc } from '../../../hooks/genDiscdAprox';
import '../discContainer.scss';
import '../../../scss/formDisc.scss';

const GenerateDisc = () => {

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
	 * Funcion que genera los discos
	 * @param {*} data Valores de los discos
	 * @param {number} weightTotal Peso de los discos
	 * @param generateDisc Variable para crear los discos
	 */
	const onSubmit = (data) => {

		const weightTotalA = data.weightTotal - data.weightBar;
		
		const movement = data.mov + data.block;
		const listAprox = {
			sqvolumen: [30, 54, 80, 90, 100],
			sqpeaking: [25, 42, 60, 71, 82, 89, 94, 100],
			bpvolumen: [47, 67, 80, 86, 93, 100],
			bppeaking: [25, 45, 58, 70, 82, 89, 95, 100],
			dlvolumen: [25, 44, 62, 78, 90, 100],
			dlpeaking: [22, 38, 54, 71, 85, 93, 100],
		};
		const aprox = listAprox[movement].reverse();

		for (let i = 0; i < 8; i++) {
			document.querySelector(`#container-${i}`).textContent = '';
		}

		for (let i = 0; i < aprox.length; i++) {
			const numAprox = aprox[i];
			const weightAprox = (weightTotalA * numAprox) / 100;
			let idContainer = `#container-${i}`;

			createDisc(data, weightAprox, idContainer);
		}
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

					<MovOpt />

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
				<div id='container-1'></div>
				<div id='container-2'></div>
				<div id='container-3'></div>
				<div id='container-4'></div>
				<div id='container-5'></div>
				<div id='container-6'></div>
				<div id='container-7'></div>
			</div>
		</div>
	);
};

export default GenerateDisc;