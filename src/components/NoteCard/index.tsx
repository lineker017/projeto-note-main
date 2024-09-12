import './style.css'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function NoteCard() {
  const [open, setOpen] = useState(false)
  return (
    <div className='note-card'>
      <button onClick={() => setOpen(true)}>
        <span>Há menos de um minuto</span>
        <p>Texto de um exemplo  que criei para aparecer aqui</p>

        <div className='gradient-overlay'></div>
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
              <form>
                <div>
                  <span>Adicionar nota</span>

                  <p>Texto de um exemplo  que criei para aparecer aqui</p>
                </div>

                <button>
                  deseja <span>apagar essa nota?</span>
                </button>
              </form>
            </div>
          </div>
        ) : null
      }

    </div>
  )
}