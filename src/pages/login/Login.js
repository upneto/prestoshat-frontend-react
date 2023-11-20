import './Login.css';
import InputText from '../../components/form/input-text';
import Button from '../../components/form/button';
import BannerPrincipal from '../../components/banner';
import { useState } from 'react';

export const Login = () => {
       
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Usuario: ' + usuario);
        console.log('Senha: ' + senha);
    };
          
    return (        
        <section>
                                            
            <BannerPrincipal />

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

        </section>        
    );
}