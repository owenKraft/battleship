import {Link} from "react-router-dom";
import battleship_background from '../resources/battleship_background.jpg'

const Header = (props) => {
    const refresh = () => {
        window.location.reload()
    }

    return (
        <header className="header">
            <div className="header-text">
                <Link to="/">
                    <h1 className="header-link">Battleship</h1>
                </Link>
                
                <Link to="/play">
                        {/* <button className="newGameBtn" onClick={refresh}>New game</button> */}
                        <button className="newGameBtn">New game</button>
                </Link>
            </div>
            <img className="background" src={battleship_background} alt=""></img>
        </header>
    )
}

export default Header