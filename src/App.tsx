import { useState, useRef, useEffect } from 'react';
import { Circle } from './Circle/Circle';
import './App.css';

function App() {

    const [activeColor, setActiveColor] = useState<'red' | 'orange' | 'green'>('red');

    const redRef = useRef<HTMLDivElement>(null);
    const orangeRef = useRef<HTMLDivElement>(null);
    const greenRef = useRef<HTMLDivElement>(null);

    const refs = {
        red: redRef,
        orange: orangeRef,
        green: greenRef
    }

    const handleActivate = (color: 'red' | 'orange' | 'green' ) => {
        setActiveColor(color);
        if (refs[color].current) {
            refs[color].current.focus()
        };
    };

    useEffect(() => {
        if(refs[activeColor].current) {
            refs[activeColor].current.focus();
        }
    }, []);

    return (
        <div className="semaphore-container">
            <div className="semaphore-item">
                <Circle 
                    ref={redRef} 
                    onClick={() => {handleActivate('red')}} 
                    tabIndex={1} 
                    color="red" 
                    active={activeColor === 'red'} 
                />
            </div>
            <div className="semaphore-item">
                <Circle 
                    ref={orangeRef} 
                    onClick={() => {handleActivate('orange')}} 
                    tabIndex={2} 
                    color="orange" 
                    active={activeColor === 'orange'} 
                />
            </div>
            <div className="semaphore-item">
                <Circle 
                    ref={greenRef} 
                    onClick={() => {handleActivate('green')}} 
                    tabIndex={3} 
                    color="green" 
                    active={activeColor === 'green'} 
                />
            </div>
        </div>
    );
}

export default App;
