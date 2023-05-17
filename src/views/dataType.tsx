import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {useState} from 'react'
// Symbol
// unique Identifiers

export default function DataTypeView() {
	const [symbolText,setSymbolText] = useState("Symbol Text")
	const Info = Symbol("hello")
	const Info2 = Symbol("hello")
	const setText = ()=>{
		const typeDiff = (typeof Info == typeof Info2) // ==> true same Symbol type

		// const content = Info == Info2 //==> false Symbol data is different

		setSymbolText(`content diff is ${content},type diff is ${typeDiff}`)
	}

	return (
		<>
			<h1>Symbol Demo</h1>	
			<Card sx={{ minWidth: 275,maxWidth:500 }}>
				<h2 className='m-10'>{symbolText}</h2>
			</Card>
			<br/>
			<Button variant='outlined' onClick={()=>{setText()}}>GetInfo</Button>
		</>
	)
}