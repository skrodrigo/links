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
        <div className="flex items-center justify-center border-solid border-2 border-white w-[320px] md:w-[700px] h-10 md:h-12 rounded-full">
        <a href="https://api.whatsapp.com/send?phone=5588992744891&text=Ol%C3%A1,%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento!" target="_blank" className="text-white font-normal text-sm">Peça um Orçamento!</a>
        </div>
        <div className="flex items-center justify-center border-solid border-2 border-white w-[320px] md:w-[700px] h-10 md:h-12 rounded-full">
        <a href="https://skrodrigo.vercel.app/" target="_blank" className="text-white font-normal text-sm">Meu Portfólio</a>
        </div>
        <div className="flex items-center justify-center border-solid border-2 border-white w-[320px] md:w-[700px] h-10 md:h-12 rounded-full">
        <a href="https://www.linkedin.com/in/skrodrigo" target="_blank" className="text-white font-normal text-sm">Meu Linkedin</a>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-1">
        <Image
          src="/email.svg"
          alt="Icon de Email"
          width={15}
          height={15}
          className="w-4"
         />
         <a href="https://mail.google.com" className="text-white font-normal text-sm">rodrigoa0987@gmail.com</a>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-white font-light text-sm fixed bottom-0 mb-2">skrodrigo © 2024</span>
      </div>
    </div>  
    </>
  );
}
