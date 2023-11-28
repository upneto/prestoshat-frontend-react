'use client'

import React from 'react';
import Head from 'next/head';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Política de Privacidade</title>
            </Head>
            <div className="pt-20 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
                <p className="mb-4">
                    Última atualização: 27/11/2023
                </p>
                <h2 className="text-2xl font-bold mb-2">1. Introdução</h2>
                <p className="mb-4">
                    Respeitamos a privacidade dos visitantes do nosso site e estamos comprometidos em proteger suas informações pessoais...
                </p>
                
                <h2 className="text-2xl font-bold mb-2">2. Informações Coletadas</h2>
                <p className="mb-4">
                    Explicamos aqui os tipos de informações pessoais que podemos coletar quando você usa nosso site...
                </p>
                
                <h2 className="text-2xl font-bold mb-2">3. Como Utilizamos Suas Informações</h2>
                <p className="mb-4">
                    Detalhes sobre como usamos as informações que coletamos e os fins para os quais são usadas...
                </p>
                
                <h2 className="text-2xl font-bold mb-2">4. Compartilhamento de Informações</h2>
                <p className="mb-4">
                    Informações sobre como compartilhamos suas informações com terceiros, se aplicável...
                </p>
                
                <h2 className="text-2xl font-bold mb-2">5. Seus Direitos e Escolhas</h2>
                <p className="mb-4">
                    Uma descrição dos direitos que você tem em relação às suas informações pessoais e como você pode exercê-las...
                </p>
                
                <h2 className="text-2xl font-bold mb-2">6. Alterações na Política de Privacidade</h2>
                <p className="mb-4">
                    Declaração sobre como as alterações nesta política serão comunicadas aos usuários...
                </p>
                
                <h2 className="text-2xl font-bold mb-2">7. Contato</h2>
                <p className="mb-4">
                    Informações de contato para questões relacionadas à privacidade...
                </p>
            </div>
        </>
    );
};

export default PrivacyPolicyPage;
