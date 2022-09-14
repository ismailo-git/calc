import React from "react";

const AmazingNumberButton = ({ result, setResult }) => {
	const clickHandler = (e) => {
		setResult(result?.concat(e.target?.value));
	};

	const clear = () => {
		setResult("");
	};

	const backspace = () => {
		setResult(result?.slice(0, -1));
	};

	return (
		<div className="AmazingNumberButton">
			<button onClick={clickHandler} value="1">
				1
			</button>
			<button value="2" onClick={clickHandler}>
				2
			</button>
			<button value="3" onClick={clickHandler}>
				3
			</button>
			<button value="4" onClick={clickHandler}>
				4
			</button>
			<button value="5" onClick={clickHandler}>
				5
			</button>
			<button value="6" onClick={clickHandler}>
				6
			</button>
			<button value="7" onClick={clickHandler}>
				7
			</button>
			<button value="8" onClick={clickHandler}>
				8
			</button>
			<button value="9" onClick={clickHandler}>
				9
			</button>
			<button value="0" onClick={clickHandler}>
				0
			</button>
			<button className="btn clear span-2" onClick={clear}>
				AC
			</button>
			<button onClick={backspace}>&larr;</button>
		</div>
	);
};

export default AmazingNumberButton;
