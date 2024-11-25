const adress = 'https://rjoachimiak.pl'

export function Link({ text = adress, shouldOpenNewTab }) {

	const target = shouldOpenNewTab ? '_blank' : '';
	const rel = shouldOpenNewTab ? 'noopener noreferrer' : '';
	return (
		<a href={adress} target={target} rel={rel}>
			{text}
		</a>
	)
}
