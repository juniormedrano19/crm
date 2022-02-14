import React, { useState } from 'react';
import google from '../../styles/img/google.svg';
import microsoft from '../../styles/img/microsoft.svg';
import { Icon } from '@iconify/react';


export const LoginScreen = () => {
    const[inputtext,setinputtext]=useState({
        email:"",
        password:""
        });
        
     
        
        const[eye,seteye]=useState(true);
        const[password,setpassword]=useState("password");
        const[type,settype]=useState(false);
        
        
        
        const Eye=()=>{
            if(password=="password"){
            setpassword("text");
            seteye(false);
            settype(true);
            }
            else{
            setpassword("password");
            seteye(true);
            settype(false);
            }
            }
        
   
    return (
        
        /* FORMULARIO BASE */

        <div className="auth__main">
     


        {/* FORMULARIO DE INGRESO DE SESIÓN */}

        <div className="auth__box-secondary">
            <div className="auth__box-container">
        <form >
       {/* Título de Inicio de Sesión */}
        <h3 className="auth__title-login">Iniciar Sesión </h3>

        {/* Botones de Google y Microsoft */}
        
        <div className="auth__social-media">
            {/* GOOGLE */}
            <div className="auth__buttons">
                <div  className="auth__logo">
                <img src={google} className="auth__google-svg" alt="" />
                </div>
                <div className="auth__botonFont">
                    <div className="auth__font">
                    Continuar con Google
                    </div>
                   
                </div>
            </div>
            {/* MICROSOFT */}
            <div className="auth__buttons">
                <div className="auth__logo">
                <img src={microsoft} className="auth__microsoft-svg" alt="" />
                </div>
                <div className="auth__botonFont">
                    <div className="auth__font">
                    Continuar con M365/Microsoft
                    </div>
                   
                </div>
            </div>
        </div>


        {/* Línea divisoria */}
        <div className="auth_centerLine">
            <div className="auth__line"></div>
            <div className="auth__fontCenter">O</div>
            <div className="auth__line"></div>
        </div>


        {/* Iniciar sesión usando correo electrónico */}
        <div className="auth__subtitleCenter">
            <div className="auth__subtitleFont">
            Iniciar sesión usando correo electrónico
            </div>
        </div>

        {/* INPUTS DE EMAIL Y CONTRASEÑA */}
        <div>
        <div className="auth__label">
            <div className="auth__labelEmail">
            Email o Usuario *
            </div>
        </div>
               
                  
               <input
                className="auth__input"
                type="text"
                placeholder="Escribe tu email o usuario"
                autoComplete="off"
                name="email"
                
                />
        </div>
     

            <div className="input__text">
            
            <div className="auth__label">
            <div className="auth__labelEmail">
            Password *
            </div>
        </div>
               
                  
               {/* <input
                className="auth__input"
                type="password"
                placeholder="Escribe tu contraseña"
                autoComplete="off"
                name="password"
                id="password"
                
                />
                <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                <Icon onClick={Eye} className="auth__eye" icon={`${eye ? "fluent:eye-off-24-filled" : "fluent:eye-24-filled" }`} /> */}
                <div className="auth__inputPass1">
                         <span className="icon"> <Icon onClick={Eye} className="auth__eye" icon={`${eye ? "fluent:eye-off-24-filled" : "fluent:eye-24-filled" }`} /></span>
                      <input
                className="auth__input1"
                type="password"
                placeholder="Escribe tu contraseña"
                autoComplete="off"
                name="password"
                id="password"
                
                />
                    </div>
            </div>


                <div className="input-field ">
              
                </div>
            
            {/* Olvidaste tu contraseña */}
            <div className="auth__forgetPass">
                <div className="auth__forgetFont">¿Haz olvidado tu contraseña?</div>
            </div>
           

            <button
             type="submit" 
            className="auth__login-button"
            /* className="btn btn-primary btn-block" */
           
            >
            Ingresar
        </button>
        
                
        </form>
        </div>
        </div>
        

        <span className="auth__footer">
            <div className="auth__footerFont">© 2022 Todos los Derechos Reservados.</div>
        </span>







        </div>
    )
}
