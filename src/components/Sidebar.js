import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarHeader">
                <div className="sidebarHeaderRight">
                <IconButton>
                    <DonutLargeIcon/>
                 </IconButton>
                 <IconButton>
                    <ChatIcon/>
                 </IconButton>
                 <IconButton>
                    <MoreVertIcon/>
                 </IconButton>
                </div>
                <div className="sidebarHeaderLeft">

                </div>
            </div>
            <h1>Sidebar</h1>
        </div>
    )
}

export default Sidebar
