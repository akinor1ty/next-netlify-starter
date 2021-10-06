module.exports = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/orgs/index": { page: "/orgs/[id]" },
    };
  },
};
