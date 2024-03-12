class UserManager {

    private static readonly key = "user";


    static TryGetUser() : IUser | null
    {
        const data: string | null = localStorage.getItem(this.key);

        if (data == null) return null;


        const user: IUser = JSON.parse(data);

        return user;
    }

    static SetUser(user : IUser)
    {
        localStorage.setItem(this.key, JSON.stringify(user));
    }

    static DeleteUser()
    {
        localStorage.removeItem(this.key);
    }
}

export default UserManager;