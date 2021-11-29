import { useFormContext } from 'react-hook-form';

const MovOpt = () => {
    const methods = useFormContext();

    return (
		<div className='halfSelect'>
			{/* Disc 25 */}
			<div>
				<select {...methods.register('mov')}>
					<option value='sq'> Squad </option>
					<option value='bp'> Bench </option>
					<option value='dl'> Deadlift </option>
				</select>
			</div>

			{/* Disc 20 */}
			<div>
				<select {...methods.register('block')}>
					<option value='peaking'> Peaking </option>
					<option value='volumen'> Volumen </option>
				</select>
			</div>
		</div>
	);
}

export default MovOpt