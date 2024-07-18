import { CosGraph, SinGraph, Straight } from '../components/Canvas';

const CanvasPage = () => {
    return (
        <>
            <header>Canvas Page</header>
            <div style={{display: "flex", gap: "1rem"}}>
                <Straight />
                <SinGraph />
                <CosGraph />
            </div>
        </>
    )

};

export default CanvasPage;