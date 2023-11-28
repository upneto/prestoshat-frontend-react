'use client'
import React from 'react';
import Head from 'next/head';
import Container from '../../components/Container';

const TermsOfServicePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Termos de Uso</title>
            </Head>
            <Container>
            <div className="pt-25 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
                <p className="mb-4">
                    Última atualização: 27/11/2023
                </p>
                <h2 className="text-2xl font-bold mb-2">1. Introdução</h2>
                <p className="mb-4">
                    Bem-vindo ao site Gamer. Ao acessar nosso site e utilizar nossos serviços, você concorda em estar vinculado aos seguintes termos e condições...
                </p>
                <h2 className="text-2xl font-bold mb-2">2. Uso Permitido</h2>
                <p className="mb-4">
                    Você concorda em usar nosso site apenas para fins legais e de maneira que não infrinja os direitos de, restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro...
                </p>
            </div>
            </Container>
        </>
    );
};

export default TermsOfServicePage;
