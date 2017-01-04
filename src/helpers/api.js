export function getNotes() {
  const url = 'https://react-notes-4150c.firebaseio.com/testuser.json';
  console.log(url);
  return fetch(url).then(res => res.json());
};

export function addNote(note) {
  const url = 'https://react-notes-4150c.firebaseio.com/testuser.json';
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({note})
  }).then(res => res.json());
};
