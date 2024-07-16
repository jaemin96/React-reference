import { useEffect } from 'react';
import { useCanvas } from '../../hooks';

export const Straight = () => {
    const straightRef = useCanvas(300, 300, "#fff");

    useEffect(() => {
        const canvas = straightRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.lineTo(250, 150);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    }, [straightRef]);
    
    return (
        <canvas ref={straightRef} />
    )
};