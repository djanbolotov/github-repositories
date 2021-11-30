import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function PaginationRounded({size, current_page, setPage}:any) {
  return (
    <Stack spacing={2}>
      <Pagination page={current_page} 
      onChange={(e, page) => setPage(page)} count={size} variant="outlined" shape="rounded" />
    </Stack>
  );
}
