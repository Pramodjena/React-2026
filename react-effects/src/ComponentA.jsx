import { useEffect } from "react";

export default function ComponentA() {

  useEffect(() => {

    console.log("🟢 Component A Mounted");

    const timer = setInterval(() => {
      console.log("⏰ Timer A Running...");
    }, 1000);

    // ❌ No cleanup function

  }, []);

  return (
    <h2>❌ Component A (Without Cleanup)</h2>
  );
}