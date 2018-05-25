// 引入库
// import path from 'path'
// import fs from 'fs'
// import _ from 'lodash'

const path = require('path')
const fs   = require('fs')
const _    = require('lodash')

// 引入配置文件
// import * as dev from './dev'
// import * as base from './base'
const dev = require('./dev')
const base = require('./base')

// 默认输出生产环境
let config = base

if(process.env.NODE_ENV === 'development'){
  config = _.merge(base, dev)
}

module.exports = config