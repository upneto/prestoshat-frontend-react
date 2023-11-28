'use client';

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Links Rápidos</h3>
              <ul>
                <li><a href="/" className="hover:underline">Início</a></li>
                <li><a href="/pages/about" className="hover:underline">Sobre nós</a></li>
                <li><a href="/pages/suport" className="hover:underline">Suporte</a></li>
                <li><a href="/pages/terms" className="hover:underline">Termos de Uso</a></li>
                <li><a href="/pages/privacy" className="hover:underline">Política de Privacidade</a></li>
                <li><a href="/pages/contact" className="hover:underline">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Contato & Redes Sociais</h3>
              <p>Email: exemplo@email.com</p>
              <p>Telefone: (11) 1234-5678</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://facebook.com/seuperfil" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-white text-2xl" />
                </a>
                <a href="https://twitter.com/seuperfil" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white text-2xl" />
                </a>
                <a href="https://linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-white text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
