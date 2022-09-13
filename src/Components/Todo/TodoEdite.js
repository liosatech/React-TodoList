import React,{useState} from "react";


function TodoEdite(props){
    const [text, setText] = useState(props.item.formInput)
    const inputHandler = e => setText(e.target.value)
    return(
    <div className="col-6 mb-2">
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div>
                <input value={text} className='form-control' onChange={inputHandler}/>
               
            </div>
            <div>
                <button type="button" className="btn btn-info" onClick={() => props.edit(text)}>edit</button>
            </div>
        </div>
    </div>
)
}

export default TodoEdite