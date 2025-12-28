import { LightningElement, api } from 'lwc';

export default class BaseModal extends LightningElement {
    @api modalTitle = 'Modal';
    @api modalSize = 'small';
    @api showFooter = true;
    @api primaryButtonLabel = 'Save';
    @api secondaryButtonLabel = 'Cancel';
    
    handlePrimaryAction() {
        this.dispatchEvent(new CustomEvent('primaryaction'));
        this.closeModal();
    }
    
    handleSecondaryAction() {
        this.dispatchEvent(new CustomEvent('secondaryaction'));
        this.closeModal();
    }
    
    @api closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }
    
    get modalClasses() {
        return `slds-modal slds-modal_${this.modalSize}`;
    }
}
