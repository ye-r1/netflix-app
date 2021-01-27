import React, {useEffect, useState} from "react";
import {Form, Input, Button} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Container, FormStyled, LoginGroup} from "./index.Styled";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


function Login() {
    const {
        movie = []
    } = useSelector(state => state.app);

    const [background, setBackground] = useState('');

    useEffect(() => {
        const result = movie.length && movie[Math.floor(Math.random() * movie.length)].background_image_original;
        result && setBackground(result);
    }, [movie]);


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Container background={background}>
            <LoginGroup>
                <h2>Member Login</h2>
                <FormStyled
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        className="user-name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-btn">
                            Log in
                        </Button>
                        or <Link to={"/member/join"} className="login-form-link">register now!</Link>
                    </Form.Item>
                </FormStyled>
            </LoginGroup>
        </Container>
    )
}


export default Login;