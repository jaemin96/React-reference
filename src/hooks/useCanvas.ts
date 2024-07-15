import { useEffect, useRef } from 'react';

interface CanvasProps {
    backgroundColor: string;
    width: number;
    height: number;
}

export const useCanvas = ({backgroundColor, width, height}: CanvasProps) => {
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