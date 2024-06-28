
import React, { useState } from 'react';
import './index.css';

const initialBoardState = [
  ['r', 'n', 'BB', 'q', 'k', 'BB', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP'],
  ['RR', 'NN', 'b', 'QQ', 'KK', 'b', 'NN', 'RR'],
];

const ChessboardComponent = () => {
  function exit(){
setBoardState(initialBoardState);
    alert('GAME OVER')
  }
  var w=0;
  const [boardState, setBoardState] = useState(initialBoardState);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleCellClick = (row, col) => {
    if ((selectedPiece&&(boardState[selectedPiece[0]][selectedPiece[1]]=='p'||boardState[selectedPiece[0]][selectedPiece[1]]=='r' ||boardState[selectedPiece[0]][selectedPiece[1]]=='n' || boardState[selectedPiece[0]][selectedPiece[1]]=='q' || boardState[selectedPiece[0]][selectedPiece[1]]=='k' ||boardState[selectedPiece[0]][selectedPiece[1]]=='BB')&&!(boardState[row][col]=='p'||boardState[row][col]=='r' || boardState[row][col]=='q' || boardState[row][col]=='k'||boardState[row][col]=='BB' || boardState[row][col]=='n')))
      {
      const [selectedRow, selectedCol] = selectedPiece;
      const newBoardState = boardState.map(row => row.slice());
      if(!(selectedPiece[0]==row&&selectedPiece[1]==col))
        {
        if((boardState[selectedPiece[0]][selectedPiece[1]]=='p' && (row==selectedPiece[0]+1 && col==selectedPiece[1]&&boardState[row][col]==null)||((row==selectedPiece[0]+1 && col==selectedPiece[1]-1)&& (boardState[row][col]!=null))||(row==selectedPiece[0]+1 && col==selectedPiece[1]+1)&& (boardState[row][col]!=null)&&!(boardState[row][col]=='p'|| boardState[row][col]=='r'|| boardState[row][col]=='n'|| boardState[row][col]=='k'|| boardState[row][col]=='q'|| boardState[row][col]=='BB')))
           {
      newBoardState[row][col] = boardState[selectedRow][selectedCol];
      newBoardState[selectedRow][selectedCol] = null;
      setBoardState(newBoardState);
      setSelectedPiece(null);
    }
    if((boardState[selectedPiece[0]][selectedPiece[1]]=='r') && ((row<=7 && col==selectedPiece[1])||((row==selectedPiece[0] && col<8))))
      {
        for(let k=0;k<8;k++)
          {
            if(!(boardState[selectedPiece[0]][k]=='p'|| boardState[selectedPiece[0]][k]=='r'|| boardState[selectedPiece[0]][k]=='n'|| boardState[selectedPiece[0]][k]=='k'|| boardState[selectedPiece[0]][k]=='q'|| boardState[selectedPiece[0]][k]=='BB')&&!(boardState[row][selectedPiece[1]]=='p'|| boardState[row][selectedPiece[1]]=='r'|| boardState[k][selectedPiece[1]]=='n'|| boardState[k][selectedPiece[1]]=='k'|| boardState[k][selectedPiece[1]]=='q'|| boardState[k][selectedPiece[1]]=='BB'))
              {
                w=0;
              }
              else
              w=1;
          }
          if(w==0){
        newBoardState[row][col] = boardState[selectedRow][selectedCol];
        newBoardState[selectedRow][selectedCol] = null;
        setBoardState(newBoardState);
        setSelectedPiece(null);
          }
      }
      if((boardState[selectedPiece[0]][selectedPiece[1]]=='q') && ((row<=7 && col==selectedPiece[1])||((row==selectedPiece[0] && col<=8))&&!(boardState[row][col]=='p'|| boardState[row][col]=='r'|| boardState[row][col]=='n'|| boardState[row][col]=='k'|| boardState[row][col]=='q'|| boardState[row][col]=='BB')))
        {

        }
  }
}
else if((selectedPiece&&(boardState[selectedPiece[0]][selectedPiece[1]]=='PP'||boardState[selectedPiece[0]][selectedPiece[1]]=='RR' ||boardState[selectedPiece[0]][selectedPiece[1]]=='NN' || boardState[selectedPiece[0]][selectedPiece[1]]=='QQ' || boardState[selectedPiece[0]][selectedPiece[1]]=='KK' ||boardState[selectedPiece[0]][selectedPiece[1]]=='b')&&!(boardState[row][col]=='PP'||boardState[row][col]=='RR' || boardState[row][col]=='QQ' || boardState[row][col]=='KK'||boardState[row][col]=='b' || boardState[row][col]=='NN')))
  {
  const [selectedRow, selectedCol] = selectedPiece;
      const newBoardState = boardState.map(row => row.slice());
      if(boardState[selectedPiece[0]][selectedPiece[1]]=='PP' && (row==selectedPiece[0]-1 && col==selectedPiece[1]&&boardState[row][col]==null)||((row==selectedPiece[0]-1 && col==selectedPiece[1]-1)&& (boardState[row][col]!=null))||(row==selectedPiece[0]-1 && col==selectedPiece[1]+1)&& (boardState[row][col]!=null)&&!(boardState[row][col]=='PP'|| boardState[row][col]=='RR'|| boardState[row][col]=='NN'|| boardState[row][col]=='KK'|| boardState[row][col]=='QQ'|| boardState[row][col]=='b'))
      {
 newBoardState[row][col] = boardState[selectedRow][selectedCol];
      newBoardState[selectedRow][selectedCol] = null;
      setBoardState(newBoardState);
      setSelectedPiece(null);
    }
  }
    else if (boardState[row][col]) {
      setSelectedPiece([row, col]);
    }
 
    console.log(`Clicked cell at row ${row + 1}, column ${col + 1}`);
  };

  const renderSquare = (i, j) => {
    const isBlack = (i + j) % 2 === 1;
    const squareClass = isBlack ? 'black' : 'white';
    const piece = boardState[i][j];

    return (
      <td
        key={`${i}-${j}`}
        className={`${squareClass} ${selectedPiece && selectedPiece[0] === i && selectedPiece[1] === j ? 'selected' : ''}`}
        onClick={() => handleCellClick(i, j)}
      >
        {piece && <img src={`/pieces/${piece}.png`} alt={piece} className="piece" />}
      </td>
    );
  };

  const renderRow = (i) => {
    const squares = [];
    for (let j = 0; j < 8; j++) {
      squares.push(renderSquare(i, j));
    }
    return <tr key={i}>{squares}</tr>;
  };

  const renderBoard = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(renderRow(i));
    }
    return rows;
  };

  return (
    <>
    <table className="chessboard">
      <tbody>{renderBoard()}</tbody>
    </table>
    <button onClick={exit}> QUIT </button>
    </>
  );
};

export default ChessboardComponent;
