import { useState } from "react"
import { registerAPIcall } from "../services/AuthService"
import { useNavigate} from 'react-router-dom';


const RegisterComponent = () => {

  const[name, setName ] = useState('')
  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate();


  function handleRegistrationForm(e){
    e.preventDefault();

    const register = {name, username, email, password}

    console.log(register);

    registerAPIcall(register).then((reponse) => {
      console.log(reponse.data);
      navigate('/login')
    }).catch(error => {
      console.error(error);
    })
  }

  return (
    <div className="container">
      <br /><br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">User Register Form</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3">Name</label>
                  <div className="col-md-9">
                    <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter name?"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3">Username</label>
                  <div className="col-md-9">
                    <input 
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username?"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3">Email</label>
                  <div className="col-md-9">
                    <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter email?"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3">Password</label>
                  <div className="col-md-9">
                    <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password?"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-gfoup mb-3">
                  <button className="btn btn-primary" onClick={(e) => handleRegistrationForm(e)}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent