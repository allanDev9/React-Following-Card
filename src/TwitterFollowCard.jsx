import PropTypes from 'prop-types';
import { useState } from 'react'

export function TwitterFollowCard({ children , UserName, formatUserName}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-follow-card-button is-following'
    : 'tw-follow-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                    className='tw-follow-card-img' 
                    alt="Imagen de una persona" 
                    src={`https://unavatar.io/${UserName}`} 
                />
                <div className='tw-follow-card-infoUser'>
                    <strong>{children}</strong>
                    <span>{formatUserName(UserName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCar-text'>{text}</span>
                    <span className='tw-followCar-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

// Agrega las propTypes después del componente
TwitterFollowCard.propTypes = {
    UserName: PropTypes.string.isRequired,        
    children: PropTypes.string.isRequired,         
    formatUserName: PropTypes.func.isRequired,         
   
};
