export default function Validation({userName}) {
    return(
        <div className="container d-flex justify-content-center mt-5">
            <div className="card shadow p-4 mt-5">
                <div className="card-body">
                    <h1>Hello {userName}!</h1>
                    <h2>Login Successful!</h2>
                    <div class="wrapper"> 
                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}