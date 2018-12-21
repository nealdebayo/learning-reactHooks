import React, { useState } from 'react'

const form = () => {
	const [text, setText] = useState("")
	const [checked, setChecked] = useState(false)
	const handleCheckboxToggle = e => setChecked(!checked)

	return (
			<section className="deep-orange lighten-5" style = {{padding: '30px'}}>
			    <div className="input-field col s6" style = {{textAlign: 'center'}}>
			          <input autoComplete ="off" value = {text} id="last_name" type="text" className="validate" style = {{width: '60%'}} onChange={ e => setText(e.target.value)} />
			          <label htmlFor="last_name" style = {{marginLeft: '20%'}}>Type in something here</label>
		        </div>

				<label className="container">
				  <input type="checkbox" checked={checked} onChange={handleCheckboxToggle} style={{width:'20px', height: '20px', borderColor: 'white'}}/>
				  <span className="checkmark"></span>
				</label>

				<ul>
					<li>{text}</li>
					<li>{checked.toString()}</li>
				</ul>
			</section> )
}

export default form