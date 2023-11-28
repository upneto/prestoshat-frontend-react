'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <div>    
      <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/logo.jpg" 
      height="30" 
      width="30" 
      alt="Logo" 
    />
    </div>
   );
}
 
export default Logo;