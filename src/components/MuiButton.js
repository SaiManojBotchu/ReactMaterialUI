import React from 'react';
import { Stack, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    <Stack spacing={0} mt={2} alignItems='flex-start'>
      <h1>Buttons in Material UI</h1>
      <h4>1) Variants</h4>
      <Stack spacing={2} direction='row' mb={2}>
        <Button variant='text' href='https://google.com'>text</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
      </Stack>
      <h4>2) Colors</h4>
      <Stack spacing={2} direction='row' mb={2}>
        <Button variant='contained' color='primary'>primary</Button>
        <Button variant='outlined' color='secondary'>secondary outlined</Button>
        <Button variant='contained' color='error'>error</Button>
        <Button variant='contained' color='warning'>warning</Button>
        <Button variant='contained' color='info'>info</Button>
        <Button variant='contained' color='success'>success</Button>
      </Stack>
      <h4>3) Sizes</h4>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
      </Stack>
      <h4>4) Buttons with Icons</h4>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />} disableElevation>Send</Button>
        <Button variant='contained' endIcon={<SendIcon />} disableRipple>Send</Button>
        <IconButton aria-label='send' color='success' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
