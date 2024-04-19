'use client'

import { useState, useEffect } from 'react';
import { User } from './iUsers';
import axios from 'axios';

const serverURL = 'http://localhost:3000';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get(`${serverURL}/api/users`)
      .then(response => {
        console.log('Réponse du serveur :', response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error.response.data);
      });
  }, []);

  return (
    <div>
      <h1>M2iFlix</h1>
      <h2>Liste des utilisateurs :</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}
