'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Container from '../../components/Container';

const SuportPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Processar os dados do formulário
        console.log(formData);
    };

    return (
        <>
            <Head>
                <title>Suporte</title>
            </Head>
            <div className="pt-20">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Suporte ao Cliente</h1>
                <p>Se você tem perguntas ou precisa de ajuda, fique à vontade para entrar em contato conosco.</p>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Seu Nome</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            value={formData.name}
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
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Sua Mensagem</label>
                        <textarea 
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Enviar Mensagem</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default SuportPage;
