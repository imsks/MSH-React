const envName = "prod";

const dev = {
  REACT_APP_NODE_API_URL: "http://localhost:8000",
};

const prod = {
  REACT_APP_NODE_API_URL: "https://ms-honda-sales-app.herokuapp.com",
};

const env = envName === "prod" ? prod : dev;

export default env;
