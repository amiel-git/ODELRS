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
import ClearIcon from '@mui/icons-material/Clear';
import Link from 'next/link';

export default function AttachmentTable(props){

    const records = props.records

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
        { id: 'attachment_name', label: 'File Name', minWidth: 300 },
        { 
          id: 'date_added', label: 'Date Added', minWidth: 200,

         },
        { id: 'addedByEmail', label: 'Added By', minWidth: 250 },


        { id: 'url_path', label: 'View', minWidth: 100, align:"center" },
        { id: 'id', label: 'Delete', minWidth: 100, align:"center" },
      ];

      return (
        <Paper sx={{ minHeight: "100px", maxHeight:"350px", border:"1px solid #ccc", borderRadius:"5px", 
            boxShadow:"-7px -7px 16px 0 #FFFFFF, 7px 7px 10px -4px rgba(116,150,179,0.27);" 
        }}>
          <TableContainer sx={{height:"i"}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, background:"#0240a6",color:"white", fontWeight:"600"}}
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
                          if(column.id === "url_path"){
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
                          else if(column.id === "id"){
                            //For hyperlinks
                            return (
                                <TableCell 
                                    key={column.id} 
                                    align={"center"} 
                                >  
                                        <ClearIcon 
                                            sx={{fill:"darkslategray", cursor:"pointer"}}
                                        /> 
                                </TableCell>
                              );
                          }
                          else {
                            return (
                              <TableCell 
                                  key={column.id} 
                                  align={column.align} 
                                  onClick={() => {
                                      console.log("Clicked")
                                  }}
                                  sx={{cursor:"pointer"}}
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
