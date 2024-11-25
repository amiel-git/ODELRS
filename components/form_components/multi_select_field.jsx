import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, itemName, theme) {
  return {
    fontWeight: itemName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelectChip(props) {
  const theme = useTheme();
  const [itemName, setItemName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItemName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{width:"100%"}}>
        <Select
          name={props.name}
          multiple
          value={itemName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={props.ref[value]} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.items.map((item,idx) => (
            <MenuItem
              key={idx}
              value={item.value}
              style={getStyles(item, itemName, theme)}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}