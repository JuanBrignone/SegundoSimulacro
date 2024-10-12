import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './DetailPage.style.css';

const DetailPage = ({sports}) => {
    const navigate = useNavigate();
    const {sportId} = useParams();

    const goBack = () => {
        navigate('/home');
    };

    const sport = sports.find((sport) => sport.id === sportId);

    return(
        <div className="sport-detail-page">
            <button onClick={goBack} className="go-back">&lt; Back</button>
            {sport ? (
                <>
                    <h1 className="title">{sport.title}</h1>
                    <p className="text">Description: {sport.description}</p>
                    <p className="text">Number of PLayers:{sport.players}</p>
                    <p className="text">Category: {sport.categories.join(', ')}</p>
                </>
            ) : (
                <p className="text">Sport not found</p>
            )}
        </div>
    );
}

export default DetailPage;