import React from "react";

const MagnificientEqualButton = ({ result, setResult }) => {
	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (error) {
			setResult("Error");
		}
	};

	return (
		<div className="MagnificientEqualButton">
			<button onClick={calculate} value="=">
				=
			</button>
		</div>
	);
};

export default MagnificientEqualButton;
