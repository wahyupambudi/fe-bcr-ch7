import { useNavigate } from "react-router-dom";
import car from "../../assets/images/main/carAdmin.png";
import logo from "../../assets/images/main/logo.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const LoginUser: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { authState, login } = useAuth();
  

  useEffect(() => {
    if(authState.isAuthenticated) {
      navigate("/admin/dashboard")
    }
  }, [authState.isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error state before login attempt
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorMessage: any = await login(email, password);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      navigate("/admin/dashboard");
    }
  };
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-sm-7 px-0 d-none d-sm-block"
              style={{ backgroundColor: "#a85cff" }}
            >
              <img
                src={car}
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </div>
            <div className="col-sm-5 text-black">
              <div className="px-5 ms-xl-4">
                <img src={logo} alt="" className="me-3 pt-5 mt-xl-4" />
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form onSubmit={handleLogin} style={{ width: "23rem" }}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Welcome, User BCR
                  </h3>
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-md w-100"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LoginUser;
