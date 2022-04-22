const express = require('express');
const router = express.Router();

const { validation, controllerWrapper } = require('../middlewares');
const { joiSchema} = require('../models/note');
const { notes: controller } = require('../controllers');

router.post('/', validation(joiSchema), controllerWrapper(controller.add));

router.delete('/:id', controllerWrapper(controller.removeById));

router.patch('/:id', validation(joiSchema), controllerWrapper(controller.updateNote));

router.get('/stats', controllerWrapper(controller.getStats));

router.get('/:id', controllerWrapper(controller.getById));

router.get('/', controllerWrapper(controller.getAll));

module.exports = router;
