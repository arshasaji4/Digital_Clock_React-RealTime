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
    <div className="relative flex items-center justify-center h-screen w-full text-white font-orbitron">
      <img
        src="https://media.istockphoto.com/id/2156774159/photo/modern-urban-parking-room-a-sleek-3d-illustration-showcasing-automotive-design-in-a-grunge.jpg?s=612x612&w=0&k=20&c=AAdwnWihFM1jRkJM1nANZgHFVZFsamPTjxf2hC1zjY8="
        alt="Background"
        className="absolute w-full h-full object-cover mix-blend-overlay"
      />

      <div className="relative flex flex-col items-center">
        <h1 className="text-7xl font-bold">
          {formattedTime}
        </h1>

        <h2 className="text-3xl mt-4">
          {formattedDate}
        </h2>
      </div>
    </div>
  );
}

export default App;
