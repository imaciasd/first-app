import { useEffect, useState } from "react";
import './Apod.css';

const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

const Apod = () => {
    const [imagen, setImagenData] = useState([]);

    
        const fetchImagen = () => {
            fetch(API_URL)
                .then(res => res.json())
                .then(data => setImagenData(data))
                .catch(err => console.error(err));
        }

    useEffect(() => {
        fetchImagen();
    }, []);

    return (
        <div>
            <img src={imagen.url} alt={imagen.title} />
            <p>{imagen.explanation}</p>
        </div>
    );
};

export default Apod;

//Este componente parece que tarda en cargar, recargar página de no aparecer imagen después de 10 seg.