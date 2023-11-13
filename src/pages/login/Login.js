import './Login.css';
import InputText from '../../components/form/input-text';
import Button from '../../components/form/button';
import BannerPrincipal from '../../components/banner';
import FooterPrincipal from '../../components/footer';

export const Login = () => {
    
    const submeterFormulario = (event) => {
        event.preventDefault();
    };
      
    return (        
        <section>
                                            
            <BannerPrincipal />

            <div className="login-box" >
                <form onSubmit={submeterFormulario} > 
                    <h2>Preencha os dados para autenticação</h2>                   
                    <InputText label="Usuário" placeholder="Digite o seu Usuário" required="true" maxLength="100" />
                    <InputText type="password" label="Senha" placeholder="Digite a sua Senha" required="true" maxLength="50" />
                    <Button>Entrar</Button>
                </form>
            </div>

            <FooterPrincipal />
        </section>        
    );
}