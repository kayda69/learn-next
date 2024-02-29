import styles from '@/app/ui/home.module.css';
import { Input } from '@nextui-org/react';

export default function Page() {
  return (
    <div className="w-full flex-row">
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 max-[48px]:">
      <Input type="email" label="Email" className='w-96'/>
    </div>
    </div>
  );
}
