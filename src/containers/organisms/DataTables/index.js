import React, {Component} from 'react';
import 'jquery';
import { Container, Button, TableContainer, TableHead, TableCell, Table, Paper, TableRow, TableBody} from '@material-ui/core';



class DataTables extends Component {

    render() {
        const { data, renderGambar, renderAksiDariApp, dataDariForm } = this.props;
        return (

                <TableContainer className='table'>
                    <Table  aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <TableCell>No. Registrasi</TableCell>
                            <TableCell align="right">Nama Lengkap</TableCell>
                            <TableCell align="right">Jenis Kelamin</TableCell>
                            <TableCell align="right">Tempat Lahir</TableCell>
                            <TableCell align="right">Agama</TableCell>
                            <TableCell align="right">Alamat</TableCell>
                            <TableCell align="right">No. Telepon</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Gambar</TableCell>
                            <TableCell align="right">Aksi</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        
                                {dataDariForm.map((val, idx) => (
                            <TableRow >
                            <>
                            <TableCell component="th" scope="row">{idx + 1}</TableCell>
                            <TableCell align="right">{val.namaLengkap}</TableCell>
                            <TableCell align="right">{val.kelamin}</TableCell>
                            <TableCell align="right">{val.tempatLahir}</TableCell>
                            <TableCell align="right">{val.agama}</TableCell>
                            <TableCell align="right">{val.alamat}</TableCell>
                            <TableCell align="right">{val.noTelp}</TableCell>
                            <TableCell align="right">{val.email}</TableCell>
                            <TableCell align="right">{renderGambar(val.imagePreviewUrl)}</TableCell>
                            <TableCell align="right">{renderAksiDariApp(idx)}</TableCell>
                            </>
                            </TableRow>
                            ))}
                        
                        </TableBody>
                    </Table>
                    </TableContainer>

        )
    }
}


export default DataTables;