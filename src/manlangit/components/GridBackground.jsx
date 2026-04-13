import { useEffect, useRef } from 'react'

export function GridBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = e => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    let offsetX = 0
    let offsetY = 0
    const gridSize = 50
    let rafId

    const drawGrid = () => {
      // TRANSPARENT clear — does NOT paint black, so MatrixRain shows through
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mouse = mouseRef.current
      offsetX += 0.2
      offsetY += 0.2

      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
          const ax = x + (offsetX % gridSize)
          const ay = y + (offsetY % gridSize)
          const dx = mouse.x - ax
          const dy = mouse.y - ay
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxD = 200
          let opacity = 0.1
          let lw = 1
          if (dist < maxD) {
            const prox = 1 - dist / maxD
            opacity = 0.1 + prox * 0.4
            lw = 1 + prox * 2
          }
          ctx.strokeStyle = `rgba(0, 255, 0, ${opacity})`
          ctx.lineWidth = lw
          ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax, ay + gridSize); ctx.stroke()
          ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax + gridSize, ay); ctx.stroke()
          if (dist < maxD) {
            const r = 2 + (1 - dist / maxD) * 3
            ctx.beginPath()
            ctx.arc(ax, ay, r, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`
            ctx.shadowBlur = 10
            ctx.shadowColor = '#00ff00'
            ctx.fill()
            ctx.shadowBlur = 0
          }
        }
      }
      rafId = requestAnimationFrame(drawGrid)
    }
    drawGrid()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 2 }}
    />
  )
}