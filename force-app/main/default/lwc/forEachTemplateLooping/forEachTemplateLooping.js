import { LightningElement } from 'lwc';

export default class ForEachTemplateLooping extends LightningElement {
    nameList = ["Shubham", "Saurabh", "Ankit", "Amit", "Rohit", "Ravi"];
    //cityList = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];
    // The above two arrays are used to demonstrate the for:each template looping in LWC.

    //Creating an array of objects to demonstrate the for:each template looping in LWC.
    cityObjectList = [
        { id: "1", city: "Mumbai" },
        { id: "2", city: "Pune" },
        { id: "3", city: "Jaipur" },
        { id: "4", city: "Indore" },
        { id: "5", city: "Gurgaon" },
        { id: "6", city: "Nashik" }
    ];
}