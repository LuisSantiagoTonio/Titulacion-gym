import { useState } from 'react';

const VIDEOS_GIMNASIO = [
    {
        id: 1,
        titulo: 'Técnica de Press con Mancuernas',
        descripcion: 'Aprende a realizar el press con mancuernas de forma correcta para evitar lesiones y maximizar el estímulo en el pecho.',
        categoria: 'Pecho',
        video_url: 'https://youtube.com/shorts/ipe_6NAHQ48?si=jsGSAgpzg2vDsvZG',
        thumbnail_url: 'https://i.ytimg.com/vi/Yd4zeOxVewY/hq720.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLBGRXLD9geBxBep3875i4Yx9BRohw'
    },
    {
        id: 2,
        titulo: 'Guía Completa de Press de Banca',
        descripcion: 'Consejos clave sobre el arco lumbar, la retracción escapular y el leg drive para mejorar tu fuerza en press banca.',
        categoria: 'Fuerza',
        video_url: 'https://youtube.com/shorts/q0HcJoQacLw?si=smj7LeOuvSCdtlGV',
        thumbnail_url: 'https://i.ytimg.com/vi/hloBc-HUpmw/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4AbYIgAK4CIoCDAgAEAEYRCBTKGUwDw==&rs=AOn4CLDkITzZUsPvRpTkpDarg-nHH-o8gQ'
    },
    {
        id: 3,
        titulo: 'Rutina Intensa de Pierna',
        descripcion: 'Entrenamiento completo enfocado en cuádriceps, femorales y glúteos para un desarrollo simétrico.',
        categoria: 'Pierna',
        video_url: 'https://youtu.be/xCBAOVNfb8M?si=sP-PLMf4MGtx80hy',
        thumbnail_url: 'https://i.ytimg.com/vi/CA4tUbVu_qY/maxresdefault.jpg'
    }
];

export default function Videos() {
    const [activeVideo, setActiveVideo] = useState(null);

    const getEmbedUrl = (url) => {
        if (!url) return '';

        // Si ya es un enlace embed, lo devolvemos tal cual
        if (url.includes('/embed/')) return url;

        let videoId = '';

        // Manejar enlaces de Shorts (ej: https://youtube.com/shorts/ipe_6NAHQ48)
        if (url.includes('/shorts/')) {
            videoId = url.split('/shorts/')[1].split('?')[0];
        }
        // Manejar enlaces normales (ej: https://www.youtube.com/watch?v=dQw4w9WgXcQ)
        else if (url.includes('watch?v=')) {
            videoId = url.split('watch?v=')[1].split('&')[0];
        }
        // Manejar enlaces cortos (ej: https://youtu.be/dQw4w9WgXcQ)
        else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        }

        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }

        return url; // Si no coincide con nada, devuelve la URL original
    };

    return (
        <section id="videos-section" className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-iron-800 pb-6">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">
                        Contenido Multimedia
                    </p>
                    <h2 className="font-display text-4xl font-semibold uppercase tracking-wide text-chalk">
                        Videos de Entrenamiento
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {VIDEOS_GIMNASIO.map((v) => (
                    <article
                        key={v.id}
                        className="overflow-hidden rounded-2xl border border-iron-700 bg-iron-900 hover:border-ember-500/50 hover:shadow-xl hover:shadow-ember-500/5 transition-all duration-300"
                    >
                        <div className="relative w-full aspect-video bg-iron-800">
                            <iframe
                                className="w-full h-full"
                                src={getEmbedUrl(v.video_url)}
                                title={v.titulo}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="p-5">
                            <p className="font-mono text-[10px] uppercase tracking-wider text-ember-500 font-semibold">
                                {v.categoria}
                            </p>
                            <h3 className="mt-1.5 font-display text-xl font-medium text-chalk">{v.titulo}</h3>
                            <p className="mt-2.5 font-body text-sm text-slate2 line-clamp-3 leading-relaxed">{v.descripcion}</p>
                        </div>
                    </article>
                ))}
            </div>

            {/* Modal para el video */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={() => setActiveVideo(null)}
                >
                    <div
                        className="relative w-full max-w-4xl aspect-video bg-iron-950 rounded-xl overflow-hidden border border-iron-800 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-ember-500 transition-colors"
                            onClick={() => setActiveVideo(null)}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <iframe
                            className="w-full h-full"
                            src={getEmbedUrl(activeVideo.video_url)}
                            title={activeVideo.titulo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
