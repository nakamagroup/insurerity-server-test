export const FETCH_COMPLAINTS = `
    query Complaints {
        id
        complaint {
        companyId
        complaint
        complaintId
        source
        type
        company {
                name
            }
        }
    }
`;
