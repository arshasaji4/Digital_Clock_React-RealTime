import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  const formattedDate = time.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://media.istockphoto.com/id/2156774159/photo/modern-urban-parking-room-a-sleek-3d-illustration-showcasing-automotive-design-in-a-grunge.jpg?s=612x612&w=0&k=20&c=AAdwnWihFM1jRkJM1nANZgHFVZFsamPTjxf2hC1zjY8="
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Clock Card */}
      <div className="relative z-10 text-center px-6 py-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl">
        <h1 className="font-orbitron font-bold text-white tracking-wider
                       text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          {formattedTime}
        </h1>

        <h2 className="mt-4 text-white font-medium
                       text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {formattedDate}
        </h2>
      </div>
    </div>
  );
}

export default App;