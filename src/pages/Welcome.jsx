import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaClipboardList, FaBoxes } from "react-icons/fa";
import welcomeImage from "../assets/illistration.webp";
import { useTranslation } from "react-i18next";

function Welcome() {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white ">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {t("heading")}{" "}
            <span className="text-indigo-600 italic">
              Easy <span className="font-extrabold">Sales</span>
            </span>
          </h1>
          <p className="text-gray-500 mb-6 max-w-md">{t("description")}</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaClipboardList className="text-indigo-600" />
              {t("feature1")}
            </li>
            <li className="flex items-center gap-2">
              <FaChartLine className="text-indigo-600" />
              {t("feature2")}
            </li>
            <li className="flex items-center gap-2">
              <FaBoxes className="text-indigo-600" />
              {t("feature3")}
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            <SignInButton redirectUrl="/">
              <button className="btn btn-primary">{t("login")}</button>
            </SignInButton>
            <SignUpButton redirectUrl="/">
              <button className="btn border border-indigo-500 text-indigo-500">
                {t("signup")}
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
