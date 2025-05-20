import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaClipboardList, FaBoxes } from "react-icons/fa";
import welcomeImage from "../assets/illistration.webp"; // make sure to import the image

function Welcome() {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-indigo-600 italic">
              Easy <span className="font-extrabold">Sales</span>
            </span>
          </h1>
          <p className="text-gray-500 mb-6 max-w-md">
            A modern, lightweight dashboard for managing your{" "}
            <strong>sales</strong>, <strong>purchases</strong>, and{" "}
            <strong>inventory</strong> — all in one place.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaClipboardList className="text-indigo-600" /> Track sales and
              purchases
            </li>
            <li className="flex items-center gap-2">
              <FaChartLine className="text-indigo-600" /> View reports and
              analytics
            </li>
            <li className="flex items-center gap-2">
              <FaBoxes className="text-indigo-600" /> Monitor inventory and low
              stock
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            <SignInButton>
              <button className="btn btn-primary">Login</button>
            </SignInButton>
            <SignUpButton>
              <button className="btn border border-indigo-500 text-indigo-500">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={welcomeImage}
            alt="Welcome Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
