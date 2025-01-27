export interface Article {
    id: number;
    title: string;
    body: string;
    likes?: number; // Optional field for tracking likes locally
}
