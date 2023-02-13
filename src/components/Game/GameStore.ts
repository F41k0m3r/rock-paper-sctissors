import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer';
import {devtools} from 'zustand/middleware';

type winner = {
    winner:'computer'|'user'|'tie',
}

export interface GameStore {
    score:number
    incrementScore:()=>void
    winner:string|undefined
    compare: (userVote:'rock'|'paper'|'scissors') => void
    setComputerVote: ()=>string
    computerVote: 'rock'|'paper'|'scissors'|undefined
}

const setWinner: (userVote: string,  computerVote: 'rock'|'paper'|'scissors'|undefined) => string = (userVote, computerVote) => {
    let won = '';
    if (computerVote === 'rock' && userVote === 'rock') won = 'tie';
    if (computerVote === 'rock' && userVote === 'paper') won = 'user';
    if (computerVote === 'rock' && userVote === 'scissors') won = 'computer';
    if (computerVote === 'scissors' && userVote === 'rock') won = 'user';
    if (computerVote === 'scissors' && userVote === 'paper') won = 'computer';
    if (computerVote === 'scissors' && userVote === 'scissors') won = 'tie';
    if (computerVote === 'paper' && userVote === 'rock') won = 'computer';
    if (computerVote === 'paper' && userVote === 'paper') won = 'tie';
    if (computerVote === 'paper' && userVote === 'scissors') won = 'user';
    return won;
};

const useStore = create<GameStore>()(devtools(immer((set) => ({
    score:0,
    incrementScore:()=>{
        set((state)=>({
            ...state,
            score: state.score + 1
        }))
    },
    winner: undefined,
    computerVote:undefined,
    setComputerVote: ()=>{
        let vote = ''
        const random = (Math.floor(Math.random() * 3 + 1))
        if (random === 1) {
            vote = 'rock';
        }
        if (random === 2) {
            vote = 'paper';
        }
        if (random === 3) {
            vote = 'scissors';
        }
        set((state)=>({
            ...state,
            computerVote:vote
        }))
        return vote
    },
    compare: (userVote) => {
        set((state)=>({
            ...state,
            winner:setWinner(userVote, state.computerVote)
        }))
    }
}))))

export default useStore