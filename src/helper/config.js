export const LinkedInApi = {
    clientId: '78vo7zrcl0hsy8',
    redirectUrl: 'http://cube360-hr-system-2.herokuapp.com/linkedin',
    oauthUrl: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code',
    scope: 'r_liteprofile%20r_emailaddress',
    state: '123456'
};

export const FacebookApi = {
    clientId: '454827059505200',
    redirectUrl: 'https://cube360-hr-system-2.herokuapp.com/facebook',
    oauthUrl: 'https://www.facebook.com/v14.0/dialog/oauth',
    scope: '"publish_stream,share_item,offline_access,manage_pages"',
    state: '{st=state123abc,ds=123456789}'
};

export const NodeServer = {
    baseURL: 'http://103.1.179.231:3000/api/v1/user/register/oauth',
    getUserCredentials: 'getUserCredentials'
};
