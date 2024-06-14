import './App.css';

export function App() {
//Si se quiere hacer inline css, tiene que ser con {{}}
  return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img src="https://unavatar.io/kikobeats" alt=""  style={{display:"flex", color:'#ffff'}} className="tw-followCard-avatar"/>
            <div className="tw-followCard-info">
                <strong>Kiko Beats</strong>
                <span className="tw-followCard-infoUserName">@kiko</span>
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