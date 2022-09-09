import express from 'express';

import { complaintController } from '../controllers';

const router = express.Router();

router.get('/complaint', complaintController.getComplaints);
router.patch('/complaint/:id', complaintController.updateComplaintId);

export default router;
