export interface Message {
    content: string;
    created_at: string;
    id: number;
    isSender: boolean;
    receiver_id: number;
    sender_id: number;
    updated_at: string;
}