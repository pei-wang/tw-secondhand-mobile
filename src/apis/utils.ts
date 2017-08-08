export const fetchJson = (url, option) => fetch(url, {
    ...option,
    headers: {
      ...option.headers,
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
  .then(response => {
    if (response.status < 400) {
      return response.json();
    }
    throw response;
  });