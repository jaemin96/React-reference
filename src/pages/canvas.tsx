import { SinGraph, Straight } from '../components/Canvas';

const CanvasPage = () => {
    return (
        <>
            <header>Canvas Page</header>
            <div style={{display: "flex", gap: "1rem"}}>
                <Straight />
                <SinGraph />
            </div>
        </>
    )

};

export default CanvasPage;