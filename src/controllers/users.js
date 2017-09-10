'use strict'

const repository = require('../repositories/user')

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body)
    res.status(200).send({ message: 'Cadastro realizado com sucesso!' })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
