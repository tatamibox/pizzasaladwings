import { useRef } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';
import { v4 } from 'uuid';
import axios from 'axios';
const Upload = () => {
    const submitHandler = (e) => {

        const date = dateRef.current.value;
        const description = descriptionRef.current.value;
        const id = idRef.current.value;
        const title = titleRef.current.value;
        e.preventDefault();

        const image = imageRef.current.files[0];
        const fbImageRef = ref(storage, `products/${v4()}`);
        uploadBytes(fbImageRef, image)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref)
            })
            .then(downloadURL => {
                console.log(downloadURL)
                axios.post('https://pswserver.vercel.app/latestAlbums', {
                    imageURL: downloadURL,
                    albumTitle: title,
                    description: description,
                    date: date,
                    id: id
                })
            })
    }



    const imageRef = useRef();
    const idRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const titleRef = useRef();

    return (
        <>
            <form>
                <label for='image'>Upload Image</label>
                <input type="file" id="image" ref={imageRef}></input>
                <label for='id'>Album ID</label>
                <input type="text" id="id" ref={idRef}></input>
                <label for='title'>Title</label>
                <input type="text" id="id" ref={titleRef}></input>
                <label for='date'>Date</label>
                <input type="text" id="date" ref={dateRef}></input>
                <label for='description'>Description</label>
                <input type="text" id="description" ref={descriptionRef}></input>

                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>
        </>
    )

}

export default Upload