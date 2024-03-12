class SessionManager {

    private static readonly key = "session";


    static TryGetToken() : string | null
    {
        const token: string | null = localStorage.getItem(this.key);

        return token;
    }

    static SetToken(token : string)
    {
        localStorage.setItem(this.key, token);
    }

    static DeleteToken()
    {
        localStorage.removeItem(this.key);
    }
}

export default SessionManager;