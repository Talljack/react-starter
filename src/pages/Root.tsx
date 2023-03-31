import { Outlet } from '@tanstack/react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Theme from '@/components/Theme';
export default function Root() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React template
            </Typography>
            <Theme />
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
