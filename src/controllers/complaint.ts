import { Request, Response } from 'express';

import { catchAsync } from '../helpers';
import { complaintService } from '../services';

export const getComplaints = catchAsync(async (req: Request, res: Response) => {
    const result = await complaintService.fetchComplaints();
    res.status(200).send(result);
});

export const updateComplaintId = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        if (id === null) {
            const lastInsertedComplaint =
                await complaintService.fetchLastInsertedComplaint();
            const numberPart = lastInsertedComplaint.complaintId
                .split('-')
                .at(-1);
            const increaseNumber = parseInt(numberPart, 10) + 1;
            const updatedId = 'C-' + String(increaseNumber).padStart(5, '0');
            const result = await complaintService.updateComplaintIdById(
                id,
                updatedId
            );
            res.status(200).send(result);
        }
        res.status(200).send({});
    }
);
