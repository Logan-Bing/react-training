import { useState } from 'react'

const EmailForm = () => {

  const [mail, setMail] = useState('')

  const handleChange = (event) =>{
    setMail(event.target.value)
  }

  const displayAt = (email) => {
    if (email.includes('@')) return <p>✅</p>
    return null
  }

  return(
    <div>
      <input
        type="text"
        placeholder='Entre ton email'
        value= {mail}
        onChange={handleChange}
      />
      <p>Ton Email : {mail}</p>
      {displayAt(mail)}
    </div>
  )
}

export default EmailForm
