import { useEffect, useState } from 'react'
import './Friend.css'
import Friend from './Friend';



export default function Friends(){

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div className='box'>
            <h3>Friend: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend> )
            }
        </div>
    )
}

// 1.state to hold data
// 2.use effect with dependence array
// 3.use fetch to load
// 4.set loaded data to the sate
