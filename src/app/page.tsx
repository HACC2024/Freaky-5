/* eslint-disable max-len */

'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Title from '@/components/Title';
import EnergyBar from '@/components/EnergyBar';
import ItemSwitches from '@/components/ItemSwitches';
import Navbar from '@/components/Navbar';

const Home = () => {
  const [switchStates, setSwitchStates] = useState([false, false, false, false, false, false, false]); // Initial state of each switch, always starts as false
  const switchValues = [10, 20, 15, 5, 30, 5, 5]; // Values for each switch
  const switchSum = switchValues.reduce((total: number, value: number) => total + value, 0); // Sum of all switch values
  const switchPercentages = switchValues.map((value: number) => (value / switchSum) * 100); // Calculate the percentage of each switch
  const images = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]; // Add the image URLs for each switch in the public folder
  const totalValue = switchStates.reduce((total: number, isOn: boolean, index: number) => (isOn ? total + switchPercentages[index] : total), 0);
  const handleSwitchChange = (index: number) => {
    setSwitchStates((prevSwitches: any[]) => prevSwitches.map((state, i) => (i === index ? !state : state)));
  };

  return (
    <main>
      <Navbar />
      <Container>
        <Title />
        <EnergyBar value={totalValue} />
        <ItemSwitches switchStates={switchStates} switchValues={switchPercentages} images={images} handleSwitchChange={handleSwitchChange} />
      </Container>
    </main>
  );
};

export default Home;
