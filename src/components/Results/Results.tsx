import React, {FC, Fragment} from 'react';
import {GameStore} from '../Game/GameStore';
interface Props{
    store:GameStore,
    userVote:string,
    setResults:(arg0:boolean) => void
}
const Results:FC<Props> = ({store, userVote, setResults}) => {
    const winner = store.winner
    const computerVote = store.computerVote
    return (
        <div>
            <h2>{computerVote}</h2>
            <h2>{userVote}</h2>
            <h2>{winner}</h2>
            <button onClick={e=>setResults(false)}>Return Home</button>
        </div>
    );
};

export default Results;
