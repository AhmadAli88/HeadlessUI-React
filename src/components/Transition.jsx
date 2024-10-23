import { Transition } from '@headlessui/react'
import { useState } from 'react'

function MyTransition() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <button onClick={() => setOpen((open) => !open)} className="bg-blue-300 mt-3 px-4 rounded-lg py-2">Toggle</button>
      <Transition show={open}>
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">I will fade in and out</div>
      </Transition>
    </div>
  )
}
export default MyTransition