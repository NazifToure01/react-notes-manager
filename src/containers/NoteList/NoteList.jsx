import s from "./style.module.css"
import {useSelector} from "react-redux";
import {TextCard} from "../../components/TexteCard/TexteCard";
import {useNavigate} from "react-router-dom";

export function NoteList() {
    const noteList = useSelector((store) => store.NOTE.noteList)
    const navigate = useNavigate()
    return(
        <div className={`row justify-content-center ${s.cards_container}`}>
            {
                noteList.map(note =>{
                    return(
                        <div className={s.card_container}>
                            <TextCard
                                title={note.title}
                                subtitle={note.created_at}
                                content={note.content}
                                onClick={()=>navigate("/note/"+note.id)}
                                onClickTrash={()=>alert("onclick trash")}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}