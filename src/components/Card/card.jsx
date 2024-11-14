import { Box, Container, FormGroup, Rating, Stack, Typography } from "@mui/material";
import React from "react";

export const Card = ({ id, title, genre, image, publication_year }) => {
  return <Box  >
    <Stack direction={"row"}>
      <Box>
        <img src={image} alt={title} />
        <Typography variant="body1" fontSize={'20px'} fontFamily={"medium"}>{title}</Typography>
        <Typography variant="body1" fontSize={'22px'}>{publication_year}</Typography>
        <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
          <Typography variant="body1" color="#01791d" fontWeight={'bold'} fontSize={'20px'} marginTop={'10px'} mb={'10px'}>{genre}</Typography>
          <Rating defaultValue={3} precision={1} />
        </Stack>
      </Box>
    </Stack>

  </Box>
    ;
};

