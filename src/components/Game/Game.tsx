import React, {FC, Fragment, useState} from 'react';
import GameField from '../GameField/GameField';
import Results from '../Results/Results';
import useStore from './GameStore';

const Game:FC = () => {
    const [results, setResults] = useState(false) //false - hided, true - showed
    const store = useStore()
    const [userVote, setUserVote] = useState('')
    return (
        <Fragment>
            {results
                ? <Results store={store} setResults={setResults} userVote={userVote} />
                : <GameField store={store} setResults={setResults} setUserVote={setUserVote}/>
            }
        </Fragment>
    );
};

export default Game;
