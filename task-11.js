// ১১. source ট্যাব এ গিয়ে একটা কন্ডিশনাল ব্রেক পয়েন্ট যোগ কর


// open cooking master api in source tab workspace

// I set up a conditional breakpoint inside the mealCardDiv function which displays all product by search after fetching data

// I set the breakpoint in the line which was line 56 at that time where the mealCardDiv function is setting an innerHTML for the item "Fish fofos" 

// first select the line you want to set up a conditional breakpoint then right click and hit Edit breakpoint option. Then I wrote on a condition on the provided searchbox input type. the condition I set was  element.strMeal = "Fish fofos" 

// After that it turned into yellow.

// Then I wrote fish on the searchbox of the index.html file and the breakpoint worked when the element the function was working on is "Fish fofos". I added element.strMeal on the watch which also said its "Fish fofos" this time. Also you can see what element the function is currently working on by looking at the code on the source tab when you hover mouse on the element of forEach loop.