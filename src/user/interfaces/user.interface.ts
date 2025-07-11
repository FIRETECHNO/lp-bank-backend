import mongoose from "mongoose"
import type { Role } from "../../roles/interfaces/role.interface";
export interface User {
  _id: mongoose.Types.ObjectId
  name: string
  surname: string
  email: string
  password: string
  roles: Role[]


  gender: string,
  age: number,
}
