import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatsHotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import SidebarButton from "../sidebarButton/SidebarButton";
import SignInButton from "../signInButton/SignInButton";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import TheatersIcon from "@material-ui/icons/Theaters";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import AddIcon from "@material-ui/icons/Add";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <SidebarButton icon={<HomeIcon />} label="Accueil" />
      <SidebarButton icon={<WhatsHotIcon />} label="Tendance" />
      <SidebarButton icon={<SubscriptionsIcon />} label="Abonnements" />
      <div className="divider"></div>
      <SidebarButton icon={<VideoLibraryIcon />} label="Bibliothèque" />
      <SidebarButton icon={<HistoryIcon />} label="Historique" />
      <div className="divider"></div>
      <div className="sign-in">
        <span>connectez vous pour aimer et partager des vidéos.</span>
        <SignInButton />
      </div>
      <div className="divider"></div>
      <h2 className="sidebar-section-title">MEILLEUR DE YOUTUBE</h2>
      <SidebarButton icon={<MusicNoteIcon />} label="Musique" />
      <SidebarButton icon={<SportsSoccerIcon />} label="Sports" />
      <SidebarButton icon={<SportsEsportsIcon />} label="Gaming" />
      <SidebarButton icon={<TheatersIcon />} label="Films" />
      <SidebarButton icon={<ReceiptIcon />} label="News" />
      <SidebarButton icon={<LiveTvIcon />} label="Live" />
      <SidebarButton icon={<ThreeDRotationIcon />} label="360° Vidéo" />
      <div className="divider"></div>
      <SidebarButton icon={<AddIcon />} label="Découvrir" />
      <div className="divider"></div>
      <h2 className="sidebar-section-title">PLUS DE YOUTUBE</h2>
      <SidebarButton icon={<YouTubeIcon />} label="YouTube Premium" />
      <SidebarButton icon={<LiveTvIcon />} label="Live" />
      <div className="divider"></div>
      <SidebarButton icon={<SettingsIcon />} label="Réglages" />
      <SidebarButton icon={<FlagIcon />} label="Rapports" />
      <SidebarButton icon={<HelpIcon />} label="Aide" />
      <SidebarButton icon={<FeedbackIcon />} label="Retours" />
      <div className="divider"></div>
      <div className="link-block">
        <a href='!#'>A propos</a>
        <a href='!#'>Presse</a>
        <a href='!#'>Copyright</a>
        <a href='!#'>Nous contacter</a>
        <a href='!#'>Createurs</a>
        <a href='!#'>Developeurs</a>
      </div>
      <div className="link-block">
        <a href='!#'>Conditions d'utilisation</a>
        <a href='!#'>Droits d'auteur </a>
        <a href='!#'>CréateursPublicité</a>
      </div>
      <p className="copyright">© 2020 Google LLC YouTube, a Google company</p>
    </div>
  );
}
