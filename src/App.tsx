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
    
    // Ghosting de Elementos: Desativa eventos de ponteiro nas imagens
    const disableImageInteraction = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        img.style.pointerEvents = 'none';
        img.style.userSelect = 'none';
        img.setAttribute('draggable', 'false');
      });
    };

    document.addEventListener('contextmenu', preventDefaultBehavior); 
    document.addEventListener('dragstart', preventDefaultBehavior); 
    document.addEventListener('keydown', preventKeyBoardUnsafe); 
    
    // Executa a proteção de imagens ao carregar e quando o DOM mudar
    disableImageInteraction();
    const observer = new MutationObserver(disableImageInteraction);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => { 
      document.removeEventListener('contextmenu', preventDefaultBehavior); 
      document.removeEventListener('dragstart', preventDefaultBehavior); 
      document.removeEventListener('keydown', preventKeyBoardUnsafe); 
      observer.disconnect();
    }; 
  }, []); 
}

function App() {
  useSecurityShield()
  return <LandingElite />
}

export default App
