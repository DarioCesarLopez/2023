import React, {
  useEffect,
  useState,
} from 'react';

export const UserList = () => {
    const [users,setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data)
    }

    useEffect(()=>{
        fetchUsers()
    },[])


    return (
        <div>
        <h1>Lista de Usuarios</h1>
        <ul>
            {users.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>   
        </div>
    )
}