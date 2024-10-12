import React from "react";
import {useNavigate} from "react-router-dom";
import './Card.style.css';

//ACA ES DONDE SE FORMA EL OBJETO CARTA QUE APARECE EN PANTALLA
//CON SU RESPECTIVO TITULO Y LOS DOS BOTONES DE DETALLES Y ELIMINAR

const Card = ({sport, onClickDelete}) => {

    const navigate = useNavigate();

    const onClickDetails = () => {
        navigate (`/home/${sport.id}`);
    };

    return(
        <div className="card">
            <h2 className="title">{sport.title}</h2>
            <button className="details" onClick={onClickDetails}>Details</button>
            <button className="delete" onClick={onClickDelete}>Delete</button>
        </div>
    );
};

export default Card;