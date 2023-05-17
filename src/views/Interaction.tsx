import Button from '@mui/material/Button';

const buttonType = "outlined"


function AlertButton(){
	const handler = ()=>{
		alert("Bigo ~")
	}
	return <Button onClick={()=>handler()} variant={buttonType}>Alert</Button>
}



function PromptButton(){
	const handler = ()=>{
		const result = prompt("enter you name","no name")
		if(result && result != ''){
			alert(`you name is ${result}`)	
		}
		
	}
	return <Button onClick={()=>handler()} variant={buttonType}>Prompt</Button>
}


function ConfirmButton(){
	const handler = ()=>{
		const result = confirm("are you ok?") ? "OK!" : "NO :("

		alert(result)
		
	}
	return <Button onClick={()=>handler()} variant={buttonType}>Confirm</Button>
}



function InteractionView(){

	return (
		<>
			<h1>Interaction Demo</h1>
			<div className="button-container">
				<AlertButton/>
				<PromptButton/>
				<ConfirmButton/>
			</div>
		</>
		)
}


export default InteractionView