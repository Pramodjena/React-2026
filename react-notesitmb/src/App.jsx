import React, { useRef, useState } from "react";

const App = () => {
  // let count = 0;
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  // Uncontrolled
  const nameRef = useRef();
  const emailRef = useRef();

  function increaseCount() {
    if (count === 5) {
      return;
    }
    setCount(count + 1);
  }

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  function handleForm() {
    alert(`The values are : ${name}, ${pass}`);
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents to send data

    const course = document.querySelector(
      'input[name="course"]:checked',
    )?.value;

    alert(`Name : ${nameRef.current.value}, Email: ${emailRef.current.value},
      ${course}`);
  }

  return (
    <div>
      <h1>React Notes</h1>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <br />
      <br />

      {/* Controlled Component */}
      <input
        value={name}
        onChange={handleName}
        type="text"
        placeholder="Enter Name"
      />
      <input
        value={pass}
        onChange={handlePass}
        type="password"
        placeholder="Enter Password"
      />
      <button onClick={handleForm}>Submit</button>

      {/* Uncontrolled Component */}
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={emailRef} type="email" placeholder="Email" />
        <br />
        <br />
        <label htmlFor="">
          <input type="radio" name="course" value="MERN" />
          MERN
        </label>
        <label htmlFor="">
          <input type="radio" name="course" value="JAVA" />
          JAVA
        </label>
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default App;
