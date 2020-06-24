import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { Component } from 'react';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
const SimpleSelect = () => {
    const classes = useStyles();
    const [agama, setAgama] = React.useState('');
  
    const handleChangeAgama = (event) => {
      setAgama(event.target.value);
    };
        
        
        
        return(
            <FormControl className={classes.formControl}>
              <h4 style={{float: 'left'}}>Agama : </h4>
                 {/* <InputLabel id="demo-simple-select-readonly-label">Agama</InputLabel> */}
                <Select
                value={agama}
                onChange={handleChangeAgama}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Islam</MenuItem>
                <MenuItem value={20}>Kristen Katolik</MenuItem>
                <MenuItem value={30}>Kristen Katolik</MenuItem>
                <MenuItem value={40}>Hindu</MenuItem>
                <MenuItem value={50}>Budha</MenuItem>
                </Select>
                {/* <FormHelperText>Without label</FormHelperText> */}
            </FormControl>
            
        )
    
  

    
}

export default SimpleSelect;