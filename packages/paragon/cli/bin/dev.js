#!/usr/bin/env node

const path = require('path')
const project = path.join(__dirname, '..', 'tsconfig.json')

// In dev mode -> use ts-node and dev plugins
process.env.NODE_ENV = 'development'

require('ts-node').register({ project })
require('../src/index')
