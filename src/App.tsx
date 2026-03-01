import { useEffect } from 'react'
import { LandingElite } from './screens/LandingElite'

export function useSecurityShield() { 
  useEffect(() => { 
    const preventDefaultBehavior = (e: Event) => e.preventDefault(); 

    const preventKeyBoardUnsafe = (e: KeyboardEvent) => { 
      if ( 
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) || 
        (e.ctrlKey && ['U', 'S', 'P', 'C'].includes(e.key.toUpperCase())) 
      ) { 
        e.preventDefault(); 
      } 
    }; 

    document.addEventListener('contextmenu', preventDefaultBehavior); 
    document.addEventListener('dragstart', preventDefaultBehavior); 
    document.addEventListener('keydown', preventKeyBoardUnsafe); 

    return () => { 
      document.removeEventListener('contextmenu', preventDefaultBehavior); 
      document.removeEventListener('dragstart', preventDefaultBehavior); 
      document.removeEventListener('keydown', preventKeyBoardUnsafe); 
    }; 
  }, []); 
}

function App() {
  useSecurityShield()
  return <LandingElite />
}

export default App
