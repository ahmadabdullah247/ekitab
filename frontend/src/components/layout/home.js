
import { NavBar } from '../common/navbar'
import { HeroBullets } from '../common/hero'
import { Footer } from '../common/footer'
import { CategoryGrid } from '../common/categoryGrid'
import { HomeGrid } from '../common/homeGrid'
import { MantineProvider, Space } from '@mantine/core'

export function Home() {
    const links = [
        { "link": "/about", "label": "Features" },
        { "link": "/contact", "label": "Contact" }
      ]
      const footer_links = [
        {
          "title": "About",
          "links": [
            { "label": "Features", "link": "#" },
            { "label": "Pricing", "link": "#" },
            { "label": "Support", "link": "#" },
            { "label": "Forums", "link": "#" }
          ]
        },
        {
          "title": "Project",
          "links": [
            { "label": "Contribute", "link": "#" },
            { "label": "Media assets", "link": "#" },
            { "label": "Changelog", "link": "#" },
            { "label": "Releases", "link": "#" }
          ]
        },
        {
          "title": "Community",
          "links": [
            { "label": "Join Discord", "link": "#" },
            { "label": "Follow on Twitter", "link": "#" },
            { "label": "Email newsletter", "link": "#" },
            { "label": "GitHub discussions", "link": "#" }
          ]
        }
      ]
    return (
        <MantineProvider
            defaultProps={{
            Container: {
                sizes: {
                xs: 540,
                sm: 720,
                md: 1100,
                lg: 1140,
                xl: 1320,
                },
            },
            }}>
                <NavBar links={links} />
                <HeroBullets />
                <CategoryGrid />
                <Space h="lg" />
                <HomeGrid title="New"/>
                <Space h="lg" />
                <HomeGrid title="Populer"/>
                <Footer data={footer_links}/>
        </MantineProvider>
    )
}