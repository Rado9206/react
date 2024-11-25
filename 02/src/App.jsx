import { PersonInfo } from './components/PersonInfo'
import dogImg from './assets/dog.jpg'

function App() {
	const user00001 = {
		name: 'Jan',
		lastName: 'Kowalski',
		mail: 'kowal@gmail.com',
		tel: '+48 000 000 000',
	}
	const user00002 = {
		name: 'Janina',
		lastName: 'Kowalska',
		mail: 'janina@gmail.com',
		tel: '+48 100 100 100',
	}
	const user00003 = {
		name: 'Rafał',
		lastName: 'Kowalski',
		mail: 'raf@gmail.com',
	}

	return (
		<>
			<PersonInfo person={user00001} />
			<br />
			<PersonInfo person={user00002} /> <br />
			<PersonInfo person={user00003} />
			<img src={dogImg} alt='' />
		</>
	)
}

export default App
