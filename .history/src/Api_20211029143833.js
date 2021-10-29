const apiUrl = 'http://api.alquran.cloud/v1/surah';

export const fetchQuiz = () => {
  return fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((allData) => allData.results)
    .catch((error) => Promise.reject(error));
};
