import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../services/user.services";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user.atom";
import { url } from "inspector";
import "../../assets/css/log-sign.css";
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
const Signup = function () {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState);
    const [error, setError] = useState("");
    const onChangeInput = () => {
        setError("");
    };
    // const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    //     let data = await apiLogin(values);
    //     if (data && data.message) {
    //         alert("fail");
    //         setError(data.message);
    //     } else {
    //         localStorage.setItem('user', JSON.stringify(data));
    //         setUser(data);
    //         navigate("/");
    //         alert('Chào mừng bạn quay lại, ' + data.username)

    //     }
    // };

    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        
            navigate("/");
            alert('Đăng kí tài khoản thành công. ')

        
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
                            Đăng kí
                        </div>
                    </form>
                    
                    {/* <form
                        action="#"
                        id="signupForm"
                    >
                        <div className="title">
                            Đăng kí
                        </div>
                        <div className="input-box underline">
                            <input
                                id="name"
                                placeholder="Họ tên"
                                required
                                type="text"
                            />
                            <div className="underline" />
                        </div>
                        <div className="input-box underline">
                            <input
                                id="email"
                                placeholder="Nhập Email hoặc SĐT"
                                required
                                type="text"
                            />
                            <div className="underline" />
                        </div>
                        <div className="input-box">
                            <input
                                id="pass"
                                placeholder="Tạo mật khẩu"
                                required
                                type="password"
                            />
                            <div className="underline" />
                        </div>
                        <div className="input-box">
                            <input
                                id="c_pass"
                                placeholder="Xác nhận mật khẩu"
                                required
                                type="password"
                            />
                            <div className="underline" />
                        </div>
                        <div className="input-box button">
                            <input
                                name=""
                                type="submit"
                                value="Continue"
                            />
                        </div>
                    </form> */}

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 800, marginLeft: "-5%", marginTop: "30px" }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tài khoản"
                            name="username"
                            rules={[
                                { required: true, message: "Tài khoản không được rỗng!" },
                                { min: 3, message: "Độ dài tối thiểu của tài khoản phải là 3!" },
                            ]}
                        >
                            <Input onChange={onChangeInput} />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                { required: true, message: "Mật khẩu không được rỗng!" },
                                { min: 6, message: "Độ dài tối thiểu của mật khẩu phải là 6!" },
                                { max: 20, message: "Độ dài tối đa của mật khẩu là 20!" },
                            ]}
                        >
                            <Input.Password onChange={onChangeInput} />
                        </Form.Item>

                        <Form.Item
                            label="Xác nhận MK"
                            name="confirmPassword"
                            rules={[
                                { required: true, message: "Xác nhận mật khẩu không được rỗng!" },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Mật khẩu xác nhận không trùng khớp!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password onChange={onChangeInput} />
                        </Form.Item>

                        {error !== "" && (
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ color: "red" }}>
                                <label>{error}</label>
                            </Form.Item>
                        )}

                        <div style={{ justifyContent: "center", marginLeft: "20px" }}>
                            {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox>Ghi nhớ</Checkbox>
                            </Form.Item> */}

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" style={{ backgroundColor: "darkseagreen" }}>
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>

                    <div className="option">hoặc bạn có thể đăng kí với</div>
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
                    <a id="register" href="signup.html">
                        Đăng ký ngay
                    </a>
                </div>
            </div>

        </>
    );
};
export default Signup;
