import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Explore } from '../components/layout/explore';
import { Home } from '../components/layout/home'
import { NavBar } from '../components/common/navbar'
import { Footer } from '../components/common/footer'
import { MantineProvider  } from '@mantine/core'

export function Index() {
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
        <Router>
            <NavBar links={links} />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/explore" element={ <Explore/>} />
            </Routes>
            <Footer data={footer_links}/> 
        </Router>
    </MantineProvider>
    )
}