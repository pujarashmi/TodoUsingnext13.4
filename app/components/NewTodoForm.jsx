'use client'

import { useRef } from 'react'
import { create } from '../_actions'

const NewTodoForm = () => {
  const formRef =  useRef()

  // here we dont have any handle submit thats talk to an api layer from where we will talk to our db and do the db task. we are calling server actions which are function that run our server directylly from our client side component.
  async function action(formData) {
    // we cannot define our action inside client component. so i have make the action.js
    await create(formData)
    // reseting the form
    formRef.current.reset()
  }

  return (
    <form ref={formRef} action={action}>
      <h2 className='font-medium mb-2'>Create a New Todo</h2>
      <input
        type='text'
        name='title'
        className='border border-slate-400 px-2 py-0.5 rounded'
      />
      <button
        type='submit'
        className='ml-2 text-sm px-2 py-1 rounded bg-slate-700 text-white disabled:bg-opacity-50'
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodoForm
