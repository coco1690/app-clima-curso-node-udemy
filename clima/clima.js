const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3290578736aa238a9030bb904710982d`
  );
  return `${resp.data.main.temp} °F`;
};

module.exports = {
  getClima
};
