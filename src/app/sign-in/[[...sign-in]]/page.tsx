import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <center><SignIn path="/sign-in" signUpUrl="/sign-up" /></center>
};