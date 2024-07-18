import { CosGraph, SinGraph, Straight, TanGraph } from '../components/Canvas';

const CanvasPage = () => {
    return (
        <>
            <header>Canvas Page</header>
            <div style={{display: "flex", gap: "1rem"}}>
                <Straight />
                <SinGraph />
                <CosGraph />
                <TanGraph />
            </div>
        </>
    )

};

export default CanvasPage;