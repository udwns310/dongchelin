import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { FormControl, FormHelperText } from '@mui/material/';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignIn() {
    const [checked, setChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [loginError, setloginError] = useState('');
    const navigate = useNavigate();

    const onhandlePost = async (data) => {
        const { email, password } = data;
        const postData = { email, password };
        await axios
            .post('https://dongchelin.dev-ssu.com/auth/signin', postData)
            .then(function (response) {
                console.log(response, '성공');
                console.log(response.data.accessToken);
                if (response.data.accessToken) {
                    localStorage.setItem('loginToken', response.data.accessToken);
                    navigate('/');
                }
            })
            .catch(function (err) {
                console.log(err);
                console.log(postData);
                setloginError('로그인에 실패하였습니다. 다시한번 확인해 주세요.');
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const joinData = {
            email: data.get('email'),
            password: data.get('password'),
        };
        const { email, password } = joinData;

        // 이메일 유효성 체크
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(email)) setEmailError('올바른 이메일 형식이 아닙니다.');
        else setEmailError('');

        // 비밀번호 유효성 체크
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password)) setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
        else setPasswordState('');

        if (emailRegex.test(email) && passwordRegex.test(password)) {
            onhandlePost(joinData);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="이메일"
                                    name="email"
                                    autoFocus
                                    error={emailError !== '' || false}
                                />
                            </Grid>
                            <FormHelperText>{emailError}</FormHelperText>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="비밀번호"
                                    type="password"
                                    id="password"
                                    error={passwordState !== '' || false}
                                />
                            </Grid>
                            <FormHelperText>{passwordState}</FormHelperText>
                            <Grid item xs={12}>
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    로그인
                                </Button>
                            </Grid>
                        </Grid>
                        <FormHelperText>{loginError}</FormHelperText>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    비밀번호를 잊어버리셨나요?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {'계정이 없으신가요?'}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
