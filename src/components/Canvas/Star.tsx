import { useEffect } from 'react';
import { useCanvas } from '../../hooks'

// 삼각함수의 성질을 통해 [x좌표는 반지름*cos(이동각도), y좌표는 반지름*sin(이동각도)] 임을 이용하자.

export const Star = () => {
    const starRef = useCanvas(300, 300, "#fff");
    let innerRadius = 30;
    let outerRadius = 60;
    const spikes = 5;
    const stepRotate = Math.PI / spikes; // 360도를 10번 회전하므로 36도 (PI는 180도로 각 외부점으로 나누면 36도)

    useEffect(() => {
        const canvas = starRef.current;
        const ctx = canvas?.getContext("2d");
        if (!ctx) return;

        let rotate = Math.PI / 2 * 3; // 초기 각도는 270도로 설정하여 별의 최상단이 (0, outerRadius) 가 되도록
        let cx = 150; // 중심점 x좌표
        let cy = 150; // 중심점 y좌표
        let x = cx; // stepRotate 만큼 이동하는 x좌표
        let y = cy; // stepRotate 만큼 이동하는 y좌표

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius); // 캔버스는 y축이 값이 작아질수록 위로 이동하는 것이기 때문에 중앙점에서 외부 반지름을 빼준다
        // (외부 -> 내부 -> 외부) * spikes
        for (let i = 0; i < spikes; i++) {
            x = cx + outerRadius * Math.cos(rotate);
            y = cy + outerRadius * Math.sin(rotate);
            rotate += stepRotate;
            ctx.lineTo(x, y);

            x = cx + innerRadius * Math.cos(rotate);
            y = cy + innerRadius * Math.sin(rotate);
            rotate += stepRotate;
            ctx.lineTo(x, y);
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath(); 
    }, [starRef, innerRadius, outerRadius, stepRotate]);

    return (
        <>
            <canvas ref={starRef}/>
        </>
    )
}