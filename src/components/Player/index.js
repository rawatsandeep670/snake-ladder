import "./index.css";

const Player = ({ data, playerTurn, top, left }) => {
    return (
        <div className={`player-container ${data.id === playerTurn && "blink"}`} style={{
            top,
            left
        }}>
            {data.id}
        </div>
    )
};

export default Player;
