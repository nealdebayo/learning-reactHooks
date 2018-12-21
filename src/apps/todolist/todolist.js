import React, { useState } from 'react'
import { Close } from '@material-ui/icons'

const IntroPage = () => {
	const [list, setList] = useState([])
	const [entry, setEntry] = useState("")

	const handleEvent = event => {
		setEntry(event.target.value)		
	}

	const handleSubmit = event => {
		if (event.key==="Enter") {
			setList(list => [
				...list,
				{ id: Date.now(), text: entry, completed: false }
				])
			setEntry("")
		}
	}

	const handleDelete = id => {
		let newList = [...list]
		newList = newList.filter(l => l.id !== id)
		setList(newList)
	}

	const handleCompleted = id => {
		let newList = [...list]
		newList = newList.map(l => {
			if (l.id === id) {
				l.completed = !l.completed
			}
			return l
		})
		setList(newList)
	}

	const theRealList = list.map(l => <div className="blue darken-2" 
										style={{textAlign: 'left',
										 margin: '5px', 
										 padding: '10px', 
										 color: 'white',
										 cursor: 'pointer'}} 
										key={l.id} >
										<font style={{textDecoration: (l.completed)? 'line-through': ''}} onClick={() => handleCompleted(l.id)}>{l.text}</font>
										<Close style={{float: 'right', cursor: 'pointer'}} onClick={() => handleDelete(l.id)}/>
										</div>)

	return(	
		<>
			<div> 
				<div className="input-field" style={{width: '60%', marginLeft: '20%'}}>
		          <input id="todolist" value = {entry} autoComplete = "off" type="text" className="validate" onKeyDown={e => handleSubmit(e)} onChange={event => handleEvent(event)}/>
		          <label htmlFor="todolist">Put in your list here</label>
				  {theRealList}
		        </div>
			</div>
		</>
		)
}


export default IntroPage