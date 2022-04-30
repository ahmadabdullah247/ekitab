import React from 'react';
import { createStyles, Text, SimpleGrid, UnstyledButton, Anchor, Group, Container } from '@mantine/core';
import { CreditCard, BuildingBank, Repeat, ReceiptRefund, Receipt, ReceiptTax, Report, CashBanknote, Coin, } from 'tabler-icons-react';
import { BookCard } from './bookCard'


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
  const { classes, theme } = useStyles();

  const mockdata = [
    {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
      {
        "title": "Article card with image",
        "category": "article-cards",
        "author": "rtivital",
        "dimmed": true,
        "dependencies": [
          "/core/card/",
          "/core/text/",
          "/core/group/",
          "/core/center/",
          "/core/avatar/",
          "/core/badge/",
          "/core/image/",
          "/core/action-icon/",
          "tabler-icons-react"
        ],
        "props": {
          "image": "https://i.imgur.com/Cij5vdL.png",
          "link": "https://mantine.dev/",
          "title": "Resident Evil Village review",
          "rating": "outstanding",
          "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
          "author": {
            "name": "Bill Wormeater",
            "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          }
        },
        "canvas": {
          "center": true,
          "maxWidth": 320
        }
      },
  ] 
  
  const items = mockdata.map((item) => (
      <BookCard image={item.props.image} 
                link={item.props.link} 
                title={item.props.title} 
                description={item.props.description} 
                rating={item.props.rating} 
                author={item.props.author} 
                key={item.props.title}
        />
  ));

  return (
    <Container>
        {/* <Group position="apart">
            <Text className={classes.title}>{ title }</Text>
            <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>See All</Anchor>
        </Group> */}
        <SimpleGrid cols={4} mt="md">
            {items}
        </SimpleGrid>
    </Container>
  );
}