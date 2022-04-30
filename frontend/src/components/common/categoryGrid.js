import React from 'react';
import { createStyles, Text, SimpleGrid, UnstyledButton, Anchor, Group, Container } from '@mantine/core';
import { Lego, BuildingBank, Pencil, ReceiptRefund, Receipt, Wand, Report, CashBanknote, Coin, } from 'tabler-icons-react';

const mockdata = [
  { title: 'Arts & Architectet', icon: BuildingBank, color: 'gray' },
  { title: 'Children', icon: Lego, color: 'gray' },
  { title: 'History', icon: Pencil, color: 'gray' },
  { title: 'Romance', icon: ReceiptRefund, color: 'gray' },
  { title: 'Music', icon: Receipt, color: 'gray' },
  { title: 'Fantasy', icon: Wand, color: 'gray' },
  { title: 'Reports', icon: Report, color: 'gray' },
  { title: 'Payments', icon: Coin, color: 'gray' },
  { title: 'Cashback', icon: CashBanknote, color: 'gray' },
];

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

export function CategoryGrid() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container>
        <Group position="apart">
            <Text className={classes.title}>Categories</Text>
            <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>See All</Anchor>
        </Group>
        <SimpleGrid cols={5} mt="md">
            {items.slice(0,5)}
        </SimpleGrid>
    </Container>
  );
}