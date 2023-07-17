import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { clsx } from 'clsx';

interface HoverCardProps {
  icon: JSXElement;
  title: string;
  desc: string;
}

const HoverCard = ({
  icon,
  title,
  desc
}: HoverCardProps) => {
  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        <div
          className={clsx(
            'inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-2.5 dark:bg-gray-900'
          )}
        >
          {icon}
        </div>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content
        align='center'
        sideOffset={4}
        className={clsx(
          'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
          'max-w-md rounded-lg p-4 md:w-full',
          'bg-white dark:bg-gray-800',
          'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
        )}
      >
        <HoverCardPrimitive.Arrow className='fill-current text-white dark:text-gray-800' />

        <div className='flex h-full w-full space-x-4'>
          <div
            className={clsx(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-inner bg-gray-50/60 p-2.5 dark:bg-gray-900'
            )}
          >
            {icon}
          </div>

          <div>
            <h3 className='text-sm font-medium text-gray-900 dark:text-gray-100'>
              {title}
            </h3>

            <p className='mt-1 text-sm font-normal text-gray-700 dark:text-gray-400'>
              {desc}
            </p>
          </div>
        </div>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};

export default HoverCard;
