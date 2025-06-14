import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {
    fullname = "Shubham Bhurke";
    City = "Pune";
    Age = 27;

    // Using @track to make properties reactive
    @track title = "Shubham loves LWC";
    changeHandler(event) 
    {
        this.title = event.target.value;
    }
}