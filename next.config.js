module.exports = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/orgs/[id]": { page: "/orgs/[id]" },
    };
  },
};
