import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";

export function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const {data: ghUsers} = await api.get("/users");
            setUsers(ghUsers)
        }

        fetchData();
    }, [])

    return (
        <>
            <h1>Home Page</h1>
            {
                users.map(user => {
                    return (
                        <h3 key={user.id}>{user.login}</h3>
                    )
                })
            }
        </>
    )
}