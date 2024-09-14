import './styles.css'
import { toast } from 'sonner'
import NewNoteCard from '../../components/NewNoteCard'
import logo from '../../../src/assets/logo.png'

import NoteCard from '../../components/NoteCard'
import { useState } from 'react'
interface Note {
  id: string
  date: Date
  content: string
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')

    if (notesOnStorage)
      return JSON.parse(notesOnStorage)

    return []
  })


  function handleSaveNotes(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const notesArray = [...notes, newNote]

    setNotes(notesArray)

    localStorage.setItem("notes", JSON.stringify(notesArray))

    toast.success("Nota criada com sucesso")
  }

  function handleDeleteNote(id: string) {
    const newArray = notes.filter((note) => note.id !== id)

    setNotes(newArray)

    localStorage.setItem("notes", JSON.stringify(newArray))

    toast.success("Nota apagada com sucesso")
  }

  return (
    <div className='container'>
      <img src={logo} alt="Notes" />

      <form>
        <input
          type="text"
          placeholder='Busque em suas notas...'
        />
      </form>

      <div className='separator'></div>

      <div className='cards'>
        <NewNoteCard handleSaveNotes={handleSaveNotes} />

        {notes.map((note) => (
          <NoteCard
            handleDeleteNote={handleDeleteNote}
            key={note.id}
            id={note.id}
            date={note.date}
            content={note.content}
          />
        )
        )}
      </div>
    </div>
  )
}