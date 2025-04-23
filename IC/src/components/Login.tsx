import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Iniciando sesión con:', { email, password, rememberMe });
    // Redirigir después del login (simulado)
    // navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <h1>Bienvenida®</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Institucional</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">He leído y acepto la Política de Privacidad</label>
        </div>
        
        <button type="submit" className="auth-button">Iniciar Sesión</button>
      </form>
      
      <div className="auth-footer">
        <p>No tienes cuenta? <Link to="/register" className="auth-link">Crear cuenta</Link></p>
      </div>
    </div>
  );
};

export default Login;