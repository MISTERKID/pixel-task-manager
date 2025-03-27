
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MainNavigationMenu } from "@/components/NavigationMenu";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <MainNavigationMenu />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pixel-grid">
        <div className="text-center bg-white border-4 border-pixelRed p-8 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] animate-pixel-bounce">
          <div className="inline-block p-4 bg-pixelRed rounded-none mb-4">
            <AlertTriangle size={32} className="text-white pixelate" />
          </div>
          <h1 className="text-4xl font-bold mb-4 font-pixel">404</h1>
          <p className="text-xl text-gray-600 mb-4 font-pixel">Oops! Page not found</p>
          <a href="/" className="inline-block px-6 py-3 bg-pixelBlue text-white font-pixel hover:bg-pixelBlue/80 rounded-none border-2 border-pixelDarkGray shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
