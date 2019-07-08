const functions = require('firebase-functions')
const express = require('express')
const { Nuxt } = require('nuxt')

const app = express()

const config = {
  dev: false,
  debug: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/public/'
  }
}
const nuxt = new Nuxt(config)

async function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  await nuxt.ready() // ← nuxt.ready()でawaitしないといけなくなった！！

  return await nuxt.render(req, res) // eslint-disable-line
}

app.get('*', handleRequest)

exports.nuxtApp = functions.https // .region('asia-northeast1') // TODO firebase hostingが東京リージョン対応したら嬉しいな
  .onRequest(app)
