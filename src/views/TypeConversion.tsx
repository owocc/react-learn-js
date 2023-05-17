import { Button, TextField } from '@mui/material';
import { useState } from 'react'

const buttonType = "outlined"

function StringConversionButton() {

	const [showStirng, setShowString] = useState<unknown>("TypeConversion")
	const [inputValue, setInputValue] = useState<unknown>("")
	const conversionHandler = (data: unknown) => {
		let text: unknown
		const typeInfo = (typeof data)
		switch (typeInfo) {
			case 'number': // to string
				text = String(data);
				break
			case "string": //to number
				text = Number(data)
				break
		}

		setShowString(`${text} type is [${typeInfo}] Conversion ==>  type is [${typeof text}]`)
	}

	const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const booleanConversion = ()=>{
		const result  = Boolean(inputValue)
		setShowString(`${inputValue} == ${result}`)
	}
	return (
		<>
			<h2 className='text-l'>{showStirng as string}</h2>
			<div className='button-container'>
				<TextField label="Value" 
					variant="outlined"  
					placeholder='enter value' 
					value={inputValue}
					onChange={textChangeHandler}
				/>
				<Button variant={buttonType} onClick={()=>conversionHandler(inputValue)}>Conversion</Button>
				<Button variant={buttonType} onClick={() => conversionHandler(114514)}>number To String</Button>
				<Button variant={buttonType} onClick={() => conversionHandler(3.1415926)}>float To String</Button>
				<Button variant={buttonType} onClick={() => conversionHandler("995.22")}>float To String</Button>
				<Button variant={buttonType} onClick={() => booleanConversion()}>Boolean</Button>
			</div>
		</>

	)
}

function TypeConversion() {

	return (
		<>
			<h1>TypeConversion</h1>
			<StringConversionButton />
		</>
	)
}


export default TypeConversion