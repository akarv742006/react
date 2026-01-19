import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieSection.css';

function MoviePlayer() {
    const { id } = useParams();

    // FINAL UPDATED PLAYLIST (Think Music & Divo)
    // s7 replaced with Kadhale Kadhale (Think Music).
    const songData = {
        's1': { title: 'Rowdy Baby - Maari 2', url: 'https://www.youtube.com/embed/x6Q7c9RyMzk' },
        's2': { title: 'Ennadi Maayavi - Vada Chennai', url: 'https://www.youtube.com/embed/s20GxxYUhfA' },
        's3': { title: 'Thangamey - Naanum Rowdy Dhaan', url: 'https://www.youtube.com/embed/4bZ-MAOLbGc' },
        's4': { title: 'Vaanam Paarthen - Pa Paandi', url: 'https://www.youtube.com/embed/oYDOJIRw5lY' },

        // REPLACEMENTS
        's5': { title: 'Enjoy Enjaami - Independent', url: 'https://www.youtube.com/embed/eYq7WapuDLU' }, // Verified
        's6': { title: 'Adiye - Bachelor', url: 'https://www.youtube.com/embed/2NrpwkyoTrI' }, // Verified
        's7': { title: 'Kadhale Kadhale - 96', url: 'https://www.youtube.com/embed/lkPI-45gxBw' }, // Verified (Think Music / Lyrics Video - often safer)
        's8': { title: 'Bodhai Kaname - Oh Manapenne', url: 'https://www.youtube.com/embed/mfw2sMi6lrw' },  // Verified
        's9': { title: 'Kandaangi Kandaangi - Jilla', url: 'https://www.youtube.com/embed/JmU1aE_Rk2o' }
    };

    const song = songData[id] || { title: 'Unknown', url: '' };

    if (!song.url) {
        return <div className="movieSection"><h2>Song not found</h2><Link to="/movies">Back</Link></div>;
    }

    return (
        <div className="movieSection" style={{ textAlign: 'center' }}>
            <div style={{ padding: '10px', textAlign: 'left' }}>
                <Link to="/movies" style={{ textDecoration: 'none', color: '#111', fontWeight: 'bold' }}>&larr; Back to Playlist</Link>
            </div>
            <h1 className="movieSection__title">{song.title}</h1>
            <div style={{ maxWidth: '900px', margin: '0 auto', background: '#000', padding: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}>
                <iframe
                    width="100%"
                    height="500"
                    src={song.url}
                    title={song.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default MoviePlayer;
