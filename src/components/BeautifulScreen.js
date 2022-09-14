import React from "react";

const beautifulScreen = ({ result, setResult }) => {
	return (
		<div className="BeautifulScreen">
			<form>
				<input type="text" value={result} onChange={setResult} />
			</form>
		</div>
	);
};

export default beautifulScreen;
