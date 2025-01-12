import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const AppCard = ({ post, onCancel }) => {





    return (
        <div className="card">
            <img src={`${post.immagine}`} alt="" />
            <div className="card-body">
                <h4>{post.titolo}</h4>
                <div>{post.tags && post.tags.map((curTags, index) =>
                    <span key={index} className="mx-2">{curTags}</span>
                )}</div>
            </div>
            <div className="d-flex justify-content-around mb-2">
                <button onClick={onCancel} className="btn btn-danger ">cancella</button>
                <Link className="btn btn-success" to={`/postList/${post.id}`}>
                    Dettagli
                </Link>
            </div>

        </div>
    )
}

export default AppCard;