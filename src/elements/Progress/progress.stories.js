import React from 'react';
import styled from 'styled-components';
import { Progress, Typography } from 'src/index';

export default {
  component: Progress,
  title: 'Progress',
};

const Container = styled.div`
  margin-left: 5%;
  max-width: 20%;
  max-height: 20%;
  margin-top: 2%;
`;

export const LineProgress = () => (
  <Container>
    <Typography variant="h1" color="black">
      Line Progress
    </Typography>
    <Typography variant="p" description>
      Line Progress with initial 10% completed
    </Typography>
    <Progress type="line" percent="10" strokeWidth="2" />
  </Container>
);

export const CircleProgress = () => (
  <Container>
    <Typography variant="h1" color="black">
      Circle Progress
    </Typography>
    <Typography variant="p" description>
      Circle Progress with initial 40% completed
    </Typography>
    <Progress type="circle" percent="40" strokeWidth="2" />
  </Container>
);
