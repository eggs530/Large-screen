import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart4} from '../components/chart-4';
import {Chart5} from '../components/chart-5';
import {Chart6} from '../components/chart-6';


export const Home = () => {
    const year = new Date().getFullYear();
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}>

            </header>
            <main>
                <section className="section1">
                    <Chart1/>
                    <Chart2/>
                </section>
                <section className="section2">
                    <Chart3/>
                    <Chart4/>
                </section>
                <section className="bordered section3">
                    <Chart5/>
                </section>
                <section className="section4">
                    <Chart6/>
                </section>
                <section className="bordered section5">

                </section>
            </main>
            <footer>&copy; egg 2020-{year}</footer>
        </div>
    );
};
