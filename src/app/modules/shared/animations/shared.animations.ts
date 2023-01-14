import {
    trigger,
    transition,
    style,
    animate,
    AnimationTriggerMetadata,
} from '@angular/animations';

export const fadeInOut = trigger('fade', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
    ]),
    transition('* => void', [animate(500, style({ opacity: 0 }))]),
]) as AnimationTriggerMetadata;
