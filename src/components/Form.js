import { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    age: '',
  })
  
  const [submittedData, setSubmittedData] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const treatedData = {
      ...formData,
      username: formData.username.toUpperCase(),
      fullname: formData.fullname.toUpperCase(),
    }

    setSubmittedData(treatedData) 
    alert(JSON.stringify(treatedData, null, 2))
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 200,
          rowGap: 20,
        }}
      >
        <label htmlFor='username'>
          Username:
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor='fullname'>
          Fullname:
          <input
            type='text'
            id='fullname'
            name='fullname'
            value={formData.fullname}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor='age'>
          Age:
          <input
            type='number'
            id='age'
            name='age'
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit' style={{ width: 70 }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: 20 }}>
          <h3>Request Sent to DB with below request data</h3>
          <ul>
            <li><strong>Username:</strong> {submittedData.username}</li>
            <li><strong>Fullname:</strong> {submittedData.fullname}</li>
            <li><strong>Age:</strong> {submittedData.age}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Form
