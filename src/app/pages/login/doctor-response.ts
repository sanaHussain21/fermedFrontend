export interface DoctorResponse {
        loginSuccess: boolean;
        loggedIn: DoctorResponse;
    
        email: string;
        password: string;
        // Add other properties if available in the response
        
        name: string;
        surname: string;
        gender: string;
        username: string;
}
