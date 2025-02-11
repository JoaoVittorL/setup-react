import { Modal } from '@/shared/components/modal';
import { Button } from '@/shared/components/ui/button';
import { Home, XIcon } from 'lucide-react';
import { useState } from 'react';

export function ProductionPage() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  return (
    <div className="min-h-screen space-y-4 bg-gray-100 p-4">
      <Button
        onClick={() => setIsCustomModalOpen(true)}
        className="text-white w-full rounded-lg bg-emerald-600 px-4 py-2 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
      >
        Open Custom Modal
      </Button>

      <Modal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        title="Lançar serviços"
        footerContent={
          <div className="flex w-full gap-3">
            <Button
              variant={'destructive'}
              size={'full'}
              onClick={() => setIsCustomModalOpen(false)}
              icon={<XIcon className="h-4 w-4 text-white-500" />}
            >
              Cancel
            </Button>
            <Button
              size={'full'}
              icon={<Home className="h-4 w-4 text-white-500" />}
              onClick={() => {
                alert('Action confirmed!');
                setIsCustomModalOpen(false);
              }}
            >
              Confirm
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <p className="text-gray-600">This modal has custom footer actions!</p>
          <p className="text-gray-600">You can pass any content as footerContent prop to customize the footer.</p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="text-gray-600">
              Scroll content example {i + 1}
            </p>
          ))}
        </div>
      </Modal>
    </div>
  );
}
