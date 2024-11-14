
import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Grid2, Container, FormGroup, Stack } from '@mui/material';
import { useGetQuery } from '../../service/query/useGetQuery';
import { Card } from '../../components/Card/card';
import { Header } from '../../Layout/Header/header';

export default function Home() {
  const { data } = useGetQuery();

  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (event) => {
    const genre = event.target.name;
    if (event.target.checked) {
      setSelectedGenres((prev) => [...prev, genre]);
    } else {
      setSelectedGenres((prev) => prev.filter((item) => item !== genre));
    }
  };

  const filteredData = data?.filter((item) => {
    if (selectedGenres.length === 0) return true;
    return selectedGenres.includes(item.genre);
  });

  return (
    <>
      <Header />
      <Container maxWidth={'xl'} bgColor={'#080808'}>
        <Stack direction={'row'} gap={'20px'} mb={'20px'} zIndex={-1} >
          <FormGroup sx={{ marginTop: '100px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 4px 10px', width: '200px', height: '500px', padding: '20px' }}>
            <FormControlLabel control={<Checkbox name="Technology" onChange={handleGenreChange} />} label="Technology" />
            <FormControlLabel control={<Checkbox name="Finance" onChange={handleGenreChange} />} label="Finance" />
            <FormControlLabel control={<Checkbox name="Programming" onChange={handleGenreChange} />} label="Programming" />
            <FormControlLabel control={<Checkbox name="Engineering" onChange={handleGenreChange} />} label="Engineering" />
            <FormControlLabel control={<Checkbox name="DIY" onChange={handleGenreChange} />} label="DIY" />
            <FormControlLabel control={<Checkbox name="Mathematics" onChange={handleGenreChange} />} label="Mathematics" />
            <FormControlLabel control={<Checkbox name="Music Industry" onChange={handleGenreChange} />} label="Music Industry" />
          </FormGroup>
          <Grid2 container spacing={'20px'} pt={'100px'}>
            {filteredData?.map((item) => (
              <Grid2 size={3} key={item.id} borderRadius={'10px'} width={'300px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 4px 10px'}>
                <Card {...item} />
              </Grid2>
            ))}
          </Grid2>
        </Stack>

      </Container>
    </>
  );
}
