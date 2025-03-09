"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <Card className="max-w-2xl w-full p-6 shadow-md border border-gray-200 bg-white text-gray-900 rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-black/80 to-gray-700/60 animate-shimmer text-transparent bg-clip-text">
            Welcome to My Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-gray-700">
            Hi, I&apos;m a passionate developer who loves crafting modern and functional
            applications. Take a look at my projects and get to know me better!
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className=" px-6 py-2 rounded-md">View Projects</Button>
            <Button variant="outline" className="px-6 py-2 rounded-md">
              Contact Me
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
