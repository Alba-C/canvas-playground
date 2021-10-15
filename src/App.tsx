import { useRef } from "react";
import "./styles.css";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (canvasRef?.current !== null) {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    const ctx = canvasRef.current.getContext("2d");

    ctx?.beginPath();
    ctx!.lineWidth = 5;
    ctx!.strokeStyle = "purple";
    ctx?.moveTo(100, 100);
    ctx?.lineTo(700, 400);
    ctx?.moveTo(700, 100);
    ctx?.lineTo(100, 400);
    ctx?.stroke();

    ctx?.beginPath();
    ctx!.strokeStyle = "red";
    ctx?.moveTo(400, 250);
    ctx?.lineTo(100, 250);
    ctx?.moveTo(400, 250);
    ctx?.lineTo(700, 250);
    ctx?.stroke();

    for (let i = 0; i < 60; i++) {
      for (let j = 0; j < 60; j++) {
        ctx!.strokeStyle = `rgba(
          ${Math.floor(255 - 42.5 * i)},
          0,
        ${Math.floor(255 - 42.5 * j)}, 0.2)`;
        ctx?.beginPath();
        ctx!.lineWidth = 2;
        ctx?.arc(20 + j * 100, 10 + i * 50, 50, 0, Math.PI * 2, true);
        ctx?.stroke();
      }
    }
  }

  return (
    <div className="App">
      <canvas ref={canvasRef} className="canvas-main"></canvas>
    </div>
  );
}
