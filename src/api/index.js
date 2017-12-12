
export const postLoginApi = async (data) => {
    const URL = 'https://defect-prediction-server.herokuapp.com/auth/login';
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

export const postFormApi = async (data) => {
    const URL = 'https://defect-prediction-server.herokuapp.com/feedback/show';
    return fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(data)
    }).then(response => {
        
        //console.log(response.json());
        // Стоит проверить код ответа.
        if (!response.ok) {
            console.log('Всё плохо');
            // Сервер вернул код ответа за границами диапазона [200, 299]
            return Promise.reject(new Error(
                'Response failed: ' + response.status + ' (' + response.statusText + ')'
            ));
        }

        // Далее будем использовать только JSON из тела ответа.
        console.log('Всё прошло упешно');
        return response.json();
    });
}