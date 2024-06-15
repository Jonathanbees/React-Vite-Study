export function TwitterFollowCard({formatUserName, userName, name, isFollowing }) {
    console.log(isFollowing)
    //Si se quiere hacer inline css, tiene que ser con {{}}
    //Funcion con template string
    //const avatarTemplate = `https://unavatar.io/${userName}`
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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    );
}