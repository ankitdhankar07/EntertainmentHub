import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router";

export default function MainNav() {
  //using useNavigate to navigate to the page according to the link
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
    useEffect(()=>{if(value===0){
      navigate("/")
    }},[value]);

  return (
    <Box sx={{ width:'100%', position:'fixed' , bottom:0 , zIndex:100}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{background:'#2d313a'}}
      >
        <BottomNavigationAction sx={{color:'white'}} label="Trending" icon={<WhatshotIcon />} onClick={()=>navigate("/trending")} />
        <BottomNavigationAction sx={{color:'white'}} label="Movies" icon={<MovieIcon />} onClick={()=>navigate("/movies")} />
        <BottomNavigationAction sx={{color:'white'}} label="Tv Series" icon={<TvIcon />} onClick={()=>navigate("/movies")}/>
         <BottomNavigationAction sx={{color:'white'}} label="Search " icon={<SearchIcon />} onClick={()=>{navigate("/search")}}/>
      </BottomNavigation>
    </Box>
  );
}
