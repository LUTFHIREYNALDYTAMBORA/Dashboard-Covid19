import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class RadioButtonReusable extends Component {
 render()  {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Jenis Kelamin</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}
}

export default RadioButtonReusable;
