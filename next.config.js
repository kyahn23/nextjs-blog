const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     mongodb_username: "kyahn",
//     mongodb_password: "3j3IwKSAIYw6nj50",
//     mongodb_clustername: "cluster0",
//   },
// };

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("dev");
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "kyahn",
        mongodb_password: "3j3IwKSAIYw6nj50",
        mongodb_clustername: "cluster0",
      },
    };
  }

  return {
    env: {
      mongodb_username: "kyahn",
      mongodb_password: "3j3IwKSAIYw6nj50",
      mongodb_clustername: "cluster0",
    },
  };
};
