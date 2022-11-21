module.exports = {
    btnSignIn: '.btn :has-text("Sign In")',

    companyName: '#select_accounting_firm table th:has-text("Company Name")',

    companyStatus: '#select_accounting_firm table th:has-text("Status")',

    outstandingStatus: '#select_accounting_firm table th:has-text("Outstanding Items")',

    selectCompany: '//*[text()="Plooto Inc"]',

    paymentApprovalsTab: 'a:has-text("Payment Approvals")',

    pendingPaymentsTab: 'a:has-text("Pending Payments")',

    singlePayment: '#components-user-payments-massApproval table tbody tr',

    pendingPaymentTitle: 'h3:has-text("Payments currently in transit")',

    pendingPayablesTab: '[aria-controls="pending_payables"]',

    pendingReceiveAblesTab: '[aria-controls="pending_receivables"]',

    paymentCavages: '#pending_payables table td :has-text("Cavages")',

    contactDetails: '.col-header:has-text("Contact :") + div',

    paymentStatus: '.col-header:has-text("Status :") + div',

    paymentApprovalHistrory: '.details-header:has-text("Payment Approval History")',

    auditTrail: '.details-header:has-text("Audit Trail")'
}