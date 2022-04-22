const express = require('express');
const router = express.Router();

const { validation, controllerWrapper } = require('../middlewares');
const { joiSchema, statusJoiSchema } = require('../models/note');
const { notes: controller } = require('../controllers');

router.post('/', validation(joiSchema), controllerWrapper(controller.add));

router.delete('/:id', controllerWrapper(controller.removeById));

router.get('/:id', controllerWrapper(controller.getById));

router.get('/', controllerWrapper(controller.getAll));





router.put('/:id', validation(joiSchema), controllerWrapper(controller.updateById));

router.patch('/:id', validation(joiSchema), controllerWrapper(controller.updateStatusContact));

module.exports = router;
