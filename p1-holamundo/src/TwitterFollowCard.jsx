import { useState } from 'react';
export function TwitterFollowCard({ formatUserName, userName, name }) {
    //Si se quiere hacer inline css, tiene que ser con {{}}
    //Funcion con template string
    //const avatarTemplate = `https://unavatar.io/${userName}`
    //console.log(isFollowing, userName, name)
    //USESTATE
    const [isFollowing, setIsFollowing] = useState(false)
    /* Estado inicial de isFollowing, 
    setIsFollowing es una funcion que cambia el estado de isFollowing, 
    por lo que UseState es un hook, y usa 2 parametros, 
    el estado inicial y la funcion que cambia el estado*/



    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={`https://unavatar.io/${userName}`} alt="" style={{ display: "flex", color: '#ffff' }} className="tw-followCard-avatar" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={() => {
                    setIsFollowing(!isFollowing) // Cambia el estado de isFollowing
                }}>
                    {text}
                </button>
            </aside>
        </article>
    );
}