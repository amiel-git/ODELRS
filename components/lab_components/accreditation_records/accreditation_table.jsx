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
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';

export default function AccreditationRecordsTable(props){

    const records = props.accreditationRecords

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
        { id: 'accreditation_body', label: 'Accrediting Body / Address', minWidth: 250 },
        { id: 'scope', label: 'Nature / Scope of Accreditation', minWidth: 250 },
        { id: 'expiration', label: 'Expiration Date', minWidth: 250 },
        { id: 'certificate', label: 'Certificate', minWidth: 100, align:"center"},
      ];

      return (
        <Paper sx={{ minHeight: "450px", maxHeight:"500px", border:"1px solid #ccc", borderRadius:"5px", 
            boxShadow:"-7px -7px 16px 0 #FFFFFF, 7px 7px 10px -4px rgba(116,150,179,0.27);" 
        }}>
          <TableContainer sx={{height:"i"}}>
            <Table stickyHeader aria-label="sticky table" sx={{overflow:"auto"}}>
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
                {records
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          console.log(column.id)
                          if(column.id === "certificate"){
                            //For hyperlinks
                            return (
                                <TableCell 
                                    key={column.id} 
                                    align={"center"} 
                                >  
                                    <Link href={`/${value}`} target={"_blank"}>                                  
                                        <VisibilityIcon 
                                            sx={{fill:"darkslategray", cursor:"pointer"}}
                                        /> 
                                    </Link>
                                </TableCell>
                              );
                          }
                          else {
                            return (
                                <TableCell 
                                    key={column.id} 
                                    align={column.align} 
                                >
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                          }

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
            count={records.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      );
}
