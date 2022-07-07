import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const OutlinedButtons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Home</Button>
    </Stack>
  );
}

export default OutlinedButtons;