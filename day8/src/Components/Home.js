import React from "react";
import SmallCards from "./SmallCards/SmallCards";
import {useSelector} from "react-redux";
export default function Home(){
    const friendList = useSelector(state => state.users);
    return friendList.map(friend => <SmallCards key={friend.name}
                                              name={friend.name}
                                              avatar={friend.avatar}/>);
}