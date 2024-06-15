import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FoodBankRoundedIcon from '@mui/icons-material/FoodBankRounded';
import { useNavigate } from 'react-router-dom';

export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    //const [rvalue, setRValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigate = useNavigate();

    const navigateToLogin = () => {
        if (localStorage.getItem('loginToken')) {
            navigate('/');
        } else {
            navigate('/login');
        }
    };
    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                {/* <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                > 라벨 표시되는 바텀바*/}
                <BottomNavigation value={value} onChange={handleChange}>
                    {' '}
                    {/*라벨 표시 안되는 바텀바*/}
                    <BottomNavigationAction onClick={navigateToHome} label="홈" icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction label="식당별" icon={<FoodBankRoundedIcon />} />
                    <BottomNavigationAction label="메뉴별" icon={<RestaurantMenuRoundedIcon />} />
                    <BottomNavigationAction onClick={navigateToLogin} label="" icon={<AccountCircleRoundedIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
