import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';

function MyAppbar() {

    const navigate = useNavigate();

    function userClick(){
        navigate("/user")
    }
    function adminClick(){
        navigate("/admin")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#607d8b' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        İnterview App
                    </Typography>
                    <Button color="inherit" onClick={adminClick}>Admin</Button>
                    <Button color="inherit" onClick={userClick}>User</Button>

                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default MyAppbar;