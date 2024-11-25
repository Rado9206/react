export function HeadingItalic(props) {
	console.log("Heading Italic:", props);
    return (
		<h1>
			<i>{props.children}</i>
		</h1>
	)
}
