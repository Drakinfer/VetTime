import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        // Effectuer ici la logique de déconnexion
        // Par exemple, effacer la session utilisateur, supprimer les jetons, etc.
        // Vous pouvez utiliser une bibliothèque de gestion d'état ou le stockage local pour gérer l'état de la session

        // Après la déconnexion, vous pouvez rediriger l'utilisateur vers la page de connexion
        window.location.href = '/login';
    };

    return (
        <button onClick={handleLogout}>Déconnexion</button>
    );
};

export default Logout;
