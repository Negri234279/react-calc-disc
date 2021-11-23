import './buttom.scss';

const Button = (props) => {
    return (
		<div>
			<input type={props.type} value={props.value} />
		</div>
	);
}

export default Button