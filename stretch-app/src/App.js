import React, { useState, useEffect } from 'react';
import './App.css';

const initialState = {
  username: "",
  password: "",
};

function App() {

  const [login, setLogin] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const userLogin = (e) => {
    e.preventDefault();
    // props.loginAction(login)
    // axiosWithAuth()
    //   .post("/login", login)
    //   .then((res) => {
    //     localStorage.setItem("token", JSON.stringify(res.data.token));
    //     localStorage.setItem("userID", res.data.user.id);
    //     console.log({ res });
    //     props.loginAction(res);
    //     push("/main");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Please enter a valid username and password, or register a new account.")
    //   });
  };
  const userRegister = (e) => {
    e.preventDefault();

    // axiosWithAuth()
    //   .post("/register", login)
    //   .then((res) => {
    //     localStorage.setItem("token", JSON.stringify(res.data.token));
    //     localStorage.setItem("userID", res.data.user.id);

    //     console.log({ res });
    //     props.registerAction(res);
    //     push("/userProfile");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("There was an error. Please try again.")
    //     // console.log({err})
    //   });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stretch App</h1>
      </header>
      <h3 className='login'> Login or Register</h3>
      <form>
        <input
          label="Username"
          type="text"
          name="username"
          placeholder="username"
          value={login.username}
          onChange={handleChange}
        />
        <br />
        <input
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={handleChange}
        />

        <button onClick={userLogin}>Login</button>
        <button onClick={userRegister}>Register</button>
      </form>
    </div>
  );
}

export default App;
