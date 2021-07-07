import { useEffect, useState } from "react";

const FRIENDS = [
    { id: 1, name: 'Ross', isOnline: false},
    { id: 2, name: 'Phoebe', isOnline: false},
    { id: 3, name: 'Rachel', isOnline: false},
    { id: 4, name: 'Joe', isOnline: false}
];

export function nameIsValid(name) {
    let valid = false;
    if (name !== '' && FRIENDS.find(x => x.name === name)) {
        valid = true;
    }
    return valid;
}

export function getFriendId(name) {
    const friend = FRIENDS.filter(item =>  item.name === name);
    return friend.id;
}

export function Chat() {
    return (
        <div>
            <FormToLogin/>
            <FriendsList friends={FRIENDS}/>
        </div>
    )
}

export function FormToLogin() {
    const [loggedInFriend, setLoggedInFriend] = useState(null);

    useEffect(() => {
        function loginFriend() {
            console.log('cao');
            if (nameIsValid(loggedInFriend)) {
                localStorage.setItem('loggedInId', getFriendId(loggedInFriend));
            }
        }
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const passedName = document.getElementById('name').value;
        if (nameIsValid(passedName)) {
            setLoggedInFriend(passedName);
        }
    }

    const handleNameChange = (e) => {
        setLoggedInFriend(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type='text' id='name' placeholder='Name...' onChange={handleNameChange}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export function FriendsList(props) {
    const rows = [];
    props.friends.forEach((item) => {
        rows.push(<FriendListItem key={item.id} friend={item}/>);
    });

    return (
        <ul>
            {rows}
        </ul>
    )
}

export function FriendListItem(props) {
    const [isOnline, setIsOnline] = useState(props.friend.isOnline);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
    });

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    )
}


