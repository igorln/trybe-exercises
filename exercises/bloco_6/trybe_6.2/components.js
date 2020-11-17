let allStates = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
let state = document.getElementById("states");
function createState(){
    for (var i = 0; i < allStates.length; i += 1){
        let option = document.createElement("option");
        option.innerHTML = allStates[i];
        option.value = allStates[i];
        option.className = "dropdown-item";
        state.appendChild(option);         
    }
}
createState();

var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    firstday: 1, 
    format: 'dd/MM/yyyy',
    // mindate: new Date ()
});

new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
        },
        cpf: {
            required: true,
        },
        address: {
            required: true,
        },
        city: {
            required: true,
        },
        house: {
            required: true,
        },
        role: { 
            required:true,
        },
        positionDescription: {
            required: true,
        },
        date: {
            required: true,
        },            
    },
});