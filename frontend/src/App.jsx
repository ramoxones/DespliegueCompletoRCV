import { useEffect, useState } from 'react';
import './App.css'

function App() {
 const [message, setMessage] = useState('');
 useEffect(() => {
 fetch('/api/RCV')
 .then((res) => res.json())
 .then((data) => setMessage(data.message));
 }, []);
 return (
 <div>
 <h1>Frontend en React de Ramon Carrasco Velazquez</h1>
 <p>Esta aplicación se conecta al backend de Symfony pidiéndole una respuesta</p>
 <p>respuesta del Backend: {message || 'Esperando la respuesta de la practica de Ramon...'}</p>
 </div>
 );
}
export default App;
