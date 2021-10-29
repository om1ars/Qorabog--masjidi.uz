const apiUrl = 'http://api.alquran.cloud/v1/surah';

export const fetchQuran = () => {
  return fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((allData) => allData.data.data)
    .catch((error) => Promise.reject(error));
};



export const fetchSingleS