import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

import BBLogo from "../assets/imgs/BBlogo.png";
import LanguageSelect from "../components/LanguageSelect";
import Loginbg from "../assets/imgs/Login/loginbg.png";
import PhoneInput from "../components/PhoneInput";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { login } from "../app/auth/authSlice";
import { useLoginMutation } from "../app/auth/authApi";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [
    loginUser,
    {
      isLoading,
    },
  ] = useLoginMutation();

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = async () => {
  if (!phoneNumber.trim()) {
    alert("Please enter your phone number.");
    return;
  }

  try {
    const result = await loginUser({
      username: phoneNumber,
    }).unwrap();

    dispatch(login(result.token));

    navigate("/");
  } catch (err) {
    alert("Invalid phone number.");
  }
};

  return (
    <div className="bg-page min-h-screen flex items-center justify-center">
      <div className="flex w-full max-w-[1760px] items-center justify-center shadow-xl rounded-xl">

        {/* Left Panel */}
        <div className="flex h-[864px] w-full max-w-[880px] flex-col p-8">

          {/* Header */}
          <div className="p-8">
            <div className="flex items-center justify-between">
              <NavLink to="/">
                <img
                  className="max-h-12 max-w-56 object-cover"
                  src={BBLogo}
                  alt="Buffalo Burger Logo"
                />
              </NavLink>

              <LanguageSelect />
            </div>

            {/* Main Content */}
            <div className="mt-12">
              <h3 className="text-left text-3xl font-black leading-none text-text-primary md:text-[48px]">
                HUNGRY?
              </h3>

              <h3 className="mt-2 text-left text-3xl font-black leading-none text-text-primary md:text-[48px]">
                LET'S FIX THAT
              </h3>

              <div className="mt-8">
                <PhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </div>

              <div className="mt-4">
                <Button
                  variant={phoneNumber.trim() ? "primary" : "ghost"}
                  size="lg"
                  className="w-full font-extrabold"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? "LOGGING IN..." : "CONTINUE"}
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pb-2 text-center text-sm text-text-muted">
            By continuing, you agree to our{" "}
            <NavLink
              to="/privacy"
              className="underline transition hover:text-text-primary"
            >
              privacy policy
            </NavLink>{" "}
            and{" "}
            <NavLink
              to="/terms"
              className="underline transition hover:text-text-primary"
            >
              terms of service
            </NavLink>
            .
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex h-[864px] w-full max-w-[880px] flex-col overflow-hidden rounded-lg">

          <div className="flex-1">
            <img
              className="h-full w-full object-cover"
              src={Loginbg}
              alt="X Urban Sandwich"
            />
          </div>

          <div className="relative -mt-30 z-10 h-[240px] bg-orange-500 p-8">
            <h1 className="text-4xl font-black text-white">
              GO BIG OR GO HUNGRY.
            </h1>

            <p className="mt-5 text-xl font-normal text-white">
              From X URBAN to HITCHHIKER we don't do small flavors.
              Welcome to the home of 100% real beef.
            </p>

            <div className="mt-10 flex justify-center gap-2">
              <div className="h-2 w-8 rounded-full bg-white" />
              <div className="h-2 w-2 rounded-full bg-white/60" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}