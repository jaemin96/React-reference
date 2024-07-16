import { useEffect, useRef } from 'react';

export const useCanvas = (width: number, height: number, backgroundColor:string = "transparent") => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if(canvas) {
            canvas.style.backgroundColor = backgroundColor;
            canvas.width = width;
            canvas.height = height;
        }

        // Clear canvas
        return () => {
            canvas && ctx?.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, [backgroundColor, width, height]);

    return canvasRef;
};