'use client'
import React from 'react';
import Head from 'next/head';

const ComunidadePage: React.FC = () => {
    // Exemplo de dados - chamar back-end
    const posts = [
        { id: 1, title: 'Como começar em desenvolvimento web?', author: 'João', content: 'Alguém tem dicas para quem está começando em desenvolvimento web?' },
        { id: 2, title: 'Dicas de jogos para o fim de semana', author: 'Maria', content: 'Quais jogos vocês recomendam para jogar no fim de semana?' },
        // ... mais posts
    ];

    return (
        <>
            <Head>
                <title>Comunidade</title>
            </Head>
            <div className="pt-20 container mx-auto px-4 ">
                <h1 className="text-3xl font-bold mb-4">Comunidade</h1>
                <div className="mt-6">
                    {posts.map(post => (
                        <div key={post.id} className="mb-4 p-4 border border-gray-300 rounded-md">
                            <h2 className="text-2xl font-bold">{post.title}</h2>
                            <p className="text-sm text-gray-500">Postado por: {post.author}</p>
                            <p className="mt-2">{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ComunidadePage;
