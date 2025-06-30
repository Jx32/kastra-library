export interface UserBalance {
    balance: number; // Current balance of the user
    currency: string; // Currency of the balance, e.g., "USD", "EUR"
    // Status were extracted from Stripe documentation (https://docs.stripe.com/api/subscriptions/object?api-version=2025-05-28.basil#subscription_object-status)
    subscriptionStatus: "incomplete" | "incomplete_expired" | "trialing" | "active" | "past_due" | "canceled" | "unpaid" | "paused"; // Status of the user's subscription
}