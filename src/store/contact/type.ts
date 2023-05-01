// import { type } from "os";

export interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  status: boolean;
}
export type RootState = {
  contact: Contact[];
};
export type ContactState = Contact[];
