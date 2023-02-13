import './sidenav.css'
import Button from '@mui/material/Button';
import Home from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function sidenav(){
    return (
    <div id='sidenav'>
        <Button variant="outlined" class="ButHome">
          <Home/>
          Home
        </Button>
        <Button variant="outlined" class="ButIcon">
          <GroupIcon/>
          Sheets
        </Button>
        <Button variant="outlined" class="ButIcon">
          <PictureAsPdfIcon/>
          Books
        </Button>
        <Button variant="outlined" class="ButIcon">
          <AutoStoriesIcon/>
          Tables
        </Button>
    </div>
    );
};