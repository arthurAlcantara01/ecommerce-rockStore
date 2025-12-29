import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)
