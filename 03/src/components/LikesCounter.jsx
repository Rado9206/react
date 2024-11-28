export function LikesCounter({numberOfLikes, onLikeButtonClick, onLoveButtonClick}) {
	return (
		<>
			<h2>Liczba polubień: {numberOfLikes}</h2>
			<button onClick={onLikeButtonClick}>👍</button>
			<button onClick={onLoveButtonClick}>❤️</button>
		</>
	)
}
