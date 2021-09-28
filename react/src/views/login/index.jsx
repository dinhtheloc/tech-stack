import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {

    return (
        <div className='p-4 bg-gray-100' style={{
            minHeight: 'calc(100vh - 102px)'
        }}>
            <div className='flex justify-center mt-12'>
                <div className='w-1/2 p-8 shadow-lg border rounded-xl '>
                    <div className='text-3xl text-center'>Welcome to DEV Community</div>
                    <div className='text-center mt-2'>Have a password? Continue with your email address</div>

                    <div className='mt-4'>
                        <label>Email</label>
                        <Input></Input>
                    </div>
                    <div className='mt-4'>
                        <label>Password</label>
                        <Input type='password'></Input>
                    </div>

                    <div className='mt-4'>
                        <Button>Continue</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;