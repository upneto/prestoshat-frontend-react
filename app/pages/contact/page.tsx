'use client'
import React, { useState } from 'react';
import Head from 'next/head';

const ContatoPage: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui implementar o envio do formulário, como uma requisição a uma API
        console.log(formData);
    };

    return (
        <>
            <Head>
                <title>Contato</title>
            </Head>
            <div className="pt-20 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <label htmlFor="nome" className="block mb-2 text-sm font-medium">Seu Nome</label>
                        <input 
                            type="text" 
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Seu Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mensagem" className="block mb-2 text-sm font-medium">Sua Mensagem</label>
                        <textarea 
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Enviar Mensagem</button>
                </form>
            </div>
        </>
    );
};

export default ContatoPage;
