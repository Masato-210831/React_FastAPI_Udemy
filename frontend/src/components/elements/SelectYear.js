import React from 'react'
import { Box, InputLabel, MenuItem, Select } from "@mui/material"

const SelectYear = (props) => {
  const {handleYearChange, year} = props;
  const handleChange = (e) => {
    handleYearChange(e.target.value);
  }
  return (
    <>
      <Box sx={{ width: "100%", mt:2}}>
        <InputLabel id="sales-year">年度</InputLabel>
        <Select labelId="sales-year"
          onChange={ handleChange }
          fullWidth
          value={year}
          name="year">
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
        </Select>
      </Box>
    </>
  )
}

export default SelectYear