import './Legend.css';

export default function Legend() {

    return (
        <div className="legend-frame">
            <h1>Treatments</h1>

            <div className="label">
                <div className="color-box block1" ></div>
                <p>A</p>
            </div>
            <div className="label">
                <div className="color-box block2"></div>
                <p>B</p>
            </div>
            <div className="label">
                <div className="color-box block3"></div>
                <p>C</p>
            </div>
            <div className="label">
                <div className="color-box block4"></div>
                <p>D</p>
            </div>
        </div>
    );
}