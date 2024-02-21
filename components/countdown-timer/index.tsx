import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

interface Props {
  initialSeconds: number;
  submitted: boolean;
  onTick: (seconds: number) => void;
}

const CountdownTimer: React.FC<Props> = ({
  initialSeconds,
  submitted,
  onTick,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds !== initialSeconds) {
      onTick(seconds);
    }
  }, [submitted]);

  useEffect(() => {
    if (seconds > 0 && !submitted) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 1) {
            clearInterval(intervalId);
          }
          return prevSeconds - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    } else if (seconds === 0) {
      onTick(seconds);
    }
  }, [seconds, submitted]);

  return (
    <View>
      <Text>Countdown: {seconds} seconds</Text>
    </View>
  );
};

export default CountdownTimer;
