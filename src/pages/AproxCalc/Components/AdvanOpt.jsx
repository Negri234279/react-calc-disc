import React from 'react';
import { useFormContext } from 'react-hook-form';

/**
 * Funcion avanzada que retorna valores de discos seleccionados
 * @returns Array de valores seleccionados
 */
const AdvanOpt = () => {
	const methods = useFormContext();

	return (
		<div className='halfSelect'>
			{/* Bumper */}
			<div>
				<select {...methods.register('bumper')}>
					<option value=''>Bumper - 0</option>
					<option value='20'> Disc 10kg </option>
					<option value='30'> Disc 15kg </option>
				</select>
			</div>

			{/* Disc 25 */}
			<div>
				<select {...methods.register('disc25')}>
					<option value='0'> Disc's 25 - 0 </option>
					<option value='1'> Disc's 25 - 1 </option>
					<option value='2'> Disc's 25 - 2 </option>
					<option value='3'> Disc's 25 - 3 </option>
					<option value='4'> Disc's 25 - 4 </option>
					<option value='5'> Disc's 25 - 5 </option>
					<option value='6'> Disc's 25 - 6 </option>
					<option value='7'> Disc's 25 - 7 </option>
					<option value='8'> Disc's 25 - 8 </option>
				</select>
			</div>

			{/* Disc 20 */}
			<div>
				<select {...methods.register('disc20')}>
					<option value='2'> Disc's 20 - 2 </option>
					<option value='0'> Disc's 20 - 0 </option>
					<option value='1'> Disc's 20 - 1 </option>
					<option value='3'> Disc's 20 - 3 </option>
					<option value='4'> Disc's 20 - 4 </option>
					<option value='5'> Disc's 20 - 5 </option>
					<option value='6'> Disc's 20 - 6 </option>
				</select>
			</div>

			{/* Disc 15 */}
			<div>
				<select {...methods.register('disc15')}>
					<option value='2'> Disc's 15 - 2 </option>
					<option value='0'> Disc's 15 - 0 </option>
					<option value='1'> Disc's 15 - 1 </option>
					<option value='3'> Disc's 15 - 3 </option>
					<option value='4'> Disc's 15 - 4 </option>
				</select>
			</div>

			{/* Disc 10 */}
			<div>
				<select {...methods.register('disc10')}>
					<option value='2'> Disc's 10 - 2 </option>
					<option value='0'> Disc's 10 - 0 </option>
					<option value='1'> Disc's 10 - 1 </option>
					<option value='3'> Disc's 10 - 3 </option>
					<option value='4'> Disc's 10 - 4 </option>
				</select>
			</div>

			{/* Disc 5 */}
			<div>
				<select {...methods.register('disc5')}>
					<option value='2'> Disc's 5 - 2 </option>
					<option value='0'> Disc's 5 - 0 </option>
					<option value='1'> Disc's 5 - 1 </option>
					<option value='3'> Disc's 5 - 3 </option>
					<option value='4'> Disc's 5 - 4 </option>
				</select>
			</div>
		</div>
	);
};

export default AdvanOpt;