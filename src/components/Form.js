import { useState } from "react"

export default function Form({onSubmit, name, onChange}) {
    const [passwordType, setPasswordType] = useState("password")
    const [passwordInput, setPasswordInput] = useState("")
    const handlePassword = (event) => {
        setPasswordInput(event.target.value)
    }
    const togglePassword = (e) => {
        e.preventDefault();
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return(
        <div className="col-md-6 form-div">
            <div className="p-md-5">
                <div className="container p-md-4 form-lead">
                    <h1 style={{color:'grey'}}>Login</h1>
                    <form className="p-md-4" onSubmit={onSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Username" onChange={onChange} value={name} maxlength="10" className="form-control mt-3" required/>
                            <i style={{color:'grey'}} className="fa-solid fa-user mt-4 ms-2"></i>
                        </div>
                        <div className="input-group">
                            <input type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" placeholder="Email" className="form-control mt-5" required/>
                            <i style={{color:'grey'}} className="fa-solid fa-envelope ms-2"></i>
                        </div>
                        <div className="input-group">
                            <input type={passwordType} onChange={handlePassword} value={passwordInput} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Password" className="form-control mt-5" required/>
                            <button onClick={togglePassword} style={{border:'none',background:'transparent'}}>{passwordType === "password" ? <i style={{color:'grey'}} className="fa-solid fa-eye-slash ms-2"></i> : <i style={{color:'grey'}} className="fa-solid fa-eye ms-2"></i>}</button>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="text-left mt-4 d-flex">
                                <input type="checkbox" className="form-check-input me-3" />
                                <p style={{color:'grey'}} className="me-3">Remember Me</p>
                            </div>
                            <div className="mt-4 f-password"><a href="#">Forgot password?</a></div>
                        </div>
                        <button className="btn btn-primary mt-3 shadow px-4 py-2">Login<i className="fa-solid fa-angle-right ms-2"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}