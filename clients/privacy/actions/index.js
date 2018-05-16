import {actionFunctions, SET_FORM} from "../../state/actions/form";
export const SET_EDIT_FORM = 'SET_EDIT_FORM';
export  const UNSET_EDIT_FORM = 'UNSET_EDIT_FORM';

export const setForm = (form, formId ) => {
    return actionFunctions.setForm(form,formId);
};

export const setEditForm = (formId ) => {
    return {
        type: SET_EDIT_FORM,
        formId: formId
    }
};

export const unsetEditForm = () => {
    return {
        type: UNSET_EDIT_FORM,
    }
};

export const setForms = (forms) => {
    return actionFunctions.setForms(forms);
};

