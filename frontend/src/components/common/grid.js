import { Anchor, Container, Grid, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export function CardGrid() {
  return (
    <Container>
        <Grid>
            <Grid.Col span={10}>
                <Title order={1}>Categories</Title>
            </Grid.Col>
            <Grid.Col span={2}>
                {/* <Anchor component={Link} to="/react-router">See All</Anchor>*/}
                <Anchor >See All</Anchor>
            </Grid.Col>
        </Grid>
        
        <Grid>
        <Grid.Col span={4}>1</Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
        <Grid.Col span={4}>4</Grid.Col>
        <Grid.Col span={4}>5</Grid.Col>
        </Grid>
    </Container>

  );
}