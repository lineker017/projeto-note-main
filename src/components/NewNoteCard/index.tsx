import './styles.css'
import { X } from 'lucide-react'
import { toast } from 'sonner'
import { FormEvent, useState, useRef } from 'react'

interface NewNoteCard {
  handleSaveNotes(content: string): void
}

export default function NewNoteCard({ handleSaveNotes }: NewNoteCard) {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<string>("")

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if(!content) {
      return toast.error("O conteudo não pode estar vazio")
    }

    handleSaveNotes(content)

    setContent("")

    textAreaRef.current?.focus()
  }
  return (
    <div className='new-note-card'>
      <button onClick={() => setOpen(true)}>
        <span>Adicionar Nota</span>
        <p>Crie uma nota para lembrete, lista de compras, tarefas e muito mais.</p>
      </button>

      {
        open ? (
          <div
            onClick={() => setOpen(false)}
            className='modal-overlay'>
            <div
              onClick={(e) => e.stopPropagation()}
              className='modal-content'>
              <button
                onClick={() => setOpen(false)}
                className='modal-close'>
                <X />
              </button>
              <form onSubmit={handleSubmit}>
                <div>
                  <span>Adicionar nota</span>

                  <textarea
                    ref={textAreaRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    autoFocus>
                  </textarea>
                </div>

                <button type='submit'>Salvar essa nota</button>
              </form>
            </div>
          </div>
        ) : null
      }

    </div>
  )
}