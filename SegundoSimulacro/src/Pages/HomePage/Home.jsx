import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from '../../Components/Card/Card.jsx';
import Modal from '../../Components/Modal/Modal.jsx';
import './HomePage.style.css';

//ACA SE CREA LA HOMEPAGE MOSTRANDO EL TITULO Y MAPEANDO LAS CARDS

const HomePage = ({sports, createSport, removeSport}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const mapSports = (sportsArray) => {
        return sportsArray.map((sport)=>(
            <Card
                key = {sport.id}
                sport = {sport}
                onClickDetails = {() => navigate(`/sports/${sport.id}`)}
                onClickDelete = {() => removeSport(sport.id)}
            />
        ));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div className="home-page">
            <h1 className="title">Juegos Olimpicos</h1>
            <div className="button-container">
                <button className="sport-button" onCLick={openModal}>
                    Add Sport
                </button>
            </div>
            <div className="card-container">{mapSports(sports)}</div>
            {isModalOpen && ( //cuando el isModalOpen esta en True se renderiza el componente Modal para mostrar el Form
                <Modal closeModal = {closeModal} createSport = {createSport} />
            )};

        </div>
    );
}

export default HomePage;