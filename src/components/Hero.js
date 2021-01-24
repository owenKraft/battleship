import {Link} from "react-router-dom";
import battleship_background from '../resources/battleship_background.jpg'

const Hero = () => {

    return (
        <div className="hero">
            <header>
                <h1 className="logo">Battleship</h1>
            </header>

            <img className="background" src={battleship_background} alt=""></img>

            <div className="text">
                <h2>Control the seas</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to="/play">
                    <button>Play now</button>
                </Link>
            </div>
        </div>
    )

}

export default Hero