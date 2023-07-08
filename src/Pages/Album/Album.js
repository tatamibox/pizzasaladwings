import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Album.module.css';
const Album = () => {
    const { id } = useParams()
    const [currentProduct, setCurrentProduct] = useState('')
    useEffect(() => {
        axios.post('https://pswserver.vercel.app/getAlbum', { id: id })
            .then((res) => {
                setCurrentProduct(res.data)
            })
    }, [])

    console.log(currentProduct)
    return (<div className={styles.background}>
        <div className={styles.item_section}>
            <h1 className={styles.albumTitle}>{currentProduct.albumTitle}</h1>
            <h2 className={styles.albumDate}>{currentProduct.date}</h2>

            <img src={currentProduct.imageURL}></img>
            <div className={styles.description}>{currentProduct.description}</div>
            <a href="https://pizzasaladwings.com"><button className={styles.backButton}>Back</button></a>
        </div>

    </div>)
}

export default Album;