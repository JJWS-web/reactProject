import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AccountMenu() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)'); // Detects screen width
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const menuItems = [
    { label: 'Home', path: '/home' },
    { label: 'Vestigingen', path: '/vestigingen' },
    { label: 'Recensies', path: '/recensie' },
    { label: 'Fotogallerij', path: '/fotogallery' }
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#ddd',
        padding: '10px',
        display: 'flex',
        alignItems: 'end',
        justifyContent: isMobile ? 'flex-end' : 'center',
      }}
    >
      {isMobile ? (
      
        <>
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ marginLeft: '10px' }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <List sx={{ width: 250 }}>
              {menuItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => { navigate(item.path); setDrawerOpen(false); }}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        // 🖥️ Full Menu (Desktop)
        menuItems.map((item, index) => (
          <Button
            key={index}
            onClick={() => navigate(item.path)}
            sx={{
              backgroundColor: 'white',
              color: 'black',
              margin: '5px',
              padding: '8px 16px',
              textTransform: 'none',
              boxShadow: 'none',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            {item.label}
          </Button>
        ))
      )}
    </Box>
  );
}
