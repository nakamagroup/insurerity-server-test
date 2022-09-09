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
    complaint( order_by: {created_at: desc}, where: {complaintId: {_is_null: false}}, limit: 1) {
      companyId
      complaintId
      complaint
      created_at
      id
    }
  }
`;
