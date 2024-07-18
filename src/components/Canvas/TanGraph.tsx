import { useEffect } from 'react';
import { useCanvas } from '../../hooks'

export const TanGraph = () => {
    const tanRef = useCanvas(300, 300, "#fff");
    const amplitude = 10;  // 진폭 (그래프의 높낮이)
    const frequency = 0.5;  // 주파수 (그래프의 반복주기 == (2파이 만큼의 sin 그래프의 반복 횟수))

    useEffect(() => {
        const canvas = tanRef.current;
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

        // tan 그래프
        ctx.beginPath();
        let firstPoint = true;
        
        for (let x = 0; x <= 2 * Math.PI * frequency; x += 0.01) {
          let y = Math.tan(x);

          if (Math.abs(y) > 10) {
            firstPoint = true;  // 무한대로 발산하는 구간을 피해 새로운 시작 지점을 설정
            continue;
          }

          let canvasX = 75 + x * 30;
          let canvasY = 200 - y * amplitude;

          if (firstPoint) {
            ctx.moveTo(canvasX, canvasY);
            firstPoint = false;
          } else {
            ctx.lineTo(canvasX, canvasY);
          }
        }
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }, [tanRef]);

    return (
        <>
            <canvas ref={tanRef}/>
        </>
    )
}