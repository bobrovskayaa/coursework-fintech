
export const postLoginApi = async (data) => {
    const URL = 'http://defect-prediction-server.herokuapp.com/auth/login';
    //console.log(JSON.stringify(data));
    return fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(data)
    }).then(response => {
        
        //console.log(response.json());
        // Стоит проверить код ответа.
        if (!response.ok) {
            // Сервер вернул код ответа за границами диапазона [200, 299]
            return Promise.reject(new Error(
                'Response failed: ' + response.status + ' (' + response.statusText + ')'
            ));
        }
    
        // Далее будем использовать только JSON из тела ответа.
        return response.json();
    });
}
export const getDataApi = async (request) => {
  const URL = "https://openexchangerates.org/api/latest.json" 
  + "?app_id=a70d3267353b45f3b01b6ca393bc1992"
  return fetch(URL).then(res => res.json());
};

export const postDataApi = async (request) => {
    const URL = ""
    return fetch('url', {
        method: 'POST'
    }).then(res => res.json());
  };

/*export const postDataApi = async (request) => {
  const URL = '';
  return fetch('url', {
      method: 'POST',
      body: 'foo=bar'
  }).then(function(response) {
      // Стоит проверить код ответа.
      if (!response.ok) {
          // Сервер вернул код ответа за границами диапазона [200, 299]
          return Promise.reject(new Error(
              'Response failed: ' + response.status + ' (' + response.statusText + ')'
          ));
      }
  
      // Далее будем использовать только JSON из тела ответа.
      return response.json();
  }).then(function(data) {
      // ... Делаем что-то с данными.
  });
};*/
