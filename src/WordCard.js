import React, { useState } from 'react';
import  _, { attempt } from 'lodash';

import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
     let word = given_word.toUpperCase()
     let chars = _.shuffle(Array.from(word))
     return {
        word,
        chars,
        attemp: 1,
        guess: '',
        completes: false 
     }
}
export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {
       console.log(`${c} has been activated.`) 

       let guess = state.guess + c
       setState({...state, guess})

       if(guess.length == state.word.length){
         if(guess == state.word){
         console.log('yeah!')
         console.log('congratulations')
         setState({...state, guess: '', completed: true})
         }else{
         console.log('reset')
         console.log('Try again..')
         console.log('Fighting')
         setState({...state, guess: '', attempt: state.attempt + 1})
         }
         }
 }
        
 return (
 <div>
    { 
        state.chars.map((c, i) => 
             <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/> ) 
             }
</div>
 );
 }
