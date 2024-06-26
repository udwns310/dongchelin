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

export default function SignUp() {
    const [checked, setChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    const handleAgree = (event) => {
        setChecked(event.target.checked);
    };

    const onhandlePost = async (data) => {
        const { email, name, nickname, password } = data;
        const postData = { email, name, nickname, password };
        // post
        await axios
            .post('https://dongchelin.dev-ssu.com/auth/signup', postData)
            .then(function (response) {
                console.log(response, '성공');
                navigate('/login');
            })
            .catch(function (err) {
                console.log(err);
                setRegisterError('회원가입에 실패하였습니다. 다시한번 확인해 주세요.');
            });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const joinData = {
            email: data.get('email'),
            name: data.get('name'),
            nickname: data.get('nickname'),
            password: data.get('password'),
        };
        const { email, name, nickname, password } = joinData;

        // 이메일 유효성 체크
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(email)) setEmailError('올바른 이메일 형식이 아닙니다.');
        else setEmailError('');

        // 비밀번호 유효성 체크
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password)) setPasswordState('숫자+영문자 조합으로 8자리 이상 입력해주세요!');
        else setPasswordState('');

        // 이름 유효성 검사
        const nameRegex = /^[가-힣a-zA-Z]+$/;
        if (!nameRegex.test(name) || name.length < 1) setNameError('올바른 이름을 입력해주세요.');
        else setNameError('');

        // 회원가입 동의 체크
        if (!checked) alert('회원가입 약관에 동의해주세요.');

        if (emailRegex.test(email) && passwordRegex.test(password) && nameRegex.test(name) && checked) {
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <FormControl component="fieldset" variant="standard">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        autoFocus
                                        fullWidth
                                        type="email"
                                        id="email"
                                        name="email"
                                        label="이메일 주소"
                                        error={emailError !== '' || false}
                                    />
                                </Grid>
                                <FormHelperText>{emailError}</FormHelperText>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        name="password"
                                        label="비밀번호 (숫자+영문자 8자리 이상)"
                                        error={passwordState !== '' || false}
                                    />
                                </Grid>
                                <FormHelperText>{passwordState}</FormHelperText>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="이름"
                                        error={nameError !== '' || false}
                                    />
                                </Grid>
                                <FormHelperText>{nameError}</FormHelperText>
                                <Grid item xs={12}>
                                    <TextField required fullWidth id="nickname" name="nickname" label="별명" />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox onChange={handleAgree} color="primary" />}
                                        label="회원가입 약관에 동의합니다."
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} size="large">
                                회원가입
                            </Button>
                        </FormControl>
                        <FormHelperText>{registerError}</FormHelperText>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
