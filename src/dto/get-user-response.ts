import { User } from "./user.interface";

export interface GetUserResponse {
    users: User[],
    paginationToken?: string,
}