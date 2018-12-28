function reducer(stsate,action) {

   ...
   if (action.type === "ADD") {
       const newPerson = {
           id: action.personData.id,
           name: action.personData.name,
           age: action.personData.age
       }
       return {
           ... state,
           persons: state.persons.concat(newPerson)
       }

   } else if (action === "REMOVE") {
       return {
           ...state,
           persons: state.persons.filter(person =>
                                         person.id !== action.personId)
       }
   } else {
       return state;
   }
}
