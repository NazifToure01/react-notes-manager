import axios from "axios";

const BASE_URL = "http://localhost:4000/notes";

export class NoteApi {
    static async create(note){
        return (await axios.post(`${BASE_URL}`, note)).data

    }
     static async feshAll(){
        return (await axios.get(`${BASE_URL}`)).data
    }
     static async feshById(noteId){
         return (await axios.get(`${BASE_URL}/${noteId}`)).data
    }
     static async deleteById(noteId){
         return (await axios.delete(`${BASE_URL}/${noteId}`)).data

    }
    static async update(note){
        return (await axios.patch(`${BASE_URL}/${note.id}`, note)).data
        }

}
