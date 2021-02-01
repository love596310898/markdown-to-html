/* eslint-disable global-require */
// eslint-disable-next-line import/no-dynamic-require
export default (path) => require(`@/views/${path}`).default;
