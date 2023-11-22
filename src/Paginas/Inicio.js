// import LottieView from "lottie-react-native";
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import pastaini from '../Images/pastaini.png';
import ensaini from '../Images/ensaini.png';


function Inicio({navigation}) {
  return (
    <div
    
    style={{ 
      backgroundImage: "url('https://us.123rf.com/450wm/molaruso/molaruso1701/molaruso170100140/70188787-gradiente-resumen-de-desenfoque-de-fondo-horizontal-con-rojo-tendencia-en-colores-pastel-naranja.jpg?ver=6')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height:"100vh"
    }}>
      <header>
        <h1 className="h1">¿Qué te gustaría comer hoy?</h1>
      </header>
      
      <br />

      <div className="eleccion-container">
        <p className="eleccion1">


        <TouchableOpacity onPress={() => navigation.navigate('CombosEnsaladas')}>
        <Text style={{ fontFamily: 'Courier New', fontSize:30,fontWeight: 'bold' }}>Ensaladas</Text>
      </TouchableOpacity>

        </p>

        <img
              className="ImaPasta"
              width="400"
              height="400"
              src={ensaini}
              alt="Pasta1"
            />

        <p className="eleccion2">

        <TouchableOpacity onPress={() => navigation.navigate('CombosPastas')}>
        <Text style={{ fontFamily: 'Courier New', fontSize:30,fontWeight: 'bold' }}>Pastas</Text>
      </TouchableOpacity>

        </p>

        <img
              className="ImaPasta"
              width="400"
              height="400"
              src={pastaini}
              alt="Pasta1"
            />

      </div>
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