

import { HeroBullets } from '../common/hero'
import { CategoryGrid } from '../common/categoryGrid'
import { HomeGrid } from '../common/homeGrid'
import {  Space } from '@mantine/core'

export function Home() {
    return (
        <>
            <HeroBullets />
            <CategoryGrid />
            <Space h="lg" />
            <HomeGrid title="New"/>
            <Space h="lg" />
            <HomeGrid title="Populer"/>
        </>
    )
}