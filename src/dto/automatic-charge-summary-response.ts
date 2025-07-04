export interface AutomaticChargeSummaryResponse {
    collectionMethod: "charge_automatically" | "send_invoice";
    last4Digits: string;
}