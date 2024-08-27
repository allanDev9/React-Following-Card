import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (UserName) => `@${UserName}`;
    const [ name, setName ] = useState(false) 

    const changeUserName = name ? ' Cambiar A Pedro ': 'Cambiar A Allan'
    const buttonChange = name
    ? 'tw-following-button-userChange is-name'
    : 'tw-following-button-userChange'

    const changeClick = () => {
        setName(!name)
    }

    return (
        <div className='container'>
        <section className='App'>
            <span>
                <h3 className='tw-following-title' >A Quien Quieres Seguir?</h3>
            </span>

            <TwitterFollowCard
                formatUserName={formatUserName}
                UserName={name ? 'Allan' : 'Pedro'}>
                    {name ? 'Allan':'Pedro'}
                </TwitterFollowCard>
            
            <TwitterFollowCard
                formatUserName={formatUserName}
                UserName="pherald">
                Pablo Hernandez
                </TwitterFollowCard>

            <TwitterFollowCard
                formatUserName={formatUserName}
                UserName="elonMusk">
                   Elon Musk
                </TwitterFollowCard>

            <button className={buttonChange} 
            onClick={changeClick}>
                {changeUserName}
            </button>
        </section>
        </div>
    );
}