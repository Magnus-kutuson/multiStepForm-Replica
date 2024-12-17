import { createFeature, on, createReducer } from "@ngrx/store";
import { formActions } from "./form-action";

export interface State {
        step1: {
          name: string;
          email: string;
          phone: string;
        };
        step2: {
          isYearlyBilling: false;
          planPrice: number;
        };
        step3: {
          addOns: string[];
        };
      }

export const initialState: State = {
        step1: {
          name: "",
          email: "",
          phone: ""
        },
        step2: {
          isYearlyBilling: false,
          planPrice: 1,
        },
        step3: {
          addOns: []
        }
      };

      export const formReducer = createFeature({
        name: 'form',
        reducer: createReducer(
            initialState,
            on(formActions.step1, (state: State, { payLoad }) => ({
              ...state,
              step1: { ...state.step1, ...payLoad }
            })),
            on(formActions.step2, (state: State, {plan, planPrice}) => ({
                ...state,
                step2: { ...state.step2, plan, planPrice}
            })),
            on(formActions.step3, (state: State, {addOns}) =>({
                ...state,
                step3:{ ...state.step3, addOns}
            }))
        )
      }
      );

  
