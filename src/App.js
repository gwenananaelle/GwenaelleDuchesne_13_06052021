import React from 'react'
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { features } from './data/features'
import FeatureItem from './components/FeatureItem'

function App() {
    const listFeatures = features.map((item, index) => (
        <FeatureItem
            key={item.name + index}
            icon={item.icon}
            altText={item.altText}
            title={item.title}
            description={item.description}
        />
    ))
    return (
        <>
            <NavigationBar />
            <main>
                <Hero />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {listFeatures}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
