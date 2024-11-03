"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/signin', formData);
            console.log('Sign in successful:', response.data);
        } catch (error) {
            console.error('Sign in error:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-4">
                <h2 className="text-center mb-4">ĐĂNG NHẬP</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Tài khoản</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">
                            Đăng nhập
                        </button>
                        <button type="button" className="btn btn-secondary">
                            Đăng ký →
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
