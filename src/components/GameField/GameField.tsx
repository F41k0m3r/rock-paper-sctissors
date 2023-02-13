import React, {FC, useEffect} from 'react';
import styles from './GameField.module.css'
import {GameStore} from '../Game/GameStore';
import Score from '../Score/Score';

interface Props {
    store:GameStore,
    setResults:(arg0:boolean)=>void,
    setUserVote:(arg0:string)=>void
}
const GameField:FC<Props> = ({store, setResults, setUserVote}) => {
    const handleClick = (userVote:'rock'|'paper'|'scissors'):void => {
        setUserVote(userVote)
        store.setComputerVote()
        store.compare(userVote)
        setResults(true)
    }
    useEffect(()=>{
        console.log(store.winner);
        if (store.winner === 'user') {
            store.incrementScore()
            console.log(store.winner);
        }
    },[store.winner])
    return (
        <div className={styles.wrap}>
            <Score score={store.score}/>
            <div className={styles.row}>
                <div className={styles.paperWrap}>
                    <span className={styles.paper} onClick={event => handleClick('paper')}/>
                </div>
                <div className={styles.scissorsWrap}>
                    <span className={styles.scissors} onClick={event => handleClick('scissors')}/>
                </div>
            </div>
            <div className={styles.rockWrap}>
                <span className={styles.rock} onClick={event => handleClick('rock')}/>
            </div>
        </div>
    );
};

export default GameField;
