import "./index.css";

const Dice = ({ randomNumber, ...props }) => {
    return (<button className="dice-container" {...props}>
        {randomNumber}
    </button>);
};

export default Dice;
