import React from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css"
import "./SKYGRAM.png"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CreatePost from './CreatePost'


function NavBar(){

    return (
        <div className='NavBar'>
        
        <img className='NavBar__logo' src='SKYGRAM.png' alt=''/>

        <div className="NavBar__buttons">
        <button className="NavBar__button">
            <HomeIcon />
            <span>Home</span>
        </button>
        <button className="NavBar__button">
            <SearchIcon />
            <span>Search</span>
        </button>
        <button className="NavBar__button">
            <ExploreIcon />
            <span>Explore</span>
        </button>
        <button className="NavBar__button">
            <ChatIcon />
            <span>Messages</span>
        </button>
        <button className="NavBar__button">
            <BookmarkBorderIcon />
            <span>Saved</span>
        </button>
        <button className="NavBar__button">
            <FavoriteBorderIcon />
            <span>Notifications</span>
        </button>
        <Link to='/create'>
        <button className="NavBar__button">
            <AddCircleOutlineIcon />
            <span>Create</span>
        </button>    
        </Link>
        {/* <button className="NavBar__button">
            <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
            </Avatar>
            <span>
            {user.username}{" "}
            <button onClick={handelLogout} className="logout__button">
                Logout
            </button>
            </span>
        </button> */}
        </div>
        <div className="NavBar__more">
        <button className="NavBar__button">
            <MenuIcon />
            <span className="NavBar__buttonText">More</span>
        </button>
        </div>
    </div>
        
    );
}

export default NavBar