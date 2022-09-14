import React from "react";

const GreatOperationButton = ({ result, setResult }) => {
	const handlerClick = (e) => {
		setResult(result?.concat(e.target?.value));
	};
	const clear = () => {
		setResult("");
	};

	const backspace = () => {
		setResult(result?.slice(0, -1));
	};
	return (
		<div className="GreatOperationButton">
			<button value="+" onClick={handlerClick}>
				+
			</button>
			<button value="-" onClick={handlerClick}>
				-
			</button>
			<button value="*" onClick={handlerClick}>
				*
			</button>
			<button value="/" onClick={handlerClick}>
				/
			</button>
			<button value="." onClick={handlerClick}>
				.
			</button>
			<button onClick={clear}>C</button>
			<button onClick={backspace}>&#9224;</button>
		</div>
	);
};

export default GreatOperationButton;
