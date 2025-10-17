import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToRecord_LWC extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;

    @api invoke() {
        /*
        // Sets the route to /lightning/r/<objectApiName>/RECORD_ID/view
        var pageReference = {
            type: 'standard__recordPage',
            attributes: {
                objectApiName: this.objectApiName,
                actionName: 'view',
                recordId: this.recordId
            }
        };

        // Navigate to the <objectApiName>/<recordId> Record page.
        this[NavigationMixin.Navigate](pageReference);*/

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: this.objectApiName,
                actionName: 'view',
                recordId: this.recordId
            },
        });
    }
}