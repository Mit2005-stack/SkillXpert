import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React, { useState } from "react"

import { useRegisterUserMutation, useLoginUserMutation } from "@/features/api/authApi"
import { Loader, Loader2 } from "lucide-react"

const Login = () => {
  const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });


  //connect to backend API for registration and login
  const [registerUser, 
    { data: registerData, 
      error: registerError, 
      isLoading: registerIsLoading, 
      isSuccess: registerIsSuccess }] = useRegisterUserMutation();


  const [loginUser,
    {
      data: loginData, 
      error: loginError, 
      isLoading: loginIsLoading, 
      isSuccess: loginIsSuccess
    }
  ] = useLoginUserMutation();


  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  }

  const handleRegistration = async(type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    // console.log("Registration data: ",type, inputData);

    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  }

  return (
    <div className="flex w-full justify-center items-center">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input type="text" name="name" value={signupInput.name} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Enter your name" required="true" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Email</Label>
                <Input type="email" name="email" value={signupInput.email} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Enter your email" required="true" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Password</Label>
                <Input type="password" name="password" value={signupInput.password} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Enter your password" required="true" />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={registerIsLoading} onClick={() => handleRegistration("signup")}>
                {
                registerIsLoading ? 
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
                </>
                : "Signup"
              }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Email</Label>
                <Input type="email" name="email" value={loginInput.email} onChange={(e) => changeInputHandler(e, "login")} placeholder="Enter your email" required="true" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Password</Label>
                <Input type="password" name="password" value={loginInput.password} onChange={(e) => changeInputHandler(e, "login")} placeholder="Enter your password" required="true" />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={loginIsLoading} onClick={() => handleRegistration("login")}>
              {
                loginIsLoading ? 
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
                </>
                : "Login"
              }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>



  )
}

export default Login
