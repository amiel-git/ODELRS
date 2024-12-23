
import role_mapping from "../mappings/role_mapping";


export function capitalize(string) {
    if(string){
        return string.split(' ')
        .map(word => 
            word.length > 0 // Check if the word is not empty
                ? String(word.charAt(0).toUpperCase() + word.slice(1)).replace("_"," ")
                : ''
        )
        .join(' ');
    }
    return null
}

export function isValidTextInput(input){
    if(input === null || input === undefined || input === ""){
        return false
    } 
    return true
}

export function convertRegionToReadable(region) {

    const region_ref = {
        "ncr":"NCR",
        "car":"CAR",
        "central_office":"Central Office",
        "r1":"Region 1",
        "r2":"Region 2",
        "r3":"Region 3",
        "r4a":"Region 4a",
        "r4b":"Region 4b",
        "r5":"Region 5",
        "r6":"Region 6",
        "r7":"Region 7",
        "r8":"Region 8",
        "r9":"Region 9",
        "r10":"Region 10",
        "r11":"Region 11",
        "r12":"Region 12",
        "r13":"Region 13",
    }
  
    return region_ref[region]
  
  }


  export function convertRoleToReadable(role) {

    var output_role = ""
    for(var role__ of role_mapping){
        if(role__.value === role){
            output_role = role__.label
        }
    }
    return output_role
}



export function convertToStandardDate(date){
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate
}

export function convertToStandardDateTime(date) {
    const dateOptions = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
    };

    const timeOptions = {
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true
    };

    const formattedDate = date.toLocaleDateString('en-US', dateOptions);
    const [month, day, year] = formattedDate.split(" ");

    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

    // Manually concatenate without a comma
    return `${formattedTime}, ${month} ${String(day).replace(",","")} ${year}`;
}


export function convertParameterToReadableReverse(parameter){
    
    var parameter_ref = {
        'Oxygen (O\u2082)': 'o2',
        'Carbon Dioxide (CO\u2082)': 'co2',
        'Sulfur Dioxide (SO\u2082)': 'so2',
        'Nitrogen Oxide (NO\u2093)': 'nox',
        'Carbon Monoxide (CO)': 'co',
        'Flue Gas Flow Rate': 'flow_rate',
        'Opacity': 'opacity',
        'Dust': 'dust'
    }

    try {
        return parameter_ref[parameter]
    } catch (error) {
        return parameter
    }
}


export const generic_setter = (setter) => (event) => {
    setter(event.target.value)
}



export function isEMBEmployee(role){
    if(
        role === "admin" || 
        role === "custodian" || 
        role === "elr_coordinator" || 
        role === "elr_secretariat" || 
        role === "denr_secretary" ||
        role === "liat_member_co" ||
        role === "liat_member_ro"
    ) {
        return true
    }
    else {
        return false
    }
}


export function convertArrayToString(array){
    try {
        var output = []
        var counter = 1
        for(var item of array){
            output.push(capitalize(`• ${item.replaceAll("_"," ")}`))
            counter += 1;
        }
        return output.join("\n")
    } catch (error) {
        return []
    }
}