import { SignUp } from "@clerk/nextjs";
 
export default function Page2() {
  return <center><SignUp afterSignUpUrl={'/main'}/></center>
}