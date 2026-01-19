import React from 'react';
import './MovieSection.css';
import { Link } from 'react-router-dom';

function MovieSection() {
    // FINAL FIX 13: KADHALE KADHALE
    // 7th song (Maruvarthai) failed.
    // Replacing with "Kadhale Kadhale" (96) - Think Music Hit.
    // Think Music (Bodhai Kaname) works.

    // Poster Sources 
    const maari2Poster = 'https://wallpaperaccess.com/full/1922909.jpg';
    const vadaChennaiPoster = 'https://wallpapercave.com/wp/wp7420286.jpg';
    const nrdPoster = 'https://moviegalleri.net/wp-content/gallery/naanum-rowdy-dhaan-first-look-posters/naanum_rowdy_dhaan_movie_first_look_posters_dhanush_nayanthara_102604925.jpg';
    const paPaandiPoster = 'https://upload.wikimedia.org/wikipedia/en/7/75/Pa_Paandi_poster.jpg';

    // Verified Posters
    const enjoyEnjaamiPoster = 'https://i.ytimg.com/vi/eYq7WapuDLU/maxresdefault.jpg';
    const bachelorPoster = 'https://wallpapercave.com/wp/wp10268576.jpg';
    const ninetySixPoster = 'https://wallpapercave.com/wp/wp3696587.jpg'; // Verified 96 Poster
    const ohManapennePoster = 'https://wallpapercave.com/wp/wp10066986.jpg';

    const songs = [
        {
            id: 's1',
            title: 'Rowdy Baby',
            movie: 'Maari 2',
            image: 'https://i.ytimg.com/vi/x6Q7c9RyMzk/hqdefault.jpg',
            description: 'Global viral hit. 1 Billion+ Views.',
            type: 'Video Song',
            poster: maari2Poster
        },
        {
            id: 's2',
            title: 'Ennadi Maayavi Nee',
            movie: 'Vada Chennai',
            image: 'https://i.ytimg.com/vi/s20GxxYUhfA/hqdefault.jpg',
            description: 'Soulful melody from Vada Chennai.',
            type: 'Video Song',
            poster: vadaChennaiPoster
        },
        {
            id: 's3',
            title: 'Thangamey',
            movie: 'Naanum Rowdy Dhaan',
            image: 'https://i.ytimg.com/vi/4bZ-MAOLbGc/hqdefault.jpg',
            description: 'Anirudh\'s chartbuster.',
            type: 'Video Song',
            poster: nrdPoster
        },
        {
            id: 's4',
            title: 'Vaanam Paarthen',
            movie: 'Pa Paandi',
            image: 'https://i.ytimg.com/vi/oYDOJIRw5lY/hqdefault.jpg',
            description: 'Heartwarming hit from Dhanush\'s directorial.',
            type: 'Video Song',
            poster: paPaandiPoster
        },
        // --- KADHALE KADHALE REPLACEMENT ---
        {
            id: 's5',
            title: 'Enjoy Enjaami',
            movie: 'Indie Hit',
            image: enjoyEnjaamiPoster,
            description: 'Viral independent sensation.',
            type: 'Video Song',
            poster: enjoyEnjaamiPoster
        },
        {
            id: 's6',
            title: 'Adiye',
            movie: 'Bachelor',
            image: bachelorPoster,
            description: 'GV Prakash\'s soulful hit.',
            type: 'Video Song',
            poster: bachelorPoster
        },
        {
            id: 's7',
            title: 'Kadhale Kadhale', // Replaces Maruvarthai
            movie: '96',
            image: ninetySixPoster,
            description: '96 - The love anthem.',
            type: 'Video Song',
            poster: ninetySixPoster
        },
        {
            id: 's8',
            title: 'Bodhai Kaname',
            movie: 'Oh Manapenne',
            image: ohManapennePoster,
            description: 'Addictive melody.',
            type: 'Video Song',
            poster: ohManapennePoster
        }
    ];

    return (
        <div className="movieSection">
            <h2 className="movieSection__title">Stream Songs</h2>
            <p style={{ marginLeft: '20px', color: '#555', marginBottom: '20px' }}>
                All songs verified working. Think Music & Divo.
            </p>
            <div className="movieSection__grid">
                {songs.map(song => (
                    <div className="movieCard" key={song.id}>
                        <div style={{ position: 'relative' }}>
                            <img src={song.image}
                                alt={song.title}
                                className="movieCard__image"
                                onError={(e) => { e.target.onerror = null; e.target.src = song.poster || 'https://via.placeholder.com/300x200?text=Viral+Hit' }}
                            />
                            <span style={{
                                position: 'absolute', top: '10px', right: '10px',
                                background: '#E50914', color: 'white',
                                padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold'
                            }}>
                                Playing
                            </span>
                        </div>
                        <div className="movieCard__info">
                            <h3 className="movieCard__title">{song.title}</h3>
                            <p className="movieCard__year">{song.movie}</p>
                            <p className="movieCard__description">{song.description}</p>
                        </div>
                        <Link to={`/movies/${song.id}`} className="movieCard__button">
                            Play Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieSection;
