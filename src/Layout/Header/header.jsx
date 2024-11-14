import { Autocomplete, Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useGetQuery } from "../../service/query/useGetQuery";


export const Header = () => {

  const { data } = useGetQuery();

  return <section  style={{
    backgroundColor: "#046558",
    
  }} >
    <Container maxWidth={'xl'}>
      <Typography variant="h2" color="#fff" textAlign={"center"}>Header</Typography>
      <Stack spacing={2} sx={{ width: 300 }} mx={'auto'} mt={'50px'}>
      <Autocomplete
      style={{
        backgroundColor: "#fff",
        marginBottom: "20px",
        borderRadius: "5px",
      }}
        id="free-solo-demo"
        freeSolo
        options={data?.map((item) => item.title  || '')}
        renderInput={(params) => <TextField  variant="filled" color="secondary" fontSize={'20px'} fontFamily={"bold"} {...params} label="Search"  />}
      />
    </Stack>
    </Container>
  </section>;
};
