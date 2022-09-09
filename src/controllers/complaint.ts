import { Request, Response } from 'express';

import { complaintService } from '../services';

export const getComplaints = async (req: Request, res: Response) => {
    try {
        const result = await complaintService.fetchComplaints();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateComplaintId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
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
            res.status(200).json(result);
        }
        res.status(200).json({});
    } catch (error) {
        res.status(500).send(error);
    }
};
