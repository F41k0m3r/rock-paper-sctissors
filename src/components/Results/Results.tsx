import React, {FC, Fragment} from 'react';
import {GameStore} from '../Game/GameStore';
import styles from './Results.module.css';
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
            <div className={styles.wrap}>
                <div className={styles.user}>
                    <h1 className={styles.text}>Your vote:</h1>
                    {userVote === 'paper'
                        ?   <div className={styles.paperWrap}>
                            <span className={styles.paper}/>
                        </div>
                        :   userVote === 'rock'
                            ?   <div className={styles.rockWrap}>
                                <span className={styles.rock}/>
                            </div>
                            :   <div className={styles.scissorsWrap}>
                                <span className={styles.scissors}/>
                            </div>
                    }
                </div>
                <div className={styles.computer}>
                    <h1 className={styles.text}>Computer vote:</h1>
                    {computerVote === 'paper'
                        ?   <div className={styles.paperWrap}>
                            <span className={styles.paper}/>
                        </div>
                        :   userVote === 'rock'
                            ?   <div className={styles.rockWrap}>
                                <span className={styles.rock}/>
                            </div>
                            :   <div className={styles.scissorsWrap}>
                                <span className={styles.scissors}/>
                            </div>

                    }
                </div>
            </div>
            <div className={styles.winner}>
                {winner === 'user'? <h1 className={styles.text}>You win!</h1>:winner==='computer'?<h1 className={styles.text}>Computer win!</h1>:<h1 className={styles.text}>Draw!</h1>}
            </div>
            <button className={styles.button} onClick={e=>setResults(false)}>Home</button>
        </div>
    );
};

export default Results;
