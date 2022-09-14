import React from "react";
import { useState } from "react";
import axios from "axios";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from "./BeautifulScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import ItsOverNineThousand from "./ItsOverNineThousand";

function Calculator() {
	const [result, setResult] = useState("");

	return (
		<div className="Calculator">
			<BeautifulScreen result={result} setResult={setResult} />
			<AmazingNumberButton result={result} setResult={setResult} />
			<GreatOperationButton result={result} setResult={setResult} />
			<MagnificientEqualButton result={result} setResult={setResult} />
		</div>
	);
}

export default Calculator;
