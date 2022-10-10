import { formatDistanceToNow } from 'date-fns';
import { useRecoilValue } from 'recoil';
import { lastFilterChange } from '../../states/timeStates';
import { ConfirmDialog } from '../ui/dialogs/confirmDialog';
import { useDialog } from '../ui/dialogs/modal';
import { ResetTimer } from './ResetTimer';

// TODO Hook the reset timer up to the state

export function ResetFilterTimer() {
    const confirmDialog = useDialog();
    const lastChangedFilterTimestamp = useRecoilValue(lastFilterChange);

    function handleResetClick() {
        console.log('Resetting chlorine timer');
        confirmDialog.openDialog();
    }

    function handleResetConfirm() {
        console.log('Confirmed reset');
        confirmDialog.closeDialog();
    }

    let daysAgo = 'N/A';
    try {
        daysAgo = formatDistanceToNow(lastChangedFilterTimestamp);
    } catch {}

    return (
        <>
            <ResetTimer description={`Last filter change was ${daysAgo} ago`} onReset={handleResetClick} />
            <ConfirmDialog
                showDialog={confirmDialog.isOpen}
                title="Reset filter timer?"
                description="Are you sure you want to reset filter timer?"
                onConfirm={() => handleResetConfirm()}
                onCancel={() => confirmDialog.closeDialog()}
            />
        </>
    );
}
