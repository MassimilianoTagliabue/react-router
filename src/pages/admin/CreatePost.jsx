import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const initialPost = {
    id: Date.now,
    titolo: "",
    contenuto: "",
    immagine: "",
}

function CreatePost() {
    const [formPost, setFormPost] = useState(initialPost) //post singolo

    const navigate = useNavigate();


    //funzione che parte ogni volta che inseriamo
    const handleInputChange = (event) => {

        const keytochange = event.target.name;        //prende il nome dell'input   
        let newValue = event.target.value   //prende il contenuto dell'input

        const newPost = {
            ...formPost,
            [keytochange]: newValue      //assegno un nuovo valore all'input vuoto 
        };

        //aggiorno il post
        setFormPost(newPost);
    }

    //funzione che parte quando viene premuto il tasto submit
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${apiUrl}/posts`, formPost).then((resp) => {

            console.log(resp);
            const newPost = resp.data;

            //creo l'oggetto del nuovo post
            const newBlog = [
                ...post,
                newPost,

            ];

            //aggiorno il post, aggiungendo il nuovo post
            setPost(newBlog);

            //ripulisco i campi
            setFormPost(initialPost);
        })
    }

    return (
        <div className="container">
            {/* sezione inserimento */}

        <button className="btn btn-primary mt-4" onClick={() =>{navigate (-1)}}>Indietro</button>
            
        <form action="" onSubmit={handleSubmit}>
          <h1 className='text-center mt-3'>Blog form</h1>

          {/* creo input per il titolo */}
          <div className="input-group mt-5 ">
            <span className="input-group-text" htmlFor="titolo">titolo</span>
            <input
              value={formPost.titolo}
              onChange={handleInputChange}
              name="titolo"
              type="text"
              className="form-control"
              id='titolo' />
          </div>

          {/* creo input per la descrizione */}
          <div className="input-group mt-3 ">
            <span className="input-group-text" htmlFor="contenuto">descrizione</span>
            <input
              value={formPost.contenuto}
              onChange={handleInputChange}
              name="contenuto"
              type="text"
              className="form-control"
              id='contenuto' />
          </div>

          {/* creo input per l'immagine' */}
          <div className="input-group mt-3 ">
            <span className="input-group-text" htmlFor="immagine">immagine</span>
            <input
              value={formPost.immagine}
              onChange={handleInputChange}
              name="immagine"
              type="text"
              className="form-control"
              id='immagine' />
          </div>



          <button type='submit' className='btn btn-primary mt-5'>invia</button>
        </form>
        </div>
    )

}

export default CreatePost