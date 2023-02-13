import React, {FC} from 'react';
import styles from './Score.module.css'
interface Props {
    score: number
}

const Score:FC<Props> = ({score}) => {
    return (
        <div className={styles.wrap}>
            <h1>Your</h1>
            <h1>Score Is:</h1>
            <h1>{score}</h1>
        </div>
    );
};

export default Score;
