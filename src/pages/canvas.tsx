import { CosGraph, SinGraph, Star, Straight, TanGraph, Triangle } from '../components/Canvas';

const CanvasPage = () => {
    return (
        <>
            <header>Canvas Page</header>
            <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
                <Straight />
                <SinGraph />
                <CosGraph />
                <TanGraph />
                <Star />
                <Triangle />
            </div>
        </>
    )

};

export default CanvasPage;