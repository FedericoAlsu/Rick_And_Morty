import SearchBar from "../SearchBar/SearchBar";
import imgLetter from '../../assets/letter.png';
import style from './Nav.module.css';
import { Link, useNavigate } from "react-router-dom";

export default function Nav(props) {
    const navigate = useNavigate();
    const {onSearch} = props;

    const handleClick = ()=> {
        navigate('/');
    }

    return(
        <div className={style.container}>
            <div className={style.containLetter} onClick={handleClick}>
                <img src={imgLetter} alt="Rick and Morty" />
            </div>
            <nav className={style.container_nav}>
                <div>
                    <Link to="/">Home   </Link>
                    <Link to="/about">About </Link>
                    <Link to="/favorites" >Favorites</Link>
                </div>
                <SearchBar onSearch={onSearch}/>
            </nav>
        </div>
    )

}