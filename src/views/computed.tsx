
import { TextField, Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react'


interface CalculatorsState {
	num1: string
	num2: string
	operators: string
	inputState: number
	historyComputed: string
}

interface ButtonProps {
	calculateState: CalculatorsState
	setCalculateState: React.Dispatch<React.SetStateAction<CalculatorsState>>
}


const defaultData:CalculatorsState = {
		operators: "Operators",
		num1: '',
		num2: '',
		inputState: 1,
		historyComputed: "Calculators"
	}

// computed
function computed(num1:string,num2:string,operators:string) {
	const [n1,n2] = [parseFloat(num1),parseFloat(num2)]

	let result = 0
	switch(operators){
		case "+":
			result = n1+n2
			break
		case "-":
			result =  n1-n2
			break
		case "×":
			result =  n1*n2
			break
		case "÷":
			result  = n1/n2
			break
		case "%":
			result = n1%n2
			break
	}
	return result % result !== 0 ?  String(result) : String(result.toFixed(5)) 
}




function CalculatorsButtons({ calculateState, setCalculateState }: ButtonProps) {


	// button style
	const buttonStyle = "outlined"
	const buttonSize = "large"

	// buttons
	const numbers: Array<string | number>[] = [
		["C", "D", "%", "÷"],
		[7, 8, 9, "×"],
		[4, 5, 6, "-"],
		[1, 2, 3, "+"],
		["Q", 0, ".", "="]
	]

	const setNumber = (num:string)=>{
		if(calculateState.inputState ==1){
			setCalculateState((prevState)=>({...prevState,num1:num}))
		}
		else if(calculateState.inputState == 2){
			setCalculateState((prevState)=>({...prevState,num2:num}))
		}
	}

	const deleteOne = (str:string)=>{
		if(str == "") return str
		return str.slice(0,-1)

	}
	const deleteOneStr = ()=>{
		const {inputState,num1,num2} = calculateState
		if(inputState == 1){
			setCalculateState((prevState)=>({...prevState,num1:deleteOne(num1)}))
		}
		else if(inputState == 2){
			setCalculateState((prevState)=>({...prevState,num2:deleteOne(num2)}))
		}
	}

	// switch calculators input status
	const switchSatus = ():boolean=>{
		const {inputState,num1,num2} = calculateState
		if(inputState == 1 && num1 != ""){
			setCalculateState((prevState)=>({...prevState,inputState:2}))	
			return true
		}
		else if(inputState == 2 && num2 != ""){
			return true
		}
		return false
		
	}

	// clearn clearCalculators input
	const clearCalculators = ()=>{
		setCalculateState(defaultData)
	}


	//scan string it exist dot(.)
	const inputDot = (str:string)=>{
		const reg = new RegExp(/\./)
		return reg.test(str) ?  str : str+"."
	}

	const inputDotHnadler = ()=>{
		const {inputState,num1,num2} = calculateState
		if(inputState == 1 && num1 != ""){
			setCalculateState((prevState)=>({...prevState,num1:inputDot(num1)}))
		}
		else if(inputState == 2 && num2 != ""){
			setCalculateState((prevState)=>({...prevState,num2:inputDot(num2)}))
		}
	}



	const computedHandler = ()=>{
		const {inputState,num1,num2,operators} = calculateState
		if(inputState == 1 || num1 == "" || num2 == "") return
		const result = computed(num1,num2,operators)
		setCalculateState({
			...defaultData,
			num1:result,
			historyComputed:`${num1} ${operators} ${num2} = ${result}`
		})
	}	

	const setOperators = (operators:string)=>{
		switch(operators){
			case "%":
			case "+":
			case "-":	
			case "×":
			case "÷":
				if(switchSatus())
					setCalculateState((prevState)=>({...prevState,operators}))
				break
			case "C":
				clearCalculators()
				break
			case ".":
				inputDotHnadler()
				break;
			case "D":
				deleteOneStr()
				break;
			case "=":
				computedHandler()
				break;
		}
	}

	const buttonClickHandler = (inputValue: string | number) => {
		if (calculateState.inputState === 1) {
			if (typeof inputValue === "number") {
				const num1 = calculateState.num1 + inputValue;
				setNumber(num1)
			}else{
				setOperators(inputValue)
			}
		}
		else if(calculateState.inputState == 2){
			if (typeof inputValue === "number") {
				const num2 = calculateState.num2 + inputValue;
				setNumber(num2)
			}else{
				setOperators(inputValue)
			}	
		}
		
	}

	const buttons = (btns: Array<string | number>) => {
		return btns.map((btn, index) => (
			<Grid xs={3} key={index}>
				<Button size={buttonSize} variant={buttonStyle} onClick={() => buttonClickHandler(btn)}>{btn}</Button>
			</Grid>
		))
	}

	const buttonGroup = numbers.map((item, index) => {
		return (
			<Grid container spacing={2} key={index}>
				{buttons(item)}
			</Grid>
		)
	})


	return (
		<>
			<div className='m-y'>
				{buttonGroup}
			</div>
		</>
	)

}


// state manage 

function CalculatorsView() {

	const [calculateState, setCalculateState] = useState<CalculatorsState>(defaultData)

	return (
		<>
			<div className='center-container'>
				<div className='center-container flex-col'>
					<h1>{calculateState.historyComputed}</h1>
				
				<Box sx={{width:300}}>
					<TextField fullWidth value={calculateState.num1} label="Calculate" placeholder='Enter the value you want to calculate' />
					<h2 className='m-y align-r'>{calculateState.operators}</h2>
					<TextField fullWidth value={calculateState.num2} label="Calculate" placeholder='Enter the value you want to calculate' />
					<CalculatorsButtons calculateState={calculateState} setCalculateState={setCalculateState} />
				</Box>
				</div>
			</div>
		</>
	)
}
export default CalculatorsView