"use client";
import { TypeAnimation } from "react-type-animation";

interface LoadingProps {
  onComplete(): void;
}

const LoadingScreen = ({ onComplete }: LoadingProps) => {
  const loadingText = () => {
    if (onComplete) {
      setTimeout(() => {
        onComplete();
      }, 3000);

      return (
        <TypeAnimation
          sequence={["<Welcome />", 3000]}
          speed={50}
          className="animate-shimmer bg-gradient-to-r from-white/40 via-white to-gray-300/80 bg-clip-text text-transparent"
        />
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      <div className="mb-4 md:text-7xl text-2xl font-mono font-bold">{loadingText()}</div>

      <div className="w-[400px] h-[2px] bg-blue-800 rounded relative overflow-hidden">
        <div className="w-[50%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
