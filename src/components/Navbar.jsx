import { AppBar, Button, ImageList, Toolbar, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from "@mui/system";



const pages = ['EREE MOVIES & TV', 'FEATURES', 'DOWNLOAD', 'NEWS'];
const sign = ['SIGN IN', 'SIGN UP'];
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

// const styles = {
//     appBar: {
//         position: 'sticky',
//         backgroundColor: "primary.light"
//     }
// }
const Navbar = () => {
    return (
        <AppBar >
            <Toolbar>
                <ImageList sx={{ width: 100, height: 20 }}>
                    <img src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg" />
                </ImageList>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder=" Search … "
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {sign.map((sign) => (
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                            {sign}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;