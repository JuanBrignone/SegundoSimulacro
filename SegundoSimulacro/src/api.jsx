const API_URL = 'http://localhost:3000/api/games'; 

export const getGames = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};

export const getGameById = async (gameId) => {
    const response = await fetch(`${API_URL}/${gameId}`);
    const data = await response.json();
    return data;
};

export const createGame = async (game) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(game),
    });
    const data = await response.json();
    return data;
};

export const deleteGame = async (gameId) => {
    const response = await fetch(`${API_URL}/${gameId}`, {
        method: 'DELETE',
    });
    return response.status;
};

export const updateGame = async (gameId, updatedGame) => {
    const response = await fetch(`${API_URL}/${gameId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGame),
    });
    const data = await response.json();
    return data;
};
