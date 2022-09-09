import { MUTATION_UPDATE_COMPLAINT } from '../graphql/mutations';
import {
    FETCH_COMPLAINTS,
    FETCH_LAST_COMPLAINT_INSERTED
} from '../graphql/queries';
import graphqlClient from './graphqlClient';

export const fetchComplaints = async () => {
    return graphqlClient.query({
        query: FETCH_COMPLAINTS
    });
};

export const fetchLastInsertedComplaint = async () => {
    const found = await graphqlClient.query({
        query: FETCH_LAST_COMPLAINT_INSERTED
    });
    return found.data.complaint.at(-1);
};

export const updateComplaintIdById = async (id: string, updatedId: string) => {
    return graphqlClient.query({
        query: MUTATION_UPDATE_COMPLAINT,
        variables: {
            complaintId: id,
            updatedId
        }
    });
};

export default {
    fetchComplaints,
    fetchLastInsertedComplaint,
    updateComplaintIdById
};
