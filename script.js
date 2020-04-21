const LAT = 35.8;
const LNG = 139.2;

const deckgl = new deck.DeckGL({
  mapboxApiAccessToken: 'pk.eyJ1IjoibWFzLWExIiwiYSI6ImNrOTg4YXB1ajBpeG0zbnBrdXl4bjJmc3oifQ.15TLFPPy3DYoA9XG5AbSXA',
  mapStyle: 'mapbox://styles/mapbox/dark-v9',
  longitude: LNG,
  latitude: LAT,
  zoom: 8,
  pitch: 40,
  bearing: -10
});


const loadData = () => {
  d3.csv("data.csv", (error, response) => {
    data = response.map(function(d) {
      return [
        Number(d.longitude),
        Number(d.latitude),
        Number(d.population)
      ];
    });

    renderLayer(data);
  });
};


const renderLayer = (data) => {
  const hexagonLayer = new deck.HexagonLayer({
    data,
    getPosition: d => d,
    radius: 2000
  });

  deckgl.setProps({
    layers: [hexagonLayer]
  });
}

loadData();
