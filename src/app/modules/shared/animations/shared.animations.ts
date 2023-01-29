import {
    trigger,
    transition,
    style,
    animate,
    AnimationTriggerMetadata,
    keyframes,
    query,
    stagger,
} from '@angular/animations';

export const fadeInOut = trigger('fade', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
    ]),
    transition('* => void', [animate(500, style({ opacity: 0 }))]),
]) as AnimationTriggerMetadata;

export const fade = trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
    ]),
]);

export const staggedIn = trigger('staggerIn', [
    transition('* => *', [
        query(':enter', style({ opacity: 0, transform: 'translateY(100px)' }), {
            optional: true,
        }),
        query(
            ':enter',
            stagger('200ms', [
                animate(
                    '400ms',
                    keyframes([
                        style({
                            opacity: 0,
                            transform: 'translateY(100px)',
                            offset: 0,
                        }),
                        style({
                            opacity: 1,
                            transform: 'translateY(0)',
                            offset: 1.0,
                        }),
                    ])
                ),
            ]),
            { optional: true }
        ),
    ]),
]);
