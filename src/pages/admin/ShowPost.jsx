import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

function ShowPost() {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);


        axios
            .get(`${apiUrl}/posts/${id}`).then((resp) => {
                setPost(resp.data);

            })
            .catch((err) => {
                // if (err.status === 404) {
                //     navigate("/not-found");
                //   }
            })
            .finally(() => {
                setLoading(false);
            })

    }, [id])


    return (
        <div className="container">
            <div>
                <a className="btn btn-primary my-4" onClick={() => navigate(-1)}>
                    Ritorna
                </a>
            </div>
            {post && (
                <div className="ms-details">
                    <h2 className="text-center">{post.titolo}</h2>
                    <img className="w-30 " src={`${post.immagine}`} alt="" />

                    <div className="mt-4 d-flex justify-content-around">
                        <Link className="btn btn-primary" to={`/postList/${post.id - 1}`}>
                            Precedente
                        </Link>
                        <Link className="btn btn-primary" to={`/postList/${post.id + 1}`}>
                            Successiva
                        </Link>
                    </div>
                </div>

            )}
            {loading && <p>Loading...</p>}
        </div>
    )
}

export default ShowPost;