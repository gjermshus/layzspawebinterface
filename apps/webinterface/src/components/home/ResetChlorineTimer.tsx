import { useRecoilValue } from 'recoil';
import { lastChlorineAddition } from '../../states/timeStates';
import { ConfirmDialog } from '../ui/dialogs/confirmDialog';
import { useDialog } from '../ui/dialogs/modal';
import { ResetTimer } from './ResetTimer';
import { formatDistanceToNow } from 'date-fns';

export function ResetChlorineTimer() {
    const confirmDialog = useDialog();
    const lastChlorineAdditionTimestamp = useRecoilValue(lastChlorineAddition)

    function handleResetClick() {
        console.log('Resetting chlorine timer');
        confirmDialog.openDialog();
    }

    function handleResetConfirm() {
        console.log('Confirmed reset');
        confirmDialog.closeDialog();
    }

    return (
        <>
            <ResetTimer description={`Last chlorine add was ${formatDistanceToNow(lastChlorineAdditionTimestamp)} ago`} onReset={handleResetClick} />
            <ConfirmDialog
                showDialog={confirmDialog.isOpen}
                title="Reset chlorine timer?"
                description="Are you sure you want to reset chlorine timer?"
                onConfirm={() => handleResetConfirm()}
                onCancel={() => confirmDialog.closeDialog()} />
        </>
    );
}
