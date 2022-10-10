import { Button } from '../Button';
import { Modal } from './modal';

interface IConfirmDialogProps {
    title: string;
    description?: string;
    onConfirm: () => void;
    onCancel: () => void;
    showDialog: boolean;
}

export function ConfirmDialog({ title, description, showDialog, onConfirm, onCancel }: IConfirmDialogProps) {
    function closeModal() {
        onCancel();
    }

    return (
        <Modal title={title} description={description} closeModal={closeModal} isOpen={showDialog}>
            <div className="flex justify-end">
                <Button label="Yes" className="w-14 bg-red-500 hover:bg-red-500" onClick={() => onConfirm()} />
                <Button label="No" className="w-14" onClick={() => onCancel()} />
            </div>
        </Modal>
    );
}
