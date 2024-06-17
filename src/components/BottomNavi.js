import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Tooltip } from 'antd';

export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'warning',
            content: '로그아웃 되었습니다.',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
                fontSize: '20px',
            },
        });
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigate = useNavigate();

    const navigateToLogin = () => {
        if (localStorage.getItem('loginToken')) {
            localStorage.removeItem('loginToken');
            navigate('/login');
            success();
        } else {
            navigate('/login');
        }
    };
    const navigateToHome = () => {
        navigate('/');
    };
    const navigateToRank = () => {
        navigate('/ranking');
    };

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            {contextHolder}
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation value={value} onChange={handleChange}>
                    {' '}
                    {/*라벨 표시 안되는 바텀바*/}
                    <BottomNavigationAction onClick={navigateToHome} label="홈" icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction onClick={navigateToRank} label="랭킹" icon={<StarRateIcon />} />
                    {localStorage.getItem('loginToken') ? (
                        <Tooltip title="누르면 로그아웃 됩니다.">
                            <BottomNavigationAction
                                onClick={navigateToLogin}
                                label=""
                                icon={<AccountCircleRoundedIcon />}
                            />
                        </Tooltip>
                    ) : (
                        <BottomNavigationAction
                            onClick={navigateToLogin}
                            label=""
                            icon={<AccountCircleRoundedIcon />}
                        />
                    )} 
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
