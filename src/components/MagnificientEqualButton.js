import React from "react";

const MagnificientEqualButton = ({ result, setResult }) => {
	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (error) {
			setResult("Calcul Impossible");
		}
	};

	return (
		<div className="MagnificientEqualButton">
			<button onClick={calculate} value="=" className="calculate-button">
				=
			</button>
		</div>
	);
};

export default MagnificientEqualButton;
