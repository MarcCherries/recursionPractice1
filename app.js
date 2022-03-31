"use strict"









function recursiveFindSubsidiaries(obj, array= []){
    let subArray = obj.subsidiaries;
    array = [obj];

    if (subArray.length === 0) {
        return array;
    }

    for (let i = 0; i < subArray.length; i++){

    array = array.concat(
            recursiveFindSubsidiaries(subArray[i])
        )
    }
    return array;
}
let umbrellaCompany = {
    name: "Umbrella Corporation",
    logo: "umbrella",
    subsidiaries: [
        {
            name: "Umbrella Industries",
            logo: "factory",
            subsidiaries: [
                {
                    name: "Umbrella Pharmaceuticals",
                    logo: "pill bottle",
                    subsidiaries:[],
                },
                {
                    name: "Umbrella Medical",
                    logo: "medical bag",
                    subsidiaries: [],
                },
            ],    
        },
        {
            name: "Paragus Line Company",
            logo: "train",
            subsidiaries: [],
        },    
    ],
};
       
console.log(recursiveFindSubsidiaries(umbrellaCompany))
    