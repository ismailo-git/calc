import React from "react";

const AmazingNumberButton = ({ result, setResult }) => {
	const clickHandler = (e) => {
		setResult(result?.concat(e.target?.value));
	};

	//Cette fonction nous permet de créer nos bouttons numeriques
	const digitalButtons = () => {
		//Tableau vide pour inserer nos bouttons numeriques
		const buttons = [];

		//On fait une boucle
		for (let i = 0; i < 10; i++) {
			//Puis on insere nos bouttons dans le tableau
			buttons.push(
				<button onClick={clickHandler} value={i} key={i}>
					{i}
				</button>
			);
		}
		return buttons;
	};

	//Fonction pour reinitialiser le resulat de nos operations
	const clear = () => {
		setResult("");
	};

	//Fonction pour reculer d'un cran
	const backspace = () => {
		setResult(result?.slice(0, -1));
	};

	return (
		<div className="AmazingNumberButton">
			{digitalButtons()}
			<button className="btn clear span-2" onClick={clear}>
				AC
			</button>
			<button onClick={backspace}>&larr;</button>
		</div>
	);
};

export default AmazingNumberButton;
