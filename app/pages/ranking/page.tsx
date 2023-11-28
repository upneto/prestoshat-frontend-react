// pages/ranking.tsx
import React from 'react';
import Head from 'next/head';
import { CiMedal } from "react-icons/ci";
import { FaMedal } from 'react-icons/fa';
import { GiStarMedal } from "react-icons/gi";

const RankingPage: React.FC = () => {
    const usuarios = [
        { id: 1, nome: 'João', pontos: 1200 },
        { id: 2, nome: 'Ana', pontos: 1150 },
        { id: 3, nome: 'Carlos', pontos: 1100 },
        // ... mais usuários
    ];

    const getMedalIcon = (index: number) => {
        switch (index) {
            case 0: // Primeira posição
                return [<CiMedal className="text-gold-500 mr-2" />, <FaMedal className="text-gold-500" />];
            case 1: // Segunda posição
                return [<CiMedal className="text-silver-500" />, <GiStarMedal  className="text-silver-500" />];
            case 2: // Terceira posição
                return <CiMedal className="text-bronze-500" />;
            default:
                return null; // Sem medalha para outros
        }
    };

    return (
        <>
            <Head>
                <title>Ranking</title>
            </Head>
            <div className="pt-20 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Ranking da Comunidade</h1>
                <table className="w-full mt-6 border-collapse">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="border border-gray-600 p-2">Posição</th>
                            <th className="border border-gray-600 p-2">Nome</th>
                            <th className="border border-gray-600 p-2">Pontos</th>
                            <th className="border border-gray-600 p-2">Medalhas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, index) => (
                            <tr key={usuario.id} className="border border-gray-300">
                                <td className="p-2 text-center">{index + 1}</td>
                                <td className="p-2">{usuario.nome}</td>
                                <td className="p-2 text-center">{usuario.pontos}</td>
                                <td className="p-2 text-center flex justify-center">
                                    {getMedalIcon(index)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RankingPage;
