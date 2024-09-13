import './styles.css'

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
  const [notes, setNotes] = useState<Note[]>([])

  function handleSaveNotes(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    setNotes((prev) => [...prev, newNote])
  }

  function handleDeleteNote(id: string) {
    const newArray = notes.filter((note) => note.id !== id)

    setNotes(newArray)
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