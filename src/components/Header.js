const Header = (props) => {
	return (
		<header>
			<h1>{props.data}</h1>
			<button>Add</button>
		</header>
	);
};

export default Header;
