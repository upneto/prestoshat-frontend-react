'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeLogo = () => {
    const router = useRouter();

    return (
        <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
                <Image
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                    src="/images/principal.jpg"
                    height="500"
                    width="500"
                    alt="Logo"
                />
            </div>
            <div className="flex-grow"> {/* Componente de "Breve Descrição" */}
                <div className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                    Nossa comunidade Gamer
                </div>
                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                Usuários podem compartilhar suas experiências, avaliações, participar de eventos e discutir sobre jogos. Cadastre-se e participe para ganhar recompensas. 
                </p>
                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                    #GameInteratividade #comunidade #gamificação #moderno #vibrante #dinâmico #imersivo #organização #socialização #recompensas #progressão
                </p>
            </div>
        </div>
    );
}

export default HomeLogo;
