import React from 'react'

const Form = () => {
    const handleSubmit = evnt => (
        evnt.preventDefault()
      )
    
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Search</button>
    </form>
  )
}

export default Form