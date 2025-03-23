import { Note } from "../models/note_model.js"


export const getNote = async (req, res) => {
    const allNotes = await Note.find({})
    res.status(200).json({ 'notes': allNotes })
}


export const postNote = async (req, res) => {



    const note = new Note(req.body)
    const newNote = await note.save()



    res.status(200).json({ 'notes': newNote })
}

export const getId = async (req, res) => {
    const oneNote = await Note.findById(req.params.id)
    res.status(200).json(oneNote)
}
