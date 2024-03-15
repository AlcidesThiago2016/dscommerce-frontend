import "./styles.css";
import { useContext, useState } from "react";
import { CredentialsDTO } from "../../../models/auth";
import * as authService from "../../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../../utils/context-token";

export default function Login() {

  const { setContextTokenPayload } = useContext(ContextToken);

  const navigate = useNavigate();

  const [formData, setFormData] = useState<CredentialsDTO>({
    username: "",
    password: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: any) {
    event.preventDefault();
    authService.loginRequest(formData)
    .then(response => {
      authService.saveAccessToken(response.data.access_token);
      setContextTokenPayload(authService.getAccessTokenPayload());
      navigate("/cart");
    })
    .catch(error => {
      console.log("Erro no login", error)
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange(event: any){
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value})
  }

  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input
                  name="username"
                  value={formData.username}
                  className="dsc-form-control"
                  type="text"
                  placeholder="Email"
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error"></div>
              </div>
              <div>
                <input
                  name="password"
                  value={formData.password}
                  type="password"
                  className="dsc-form-control"
                  placeholder="Senha"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="dsc-login-form-buttons dsc-mt20">
              <button type="submit" className="dsc-btn dsc-btn-blue">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
