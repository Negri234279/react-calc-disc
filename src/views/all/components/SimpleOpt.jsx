import React from 'react';
import { useFormContext } from 'react-hook-form';

/**
 * Funcion simple para generar los discos
 * @returns Array de valores por defecto
 */
const SimpleOpt = () => {
	const methods = useFormContext();

	return (
		<div className='ocult'>
			{/* Bumper */}
			<div>
				<select {...methods.register('bumper')}>
					<option value=''></option>
				</select>
			</div>

			{/* Disc 25 */}
			<div>
				<select {...methods.register('disc25')}>
					<option value='8'></option>
				</select>
			</div>

			{/* Disc 20 */}
			<div>
				<select {...methods.register('disc20')}>
					<option value='2'></option>
				</select>
			</div>

			{/* Disc 15 */}
			<div>
				<select {...methods.register('disc15')}>
					<option value='2'></option>
				</select>
			</div>

			{/* Disc 10 */}
			<div>
				<select {...methods.register('disc10')}>
					<option value='2'></option>
				</select>
			</div>

			{/* Disc 5 */}
			<div>
				<select {...methods.register('disc5')}>
					<option value='2'> Disc's 5 - 1 </option>
				</select>
			</div>
		</div>
	);
};

export default SimpleOpt;