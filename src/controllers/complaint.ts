import { Request, Response } from 'express';

import { BadRequestError } from '../errors';
import { catchAsync } from '../helpers';
import { complaintService } from '../services';

export const getComplaints = catchAsync(async (req: Request, res: Response) => {
    const complaints = await complaintService.fetchComplaints();
    res.status(200).send({ status: true, data: { complaints } });
});

export const updateComplaintId = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;

        if (id !== null)
            throw new BadRequestError('Complaint already has an Id');

        const lastInsertedComplaint =
            await complaintService.fetchLastInsertedComplaint();
        const numberPart = lastInsertedComplaint.complaintId.split('-').at(-1);
        const increaseNumber = parseInt(numberPart, 10) + 1;
        const updatedId = 'C-' + String(increaseNumber).padStart(5, '0');
        await complaintService.updateComplaintIdById(id, updatedId);
        res.status(200).send({ success: true, data: null });
    }
);
