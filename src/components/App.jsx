import React from 'react'
import Reveal from './Reveal'
import Slides from './Slides'

const App = () => (
    <app>
        <Reveal
            options={{
            width: "100%",
            height: "100%"
        }}>
            <Slides/>
        </Reveal>
    </app>
)

export default App