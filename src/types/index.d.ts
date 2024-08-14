export type UserType = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    passportSerialNumber: string;
    phone: string;
    gender: "MALE" | "FEMALE";
    imageUrl: string;
  };