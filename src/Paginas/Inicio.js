// import LottieView from "lottie-react-native";
import React from 'react';
import { Button } from 'react-native';


function Inicio({navigation}) {
  return (
    <div>
      <header>
        <h1 className="h1">¿Qué te gustaría comer hoy?</h1>
      </header>
      <br />
      <div className="eleccion-container">
        <p className="eleccion1">
          <strong>Ensaladas</strong>
        </p>
        <p className="eleccion2">
          <strong>Pastas</strong>
        </p>
      </div>

      <Button>
      Siguiente
        onPress={() => navigation.navigate('CombosEnsaladas')}
      </Button>
        
    </div>

  );
}

export default Inicio;


// import React, { useEffect, useRef } from "react";
//  import { Animated, Easing } from "react-native";
// import LottieView from "lottie-react-native";

// const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

// export default function ControllingAnimationProgress() {
//   const animationProgress = useRef(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(animationProgress.current, {
//       toValue: 1,
//       duration: 5000,
//       easing: Easing.linear,
//       useNativeDriver: false,
//     }).start();
//   }, []);

//   return (
    
//     <div>
//            <header>
//              <h1 class = "h1">
//                ¿Que te gustaría comer hoy?
//            </h1>
//                <p class = "eleccion">
//                <strong>Ensaladas</strong>
      
//                {/* <LottieView source={require("../Animation/Ensalada.json")} autoPlay loop /> */}
//                <AnimatedLottieView
//       source={require("../Animation/Ensalada.json")}
//       progress={animationProgress.current}
//     />
      
//                  <br></br>
//                  <br></br>
//                  <br></br>
//                <strong>Pastas</strong>
//                </p>
//              </header>
//            </div>
//   );
// }
  // export default Inicio;


//   import React, { useEffect, useRef } from "react";
// import { Animated, Easing } from "react-native";
// import LottieView from "lottie-react-native";

// const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

// export default function ControllingAnimationProgress() {
//   const animationProgress = useRef(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(animationProgress.current, {
//       toValue: 1,
//       duration: 5000,
//       easing: Easing.linear,
//       useNativeDriver: false,
//     }).start();
//   }, []);

//   return (
//     <AnimatedLottieView
//       source={require("../Animation/Ensalada.json")}
//       progress={animationProgress.current}
//     />
//   );
// }