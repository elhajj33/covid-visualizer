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
            .then (c=>{
                const dataPoints: DataPoint[] = [];
                const c1 = {Name: c[0].Name, Cases: c[0].CaseData.TotalCases, Deaths: c[0].CaseData.TotalDeaths, Recovered: c[0].CaseData.TotalRecovered};
                const c2 = {Name: c[1].Name, Cases: c[1].CaseData.TotalCases, Deaths: c[1].CaseData.TotalDeaths, Recovered: c[1].CaseData.TotalRecovered};
                const c3 = {Name: c[2].Name, Cases: c[2].CaseData.TotalCases, Deaths: c[2].CaseData.TotalDeaths, Recovered: c[2].CaseData.TotalRecovered};
                const c4 = {Name: c[3].Name, Cases: c[3].CaseData.TotalCases, Deaths: c[3].CaseData.TotalDeaths, Recovered: c[3].CaseData.TotalRecovered};
                const c5 = {Name: c[4].Name, Cases: c[4].CaseData.TotalCases, Deaths: c[4].CaseData.TotalDeaths, Recovered: c[4].CaseData.TotalRecovered};
                const c6 = {Name: c[5].Name, Cases: c[5].CaseData.TotalCases, Deaths: c[5].CaseData.TotalDeaths, Recovered: c[5].CaseData.TotalRecovered};
                const c7 = {Name: c[6].Name, Cases: c[6].CaseData.TotalCases, Deaths: c[6].CaseData.TotalDeaths, Recovered: c[6].CaseData.TotalRecovered};
                const c8 = {Name: c[7].Name, Cases: c[7].CaseData.TotalCases, Deaths: c[7].CaseData.TotalDeaths, Recovered: c[7].CaseData.TotalRecovered};
                const c9 = {Name: c[8].Name, Cases: c[8].CaseData.TotalCases, Deaths: c[8].CaseData.TotalDeaths, Recovered: c[8].CaseData.TotalRecovered};
                const c10 = {Name: c[9].Name, Cases: c[9].CaseData.TotalCases, Deaths: c[9].CaseData.TotalDeaths, Recovered: c[9].CaseData.TotalRecovered};


                dataPoints.push (c1);
                dataPoints.push (c2);
                dataPoints.push (c3);
                dataPoints.push (c4);
                dataPoints.push (c5);
                dataPoints.push (c6);
                dataPoints.push (c7);
                dataPoints.push (c8);
                dataPoints.push (c9);
                dataPoints.push (c10);


                this.setState ({Data: dataPoints })
                return c;
            } );
    }

    render () {
        const barProps : BarProps =
        {
            keys: ["Cases", "Recovered", "Deaths"],
            layout : "vertical",
            indexBy: "Name",
            groupMode: "grouped",
            enableLabel: true,
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
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
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
