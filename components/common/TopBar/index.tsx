import { useState, MouseEvent } from 'react';
import { 
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Stack,
    Divider
} from '@mui/material';

/* ICONS */
import { IoSettingsOutline, IoPersonOutline,  IoMenu, IoLogOutOutline, IoNotificationsOutline, IoMailOutline } from 'react-icons/io5';

const TopBar = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const Logo = () => (
        <>
            {/* LOGO GOES HERE */}
            <Typography
                variant='h1'
                noWrap
                component='a'
                href='/'
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 900,
                    fontSize: '2em',
                    textDecoration: 'none',
                    color: 'primary.main'
                }}
            >
                ShareFolio<Box component="span" sx={{ color: 'secondary.main' }}>.</Box>
            </Typography>
        </>
    )
    return (
        <AppBar position="fixed" className=".appbar-shadow" sx={{ backgroundColor: 'background.default' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* LOGO AND TEXT - FOR > xs */}
                    {/* LOGO GOES HERE */}
                    <Typography
                        variant='h1'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 900,
                            fontSize: '2em',
                            textDecoration: 'none',
                            color: 'primary.main'
                        }}
                    >
                        ShareFolio<Box component="span" sx={{ color: 'secondary.main' }}>.</Box>
                    </Typography>
                    {/* BURGER MENU - FOR MOBILE */}
                    
                    {/* LOGO AND TEXT - FOR <= xs */}
                    {/* LOGO GOES HERE */}
                    <Typography
                        variant='h1'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 900,
                            fontSize: '2em',
                            textDecoration: 'none',
                            color: 'primary.main'
                        }}
                    >
                        ShareFolio<Box component="span" sx={{ color: 'secondary.main' }}>.</Box>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Box component="span" sx={{ mr: '2em' }}>
                            {/* NOTIFICATIONS */}
                            <IconButton sx={{ mr: '1em' }}>
                                <IoNotificationsOutline />
                            </IconButton>
                            {/* INBOX/MESSAGES */}
                            <IconButton>
                                <IoMailOutline />
                            </IconButton>
                        </Box>
                        
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            {/* ADD USER AVATAR HERE */}
                            <Avatar alt="Remy Sharp" src="" sx={{ backgroundColor: "primary.main" }} />

                        </IconButton>
                        <Menu
                            sx={{ mt: '0.5em' }}
                            PaperProps={{ sx:{ paddingTop: '1em', paddingBottom: '1em' }}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: '1em', paddingLeft: '2em', paddingRight: '2em' }}>
                                <Box>
                                    <Avatar alt="Remy Sharp" src="" sx={{ backgroundColor: "primary.main" }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 500 }}>Maiku Nakajima</Typography>
                                </Box>
                            </Stack>
                            <Box sx={{ marginTop: '0.5em', marginBottom: '0.5em' }}>
                                <Divider />
                            </Box>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                    <IoPersonOutline />
                                    <Typography>Profile</Typography>
                                </Stack>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                    <IoSettingsOutline />
                                    <Typography>Settings</Typography>
                                </Stack>
                            </MenuItem>
                            <Box sx={{ marginTop: '0.5em', marginBottom: '0.5em' }}>
                                <Divider />
                            </Box>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                    <IoLogOutOutline />
                                    <Typography>Logout</Typography>
                                </Stack>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default TopBar;