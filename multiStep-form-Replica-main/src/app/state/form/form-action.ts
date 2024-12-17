import { createActionGroup, emptyProps, props } from "@ngrx/store";



export const formActions = createActionGroup({
    source: 'Form',
    events: {
        'thank you': emptyProps(),
        'Step 1': props<{ payLoad: { name: string, email: string, phone: string } }>(),
        'step 2': props<{ plan: string, planPrice: number }>(),
        'Step 3': props<{ addOns: string[] }>(),
    }
});