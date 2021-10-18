import { useState } from "react";

const TitleForm = () => {
  const [title, setTitle] = useState('')

  return (
    <form>
      <input 
        aria-label='title field'
        placeholder='Film Title'
        type='text'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button>Create EPK</button>
    </form>
  )
}


export default TitleForm;