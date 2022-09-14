import React from "react";

const GreatOperationButton = ({ result, setResult }) => {
	const handlerClick = (e) => {
		setResult(result?.concat(e.target?.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(e.target.value);
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
			<form action="PHP/server.php">
				<button type="submit" onClick={handleSubmit}>
					SAVE
				</button>
			</form>
		</div>
	);
};

export default GreatOperationButton;
