export function PersonInfo({ person }) {
	return (
		<address>
			<div>
				<span>
					{person.name} {person.lastName}
				</span>
			</div>

			<div>
				e-mail: <a href={`mailto:${person.mail}`}>{person.mail}</a>
			</div>

			{person.tel && (
				<div>
					Telefon: <a href={`mailto:${person.tel}`}>{person.tel}</a>
				</div>
			)}
		</address>
	)
}
