import { Link, useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="container my-5">
            <h2>Errore 404</h2>
            <h3 className="mb-5">pagina non trovata</h3>

            <button className="btn btn-primary mx-2" onClick={() => {navigate(-1)}}>
                Ritorna indietro
            </button>
            <Link to="/">Home</Link>
        
        </div >
    )
}

export default NotFoundPage;