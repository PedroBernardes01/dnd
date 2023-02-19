import './Character.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default _ =>
    <div className='Content'>
        <div className='sep'>
            <div className='page' id='iten1'>
                <TextField className='inpt' label="Nome" variant="outlined" /><br />
                <FormControl className='inpt' sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Classe</InputLabel>
                    <Select label="Classe">
                        <ListSubheader>Tank</ListSubheader>
                            <MenuItem value={0}>Bárbaro</MenuItem>
                        <ListSubheader>Dps</ListSubheader>
                        <ListSubheader>Support</ListSubheader>
                    </Select>
                </FormControl><br />
                <FormControl className='inpt' sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Raça</InputLabel>
                    <Select label="Raça">
                        <MenuItem value={0}>Anão</MenuItem>
                    </Select>
                </FormControl><br />
                <FormControl className='inpt' sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Comportamento</InputLabel>
                    <Select label="Comportamento">
                        <MenuItem value={0}>Leal Bom</MenuItem>
                        <MenuItem value={1}>Leal Neutro</MenuItem>
                        <MenuItem value={2}>Leal Mau</MenuItem>
                        <MenuItem value={3}>Neutro Bom</MenuItem>
                        <MenuItem value={4}>Neutro</MenuItem>
                        <MenuItem value={5}>Neutro Mau</MenuItem>
                        <MenuItem value={6}>Caótico Bom</MenuItem>
                        <MenuItem value={7}>Caótico Neutro</MenuItem>
                        <MenuItem value={8}>Caótico Mau</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='page' id='iten1'>
                <TextField className='inpt' label="Olhos" variant="outlined" /><br />
                <TextField className='inpt' label="Pele" variant="outlined" /><br />
                <TextField className='inpt' label="Cabelo" variant="outlined" /><br />
                <TextField className='inpt' label="Altura" variant="outlined" />
            </div>
        </div>
    </div>;