import { React, useContext} from "react";

import { createStyles, Container, SimpleGrid } from '@mantine/core';
import { BookCard } from './bookCard'
import { GlobalContext } from '../../contexts/GlobalState';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

export function ExploreGrid() {
  const { books } = useContext(GlobalContext);
  console.log(books)
  const items = books.slice(0,20).map((item) => (
      <BookCard image={'http://saeedbookbank.com/'+item.img} 
                link={item.ISBN} 
                title={item.title} 
                description={item.Category} 
                rating={item.Year} 
                author={item.Author} 
                key={item.ISBN}
        />
  ));

  return (
    <Container>
        <SimpleGrid cols={4} mt="md">
            {items}
        </SimpleGrid>
    </Container>
  );
}