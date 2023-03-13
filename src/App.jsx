import {Outlet} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {useEffect} from "react";
import {NoteApi} from "./api/note-api";
import {useDispatch} from "react-redux";
import {setNoteList} from "./store/note/note-slice";
import s from "style.module.css"
export function App() {
    const dispash = useDispatch()
    async function feshAllNotes(){
        const noteList = await NoteApi.feshAll()
        dispash(setNoteList(noteList));
    }
    useEffect(()=>{
        feshAllNotes()
    },[])
  return(
      <div className="container-fluid">
        <Header/>
          <div className={s.outlet_container}>
              <Outlet/>
          </div>

      </div>
      )

}
