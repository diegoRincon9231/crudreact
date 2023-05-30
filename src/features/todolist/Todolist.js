import React, {useRef} from "react";

export function Todolist ()  {
	//const [state, despatch] = useReducer(reducer,initialArg,init?)
	const itemWord = useRef(null);
	const handleClick = e => {
		e.preventDefault()
	}
	return(
		<section className="todoList">
			<div className="todoList__createElement">
				<form>
					<input type="text" placeholder="Tarea" ref={itemWord} />
				  	<button className="buttonSend" onClick={handleClick}>Registrar tarea</button>
				</form>
			</div>
			<div className="todoList__listtodo">
				<listItems />
			</div>
		</section>
	)
}