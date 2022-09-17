import React from "react";
import { useState } from "react";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from "./BeautifulScreen";
import GreatOperationButton from "./GreatOperationButton";
import ItsOverNineThousand from "./ItsOverNineThousand";
import MagnificientEqualButton from "./MagnificientEqualButton";

function Calculator() {
	const [result, setResult] = useState("");

	return (
		<div className="Calculator">
			{result > 9000 && <ItsOverNineThousand title="It is OverNineThousand" />}

			<BeautifulScreen
				result={result}
				setResult={(e) => {
					setResult(e.target.value);
				}}
			/>
			<AmazingNumberButton result={result} setResult={setResult} />
			<GreatOperationButton result={result} setResult={setResult} />
			<MagnificientEqualButton result={result} setResult={setResult} />
		</div>
	);
}

export default Calculator;
