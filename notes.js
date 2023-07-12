const { builtinModules } = require("module");
const fs= require("fs");
const chalk= require('chalk')


const addNote=(title, body)=>{
    const notesList= loadNotes();
    
    const duplicate= notesList.filter((note)=>{
        return (title===note.title)
    })

    if(duplicate.length===0){
        notesList.push({
            title:title,
            body:body
        })
        saveNotes(notesList);
        console.log(chalk.green.inverse("Note added successfully."))
    }else{
        console.log(chalk.red.inverse("This title is already taken !!"));
    }
    
}


const removeNote=(title)=>{
    const notesList= loadNotes();
    const duplicate= notesList.filter((note)=>{
        return (title===note.title)
    })
    if (duplicate.length===0){
        console.log(chalk.red.inverse("No note is present with this title."))
    }else{
        const newNotes=notesList.filter((note)=>{
            return (title!==note.title)
        })
        saveNotes(newNotes);
        console.log(chalk.green.inverse("Note removed successfully."))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Title of your notes are:- '))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

// general functions used by above CRUD operations

const loadNotes=()=>{
    try{
        const fileData= fs.readFileSync('notesAdded.json')
        const JsonString=fileData.toString()
        const JsonFile =JSON.parse(JsonString)
        return JsonFile;

    }catch(e){
        return [];
    }
}


const saveNotes=(notes)=>{
    try{
        const jsonString= JSON.stringify(notes);
        fs.writeFileSync('notesAdded.json',jsonString);
    }catch(e){
        console.log("error:",e);
    }
}

module.exports= {
    listFunc:listNotes,
    addFunc:addNote,
    removeFunc:removeNote,
    readFunc:readNote
} 



// we can debug by adding below commmand anywhere in the code to debug
//debugger
// CLI will be : node inspect app.js add --title="new note" --body="lists added"
// then open chrome://inspect -> here we have target for localHost
// restart command to again debug the code 