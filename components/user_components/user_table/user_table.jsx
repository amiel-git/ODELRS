"use client";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { redirect } from 'next/navigation';


export default function UserTable(props){

    const users = props.users

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const columns = [
        { id: 'firstName', label: 'First name', minWidth: 200 },
        { id: 'lastName', label: 'Last name', minWidth: 200 },
        { id: 'email', label: 'Email address', minWidth: 320 },
        {
          id: 'region',
          label: 'Region',
          minWidth: 150,
          align: 'left',
          format: (value) => value,
        },
        { id: 'role', label: 'Role', minWidth: 150 },
        { id: 'status', label: 'Status', minWidth: 150 },
      ];

      return (
        <Paper sx={{ minHeight: "550px", border:"1px solid #ccc", borderRadius:"5px", 
            boxShadow:"-7px -7px 16px 0 #FFFFFF, 7px 7px 10px -4px rgba(116,150,179,0.27);" 
        }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, background:"#0240a6",color:"white", fontWeight:"700"}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row,idx) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell 
                                key={column.id} 
                                align={column.align} 
                                onClick={() => {
                                    redirect(`/users/${row.id}`)
                                }}
                                sx={{cursor:"pointer"}}
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      );
}
