import React, { useState } from "react";

import Counter from "./Counter";


const Index = () => {
	const [counter, setCounter] = useState(0)

	let paused = false;
	let subtract = false;
	let reset = false;

	function handlePaused(){
		paused = true;
	}

	function handleContinued(){
		paused = false;
	}

	function handleSubtract(){
		subtract = true;
	}

	function handleReset(){
		reset = true;
	}

	const myInterval = setInterval(function (){
		if (paused == false){
			setCounter(counter + 1);
		}
		if (subtract == true){
			setCounter(counter-2);
			subtract = false;
		}
		if (reset == true){
			setCounter(0);
			reset = false;
		}
	}, 1000);

	return (
		<Counter 
			digitOne={Math.floor(counter % 10)}
			digitTwo={Math.floor((counter / 10) % 10)}
			digitThree={Math.floor((counter / 100) % 10)}
			digitFour={Math.floor((counter / 1000) % 10)}
		/>
	)
}
 
export default Index;