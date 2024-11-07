'use client';

import { number } from 'prop-types';
import { Container, ProgressBar } from 'react-bootstrap';
import { LightningChargeFill } from 'react-bootstrap-icons';

interface EnergyBarProps {
  value: number;
}

/*
Energy bar component displays the energy usage of all activated switches.
*/
const EnergyBar: React.FC<EnergyBarProps> = ({ value }) => {
  // Function to determine the color of the progress bar
  const getProgressBarColor = () => {
    if (value <= 50) return 'success'; // Below 50, we use green
    if (value <= 75) return 'warning'; // Below 75, we use yellow
    return 'danger'; // Above, we use red
  };

  return (
    <Container>
      <LightningChargeFill size={30} color="black" />
      <ProgressBar
        now={value}
        max={100}
        label={`${value.toFixed(2)}%`}
        variant={getProgressBarColor()}
      />
    </Container>
  );
};

EnergyBar.propTypes = {
  value: number.isRequired,
};

export default EnergyBar;
