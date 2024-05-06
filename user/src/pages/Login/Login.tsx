import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../services/user.services";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user.atom";
import { url } from "inspector";
import { Link } from "react-router-dom";
import "../../assets/css/log-sign.css";
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
const Login2 = function () {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState);
    const [error, setError] = useState("");
    const onChangeInput = () => {
        setError("");
    };
    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        let data = await apiLogin(values);
        if (data && data.message) {
            alert("fail");
            setError(data.message);
        } else {
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
            navigate("/");
            alert('Chào mừng bạn quay lại, ' + data.username)

        }
    };

    return (
        <>
            <div style={{
                height: 900,
                paddingTop: 10,
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/login-bg.png'})`,
                backgroundSize: 'cover',
                
            }}>
                <div className="login_container" >
                    <img src="img/logo.png" style={{ width: 50, height: 50 }} />
                    <form action="">
                        <div className="title">
                            Đăng nhập
                        </div>
                    </form>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600, marginLeft: "-5%", marginTop: "30px" }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Tài khoản"
                            name="username"
                            rules={[
                                { required: true, message: "Tài khoản không được rỗng!" },
                                { min: 3, message: "Độ dài tối thiểu của tài khoản phải là 3!" },
                            ]}
                        >
                            <Input onChange={() => onChangeInput()} />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                { required: true, message: "Mật khẩu không được rỗng!" },
                                { min: 5, message: "Độ dài tối thiểu của mật khẩu phải là 6!" },
                                { max: 20, message: "Độ dài tối đa của mật khẩu là 20!" },
                            ]}
                        >
                            <Input.Password onChange={() => onChangeInput()} />
                        </Form.Item>
                        {error !== "" ? (
                            <Form.Item
                                wrapperCol={{ offset: 8, span: 16 }}
                                style={{ color: "red" }}
                            >
                                <label>{error}</label>
                            </Form.Item>
                        ) : (
                            ""
                        )}
                        <div style={{ justifyContent: "center", marginLeft: "20px" }}>

                            <Form.Item<FieldType>
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{ offset: 8, span: 16 }}
                            >
                                <Checkbox>Ghi nhớ</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" style={{ backgroundColor: "darkseagreen" }}>
                                    Đăng nhập
                                </Button>
                            </Form.Item>

                        </div>
                    </Form>

                    <div className="option">hoặc bạn có thể đăng nhập với</div>
                    <div className="gg">
                        <a href="#">
                            <i className="fab fa-google" />
                            Google
                        </a>
                    </div>
                    <div className="facebook">
                        <a href="#">
                            <i className="fab fa-facebook-f" />
                            Facebook
                        </a>
                    </div>
                    <div>Chưa có tài khoản ? </div>
                    <Link id="register" to={"/sign-up"}>Đăng ký ngay</Link>
                    {/* <a id="register" href="signup.html">
                        Đăng ký ngay
                    </a> */}
                </div>
            </div>

        </>
    );
};
export default Login2;
