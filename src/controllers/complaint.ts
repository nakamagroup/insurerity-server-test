import { Request, Response } from 'express';

import { catchAsync } from '../helpers';
import { complaintService } from '../services';

export const getComplaints = catchAsync(async (req: Request, res: Response) => {
    const result = await complaintService.fetchComplaints();
    res.status(200).send(result);
});

export const updateComplaintId = catchAsync(
    async (req: Request, res: Response) => {
        const { body } = req;
        const { complaintId, id } = body.event.data.new;

        const re = new RegExp(/[C]-\d{5}/g);

        if (complaintId === null || !re.test(complaintId)) {
            const lastInsertedComplaint =
                (await complaintService?.fetchLastInsertedComplaint()) || {};

            const numberPart =
                lastInsertedComplaint?.complaintId?.split('-')?.at(-1) ||
                '00000';
            const increaseNumber = parseInt(numberPart, 10) + 1;
            const updatedId = 'C-' + String(increaseNumber).padStart(5, '0');

            const result = await complaintService.updateComplaintIdById(
                id,
                updatedId
            );

            return res.status(200).send({ result });
        } else {
            return res.status(200).send({});
        }
    }
);
