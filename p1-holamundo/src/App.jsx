import './App.css';
//import { useState } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {
    const formatUserName = (userName) => `@${userName}`;
    //const otrouser = {isFollowing: true, userName: 'angular', name: 'Angular'}
    //const [name, setName] = useState('Reactotro')
    return (
        <div className='Users'>
            <TwitterFollowCard 
            formatUserName={formatUserName} //Se pasa la funcion como prop
            userName='reactjs' 
            name='React' />

            <TwitterFollowCard 
            formatUserName={formatUserName}  
            userName='vuejs' 
            name='Vue' 
            />
        </div>
    );
}