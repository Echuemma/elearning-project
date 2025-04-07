import React, { useState } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Button, 
  IconButton,
  Divider,
  useTheme
} from '@mui/material';
import { 
  Sun, 
  Award, 
  BookOpen, 
  Clock, 
  LogOut, 
  User, 
  Bell, 
  Moon
} from 'lucide-react';

const DashboardLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const drawerWidth = 250;

  // Style for active nav links
  const activeStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: '4px'
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* App Bar */}
      <AppBar position="fixed" sx={{ 
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#166534', 
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button 
            color="inherit" 
            sx={{ mx: 1 }}
            component={NavLink}
            to="/dashboard/courses"
          >
            Courses
          </Button>
          <Button 
            color="inherit" 
            sx={{ mx: 1 }}
          >
            Excercises
          </Button>
          <Button 
            color="inherit" 
            sx={{ mx: 1 }}
          >
            My learning
          </Button>
          <Button 
            color="inherit" 
            sx={{ mx: 1 }}
            component={NavLink}
            to="/dashboard/certificates"
          >
            Certificates
          </Button>
          <IconButton color="inherit" sx={{ position: 'relative' }}>
            <Bell size={20} />
            <Box sx={{ 
              position: 'absolute', 
              top: 6, 
              right: 6, 
              backgroundColor: 'red', 
              borderRadius: '50%', 
              width: 16, 
              height: 16, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              fontSize: '10px'
            }}>
              2
            </Box>
          </IconButton>
          <Button 
            color="inherit" 
            startIcon={<User size={20} />}
            sx={{ mx: 1 }}
          >
            Profile
          </Button>
          <Button 
            color="inherit" 
            startIcon={<LogOut size={20} />}
            sx={{ ml: 1 }}
            onClick={() => navigate('/login')}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Left Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box',
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', p: 2 }}>
          <List>
            <ListItem 
              button 
              component={NavLink}
              to="/dashboard/courses"
              sx={({ isActive }) => isActive ? activeStyle : undefined}
            >
              <ListItemIcon>
                <Sun size={24} />
              </ListItemIcon>
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/dashboard/badges"
              sx={({ isActive }) => isActive ? activeStyle : undefined}
            >
              <ListItemIcon>
                <Award size={24} />
              </ListItemIcon>
              <ListItemText primary="Badges" />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/dashboard/learning-pathways"
              sx={({ isActive }) => isActive ? activeStyle : undefined}
            >
              <ListItemIcon>
                <BookOpen size={24} />
              </ListItemIcon>
              <ListItemText primary="Learning Pathways" />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/dashboard/certificates"
              sx={({ isActive }) => isActive ? activeStyle : undefined}
            >
              <ListItemIcon>
                <Sun size={24} />
              </ListItemIcon>
              <ListItemText primary="Certificates" />
            </ListItem>
            <ListItem
              button
              onClick={() => navigate('/login')}
            >
              <ListItemIcon>
                <LogOut size={24} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <Divider sx={{ my: 4 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <IconButton onClick={toggleDarkMode}>
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </IconButton>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5', height: '100%' }}>
        <Toolbar /> {/* This creates space below the AppBar */}
        <Outlet /> {/* This renders the nested route components */}
      </Box>
    </Box>
  );
};

export default DashboardLayout;