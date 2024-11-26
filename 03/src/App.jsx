import { useState } from 'react'

function App() {
	const [isSpoilershown, setIsSpoilerShown] = useState(false)
	const [isWarningshown, setIsWarningshown] = useState(true)

	function handleShownSpoilerClick() {
		setIsSpoilerShown(true)
		console.log('function handleClick')
		setIsWarningshown(false)
	}

	function handleCloseWarningClick() {
		setIsWarningshown(false)
	}
	console.log('App render')

	return (
		<>
			<h1>Gwiezdne Wojny V</h1>
			<h2>Rok produkcji: 1980 </h2>
			<h2>Fabuła:</h2>
			{isWarningshown && (
				<p>
					Uwaga! Zawiera spoilery <button onClick={handleCloseWarningClick}>X</button>
				</p>
			)}
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			{isSpoilershown ? (
				<p>Lorem ipsum dolor sit amet.</p>
			) : (
				<button onClick={handleShownSpoilerClick}>Pokaż spoiler...</button>
			)}
		</>
	)
}

export default App
