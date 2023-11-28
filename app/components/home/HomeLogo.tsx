'use client';

import Image from "next/image";
import { useRouter } from "next/router";

const HomeLogo = () => {

    return (
        <div>
        {/* Linha para a Primeira Imagem e Descrição */}
        <div className="flex justify-center items-center m-4">
            <div className="flex-shrink-0">
                <Image
                    className="cursor-pointer"
                    src="/images/principal.jpg"
                    height={200}
                    width={600}
                    alt="Comunidade Gamer"
                />
            </div>
            <div className="text-left ml-4">
                <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                    Nossa comunidade Gamer
                </h2>
                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                    Usuários podem compartilhar suas experiências, avaliações, participar de eventos e discutir sobre jogos.
                </p>
                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                    #GameInteratividade #comunidade #gamificação #moderno #vibrante #dinâmico #imersivo #organização #socialização #recompensas #progressão
                    </p>
            </div>
        </div>

            {/* Linha para as Outras Três Imagens e Descrições */}
            <div className="flex flex-wrap justify-center items-center">
                {/* Segunda Imagem e Descrição */}
                <div className="flex flex-col items-center m-4">
                    <Image
                        className="cursor-pointer"
                        src="/images/recompensa.jpg"
                        height={500}
                        width={500}
                        alt="Recompensas"
                    />
                    <div className="text-center mt-4">
                        <h2 className="text-slate-900 font-extrabold text-4xl tracking-tight dark:text-white">
                            Ganhe recompensas
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Usuários são recompensados com medalhas por suas participações.
                        </p>
                    </div>
                </div>

                {/* Terceira Imagem e Descrição */}
                <div className="flex flex-col items-center m-4">
                    <Image
                        className="cursor-pointer"
                        src="/images/compartilhar_experiências.jpg"
                        height={500}
                        width={500}
                        alt="Compartilhar Experiências"
                    />
                    <div className="text-center mt-4">
                        <h2 className="text-slate-900 font-extrabold text-4xl tracking-tight dark:text-white">
                            Compartilhar Experiências
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Em seus jogos suas experiências podem ser compartilhadas.
                        </p>
                    </div>
                </div>

                {/* Quarta Imagem e Descrição */}
                <div className="flex flex-col items-center m-4">
                    <Image
                        className="cursor-pointer"
                        src="/images/ccxp.jpg"
                        height={500}
                        width={560}
                        alt="Eventos da comunidade"
                    />
                    <div className="text-center mt-4">
                        <h2 className="text-slate-900 font-extrabold text-4xl tracking-tight dark:text-white">
                            Eventos da comunidade
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            CCXP - Sábado dia 3/12.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLogo;
