import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Helmet } from 'react-helmet-async';
import Logo from '../../../src/assets/logo-forja.png';
import { Button } from '@/components/ui/button';

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <img src={Logo} alt="Logo" width={100} height={100} />
        <h1 className="text-3xl font-bold text-white-500">Forja Tech</h1>
        <ThemeToggle />
        <div className="grid grid-row-3 gap-4">
          <div className='h-40 grid grid-cols-3 gap-2'>
            <Button size={'default'} variant={'default'} className=" bg-[#232323] h-full w-full  text-center justify-center" title="#232323"/>
            <Button size={'default'} variant={'destructive'} className="" title="#990b0b" />
            <Button size={'default'} variant={'default'} className="bg-[#FF3D0A] text-white-500 hover:opacity-80  w-full  text-center justify-center" title=" #FF3D0A" />
          </div>
          <div className='grid grid-cols-3 gap-2' >
          <Button size={'default'} variant={'default'} className="bg-black-500 text-white-500 hover:opacity-80 text-center justify-center" title="Button"/>
          <Button size={'default'} variant={'default'} className="bg-yellow-500 hover:opacity-80 text-center justify-center" title="Button" />
          <Button size={'default'} variant={'default'} className="bg-aqua-500 hover:opacity-80 text-center justify-center" title="Button" />
          </div>
         <div className='grid grid-cols-3 gap-2'>
            <Button size={'default'} variant={'secondary'}  title="Button" />
            <Button size={'default'} variant={'default'} title="Button" />
            <Button size={'default'} variant={'default'} className="bg-soft_orange-500 hover:opacity-80 text-center justify-center" title="Button" />
            <Button size={'default'} variant={'outline'} className='text-white-500' title="Button" />
            <Button size={'default'} variant={'ghost'} className='text-white-500' title="Button" />
            <Button size={'default'} variant={'link'} className='text-white-500' title="Button" />
         </div>
        </div>
      </div>
    </>
  );
}
