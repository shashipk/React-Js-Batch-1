import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {AddUser, RemoveUser} from "../../redux/ActionCreators";

export default function UserDetails({ match }) {
    const [userData, setUserData] = useState({});

    const fetchData = async (username) => {
        const data = await fetch(`https://api.github.com/users/${username}`);
        const jsonData = await data.json();
        setUserData(jsonData);
    };

    useEffect(() => {
        fetchData(match.params.username);
    }, [match.params.username]);

    const dispatch = useDispatch();
    const friendsList = useSelector(state => state.users);
    console.log(friendsList);

    const friendBtn = (friends, userData) => {
        if(friends){
            return (
                <button type='button'
                        className="remove-friend-btn"
                        onClick={() => dispatch(RemoveUser(userData.name))}>
                    Remove Friend
                </button>
            );
        }
        return (
            <button type='button'
                    className="add-friend-btn"
                    onClick={() => dispatch(AddUser(userData))}>
                Add Friend
            </button>
        );
    };
    return (
        <div className="card-container">
            <img src={userData.avatar_url}
                 alt="avatar"
                 height={200}
                 width={200}
            />

            <h1>{match.params.username}</h1>
            <div className="card-details">
                <div className="card-data">
                        <span className="card-property">
                            Name
                        </span>
                    <span className="card-value">
                            {userData.name}
                        </span>
                </div>

                <div className="card-data">
                        <span className="card-property">
                            Public Repositories
                        </span>
                    <span className="card-value">
                            {userData['public_repos']}
                        </span>
                </div>

                <div className="card-data">
                        <span className="card-property">
                            Followers
                        </span>
                    <span className="card-value">
                            {userData.followers}
                        </span>
                </div>

                <div className="card-data">
                        <span className="card-property">
                            Following
                        </span>
                    <span className="card-value">
                            {userData.following}
                        </span>
                </div>
                <div className="card-btn">
                    <button onClick={() => console.log(userData['html_url'])} className="github-btn">
                        Show Profile
                    </button>
                    {friendBtn(friendsList.filter(users => users.name === match.params.username).length > 0, {name: match.params.username, avatar: userData.avatar_url})}
                </div>
            </div>

        </div>
    );
}