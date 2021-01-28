/* eslint-disable global-require */
// module.exports = file => require("@/views/" + file + ".vue").default;
// eslint-disable-next-line import/no-dynamic-require
export default (file) => require(`@/views/${file}`).default;
