import { useEffect, useRef } from 'react';

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let offsetX = 0;
    let offsetY = 0;
    const gridSize = 50;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;

      // Slowly move grid
      offsetX += 0.2;
      offsetY += 0.2;

      // Draw grid lines
      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
          const actualX = x + (offsetX % gridSize);
          const actualY = y + (offsetY % gridSize);

          // Calculate distance from mouse
          const dx = mouse.x - actualX;
          const dy = mouse.y - actualY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;

          let opacity = 0.1;
          let lineWidth = 1;

          if (distance < maxDistance) {
            const proximity = 1 - distance / maxDistance;
            opacity = 0.1 + proximity * 0.4;
            lineWidth = 1 + proximity * 2;
          }

          ctx.strokeStyle = `rgba(0, 255, 0, ${opacity})`;
          ctx.lineWidth = lineWidth;

          // Vertical line
          ctx.beginPath();
          ctx.moveTo(actualX, actualY);
          ctx.lineTo(actualX, actualY + gridSize);
          ctx.stroke();

          // Horizontal line
          ctx.beginPath();
          ctx.moveTo(actualX, actualY);
          ctx.lineTo(actualX + gridSize, actualY);
          ctx.stroke();

          // Draw intersection points
          if (distance < maxDistance) {
            const dotRadius = 2 + (1 - distance / maxDistance) * 3;
            ctx.beginPath();
            ctx.arc(actualX, actualY, dotRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00ff00';
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 2 }}
    />
  );
}