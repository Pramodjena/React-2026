import { useEffect } from "react";

export default function ComponentB() {

  useEffect(() => {

    console.log("🟢 Component B Mounted");

    const timer = setInterval(() => {
      console.log("⏰ Timer B Running...");
    }, 1000);

    return () => {
      console.log("🧹 Cleaning Timer B...");
      clearInterval(timer);
    };

  }, []);

  return (
    <h2>✅ Component B (With Cleanup)</h2>
  );
}