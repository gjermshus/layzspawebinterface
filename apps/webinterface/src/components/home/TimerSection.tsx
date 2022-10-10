import { Section } from '../ui/Section';
import { ResetChlorineTimer } from './ResetChlorineTimer';
import { ResetFilterTimer } from './ResetFilterTimer';

export function TimerSection() {
    return (
        <Section name="Timer">
            <ResetChlorineTimer />
            <ResetFilterTimer />
        </Section>
    );
}
