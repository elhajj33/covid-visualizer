import React, {Component, useState} from 'react';

import {BarProps} from "@nivo/bar";

import { BarChart , IBarChartProps} from './BarChart';

import { Country } from '../Model/Country';
import { CountryBL } from '../BL/CountryBL';

interface DataPoint {
    Name: string;
    Cases: number;
    Deaths: number;
    Recovered: number;
}

export class CurrentData extends React.Component <{}, {Data: DataPoint[]}>
{
    public Countries: Country[] = [];

    constructor (props: any) {
        super (props);
        this.state = {
            Data: []
        };
    };

    componentDidMount ()
    {
        const bl = new CountryBL (null);

        bl.GetData()
            .then (c=> {
                const dataPoints: DataPoint[] = [];

                for (let index = 0; index < 10; index++) {
                    const datapoint = {Name: c[index].Name, Cases: c[index].CaseData.TotalCases, Deaths: c[index].CaseData.TotalDeaths, Recovered: c[index].CaseData.TotalRecovered};

                    dataPoints.push (datapoint);
                }
                this.setState ({Data: dataPoints })

        });
    }

    render () {
        const barProps : BarProps =
        {
            keys: ["Cases", "Recovered", "Deaths"],
            layout : "vertical",
            indexBy: "Name",
            groupMode: "grouped",
            enableLabel: true,
            colors: ["#224C80", "#81BAFF", "#000000"],
            legends:[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
                    translateY: -175,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 15,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 15,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]
        };

        const barchartProps : IBarChartProps = {
            Data:  this.state.Data,
            BarChartProps: barProps,
            TickValues: []
        };

        return  (
            <React.Fragment>
                <BarChart barChartProps={barchartProps} />
            </React.Fragment>
        );
    }
}
