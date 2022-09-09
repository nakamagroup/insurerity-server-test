export const FETCH_COMPLAINTS = `
  query Complaints {
      complaint {
        id
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

export const FETCH_LAST_COMPLAINT_INSERTED = `
  query LastComplaint {
    complaint(limit: 1, order_by: {id: asc}, where: {complaintId: {_is_null: false}}) {
      companyId
      complaintId
      complaint
      created_at
      id
    }
  }
`;
