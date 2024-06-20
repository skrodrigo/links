import { Button } from "./components/Button";
import DesignParticles from "./components/DesignParticles";
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="h-screen flex flex-col items-center justify-center space-y-10">
      
      <div className='flex flex-col items-center justify-center z-50 w-[320px] md:w-[700px] mx-auto space-y-5' >
        <Image
        src="/img.png"
        alt="Rodrigo Carvalho"
        width={384}
        height={390}
        className="w-28 md:w-40"
        />
        <span className='text-white text-sm font-semibold md:text-base'>@skrodrigo</span>
        <p className='text-white font-medium text-center text-xs md:text-sm'>Admirador de tecnologia e desenvolvimento de software.
        Tenho 18 anos e sou estudante de Sistemas de Informação. 
        Atualmente trabalho como Full Stacks Junior. </p>
      </div>

      <div className="absolute">
        <DesignParticles />
      </div>

      <div className="flex flex-col items-center justify-center z-50 space-y-5">
        <Button
          text="Fale Comigo"
          url="https://api.whatsapp.com/send?phone=5588992744891&text=Ol%C3%A1,%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
         />
        <Button
          text="Meu Portfólio"
          url="https://skrodrigo.vercel.app/"
         />
        <Button
          text="Meu Linkedin"
          url="https://www.linkedin.com/in/skrodrigo"
         />
        <Button
          text="Meu Github"
          url="https://github.com/skrodrigo"
         />
      </div>

      <div className="flex items-center justify-center space-x-1">
        <Image
          src="/email.svg"
          alt="Icon de Email"
          width={90}
          height={90}
          className="w-4"
         />
         <a href="https://mail.google.com" className="text-white font-normal text-sm">rodrigoa0987@gmail.com</a>
      </div>
            
    </div>  
    </>
  );
}
