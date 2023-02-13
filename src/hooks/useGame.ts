import {useEffect, useState} from 'react';

interface Game {
    compare: (userVote:'rock'|'paper'|'scissors') => string

}
export const useGame = ():Game => {
    let computer:'rock'|'paper'|'scissors'|undefined = undefined
    const [won, setWon] = useState('user')
    const computerVote = () => {
        const random = (Math.floor(Math.random() * 3 + 1))
        if (random === 1) computer = 'rock'
        if (random === 2) computer = 'paper'
        if (random === 3) computer = 'scissors'
    }
    const compare = (userVote:'rock'|'paper'|'scissors'):string => {
        computerVote()
        if (computer === 'rock' && userVote === 'rock') setWon('nobody')
        if (computer === 'rock' && userVote === 'paper') setWon('user')
        if (computer === 'rock' && userVote === 'scissors') setWon('computer')
        if (computer === 'scissors' && userVote === 'rock') setWon('user')
        if (computer === 'scissors' && userVote === 'paper') setWon('computer')
        if (computer === 'scissors' && userVote === 'scissors') setWon('nobody')
        if (computer === 'paper' && userVote === 'rock') setWon('computer')
        if (computer === 'paper' && userVote === 'paper') setWon('nobody')
        if (computer === 'paper' && userVote === 'scissors') setWon('user')
        return won

    }


    return {
        compare,
    }
}