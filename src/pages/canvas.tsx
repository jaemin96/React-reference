import { CosGraph, SinGraph, Star, Straight, TanGraph } from '../components/Canvas';

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
            </div>
        </>
    )

};

export default CanvasPage;