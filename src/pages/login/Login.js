import './Login.css';

import InputText from '../../components/form/input-text';
import Button from '../../components/form/button';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterPrincipal from '../../components/footer';

export const Login = () => {
    
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Usuario: ' + usuario);
        console.log('Senha: ' + senha);

        navigate('/home');
    };
          
    return (
        <section>

            <div className='body' >
                <div className="login-box" >
                    <form onSubmit={handleSubmit} > 
                        <h2>Preencha os dados para autenticação</h2>                   
                        <InputText name="usuario" label="Usuário" placeholder="Digite o seu Usuário" required="true" maxLength="100"
                            onChange={usuario => setUsuario(usuario)} />
                        <InputText name="senha" type="password" label="Senha" placeholder="Digite a sua Senha" required="true" maxLength="50" 
                            onChange={senha => setSenha(senha)} />
                        <Button>Entrar</Button>
                    </form>
                </div>
            </div>
            
            <FooterPrincipal />

        </section>        
    );
};

export default Login;