import React, {Fragment, useState} from 'react';
import {useGame} from '../../hooks/useGame';
import GameField from '../GameField/GameField';
import Results from '../Results/Results';

const Game = () => {
    const [results, setResults] = useState(false) //false - hided, true - showed
    const {compare} = useGame()
    return (
        <Fragment>
            {results
                ? <Results/>
                : <GameField compare={compare}/>
            }
        </Fragment>
    );
};

export default Game;
