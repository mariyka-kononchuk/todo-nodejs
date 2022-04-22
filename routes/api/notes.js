const express = require('express');
const router = express.Router();

const { validation, controllerWrapper } = require('../../middlewares');
const { joiSchema, statusJoiSchema } = require('../../models/note');
const { notes: controller } = require('../../controllers');

// const validateMiddleWare = validation(contactScheme)

router.get('/', controllerWrapper(controller.getAll));

router.get('/:id', controllerWrapper(controller.getById));

router.post('/', validation(joiSchema), controllerWrapper(controller.add));

router.delete('/:id', controllerWrapper(controller.removeById));

router.put('/:id', validation(joiSchema), controllerWrapper(controller.updateById));

router.patch('/:id/favorite', validation(statusJoiSchema), controllerWrapper(controller.updateStatusContact));

module.exports = router;
