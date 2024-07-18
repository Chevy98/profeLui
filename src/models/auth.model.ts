export interface BodyRequestLogin {
    email: string,
    password: string
}

export interface BodyResponseLogin {
    menssage: string,
    data: Record <string, string>
}