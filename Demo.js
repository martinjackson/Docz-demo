
import React, { useState }  from 'react'

const Demo = () => {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label> <input type="submit" value="Submit" />
      </form>
      <p>{name}</p>
    </div>
  );

}

export default Demo;
