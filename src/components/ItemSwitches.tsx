'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Image } from 'react-bootstrap';

interface ItemSwitchProps {
  switchStates: boolean[];
  switchValues: number[];
  images: string[];
  handleSwitchChange: (index: number) => void;
}

/*
Item switch component that allows the user to toggle appliance switches on and off
*/
const ItemSwitches: React.FC<ItemSwitchProps> = ({ switchStates, switchValues, images, handleSwitchChange }) => (
  <Row className="mt-3 mb-5" xs={6} sm={4} lg={3}>
    {switchValues.map((value, index) => (
      <Col key={4} xs={6} sm={4} lg={3} className="my-2">
        <Image
          src={images[index]}
          alt={`Switch ${index + 1}`}
          fluid
          rounded
          className="my-2"
          style={{ width: '100px', height: '100px' }}
        />
        <Form.Check
          type="switch"
          id={`switch-${index}`}
          label={`Switch ${index + 1} (+${value.toFixed(2)}%)`}
          checked={switchStates[index]}
          onChange={() => handleSwitchChange(index)}
        />
      </Col>
    ))}
  </Row>
);

ItemSwitches.propTypes = {
  switchStates: PropTypes.arrayOf(PropTypes.oneOf([true, false]).isRequired).isRequired,
  switchValues: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleSwitchChange: PropTypes.func.isRequired,
};

export default ItemSwitches;
