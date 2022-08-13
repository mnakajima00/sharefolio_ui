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
                    display: { xs: 'none', sm: 'flex' },
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
        <AppBar position="sticky" className=".appbar-shadow" sx={{ backgroundColor: 'background.default' }}>
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    {/* LOGO AND TEXT - FOR > xs */}
                    {/* LOGO GOES HERE */}
                    <Typography
                        variant='h4'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', sm: 'flex' },
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
                            display: { xs: 'flex', sm: 'none' },
                            flexGrow: 1,
                            fontWeight: 900,
                            fontSize: {xs: '1.5em', sm: '2em'},
                            textDecoration: 'none',
                            color: 'primary.main'
                        }}
                    >
                        ShareFolio<Box component="span" sx={{ color: 'secondary.main' }}>.</Box>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Box component="span" sx={{ mr: { xs: '1.5em'} }}>
                            {/* NOTIFICATIONS */}
                            <IconButton sx={{ mr: { xs: '0.5em' },width: { xs: 38, sm: 48 }, height: { xs: 38, sm: 48 } }}>
                                <IoNotificationsOutline />
                            </IconButton>
                            {/* INBOX/MESSAGES */}
                            <IconButton sx={{ width: { xs: 38, sm: 48 }, height: { xs: 38, sm: 48 } }}>
                                <IoMailOutline />
                            </IconButton>
                        </Box>
                        
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            {/* ADD USER AVATAR HERE */}
                            <Avatar alt="Remy Sharp" src="" sx={{ backgroundColor: "primary.main", width: { xs: 32, sm: 38 }, height: { xs: 32, sm: 38 }}} />
                        </IconButton>
                        <Menu
                            sx={{ mt: '1em' }}
                            PaperProps={{ sx:{ paddingTop: '0.5em', paddingBottom: '0.5em' }}}
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
                            {/* PROFILE PIC & NAME */}
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: '1em', paddingLeft: '2em', paddingRight: '2em' }}>
                                <Box>
                                    <Avatar alt="Remy Sharp" src="" sx={{ backgroundColor: "primary.main", width: { xs: 38 }, height: { xs: 38 } }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 500 }}>Maiku Nakajima</Typography>
                                </Box>
                            </Stack>

                            <Box sx={{ marginTop: '0.5em', marginBottom: '0.5em' }}>
                                <Divider />
                            </Box>

                            {/* MESSAGES AND NOTIFICATIONS */}

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                    <IoPersonOutline />
                                    <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>Profile</Typography>
                                </Stack>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                    <IoSettingsOutline />
                                    <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>Settings</Typography>
                                </Stack>
                            </MenuItem>
                            <Box sx={{ marginTop: '0.5em', marginBottom: '0.5em' }}>
                                <Divider />
                            </Box>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                    <IoLogOutOutline />
                                    <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>Logout</Typography>
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