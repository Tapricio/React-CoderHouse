import {useState, useEffect} from "react"

const useUsers = () => {

    const [users, setUsers] = useState(null)
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setUsers(data.users))
    },[])
    return users
}

export default useUsers

/* 'https://dummyjson.com/users' */