module.exports = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/orgs/1": { page: "/orgs/[id].html" },
    };
  },
};
