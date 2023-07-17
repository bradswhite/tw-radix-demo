import DropdownMenu from '@/components/dropdown-menu';
import AlertDialog from '@/components/alert-dialog';
import Dialog from '@/components/dialog';
import HoverCard from '@/components/hover-card';

import {
  CropIcon,
  FileIcon,
  FrameIcon,
  MixerHorizontalIcon,
  PersonIcon,
} from '@radix-ui/react-icons';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const TailwindLogo = () => (
  <svg
    className='h-7 w-7 shrink-0'
    viewBox='0 0 99 59'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M49.388 0c-13.171 0-21.4 6.546-24.695 19.637 4.94-6.545 10.701-9 17.286-7.364 3.757.933 6.443 3.643 9.414 6.643C56.236 23.8 61.84 29.454 74.08 29.454c13.169 0 21.4-6.546 24.693-19.635-4.938 6.545-10.7 9-17.284 7.362-3.759-.933-6.445-3.642-9.416-6.64C67.23 5.65 61.627 0 49.387 0ZM24.693 29.454C11.523 29.454 3.293 36 0 49.092c4.94-6.546 10.701-9 17.284-7.365 3.759.933 6.445 3.643 9.416 6.643 4.843 4.885 10.446 10.538 22.688 10.538 13.169 0 21.4-6.544 24.693-19.635-4.94 6.546-10.702 9-17.286 7.364-3.757-.934-6.443-3.644-9.414-6.642-4.843-4.885-10.448-10.54-22.688-10.54Z'
      fill='#38BDF8'
    />
  </svg>
);

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='mt-4 flex w-full flex-col items-center gap-y-20'>
        <h1 className='text-5xl font-bold text-slate-200'>Howdy!</h1>

        <DropdownMenu
          onSelect={label => console.log(label)}
          generalMenuItems={[
            {
              label: 'New File',
              icon: <FileIcon className='mr-2 h-3.5 w-3.5' />,
              shortcut: '⌘+N',
            },
            {
              label: 'Settings',
              icon: <MixerHorizontalIcon className='mr-2 h-3.5 w-3.5' />,
              shortcut: '⌘+,',
            },
          ]}
          regionToolMenuItems={[
            {
              label: 'Frame',
              icon: <FrameIcon className='mr-2 h-3.5 w-3.5' />,
              shortcut: '⌘+F',
            },
            {
              label: 'Crop',
              icon: <CropIcon className='mr-2 h-3.5 w-3.5' />,
              shortcut: '⌘+S',
            },
          ]}
          users={[
            {
              name: 'Adam',
              url: 'https://github.com/adamwathan.png',
            },
            {
              name: 'Steve',
              url: 'https://github.com/steveschoger.png',
            },
            {
              name: 'Robin',
              url: 'https://github.com/robinmalfait.png',
            },
          ]}
        >Click</DropdownMenu>

        <AlertDialog
          data={{
            title: 'Are you absolutely sure?',
            desc: `This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.`,
            onCancel: () => console.log('Canceled!!!'),
            onConfirm: () => console.log('Confirmed!!!'),
          }}
        >Click</AlertDialog>

        <Dialog onCancel={() => console.log('Name check canceled')}>
          Click
        </Dialog>

        <HoverCard
          icon={<TailwindLogo />}
          title='Tailwind CSS'
          desc={`A utility-first CSS framework for rapidly building custom user
                interfaces.`}
        />
      </div>
    </main>
  )
}
