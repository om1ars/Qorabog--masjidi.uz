const apiUrl = 'http://api.alquran.cloud/v1/surah';

export const Url = (number) => `http://api.alquran.cloud/v1/surah/${number}`;


export const fetchQuran = () => {
  return fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((allData) => allData.data.data)
    .catch((error) => Promise.reject(error));
};



export const fetchSingleSurah = () => {
  return fetch(Url(number)).then((res) => {
    return res.json();
  })
}