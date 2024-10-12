import React, { useState } from "react";
import './Modal.style.css';


//ACA ES DONDE APARECE EL FORMULARIO PARA AGREGAR UN NUEVO DEPORTE

const Modal = ({closeModal, createSport}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [players, setPlayers] = useState(0);
    const [categories, setCategories] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createSport({title,description,players,categories});
        setTitle('');
        setDescription('');
        setPlayers(0);
        setCategories([]);
        closeModal();
    };

    return(
        <div className="overlay">
            <div className="modal">
                <p className="modal-title">New Sport</p>
                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="modal-field">
                        <label className="modal-label">Name</label>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e)=>setTitle(e.target.vale)}
                            required
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-field">
                        <label className="modal-label">Description</label>
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e)=>setDescription(e.target.vale)}
                            required
                            className="modal-textarea"
                        />
                    </div>
                    <div className="modal-field">
                        <label className="modal-label">Players</label>
                        <input
                            type="number"
                            placeholder="Number of Players"
                            value={players}
                            onChange={(e)=>setPlayers(e.target.vale)}
                            required
                            className="modal-input"
                        />
                    </div>
                    <div className="modal-field">
                        <label className="modal-label">Categories</label>
                        <textarea
                            placeholder="Categories"
                            value={categories}
                            onChange={(e)=>setCategories(e.target.vale)}
                            required
                            className="modal-textarea"
                        />
                    </div>
                    <div className="modal-buttons">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="modal-button cancel-button"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="modal-button accept-button"
                        >
                            Accept
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;