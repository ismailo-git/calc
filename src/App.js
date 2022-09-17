import "./index.css";

import Calculator from "./components/Calculator";
import TheTitle from "./components/TheTitle";

function App() {
	return (
		<div className="App">
			<TheTitle title="Calculator 9000" />
			<Calculator />
		</div>
	);
}

export default App;
