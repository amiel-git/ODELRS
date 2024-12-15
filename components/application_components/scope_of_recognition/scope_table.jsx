"use client";

import styles from './component.module.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import Image from 'next/image';
import { deleteTrackRecord } from '@/app/lib/lab_actions';
import { useActionState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


export default function ScopeTable(props){

    const records = props.records
    const lab = props.lab


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [deleteFormState, deleteFormAction] = useActionState(deleteTrackRecord, {error:null})
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState("success")
    const [selectedRecordId, setSelectedRecordId] = useState("")
    const [showModalDelete, setShowModalDelete] = useState(false)

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackBar(false);
    };
    function toggle_delete_modal() {
      setShowModalDelete(!showModalDelete)

      if(!showModalDelete === false){
        setSelectedRecordId("")
      }
  }


    useEffect(() => {
      if(Object.keys(deleteFormState).includes("success")){
          toggle_delete_modal()
          if(deleteFormState.error === null){
              setSnackBarMessage(`Scope successfully removed.`)
              setOpenSnackBar(true)
              setSnackBarSeverity("success")
          } else {
              setSnackBarMessage("Unable to delete scope of recognition record!")
              setOpenSnackBar(true)
              setSnackBarSeverity("error")
          }
      }
    },[deleteFormState])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const columns = [
        { id: 'sampleType', label: 'Sample Type', minWidth: 250 },
        { id: 'parameter', label: 'Parameter', minWidth: 250 },
        { id: 'sampleMethod', label: 'Analytical Method', minWidth: 250 },
        { id: 'sampleReference', label: 'Reference', minWidth: 250 },
        { id: 'id', label: 'Action', minWidth: 50, align:"center"},
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
                          else if(column.id === "id"){
                            //For hyperlinks
                            return (
                                <TableCell 
                                    key={column.id} 
                                    align={"center"} 
                                >  
                                        <ClearIcon 
                                            sx={{fill:"darkslategray", cursor:"pointer"}}
                                            onClick={() => {
                                              setSelectedRecordId(value)
                                              toggle_delete_modal()
                                            }}
                                        /> 
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

          {showModalDelete && <div className={styles.overlay}></div>}

          {showModalDelete &&     
              <div className={styles.sub_modal_container}>
                  <div className={styles.close_button_container}>
                      <Image 
                          src="/icons/close-icon.png" 
                          alt="close-icon" 
                          height={15} 
                          width={15}
                          onClick={toggle_delete_modal}
                          className={styles.close_button}
                      />
                  </div>


                  <div className={styles.form_container}>
                    <div className={styles.form_header}>
                        <h2>Delete track record</h2>
                        <p>Are you sure you want to delete this track record?</p>
                        <hr />
                    </div>
                    <form action={deleteFormAction}>
                      <input type="text" name='recordId' hidden readOnly value={selectedRecordId}/>
                      <input type="text" name='labId' hidden readOnly value={lab.id}/>
                      <div className={styles.row_button_container}>
                            <button className={styles.remove_button_cancel} onClick={toggle_delete_modal}>
                              Cancel
                          </button>
                          <button className={styles.remove_button}>
                              Delete
                          </button>
                      </div>
                    </form>
                    
                  </div>

              </div>
          }
          <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleCloseSnackBar} anchorOrigin={{vertical:"bottom", horizontal:"center"}}>
              <Alert
                  onClose={handleCloseSnackBar}
                  severity={snackBarSeverity}
                  variant="filled"
                  sx={{ width: '100%' }}
              >
                  {snackBarMessage}
              </Alert>
          </Snackbar>
        </Paper>
      );
}
