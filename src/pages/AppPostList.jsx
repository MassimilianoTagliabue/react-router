import { useEffect, useState } from 'react'
import axios from "axios"
import AppCard from '../components/AppCard';
import { Link } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;


function AppPostList() {
 
  const [post, setPost] = useState([])//array di post
  

  useEffect(() => {
    
    getPost();

    
  }, []);


  const getPost = () => {

    axios.get(`${apiUrl}/posts`).then((resp) => {
      

      setPost(resp.data.data)
      console.log(resp.data.data);
      
      

    });
  };


  


  

  // funzione che elimina gli elementi
  const handleDelete = (id) => {

    console.log("delete", id);
    axios.delete(`${apiUrl}/posts/${id}`).then((resp) => {
      console.log(resp);
      const newBlog = post.filter((curPost) => curPost.id != id)
      setPost(newBlog);
    })

  };





  return (
    <>
      <div className='container'>
        
        <Link className='btn btn-primary my-4' to={`/postList/Create`}>Aggiungi un nuovo post</Link>

        {/* sezione lista */}
        <section>
          <h2>lista</h2>
          {/* creo la lista con gli elementi inseriti */}

          {post.length > 0 ? (
            <div className='d-flex row-gap-4 column-gap-3 flex-wrap'>
              {post.map((curpost) =>

                <div key={curpost.id} className='ms-col '>
                  <AppCard
                  post={curpost}
                  onCancel={() => handleDelete(curpost.id)}
                  />
                </div>

              )}
            </div>
          ) : (
            <p>nessun post presente</p>
          )
          }
        </section>




      </div>
    </>
  )
}

export default AppPostList;