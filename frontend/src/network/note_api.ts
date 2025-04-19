import { Note } from "../models/notes"

async function fetchData(input:RequestInfo,init?:RequestInit){
    const response = await fetch(input,init)
    if (response.ok) {
        return response
    }else{
        const errorBody= await response.json()
        const errorMessage=errorBody.error
        throw Error(errorMessage)
    }

}


export async function fetchNotes():Promise<Note[]>{
    
        const response = await fetchData("/api/notes", {
          method: "GET",
        });
        // const notes = await response.text();
        // const data = notes ? JSON.parse(notes) : null; 
        return  response.json()
}

export interface NoteInput{
    title:string,
    text?:string
}

export async function createNote(note:NoteInput):Promise<Note>{
    const response = await fetchData("api/notes",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            body:JSON.stringify(note)
        }
    })
    return response.json()
}