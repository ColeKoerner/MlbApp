import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from "react-native";
import Slideshow from "react-native-image-slider-show";

export default function App() {

const dataSource = [
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bos.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nyy.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tor.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bal.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tb.png"
  },
  {
    url:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/kc.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cws.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cle.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/min.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/det.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/laa.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/hou.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sea.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/oak.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tex.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nym.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/phi.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/atl.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/was.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mia.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/stl.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mil.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/pit.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cin.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chc.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/lad.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sf.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/col.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ari.png"
  },
  {
    url:
    "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sd.png"
  }
];

  const [position, setPosition] = useState(0)

  useEffect(()=>{
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  })
  
  return (
    <View style={styles.container}>
      <Slideshow height={Dimensions.get('window').height* (4 / 9)} position={position} dataSource={dataSource} indicatorSize={0} arrowSize={0}/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
});
