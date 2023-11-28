'use client'

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 pt-20">

      <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Quem Somos</h2>
        <p className="text-lg">
        Somos uma comunidade online onde os usuários podem compartilhar suas experiências, avaliações e discutir sobre jogos. Utilizar avatares em conversas ou trocando opiniões sobre jogos, com um sistema de recompensas.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Nossa Equipe</h2>
        <p className="text-lg">
          Nossa equipe é composta por profissionais apaixonados por programação e comunidade Gamer. Estamos constantemente buscando novas formas de tornar a comunidade gamer mais interativo e envolvente.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Missão e Visão</h2>
        <p className="text-lg">
          <strong>Missão:</strong> Democratizar e ouvir a comunidade gamer do Brasil.
        </p>
        <p className="mt-4 text-lg">
          <strong>Visão:</strong> Ser reconhecido como a principal plataforma de comunidade gamer do Brasil.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
