import React from "react";
import ItsOverNineThousand from "./ItsOverNineThousand";

const MagnificientEqualButton = ({ result, setResult }) => {
	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (error) {
			setResult("Error");
		}

		if (eval(result).toString() > 50) {
			<ItsOverNineThousand />;
		} else {
			return "";
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
