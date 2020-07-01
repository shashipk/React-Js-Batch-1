import React, {useState, useEffect} from "react";
import SmallCards from "../SmallCards/SmallCards";

export default function Users() {
    const [allUsers, setAllUsers] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://api.github.com/orgs/github/public_members");
        const jsonData = await data.json();
        setAllUsers(jsonData);
    };

    useEffect(function(){
        fetchData();
    }, []);

    return(
        <div className='wrapper'>
            {allUsers.map(user => <SmallCards key={user['login']} name={user['login']} avatar={user['avatar_url']} />)}
        </div>
    );

}