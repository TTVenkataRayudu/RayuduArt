import 'bootstrap/dist/css/bootstrap.min.css';

export const RegistrationPage = () => {
    return (
        <div>
            <form>
                <span>Register</span>
                <div className="form-control mt-3">
                    <label>FullName</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="form-control mt-3">
                    <label>EmailAdress</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-control mt-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter Password"
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="text-center mt-2">
                    <a>ForgotPassword</a>
                </p>
            </form>
        </div>
    )
}