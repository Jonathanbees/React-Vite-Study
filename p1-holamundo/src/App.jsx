import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <div className='Users'>
            <TwitterFollowCard 
            formatUserName={formatUserName} //Se pasa la funcion como prop
            isFollowing 
            userName='reactjs' 
            name='React' />

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing={false} 
            userName='vuejs' 
            name='Vue' 
            />
        </div>
    );
}