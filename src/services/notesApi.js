export const createNote = note => {
  // return Promise.resolve({
  //   _id: '123',
  //   ...note
  // });

  return fetch('http://localhost:7891/api/v1/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';
      return json;
    });

}
;
