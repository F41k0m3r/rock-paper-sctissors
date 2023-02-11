import React, {EventHandler, FC} from 'react';
import {useGame} from '../../hooks/useGame';
import styles from './GameField.module.css'
const GameField = ({compare}:{compare:(userVote:'rock'|'paper'|'scissors')=>string}):JSX.Element => {
    const handleClick = (userVote:'rock'|'paper'|'scissors'):void => {
        const winner = compare(userVote)
        alert(winner + ' wins')
    }
    return (
        <div className={styles.wrap}>
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
