import React from "react";
import { Chip, Paper, Button, Divider, Grid } from '@mui/material';
import { Done, Close, CheckCircleOutline } from '@mui/icons-material';
import "./Othello.scss";

const RoomInfo = ({ socket, room_id, room_status, player, spectator, turn}) => {
  /**
   * room_info :
   * {
   *     room_id,
   *     room_status,
   *     player[[id,isready]...],
   *     spectator[...]
   * }
   * game_info :
   * {
   *     room_id,
   *     player[[id,isready]...],
   *     turn,
   *     board[8][8]
   * }
   */
  return (
    <Paper elevation={5} justifyContent="center" style={{ padding: '20px' }}>
      <h1>{room_status}     
      {player.map(([id,isready], idx) => 
        id===socket.id && isready === 0 ? 
        <Button variant="contained" onClick={() => socket.emit("ready")} endIcon={<CheckCircleOutline/>}>
          준비하기
        </Button> : ""
      )} </h1> 
      <Divider>Player</Divider>
      <Grid container columns={2}>
        {player.map(([id, isready], idx) => (
          <Grid item key={idx} xs={1}>
            <Chip color={id===turn?"primary":"default"} label={id} icon={isready ? <Done/> : <Close/>} variant={id === socket.id ? "" : "outlined"}/>
          </Grid>
        ))}    
      </Grid>
      <Divider>Spectator</Divider>
      <Grid container columns={2}>
          {spectator.map((id, idx) => (
            <Grid item key={idx} xs={1}>
              <Chip label={id} variant={id === socket.id ? "" : "outlined"}key={idx} />
            </Grid>
          ))}
      </Grid>
      </Paper>
  );
};

export default RoomInfo;
