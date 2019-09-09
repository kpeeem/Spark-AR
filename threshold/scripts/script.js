//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules


const Materials = require('Materials');


const Diagnostics = require('Diagnostics');
const Scene = require('Scene');

// How to access scene objects
const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties
const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
Diagnostics.log('I am a console message logged from the script');

// const indexMatrix4x4 =  [0,  8,  2,  10,
//                          12, 4,  14, 6,
//                          3,  11, 1,  9,
//                          15, 7,  13, 5]

// for(let i=0;i<16; i++){
      
//     points[i] = R.pack2(x, y);
   
// }

// // ========================================

// let m_point = R.pack2(0,0);  

// let color = R.pack4(v,m_point.x,m_point.y,1.);

// Materials.get('defaultMaterial0').setTexture(color, {textureSlotName: "diffuseTexture"});

// // ========================================

// in float color;
// out vec4 frag_color;

// const int indexMatrix4x4[16] = int[](0,  8,  2,  10,
//                                      12, 4,  14, 6,
//                                      3,  11, 1,  9,
//                                      15, 7,  13, 5);

// float indexValue() {
//     int x = int(mod(gl_FragCoord.x, 4));
//     int y = int(mod(gl_FragCoord.y, 4));
//     return indexMatrix4x4[(x + y * 4)] / 16.0;
// }

// float dither(float color) {
//     float closestColor = (color < 0.5) ? 0 : 1;
//     float secondClosestColor = 1 - closestColor;
//     float d = indexValue();
//     float distance = abs(closestColor - color);
//     return (distance < d) ? closestColor : secondClosestColor;
// }

// void main () {
//     fragColor = vec4(vec3(dither(color)), 1);
// }