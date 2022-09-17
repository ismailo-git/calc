import React from "react";

const BeautifulScreen = ({ result, setResult }) => {
	return (
		<div className="BeautifulScreen">
			<form>
				<input type="text" value={result} onChange={setResult} />
			</form>
		</div>
	);
};

export default BeautifulScreen;
