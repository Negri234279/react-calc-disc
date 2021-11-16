import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Switch from 'react-switch';
import '../styles/formDisc.scss';
import AdvanOpt from './AdvanOpt';
import SimpleOpt from './SimpleOpt';

const GenDisc = () => {
	const methods = useForm();

	/**
	 * Formulario de lectura de valores de los select
	 */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = methods;

	//let [advanOpt, setAdvanOpt] = useState(0);
	/**
	 * Formulario avanzado
	 */
	let [advanOpt] = useState(0);

	/**
	 * Componete switch
	 */
	const [checked, setChecked] = useState(0);
	const handleChange = nextChecked => {
		setChecked(nextChecked);
	};

	/**
	 * Funcion que genera los discos
	 * @param {*} data Valores de los discos
	 * @param {number} weightTotal Peso de los discos
	 * @param generateDisc Variable para crear los discos
	 */
	const onSubmit = data => {
		let weightTotal = data.weightTotal - data.weightBar,
			generateDisc = document.querySelector('#container-disc'),
			numDisc25 = data.disc25,
			numDisc20 = data.disc20,
			numDisc15 = data.disc15,
			numDisc10 = data.disc10,
			numDisc5 = data.disc5,
			numBumper = parseInt(data.bumper);

		function createDisc() {
			generateDisc.textContent = '';

			if (numBumper === 20) {
				weightTotal -= 20;
				generateDisc.insertAdjacentHTML(
					'beforeend',
					'<div id="container-disc-b10"></div>'
				);
			}
			if (numBumper === 30) {
				weightTotal -= 30;
				generateDisc.insertAdjacentHTML(
					'beforeend',
					'<div id="container-disc-b15"></div>'
				);
			}

			while (weightTotal > -1) {
				switch (true) {
					case weightTotal >= 50 && numDisc25 > 0:
						weightTotal -= 50;
						numDisc25 -= 1;
						generateDisc.insertAdjacentHTML(
							'beforeend',
							'<div id="container-disc-25"></div>'
						);
						break;
					case weightTotal >= 40 && numDisc20 > 0:
						weightTotal -= 40;
						numDisc20 -= 1;
						generateDisc.insertAdjacentHTML(
							'beforeend',
							'<div id="container-disc-20"></div>'
						);
						break;
					case weightTotal >= 30 && numDisc15 > 0:
						weightTotal -= 30;
						numDisc15 -= 1;
						generateDisc.insertAdjacentHTML(
							'beforeend',
							'<div id="container-disc-15"></div>'
						);
						break;
					case weightTotal >= 20 && numDisc10 > 0:
						weightTotal -= 20;
						numDisc10 -= 1;
						generateDisc.insertAdjacentHTML(
							'beforeend',
							'<div id="container-disc-10"></div>'
						);
						break;
					case weightTotal >= 10 && numDisc5 > 0:
						weightTotal -= 10;
						numDisc5 -= 1;
						generateDisc.insertAdjacentHTML(
							'beforeend',
							'<div id="container-disc-5"></div>'
						);
						break;
					case weightTotal >= 5:
						weightTotal -= 5;
						generateDisc.insertAdjacentHTML(
							'beforeend',
							'<div id="container-disc-2"></div>'
						);
						break;
					case weightTotal >= 2.5 || weightTotal >= 2:
						weightTotal -= 2.5;
						generateDisc.insertAdjacentHTML(
							'beforeend',
							'<div id="container-disc-1"></div>'
						);
						break;
					default:
						weightTotal = -1;
						break;
				}
			}
		}

		createDisc();
	};

	/**
	 * Segun si el boton switch esta activo pasa varlores para generar formulario avanzado
	 */
	checked ? (advanOpt = 1) : (advanOpt = 0);

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

					{advanOpt === 0 && <SimpleOpt />}
					{advanOpt === 1 && <AdvanOpt />}

					{/* Submit */}
					<div>
						<input type='submit' value='Calculate' />
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default GenDisc;
