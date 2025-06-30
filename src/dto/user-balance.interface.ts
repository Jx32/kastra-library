export interface UserBalance {
    balance: number; // Current balance of the user
    currency: string; // Currency of the balance, e.g., "USD", "EUR"
    subscriptionOverdue: boolean; // Indicates if the user has overdue subscription payments
    payBeforeISODate: string;
}