import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Login = () => {
  return (
    <div className="w-full h-screen border grid grid-cols-2">
      <div className="left hidden lg:block w-full h-screen p-10 bg-[#18181B]">
        <div className="flex flex-col justify-between">
          <div>⚛</div>
          <div className="flex items">
            Acme Inc “This library has saved me countless hours of work and
            helped me deliver stunning designs to my clients faster than ever
            before.” Sofia Davis
          </div>
        </div>
      </div>
      <div className="right w-full p-10">
        <div className="text-end">
          <Link href="#" color="primary" className="text-sm">
            Sign Up
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <div className="text-center">
            <h1 className="font-bold mb-1 text-lg">Create an account</h1>
            <p className="text-gray-500 text-sm">
              Enter your email below to create your account
            </p>
          </div>
          <div className="mt-5">
            <Input
              accept="email"
              placeholder="example@gmail.com"
              className="w-[350px]"
            />
            <Input
              accept="password"
              placeholder="password123"
              className="w-[350px] mt-4"
            />
            <Button className="mt-4 w-[350px]">Login</Button>
          </div>
          <div className="mt-5">
            <span className="flex text-gray-300">or continue with</span>
          </div>
          <div className="flex flex-col w-[350px]">
            <Button
              className="mt-4 mb-2 flex justify-center items-center"
              variant="outline"
            >
              <FcGoogle className="mx-1" />
              Google
            </Button>

            <Button
              className="flex justify-center items-center"
              variant="outline"
            >
              <FaGithub className="mx-1" />
              GitHub
            </Button>
          </div>
          <div className="mt-5 text-sm text-center">
            <p className="text-balance">
              By clicking continue, you agree to our{" "}
              <span className="underline">Terms</span> <br />
              <span className="underline"> of Service</span> and{" "}
              <span className="underline">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
