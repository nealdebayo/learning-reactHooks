import React, { useState, useEffect, useReducer, useMemo } from 'react'
import { Close } from '@material-ui/icons'


const TodoListReducer = (state = { list: []}, action) => {
	let newState, newList
	switch (action.type) {
		case "ADD":
			newList = [...state.list, action.payload]
			localStorage.setItem('todoo', JSON.stringify(newList))
			newState = {...state, list: newList}
			return newState
		case "REMOVE":
			newList = [...state.list]
			newList = newList.filter(l => l.id !== action.payload)
			localStorage.setItem('todoo', newList)
			newState = {...state, list: newList}
			return newState
		case "COMPLETED":
			newList = [...state.list]
			newList = newList.map(l => {
				if (l.id === action.payload) {
					l.completed = !l.completed
				}
				return l
			})
			localStorage.setItem('todoo', JSON.stringify(newList))
			newState = {...state, list: newList}
			return newState
		default:
			return state			
	}
}


const useInitialValue = () => {
		const [ list, setList ] = useState([])

		useEffect(() => {
			setList(JSON.parse(localStorage.getItem("todoo")) || [])
		})

		return list
		// let valFromStorage
		// if (localStorage.getItem("todoo")) {
		// 	valFromStorage = JSON.parse(localStorage.getItem("todoo"))
		// } else {
		// 	valFromStorage = [{ id: Date.now(), text: "Create a new todo", completed: false }]
		// }
		// return {list : valFromStorage}		
	}


const TodoList = () => {
	const [entry, setEntry] = useState("")

	const [todo, dispatchTodo] = useReducer(TodoListReducer, useInitialValue())

	const handleEvent = event => {
		setEntry(event.target.value)		
	}

	const handleSubmit = event => {
		if (event.key==="Enter") {
			dispatchTodo({ type: "ADD", payload: { id: Date.now(), text: entry, completed: false }})
			setEntry("")		
		}
	}

	const handleDelete = id => {
		dispatchTodo({ type: "REMOVE", payload: id })
	}

	const handleCompleted = id => {
		dispatchTodo({ type: "COMPLETED", payload: id })
	}


	const theRealList = () => {
		if (todo.list) {
			console.log(todo.list)
			return todo.list.map(l => <div className="blue darken-2" 
										style={{textAlign: 'left',
										 margin: '5px', 
										 padding: '10px', 
										 color: 'white',
										 cursor: 'pointer'}} 
										key={l.id} >
										<font style={{textodooecoration: (l.completed)? 'line-through': ''}} onClick={() => handleCompleted(l.id)}>{l.text}</font>
										<Close style={{float: 'right', cursor: 'pointer'}} onClick={() => handleDelete(l.id)}/>
										</div>)
		}
		return null

	}



	return(	
		<>
			<div> 
				<div className="input-field" style={{width: '60%', marginLeft: '20%'}}>
		          <input id="todolist" value = {entry} autoComplete = "off" type="text" className="validate" onKeyDown={e => handleSubmit(e)} onChange={event => handleEvent(event)}/>
		          <label htmlFor="todolist">Put in your list here</label>
				  {theRealList()}
		        </div>
			</div>
		</>
		)
}


export default TodoList