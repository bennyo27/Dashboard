import auth0 from "auth0-js";

class Auth {
  auth0 = new auth0.WebAuth({
    domain: "dashboard-app.auth0.com",
    clientID: "cE9FZGNCbFxi66r6XwJI0bQyZwi1m73o",
    redirectUri: "http://localhost:3000/welcome",
    audience: "http://dashboard-app.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }
  userProfile;

  login() {
    this.auth0.authorize();
  }

  getAccessToken() {
    const accessToken = localStorage.getItem("jwt");
    if (!accessToken) {
      throw new Error("No Access Token found");
    }
    return accessToken;
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}

export default Auth;
