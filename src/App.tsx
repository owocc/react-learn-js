import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export default function App() {
	const navigate = useNavigate()
	const goto = (path: string) => {
		navigate(path)
	}
	return (
		<>
			<h1>JavaScript</h1>
			<div className="button-container" >
				<Button variant='outlined' onClick={() => goto('/data-type')} >DataType</Button>
				<Button variant='outlined' onClick={() => goto('/interaction')} >Interaction</Button>
				<Button variant='outlined' onClick={() => goto('/type-conversion')} >TypeConversion</Button>
				<Button variant='outlined' onClick={() => goto('/computed')} >Computed</Button>
			</div>

		</>
	)
}