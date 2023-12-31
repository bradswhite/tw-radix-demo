import { Transition } from '@headlessui/react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { clsx } from 'clsx';
import { JSXElement, Fragment, useState } from 'react';
import Button from './shared/button';

interface AlertDialogProps {
  children: JSXElement;
  data: {
    title: string;
    desc: string;
    onCancel: () => void;
    onConfirm: () => void;
  };
}

const AlertDialog = ({
  children,
  data: {
    title,
    desc,
    onCancel,
    onConfirm
  }
}: AlertDialogProps) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitive.Trigger asChild>
        <Button>{children}</Button>
      </AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <AlertDialogPrimitive.Overlay
              forceMount
              className='fixed inset-0 z-20 bg-black/50'
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <AlertDialogPrimitive.Content
              forceMount
              className={clsx(
                'fixed z-50',
                'w-[95vw] max-w-md rounded-lg p-4 md:w-full',
                'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
                'bg-white dark:bg-gray-800',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
              )}
            >
              <AlertDialogPrimitive.Title className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                {title}
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className='mt-2 text-sm font-normal text-gray-700 dark:text-gray-400'>
                {desc}
              </AlertDialogPrimitive.Description>
              <div className='mt-4 flex justify-end space-x-2'>
                <AlertDialogPrimitive.Cancel
                  onClick={onCancel}
                  className={clsx(
                    'inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium',
                    'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600',
                    'border border-gray-300 dark:border-transparent',
                    'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                  )}
                >
                  Cancel
                </AlertDialogPrimitive.Cancel>
                <AlertDialogPrimitive.Action
                  onClick={onConfirm}
                  className={clsx(
                    'inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium',
                    'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600',
                    'border border-transparent',
                    'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                  )}
                >
                  Confirm
                </AlertDialogPrimitive.Action>
              </div>
            </AlertDialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};

export default AlertDialog;
