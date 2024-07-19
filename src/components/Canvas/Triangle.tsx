import { useEffect } from 'react';
import { useCanvas } from '../../hooks';

export const Triangle = () => {
    const tgRef = useCanvas(300, 300, "#fff");
    const radius = 60;
    const spikes = 3;
    const step = (Math.PI * 2) / 3; // 삼각형의 한 각 60도, 내각은 120도

    useEffect(() => {
        const canvas = tgRef.current;
        const ctx = canvas?.getContext("2d");
        if(!ctx) return;

        let rot = Math.PI / 2 * 3;
        let cx = 150;
        let cy = 150;
        let x = cx; 
        let y = cy; 

        ctx.beginPath();
        ctx.moveTo(cx, cy - radius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * radius;
            y = cy + Math.sin(rot) * radius;
            rot += step;
            ctx.lineTo(x, y);
        }
        ctx.lineTo(cx, cy - radius);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }, [tgRef, step]);

    return <canvas ref={tgRef} />
};