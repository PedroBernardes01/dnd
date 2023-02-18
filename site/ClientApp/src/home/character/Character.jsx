import './Character.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default _ =>
    <div className='Content'>
        <div className='page'>
            <TextField className='inpt' label="Nome" variant="filled" />
            <FormControl className='inpt' sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Grouping</InputLabel>
                <Select label="Grouping">
                    <ListSubheader>Tank</ListSubheader>
                        <MenuItem value={1}>Guerreiro</MenuItem>
                        <MenuItem value={2}>Barik</MenuItem>
                    <ListSubheader>Dps</ListSubheader>
                        <MenuItem value={3}></MenuItem>
                        <MenuItem value={4}></MenuItem>
                    <ListSubheader>Support</ListSubheader>
                        <MenuItem value={5}></MenuItem>
                        <MenuItem value={6}></MenuItem>
                </Select>
            </FormControl>
        </div>
    </div>