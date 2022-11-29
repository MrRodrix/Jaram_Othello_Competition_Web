import React from "react";
import { Button, ButtonGroup , Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination, Paper, Box} from '@mui/material';

const RoomContainer = ({ socket, room_list }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const createRoom = () => socket.emit("create_room");
  const joinAI = () => socket.emit("join_ai");

  const joinRoom = (room_id) => socket.emit("join_room", { room_id });

  return (
    <Paper elevation={5} justifyContent="center" style={{ padding: '20px' }}>
      <Box textAlign='center'>
        <ButtonGroup>
          <Button variant="contained" onClick={createRoom}>Criar Sala</Button>
          <Button variant="contained" onClick={joinAI}>Jogar com IA</Button>
        </ButtonGroup>
      </Box>
      <br/>
      <TableContainer style={{ display: 'flex', height: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {room_list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ room_id, room_status }, idx) => (
            <TableRow hover onClick={() => joinRoom(room_id)} key={idx}>
              <TableCell> {room_status}</TableCell>
              <TableCell> {room_id}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={room_list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default RoomContainer;
