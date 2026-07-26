'use client'
import { useState } from "react"

type User ={
    id: number,
    name : string,
    username : string
}

export default function FilterUser ({users}:{users: User[]}){
    const [searchTerm, setSearchTerm] = useState("");

    const filterUsers= users.filter((user)=>{
        return user.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    })



    return (
        <div className="m-3">
            <input
                className="p-2 border border-white w-[30%] rounded-xl"
                type="text"
                value={searchTerm}
                placeholder="Search here..."
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
            />
            <ul>
                {filterUsers.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name}, {item.username}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}