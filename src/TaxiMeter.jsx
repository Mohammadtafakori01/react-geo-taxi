import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled components for UI
const MeterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  width: 300px;
  margin: 20px auto;
  animation: ${pulse} 2s infinite;
`;

const Display = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
  color: #f1c40f;
`;

const Label = styled.div`
  font-size: 1rem;
  color: #bdc3c7;
  text-transform: uppercase;
`;

const Button = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  transition: background 0.3s ease;

  &:hover {
    background: #c0392b;
  }
`;

const TaxiMeter = ({ permeter = 1000, meterofdistance }) => {
  const [distance, setDistance] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Calculate fare based on distance and per-meter rate
  const fare = (distance * permeter).toLocaleString();

  // Start the meter
  const startMeter = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setDistance((prevDistance) => {
          if (prevDistance >= meterofdistance) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return meterofdistance;
          }
          return prevDistance + 1;
        });
      }, 1000); // Update every second
    }
  };

  // Reset the meter
  const resetMeter = () => {
    clearInterval(intervalRef.current);
    setDistance(0);
    setIsRunning(false);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <MeterContainer>
      <Label>Whole Distance </Label>
      <Display>{meterofdistance}m</Display>
      <Label>Distance Traveled</Label>
      <Display>{distance}m</Display>
      <Label>Total Fare</Label>
      <Display dir="rtl">{fare} تومان</Display>
      {!isRunning ? (
        <Button onClick={startMeter} disabled={distance >= meterofdistance}>
          {distance === 0 ? "Start Meter" : "Resume"}
        </Button>
      ) : (
        <Button onClick={resetMeter}>Reset</Button>
      )}
    </MeterContainer>
  );
};

export default TaxiMeter;
