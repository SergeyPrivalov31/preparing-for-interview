import { useMemo, useState } from "react";
import DeckGL from "@deck.gl/react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";
import { PathLayer } from "@deck.gl/layers";
import "maplibre-gl/dist/maplibre-gl.css";

// To draw a line across the 180th meridian,
// if the longitude of the second point minus
// the longitude of original (or previous) point is >= 180,
// subtract 360 from the longitude of the second point.
// If it is less than 180, add 360 to the second point.

// if (doesCrossAntimeridian) {
//   const startLng = geometry.coordinates[0][0];
//   const endLng = geometry.coordinates[1][0];

//   if (endLng - startLng >= 180) {
//     geometry.coordinates[1][0] -= 360;
//   } else if (endLng - startLng < 180) {
//     geometry.coordinates[1][0] += 360;
//   }
// }

const line = [
  [150.498, -60.086],
  [151.749, -57.223],
  [152.789, -54.344],
  [153.666, -51.451],
  [154.414, -48.549],
  [155.058, -45.637],
  [155.618, -42.718],
  [156.109, -39.793],
  [156.544, -36.862],
  [156.931, -33.926],
  [157.279, -30.985],
  [157.593, -28.041],
  [157.88, -25.093],
  [158.144, -22.143],
  [158.388, -19.19],
  [158.617, -16.234],
  [158.832, -13.277],
  [159.038, -10.318],
  [159.236, -7.359],
  [159.429, -4.398],
  [159.618, -1.437],
  [159.807, 1.525],
  [159.996, 4.486],
  [160.189, 7.446],
  [160.387, 10.406],
  [160.593, 13.365],
  [160.809, 16.322],
  [161.038, 19.277],
  [161.283, 22.23],
  [161.547, 25.181],
  [161.835, 28.128],
  [162.15, 31.072],
  [162.499, 34.013],
  [162.887, 36.949],
  [163.323, 39.88],
  [163.817, 42.805],
  [164.379, 45.724],
  [165.026, 48.635],
  [165.777, 51.537],
  [166.658, 54.429],
  [167.704, 57.308],
  [168.962, 60.171],
  [170.498, 63.013],
  [172.409, 65.827],
  [174.835, 68.604],
  [177.996, 71.327],
  [-177.76, 73.97],
  [-171.865, 76.485],
  [-163.389, 78.788],
  [-150.96, 80.721],
  [-133.35, 82.009],
  [-111.885, 82.323],
  [-91.638, 81.552],
  [-76.338, 79.943],
  [-65.812, 77.824],
  [-58.599, 75.415],
  [-53.509, 72.837],
  [-49.788, 70.155],
  [-46.979, 67.406],
  [-44.798, 64.611],
  [-43.064, 61.784],
  [-41.658, 58.932],
  [-40.499, 56.062],
  [-39.529, 53.177],
  [-38.708, 50.281],
  [-38.005, 47.374],
  [-37.397, 44.459],
  [-36.866, 41.538],
  [-36.399, 38.61],
  [-35.985, 35.677],
  [-35.614, 32.739],
  [-35.281, 29.797],
  [-34.978, 26.851],
  [-34.701, 23.902],
  [-34.445, 20.951],
  [-34.208, 17.997],
  [-33.985, 15.041],
  [-33.773, 12.083],
  [-33.571, 9.123],
  [-33.375, 6.163],
  [-33.184, 3.202],
  [-32.996, 0.241],
  [-32.807, -2.72],
  [-32.616, -5.681],
  [-32.422, -8.642],
  [-32.221, -11.601],
  [-32.011, -14.559],
  [-31.79, -17.515],
  [-31.555, -20.47],
  [-31.303, -23.422],
  [-31.029, -26.371],
  [-30.731, -29.317],
  [-30.403, -32.26],
  [-30.039, -35.199],
  [-29.632, -38.133],
  [-29.175, -41.061],
  [-28.655, -43.984],
  [-28.061, -46.9],
  [-27.374, -49.808],
  [-26.574, -52.706],
  [-25.631, -55.593],
  [-24.506, -58.466],
  [-23.145, -61.321],
  [-21.472, -64.153],
  [-19.374, -66.954],
  [-16.683, -69.711],
  [-13.136, -72.406],
  [-8.311, -75.004],
  [-1.511, -77.447],
];
const newLine = useMemo(() =>  line.map((coordinates, i, array) => {
    if (i > 0) {
      const startLng = array[i - 1][0];
      const endLng = coordinates[0];
  
      if (endLng - startLng >= 180) {
        coordinates[0] -= 360;
      } else if (endLng - startLng < -180) {
        coordinates[0] += 360;
      }
    }
    return coordinates;
  }),[line]);
// const newLine = line.map((coordinates, i, geometry) => {
//     const startLng = coordinates[0];
//     let endLng;
//     if (i === 0) {
//       endLng = geometry[geometry.length - 1][0];
//     } else {
//       endLng = geometry[0][0];
//     }
//     if (endLng - startLng >= 180) {
//       coordinates[1] -= 360;
//     } else if (endLng - startLng < 180) {
//       coordinates[1] += 360;
//     }
  
//     return coordinates
  
//   });
export const App = () => {
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 1,
  });

  const layer = new PathLayer({
    id: "PathLayer",
    data: [
      // РАЗБЛОКИРОВАТЬ
      newLine,
    //   line
    ],
    getColor: [0, 0, 0],
    getPath: (d) => d,
    widthUnits: "pixels",
    getWidth: 2,
  });

  return (
    <div>
      <DeckGL
        style={{ width: "100vw", height: "100vh" }}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller={true}
        layers={[layer]}
      >
        <StaticMap
          mapLib={maplibregl}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        />
      </DeckGL>
    </div>
  );
};
