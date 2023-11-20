
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const positions = {
    'top-center' : toast.POSITION.TOP_CENTER,
    'top-left' : toast.POSITION.TOP_LEFT,
    'top-right' : toast.POSITION.TOP_RIGHT,
    'bottom-left' : toast.POSITION.BOTTOM_LEFT,
    'bottom-center' : toast.POSITION.BOTTOM_CENTER,
    'bottom-right' : toast.POSITION.BOTTOM_RIGHT,
}

/**
 * Function to activiate toater from any component globally
 * 
 * @param {sting} message - The message to show in toaster
 * @param {string} type - The type of message like error, success, info, warn
 * @param {string} position - the position for the toaster like top-right, bottom-center, etc
 */
export const showToaster = (message, type, position) => {

    const exactPosition = positions[position];

    if(!exactPosition) {
        console.log("SEND CORRECT POSITION FOR THE MESSAGE");
    } 

    if(type === 'success') {
        toast.success(message, {position: exactPosition});
    } 
    else if(type === 'error') {
        toast.error(message, {position: exactPosition});
    } 
    else if(type === 'warn') {
        toast.warn(message, {position: exactPosition});
    } 
    else if(type === 'info') {
        toast.info(message, {position: exactPosition});
    } else {
        toast(message);
    }
}