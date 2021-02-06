import '../css-files/login.css'
const LogIn = ()=>{
    return(
        <div className="login">
            <div className="container">
                <div className="row">
                    {/*start log in */}
                    <div className="col-lg-6">
                        <div className="row log-in">
                            <div className="col-lg-12">
                                <h3>Sign In</h3>
                            </div>
                            <div className="col-lg-12">
                                <input type="text" placeholder="user-name"/>
                            </div>
                            <div className="col-lg-12">
                                <input type="password" placeholder="password"/>
                            </div>
                            <div className="col-lg-12">
                                <a href="#">foregt password?</a>
                            </div>
                            <div className="col-lg-12">
                                <button>log in</button>
                            </div>
                        </div>
                    </div>                  
                    {/*end log in */}
                    {/*start sign up */}
                    <div className="col-lg-6">
                        <div className="row sign-up">
                            <div className="col-lg-12">
                                <h3>Sign Up</h3>
                            </div>
                            <div className="col-lg-12">
                                <input type="text" placeholder="profile name"/>
                            </div>
                            <div className="col-lg-12">
                                <input type="email" placeholder="user-name or @gmail"/>
                            </div>
                            <div className="col-lg-12">
                                <input type="password" placeholder="password"/>
                            </div>
                            <div className="col-lg-12">
                                <input type="country" placeholder="your country"/>
                            </div>
                            <div className="col-lg-12">
                                <input type="submit"/>
                            </div>
                        </div>
                    </div>
                    {/*en sign up */}
                </div>
                <span className="or">OR</span>
            </div>
        </div>
    )
    
}
export default LogIn