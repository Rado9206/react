function App() {
	function handleClick() {
		alert("Klik!")
	}
	
	return (
		<>
			<h1>Gwiezdne Wojny V</h1>
			<h2>Rok produkcji: 1980 </h2>
			<h2>Fabuła:</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<button
				onClick={handleClick}>
				Pokaż spoiler...
			</button>
			<p>Lorem ipsum dolor sit amet.</p>
		</>
	)
}

export default App
