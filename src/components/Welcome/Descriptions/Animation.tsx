import React, { useMemo } from 'react';
import Lottie from 'lottie-react-web';

interface AnimationProps {
  data: string;
  pause: boolean;
}

const Animation: React.FC<AnimationProps> = (props: AnimationProps) => {
  const pauseChange = useMemo(() => {
    return (
      <Lottie
        isPaused={props.pause}
        options={{
          animationData: JSON.parse(props.data),
          loop: false,
          autoplay: false
        }}
      />
    );
  }, [props.data, props.pause]);

  return pauseChange;
};

export default Animation;
