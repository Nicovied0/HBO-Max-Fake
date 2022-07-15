import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  return (
    <form >
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Button variant="outlined"
                        color="primary"
                        type="submit">
                            <SearchIcon/> Search  
                    </Button>
                    
    
</form>
  )
}

export default Search