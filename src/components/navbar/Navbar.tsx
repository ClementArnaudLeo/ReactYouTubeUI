import React from "react";

import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LabelButton from "../labelButton/LabelButton";
import SignInButton from "../signInButton/SignInButton";

interface Props {
  searchValue: string;
  setSearchValue: Function;
}
export default function Navbar({searchValue, setSearchValue}: Props) {
  return (
    <nav className="navbar-container">
      <div className="logo-section">
        <MenuIcon className="menu" />
        <img className="logo" src={require('./../../images/logo.png')} alt="website logo" />
        <span className="logo-text">YouTube</span>
        <span className="country">FR</span>
      </div>

      <div className="search-section">
        <input className="searchbar" placeholder="Rechercher" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <LabelButton
          label="Rechercher"
          className="search-button"
          content={<SearchIcon />}
        />
      </div>

      <div className="action-section">
        <LabelButton
          label="Creer"
          className="record"
          content={<VideoCallIcon />}
        />
        <LabelButton
          label="Applications"
          className="apps"
          content={<AppsIcon />}
        />
        <LabelButton
          label="Reglages"
          className="more"
          content={<MoreVertIcon />}
        />

        <SignInButton/>
      </div>
    </nav>
  );
}
