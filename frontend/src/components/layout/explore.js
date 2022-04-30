
import { NavBar } from '../common/navbar'
import { Footer } from '../common/footer'
import { Search } from '../common/search'
import { ExploreGrid } from '../common/exploreGrid'
import { MantineProvider, Space,
  Button, Grid,TextInput } from '@mantine/core'



export function Explore() {
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
            <Search/>
            <ExploreGrid />
            <Footer data={footer_links}/> 
        {/* //         
        //         
        //         */}
      </MantineProvider>
    )
}