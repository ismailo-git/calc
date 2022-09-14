import React from "react";
import { useState } from "react";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from "./BeautifulScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import ItsOverNineThousand from "./ItsOverNineThousand";

function Calculator() {
	const [result, setResult] = useState("");

	const toggle = () => {
		if (result > 9000) {
			return <ItsOverNineThousand />;
		}
	};
	return (
		<div className="Calculator">
			<BeautifulScreen result={result} setResult={setResult} />
			<AmazingNumberButton result={result} setResult={setResult} />
			<GreatOperationButton result={result} setResult={setResult} />
			<MagnificientEqualButton result={result} setResult={setResult} />

			{toggle}
		</div>
	);
}

export default Calculator;
