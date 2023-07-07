import Navbar from "../Components/Navbar/Navbar";
import styles from './Home.module.css'
import axios from "axios";
import aos from "aos";
import 'aos/dist/aos'
import React, { useState, useEffect } from 'react';
const Home = () => {

    aos.init();

    const [albumCounter, setAlbumCounter] = useState(9)
    const [latestAlbums, setLatestAlbums] = useState([])
    useEffect(() => {



        axios.post('pswserver.vercel.app/latestAlbums', { albumCounter: albumCounter })
            .then(res => {
                console.log(res.data)
                setLatestAlbums(res.data)
            })
    })

    return (
        <>
            <Navbar />
            <div className={styles.spotify}>
                <iframe

                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/59L55JXhsrnPJ54NFHrwlU?utm_source=generator&theme=0"
                    width="400px"
                    height="152"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>


            <section className={styles.latestPosts} >
                <h2 className={styles.latestHeader}>LATEST POSTS.</h2>
                <div className={styles.albums__section}>
                    {latestAlbums.map((product, i) => (
                        (<div data-aos="fade-in" className={styles.albumIndi}><a className={styles.album__links} key={i} href={`/product/${product.id}`}><img className={styles.albumImage} src={product.imageURL} alt="album preview"></img></a>
                            <div className={styles.albumMain}><h3>{product.albumTitle} </h3><h4 className={styles.albumDate}>{product.date}</h4></div></div>)

                    ))}
                </div>
            </section>
        </>
    )
}

export default Home