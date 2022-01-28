import { useEffect, useMemo } from "react";
import "./index.css";
import { checkStackIsExist, checkLadderIsExist } from "../../Service/playerService";

const Board = ({ cellMatrix }) => {

    const getBoardColumn = (numberOfColumns, currentRow) => {
        const columnList = [];
        for (var column = 0; column < numberOfColumns; column++) {
            const index = (currentRow * 10 + column) + 1;
            const isSnackExist = checkStackIsExist(index) !== -1;
            const isLadderExist = checkLadderIsExist(index) !== -1;

            const columnElem = <div index={index} className="cell">
                {index}

                {
                    isSnackExist && (
                        <div className="snack"></div>
                    )
                }

                {
                    isLadderExist && (
                        <div className="ladder"></div>
                    )
                }
            </div>;
            columnList.push(columnElem)
        }
        return columnList;
    };

    const getBoardCells = useMemo(() => {
        const rowList = [];

        for (var row = 0; row < cellMatrix[0]; row++) {
            const rowElem = (
                <div row={row} className="row">
                    {getBoardColumn(cellMatrix[1], row)}
                </div>
            )

            rowList.push(rowElem);
        }

        return rowList;
    }, [cellMatrix]);

    return (
        <div className="container">
            <div className="board-container">
                {getBoardCells}
            </div>
        </div>
    )
};

export default Board;
