import React, { Component } from 'react';
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
import withMediaQuery from '@mui/material/useMediaQuery';

/**
 * AccountMenu — A responsive navigation menu using Material UI.
 * Switches between a drawer for mobile and horizontal buttons for desktop.
 */
class AccountMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false, // State to manage the drawer's open/close status
    };
  }

  /**
   * List of menu items to be displayed in the navigation menu.
   * Each item includes a label and a corresponding path for navigation.
   */
  menuItems = [
    { label: 'Home', path: '/home' },
    { label: 'Vestigingen', path: '/vestigingen' },
    { label: 'Recensies', path: '/recensie' },
    { label: 'Fotogallerij', path: '/fotogallery' },
  ];

  render() {
    const { isMobile, navigate } = this.props;
    const { drawerOpen } = this.state;

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
            {/* Mobile View: Hamburger Menu */}
            <IconButton onClick={() => this.setState({ drawerOpen: true })} sx={{ marginLeft: '10px' }}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => this.setState({ drawerOpen: false })}
            >
              <List sx={{ width: 250 }}>
                {this.menuItems.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(item.path); 
                        this.setState({ drawerOpen: false }); 
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          // Desktop View: Horizontal Menu
          this.menuItems.map((item, index) => (
            <Button
              key={index}
              onClick={() => navigate(item.path)} // Navigate to the selected menu item's path
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
}

/**
 * AccountMenuWrapper — a functional component to inject `navigate` and `isMobile` into the class-based component.
 */
function AccountMenuWrapper() {
  const navigate = useNavigate();
  const isMobile = withMediaQuery('(max-width:768px)');

  return <AccountMenu navigate={navigate} isMobile={isMobile} />;
}

export default AccountMenuWrapper;
