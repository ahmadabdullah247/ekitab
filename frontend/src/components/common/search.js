
import { Button, Grid,TextInput, Container } from '@mantine/core'

export function Search(){
    return(
        <Container>
            <Grid>
                <Grid.Col span={8}>
                    <TextInput placeholder="Your name" />
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextInput placeholder="Your name" />
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button>Search</Button>
                </Grid.Col>
            </Grid> 
        </Container>
    )
}