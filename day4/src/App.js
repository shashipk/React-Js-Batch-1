import React from "react";
import NavBar from "./Components/NavigationBar/NavigationBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import UserCard from "./Components/UserCard/UserCard";
import "@babel/polyfill";

import "./App.css";

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            usersData: [],
            listOfUsers: [],
            selectedUser: ''
        };
        this.handleUserChange = this.handleUserChange.bind(this);
    }

    componentDidMount() {
        const makeAPICallsAndFetchData = async () => {
            const res = await fetch("https://api.github.com/users");
            const jsonifiedData = await res.json();
            const usersList = jsonifiedData.map(user => user.login);
            this.setState({
                usersData: jsonifiedData,
                listOfUsers: usersList
            });
        };

        makeAPICallsAndFetchData();
    }

   handleUserChange(newSelectedUser){
        console.log(newSelectedUser);
        this.setState({
            selectedUser: newSelectedUser
        });
    }


    render(){
        const cardContent = () => {
            const {selectedUser} = this.state;
            if(selectedUser && selectedUser!==''){
                const userData = this.state.usersData.filter(user => user.login === selectedUser);
                return <UserCard  data={userData[0]}/>
            }
            return <React.Fragment/>
        };

        return(
            <div className="wrapper">
                <NavBar/>
                <SearchBar listOfUsers={this.state.listOfUsers}
                           selectedValue={this.state.selectedUser}
                           handleUserChange={this.handleUserChange}
                           />
                {cardContent()}
            </div>
        );
    }
}