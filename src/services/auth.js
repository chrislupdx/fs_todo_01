import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-7xrjoa74.auth0.com',
  clientID: 'LJbb5O2tqiJeKkDM6O7QfOiKs1avIASu',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

//if user isn't logged, in, redirect to auh0
export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('could not get user profile');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('couldnot log in');
      }
    });
  });
}
;
