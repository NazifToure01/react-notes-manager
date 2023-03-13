import s from "./style.module.css";
import { PencilFill, Trash, TrashFill } from "react-bootstrap-icons";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import {useState} from "react";
export function NoteForm({ title, onSubmit, onclickEdit, onclickTrash }) {
    const [formValues, setFormValues] = useState({title:"", content:""});
    
    function updateFormValues(e) {

        setFormValues({...formValues, [e.target.name]: e.target.value })
        
    }
    const actionIcons = (
        <>
            <div className="col-1">
                { onclickEdit && <PencilFill onClick={onclickEdit} className={s.icon}/> }
            </div>
            <div className="col-1">
                {onclickTrash && <TrashFill onClick={onclickTrash} className={s.icon} />}
            </div>
        </>
    );
    const titleInput = (
        <>
            <label className="form-label">Title</label>
            <input onChange={updateFormValues} type="text" name="title" className="form-control" />
        </>
    );
    const contentInput = (
        <>
            <label className="form-label">Content</label>
            <textarea onChange={updateFormValues}  name="content" className="form-control" rows="5" />
        </>
    );
    const submitButton = (
        <div className={s.submit_btn}>
            <ButtonPrimary onClik={ ()=> onSubmit(formValues)}>Submit</ButtonPrimary>
        </div>
    );
    return (
        <form className={s.container}>
            <div className="row justify-content-space-between">
                <div className="col-10">
                    <h2 className="mb-3">{title}</h2>
                </div>
                {actionIcons}
            </div>
            <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
            <div className="mb-3">{contentInput}</div>
            {onSubmit && submitButton}
        </form>
    );
}