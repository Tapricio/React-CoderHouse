import React from "react";
import useUsers from "../../hooks/useUsers";

const UserList = () => {
    const userList = useUsers() 

    if(!userList){
        return (<span>Cargando...</span> )
    }
    return (
        userList.length===0 ? 
        (<span>Sin usuarios</span>) : 
        (<ul>{userList.map((user)=>(
            <li key={user.id}><strong style={{color:'red'}}>Username:</strong> {user.username}, <strong style={{color:'green'}}>Nombre:</strong> {user.firstName} {user.lastName}</li>
        ))}</ul>)
    )

      
}

export default UserList