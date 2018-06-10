export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "ap-southeast-2",
      BUCKET: "willpilgrim-notes-app-uploads"
    },
    apiGateway: {
      REGION: "ap-southeast-2",
      URL: " https://u1j9rj1iwi.execute-api.ap-southeast-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-southeast-2",
      USER_POOL_ID: "ap-southeast-2_yf8eWC3I6",
      APP_CLIENT_ID: "5pe7p4eegsju5lmvkqna556949",
      IDENTITY_POOL_ID: "ap-southeast-2:f052b46d-2ed2-49c0-bb79-6a5978abb2ad"
    }
  };