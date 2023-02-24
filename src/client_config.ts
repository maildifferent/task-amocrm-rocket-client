
export const CONFIG_CLIENT = Object.freeze({
  serverUrl: process.env['SERVER_URL'] ? process.env['SERVER_URL'] : ''
} as const)
