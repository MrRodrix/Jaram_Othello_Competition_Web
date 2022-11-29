import React from "react";
import { Grid, LinearProgress  } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

import "./Othello.scss";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#e7e4e4',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#000',
  },
}));


const Othello = ({ socket, room_id, player, turn, board , placeable}) => {
  // arr[8][8]
  
  const PutStone = (x, y) => {
    if (turn === socket.id) {
      for(let index = 0; index < placeable[0].length; index++){
        if((placeable[0][index][0] === x) && (placeable[0][index][1] === y)){
          socket.emit("put_stone", { index });
          return;
        }
      }
    }
  };
  return (
    <Grid container direction="column"alignItems="center" justifyContent="center" columns={2}>
      <Grid item xs={2}>
      <table className="Othello_table">
        <tbody>
          {board.map((i, idx) => {
            return (
              <tr key={idx}>
                {i.map((j, idx2) => {
                  return (
                    <td
                      onClick={() => PutStone(idx, idx2)}
                      className={"Othello_td board_color_" + ((idx + idx2) % 2)+" "}
                      key={idx2}>
                      <div
                        className={placeable.length > 0 ?
                           ((placeable[0].some(([x,y]) => x === idx && y === idx2 && turn === socket.id) ? "placeable" :"") +
                            (j === 0 ? "black" : "") +
                            (j === 1 ? "white" : "")):""
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br/>
      <BorderLinearProgress variant="determinate" value={placeable.length>0 ? placeable[1][0]/(placeable[1][0]+placeable[1][1])*100 : "0"} />
      </Grid>
      <Grid container alignItems="center" justifyContent="center" columns={2} style={{fontSize:"2em",fontWeight:"bold"}}>
        <Grid item xs={1} style={{textAlign:"left"}}> Pretas ⚫ {placeable.length > 0 ? placeable[1][0]: ""}</Grid>
        <Grid item xs={1} style={{textAlign:"right"}}>{placeable.length > 0 ? placeable[1][1]: ""} Brancas ⚪</Grid>
      </Grid>
      
        {placeable.length > 0 ?
         placeable[2].length === 0?
          placeable[1][1]===placeable[1][0]?
          <h1>Infelizmente Sem Sorteio</h1>:
            placeable[1][1]>placeable[1][0]?
            <h1>{placeable[1][1]-placeable[1][0]}VITORIA DAS ⚪ POR 100!</h1>:
            <h1>{placeable[1][0]-placeable[1][1]}VITORIA DAS ⚫ POR 100!</h1>:
         ""
        :""}
      
    </Grid>
  );
};

export default Othello;
