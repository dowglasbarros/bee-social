type User = {
    userId: number;
    userName: string;
    userMail: string;
    userRole: string;
    userCity: string;
    userCityWork: string;
    userProject: string;
    userGroups: [
        {groupId: number
         groupName: string;
        }
    ];
    userPassword: string;
    userFirstAccess: boolean;
}