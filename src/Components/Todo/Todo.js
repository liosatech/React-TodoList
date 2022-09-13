import React,{useState} from "react";
import TodoEdite from "./TodoEdite";


function Todo(props){
    const [edit, setEdit] = useState(false)
    const {item} = props;
    const editHandler = text => {
        props.edit(item.key,text)
        setEdit(false)
    }
    return(
        <>
            {
                !edit
                ? (
                    <div className="col-6 mb-2">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                            {item.formInput}
                            </div>
                            <div>
                                <button type="button" className="btn btn-info" onClick={()=>setEdit(true)}>edit</button>
                                <button type="button" className={`btn m-3 ${!item.done ? 'btn-success' : 'btn-warning'}` } onClick={() => props.done(item.key)}>{item.done ? 'undone' : 'done'}</button>
                                <button type="button" className="btn btn-danger m-3" onClick={() => props.delete(item.key)}>delete</button>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <TodoEdite key={item.key} item ={item} edit={editHandler}/>
                )
            }
        </>
   
)
}

export default Todo