import express from 'express';

import { complaintController } from '../controllers';

const router = express.Router();

router.get('/complaint', complaintController.getComplaints);
router.post('/complaint/:id', complaintController.updateComplaintId);
router.post('/complaint/', complaintController.updateComplaintId);

export default router;
