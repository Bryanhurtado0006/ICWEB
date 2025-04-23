import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register: React.FC = () => {
  const [schoolName, setSchoolName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [document, setDocument] = useState<File | null>(null);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || !email.match(/\.(edu|gov|ac)\.[a-z]{2,}$/i)) {
      alert('Por favor ingresa un correo institucional válido');
      return;
    }
    
    console.log('Registrando:', { 
      schoolName, 
      email, 
      password, 
      document: document ? document.name : 'No subido',
      termsAccepted 
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDocument(e.target.files[0]);
    }
  };

  return (
    <div className="contenedor-registro">
      <h1>Crear cuenta</h1>
      <p className="instrucciones">Por favor completa los campos</p>
      
      <form onSubmit={handleSubmit} className="formulario-registro">
        <div className="grupo-campo">
          <label htmlFor="schoolName">Nombre del Colegio</label>
          <input
            type="text"
            id="schoolName"
            value={schoolName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSchoolName(e.target.value)}
            className="campo-formulario"
            required
          />
        </div>
        
        <div className="grupo-campo">
          <label htmlFor="email">Correo Institucional</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="campo-formulario"
            placeholder="usuario@dominio.edu"
            required
          />
          <small className="texto-ayuda">Formato de correo válido + dominio educativo (edu, gov, etc.)</small>
        </div>
        
        <div className="grupo-campo">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="campo-formulario"
            required
          />
        </div>
        
        <div className="grupo-campo">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            className="campo-formulario"
            required
          />
        </div>
        
        <div className="grupo-archivo">
          <label htmlFor="document">Documento de Identidad del Administrador</label>
          <input
            type="file"
            id="document"
            onChange={handleFileChange}
            className="campo-archivo"
            accept=".pdf,.doc,.docx"
            required
          />
          <small className="texto-ayuda">Ejemplo: Cargar PDF/RUT del colegio o identificación del rector.</small>
        </div>
        
        <div className="grupo-acepto">
          <input
            type="checkbox"
            id="termsAccepted"
            checked={termsAccepted}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTermsAccepted(e.target.checked)}
            className="casilla-verificacion"
            required
          />
          <label htmlFor="termsAccepted">He leído y acepto la Política de Privacidad</label>
        </div>
        
        <button type="submit" className="boton-registro">Registrarse</button>
      </form>
      
      <div className="pie-registro">
        <p>Tienes cuenta? <Link to="/login" className="enlace-login">Iniciar Sesión</Link></p>
      </div>
    </div>
  );
};

export default Register;