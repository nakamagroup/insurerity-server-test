export const MUTATION_UPDATE_COMPLAINT = `
    mutation updateComplaintId($complaintId: uuid!, $updatedId: String!) {
        update_complaint(where: { id: {_eq: $complaintId } }, _set: { complaintId: $updatedId }) {
            returning {
                id
                complaintId
            }
        }
    }
`;
