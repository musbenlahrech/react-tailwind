import Plot from 'react-plotly.js';
import React from 'react';
import { Slider } from 'plotly.js';

const FirstPlot = () => {


    const sliders: Partial<Slider>[] = [{
        pad: {
            t: 0
        },
        currentvalue: {
            xanchor: 'left',

            font: {
                color: 'black',
                size: 14
            }
        },
        len: 1,
        steps: [{
            label: "a",
            method: "skip",
            execute: false,
            value: '1'
        },
        {
            label: "b",
            method: "skip",
            execute: false,
            value: '2'
        },
        {
            label: "c",
            method: "skip",
            execute: false,
            value: '3'
        }
        ],
    }]

    return (
        <Plot
            onHover={(event) => console.log(event.points)}
            onSliderChange={(event) => console.log(event.slider)}
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    z: [2, 6, 3],
                    type: 'scatter3d',
                    mode: 'markers',
                    marker: { color: 'red' },
                }
            ]}
            layout={
                {
                    margin: {
                        l: 0,
                        r: 0,
                        b: 0,
                        t: 0
                    },
                    sliders: sliders
                }
            }
        />
    )
};

export default FirstPlot;