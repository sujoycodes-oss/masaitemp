let toDoList = ["Freshen up", "Meditate", "Exercise", "Breakfast", "Cleaning"];
toDoList.shift();
toDoList = ["Wake Up", "Look Up", ...toDoList];
toDoList[toDoList.length-1] = "Lunch";
console.log(toDoList)

