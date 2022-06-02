const json = {
    "title" : "Financial Survey",
    "description" : "This survey is an overview of your current finacial status and your current habits",
    questions: [
        {
            name: "name",
            type: "text",
            title: "Please enter your salary",
            placeHolder: "$000.00",
            isRequired:true
        }, {
            "type": "radiogroup",
            "name": "invest",
            "title": " What is your investment attitude?",
            "isRequired": true,
            "hasNone": true,
            "colCount": 1,
            "choices": [ "Very conservative", "Somewhat Conservative", "Moderate", "Somewhat Aggressive", "Very Aggressive"]
        }, {
            "type": "radiogroup",
            "name": "years",
            "title": " In how many years will you begin making withdrawals from your investment?",
            "isRequired": true,
            "hasNone": true,
            "colCount": 5,
            "choices": [ "Less than a year", "1-2 years", "3-5 years", "6-9 years", "10-15 years", "15-25 years", "More than 25 years"]
      }, {
            "type": "radiogroup",
            "name": "car",
            "title": "Once you begin to make your withdrawals, how many years will you be making withdrawals?",
            "isRequired": true,
            "hasNone": true,
            "colCount": 4,
            "choices": [ "Lump-sum", "1-2 years", "3-5 years", "6-9 years", "10-15 years", "15-25 years", "More than 25 years"]
      }, {
            "type": "radiogroup",
            "name": "protect",
            "title": "Protecting my portfolio is more important to me than high returns.",
            "isRequired": true,
            "hasNone": true,
            "colCount": 1,
            "choices": [ "Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
      }, {
            "type": "radiogroup",
            "name": "annual",
            "title": "Over the next few years, you expect the annual income to:",
            "isRequired": true,
            "hasNone": true,
            "colCount": 4,
            "choices": [ "Stay the same", "Grow moderately", "Grow substantially", "Decrease moderately", "Decrease substantially"]
      }, {
            "type": "radiogroup",
            "name": "mind",
            "title": "Keeping the above answer option in mind which of the following statements make the most sense to you?",
            "isRequired": true,
            "hasNone": true,
            "colCount": 2,
            "choices": [ "I am willing to bare the consequences of a loss to maximize my returns.", "I am concerned about losses along with returns.", "To completely avoid losses is something I am more interested in"]
      }, {
            "type": "radiogroup",
            "name": "stocks",
            "title": " Assuming that you want to invest in stocks, which one would you choose?",
            "isRequired": true,
            "hasNone": true,
            "colCount": 2,
            "choices": [ "Companies with significant technological advancement but selling their stocks at a low price", "Established well-known companies that have a potentially high rate of growth.", "“Blue chip” stocks that pay the dividend"]
      }, {
            "type": "radiogroup",
            "name": "philosophy",
            "title": " Which of the following statements best describes your investment philosophy?",
            "isRequired": true,
            "hasNone": true,
            "colCount": 2,
            "choices": [ "I feel comfortable with stable investments", "I am willing to withstand some fluctuations in my investment", "I am seeking substantial investment returns", "I am seeking potentially high investment returns"]
      }, {
            "type": "radiogroup",
            "name": "major",
            "title": "What do you expect to be your next major expenditure?",
            "isRequired": true,
            "hasNone": true,
            "colCount": 2,
            "choices": [ "Buying a house", "Paying college tuition", "Capitalizing a new business venture", "Providing for my retirement"]
      }, {
            "type": "radiogroup",
            "name": "current",
            "title": "  Select the investment you currently have",
            "isRequired": true,
            "hasNone": true,
            "colCount": 4,
            "choices": [ "Bonds and/or funds", "Stocks and/or funds"]
      }
    ]
};
export default json;








