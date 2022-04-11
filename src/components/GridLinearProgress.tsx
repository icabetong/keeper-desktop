import { GridOverlay } from "@mui/x-data-grid";
import { Box, LinearProgress } from "@mui/material";

const GridLinearProgress = () => {
  return (
    <GridOverlay>
      <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress/>
      </Box>
    </GridOverlay>
  )
}

export default GridLinearProgress;