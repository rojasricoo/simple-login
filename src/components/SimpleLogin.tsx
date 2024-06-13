import './styles.css'
export function SimpleLogin(){
    return (
        <>
        <div className="header-login">
            <h1 className="header-title">Simple Login</h1>
            <form action="" className="form-login">
                <h4>Login</h4>
                <input type="text" placeholder="username" required/>
                <input type="password" required/>
                <button>Login</button>
                <p className="text-center">Don't have an account? <a href="#">Sign Up</a></p>
                <p>Forgot <a href="#">Password?</a></p>
                <footer>  
                    <p>All rights reserved</p>
                </footer>
            </form>
        </div>        
        </>
    )
}