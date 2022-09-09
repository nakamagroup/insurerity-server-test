import { Request, Response } from 'express';

import { FETCH_COMPLAINTS } from '../graphql/queries';
import graphqlClient from '../services/graphqlClient';
import { MUTATION_UPDATE_COMPLAINT } from './../graphql/mutations';

export const getComplaints = async (req: Request, res: Response) => {
    try {
        const result = await graphqlClient.query({
            query: FETCH_COMPLAINTS
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateComplaintId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { updatedId } = req.body;
    try {
        const result = await graphqlClient.query({
            query: MUTATION_UPDATE_COMPLAINT,
            variables: {
                complaintId: id,
                updatedId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
};
