import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Danilo reboque
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Home
        </Button>
        {/* <ProTip /> */}
        <Copyright />
      </Box>
    </Container>
  );
}
