const express = require('express');
const { addEvent, hrMembers } = require('../controlls/event');
const router=express.Router();


router.route('/addevent').post(addEvent)
router.route('/hrmembers').get(hrMembers)

module.exports=router