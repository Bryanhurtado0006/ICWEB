import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Iniciando sesión con:', { email, password, rememberMe });
    
  };

  return (
    <div className="contenedor-login">
      <h1>Bienvenida®</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="grupo-input">
          <label htmlFor="email">Correo Institucional</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            className="campo"
          />
        </div>
        
        <div className="grupo-input">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
            className="campo"
          />
        </div>
        
        <div className="opcion-recordar">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
            className="casilla"
          />
          <label htmlFor="rememberMe">He leído y acepto la Política de Privacidad</label>
        </div>
        
        <button type="submit" className="boton-login">Iniciar Sesión</button>
      </form>
      
      <div className="pie-formulario">
        <p>No tienes cuenta? <Link to="/register" className="enlace-registro">Crear cuenta</Link></p>
      </div>
    </div>
  );
};

export default Login;