import { useEffect, useState } from "react"


function App() {
  const [enabled, setEnabled] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    console.log('useEffect', { enabled })
    const handleMove = (e) => {
      const { clientX, clientY } = e
      console.log('handleMove',{ clientX, clientY })
      setPosition({ x: clientX, y: clientY }) // Actualiza la posición del puntero
    }
    if (enabled) {
      window.addEventListener('mousemove', handleMove) // Agrega el evento cuando se activa, pero cuando se desactiva no se remueve, sigue "suscrito"
    }

    // Remueve el evento cuando se desactiva, sino se remueve, pueden haber fallas de rendimiento serias
    // -> Cuando se desmonta el componente, se remueve el evento
    // -> Cuando cambian las dependencias, se remueve el evento

    return () => {
      window.removeEventListener('mousemove', handleMove) // Remueve el evento cuando se desactiva, sino se remueve, pueden haber fallas de rendimiento serias
    }
  }, [enabled])

    return (
      <main>
      <div style ={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: enabled ? 'none' : 'auto',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
      </main>
    )
}

export default App
