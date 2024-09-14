import { Toaster, toast } from 'sonner'

import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Toaster 
        position='top-right' 
        toastOptions={{
          className: 'sonner-toast'
        }}
        closeButton
        richColors  
      />
      <Home />
    </div>
  )
}

export default App
