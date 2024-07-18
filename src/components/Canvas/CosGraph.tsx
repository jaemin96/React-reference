import { useEffect } from 'react';
import { useCanvas } from '../../hooks'

export const CosGraph = () => {
    const cosRef = useCanvas(300, 300, "#fff");
    const amplitude = 50;  // 진폭 (그래프의 높낮이)
    const frequency = 1;  // 주파수 (그래프의 반복주기 == (2파이 만큼의 sin 그래프의 반복 횟수))

    useEffect(() => {
        const canvas = cosRef.current;
        const ctx = canvas?.getContext("2d");
        if (!ctx) return;

        /* 좌표 그래프 뼈대그리기 */
        // y축
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(75, 250);
        ctx.stroke();
        ctx.closePath(); 

        // x축
        ctx.beginPath();
        ctx.moveTo(25, 200);
        ctx.lineTo(275, 200);
        ctx.stroke();
        ctx.closePath(); 

        // cos 그래프
        ctx.beginPath();
        ctx.moveTo(75, 150);
        
        for (let x = 0; x <= 2 * Math.PI * frequency; x += 0.01) {
          let y = Math.cos(x) * amplitude;
          ctx.lineTo(75 + x * 25, 200 - y);
        }

        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }, [cosRef]);

    return (
        <>
            <canvas ref={cosRef}/>
        </>
    )
}